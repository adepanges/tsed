import {classOf, isClass, isCollection, isEmpty, isFunction, isPlainObject, MetadataTypes, objectKeys, Type} from "@tsed/core";
import {alterIgnore, getPropertiesStores, JsonEntityStore, JsonHookContext, JsonSchema} from "@tsed/schema";
import "../components";
import {JsonMapperContext} from "../domain/JsonMapperContext";
import {getJsonMapperTypes} from "../domain/JsonMapperTypesContainer";
import {JsonMapperMethods} from "../interfaces/JsonMapperMethods";

export interface JsonSerializerOptions<T = any, C = any> extends MetadataTypes<T, C> {
  /**
   * Types used to map complex types (Symbol, Array, Set, Map)
   */
  types?: Map<Type<any>, JsonMapperMethods>;
  /**
   * useAlias mapping
   */
  useAlias?: boolean;

  [key: string]: any;
}

function alterValue(schema: JsonSchema, value: any, options: JsonHookContext) {
  return schema.$hooks.alter("onSerialize", value, [options]);
}

function getSchemaProperties(storedJson: JsonEntityStore, obj: any) {
  const stores = Array.from(getPropertiesStores(storedJson).entries());

  if (!stores.length) {
    // fallback to auto discovering field from obj
    objectKeys(obj).forEach((key) => {
      const propStore = JsonEntityStore.from(storedJson.target.prototype, key);
      stores.push([key, propStore]);
    });
  }

  return stores;
}

function getObjectProperties(obj: any): [string, any][] {
  return Object.entries(obj).filter(([, value]) => !isFunction(value));
}

function getType(propStore: JsonEntityStore, value: any) {
  if (value === null || value === undefined) {
    return Object;
  }

  return propStore.type === Object ? classOf(value) : propStore.type;
}

export function classToPlainObject(obj: any, options: JsonSerializerOptions<any, any>) {
  const {useAlias = true, type, ...props} = options;

  const entity = JsonEntityStore.from(type || obj);

  return getSchemaProperties(entity, obj).reduce((newObj, [key, propStore]) => {
    const schema = propStore.schema;
    if (alterIgnore(schema, {useAlias, ...props, self: obj})) {
      return newObj;
    }

    let value = alterValue(schema, obj[key], {useAlias, ...props, self: obj});

    value = serialize(value, {
      useAlias,
      type: getType(propStore, value),
      collectionType: propStore.collectionType,
      ...props
    });

    if (value === undefined) {
      return newObj;
    }

    key = useAlias ? propStore.parent.schema.getAliasOf(key) || key : key;

    return {
      ...newObj,
      [key]: value
    };
  }, {});
}

function toObject(obj: any, options: JsonSerializerOptions): any {
  return getObjectProperties(obj).reduce(
    (newObj, [key, value]) => ({
      ...newObj,
      [key]: serialize(value, options)
    }),
    {}
  );
}

export function serialize(obj: any, {type, collectionType, ...options}: JsonSerializerOptions = {}): any {
  const types = options.types ? options.types : getJsonMapperTypes();

  if (isEmpty(obj)) {
    return obj;
  }

  if (obj.$toObject) {
    // mongoose
    return serialize(obj.$toObject(options, true), {type, collectionType, ...options});
  }

  if (type && isClass(type)) {
    options.type = type;
  }

  if (isCollection(obj) && !options.collectionType) {
    type = classOf(obj);
    options.collectionType = type;
  }

  type = classOf(type || obj);

  const context = new JsonMapperContext({
    type,
    options,
    next: (data) =>
      serialize(data, {
        ...options,
        collectionType: undefined,
        type: options.type
      })
  });

  if (types.has(type)) {
    const jsonMapper = types.get(type)!;

    return jsonMapper.serialize(obj, context);
  }

  if (typeof obj.toJSON === "function") {
    // serialize from serialize method
    return obj.toJSON(context);
  }

  if (typeof obj.serialize === "function") {
    // serialize from serialize method
    return obj.serialize(context);
  }

  return !isPlainObject(type) ? classToPlainObject(obj, options) : toObject(obj, options);
}
