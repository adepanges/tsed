import {BodyParams, Controller, Post} from "@tsed/common";
import {JsonSchemaObject, Returns, Schema} from "@tsed/schema";

const ProductSchema: JsonSchemaObject = {
  type: "object",
  properties: {
  }
};

export class MyModel {
  @Schema({
    contains: {
      type: "string"
    }
  })
  prop: string;
}

@Controller("/")
class MyController {
  @Post("/")
  @Returns(200).Description("description").Schema(ProductSchema)
  async method(@BodyParams() @Schema(ProductSchema) product: any): Promise<null> {
    return null;
  }
}