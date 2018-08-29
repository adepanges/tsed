---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation ISwaggerSettings interface
---
# ISwaggerSettings <Badge text="Interface" type="interface"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { ISwaggerSettings }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/swagger"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.1/src//swagger/interfaces/ISwaggerSettings.ts#L0-L0">/swagger/interfaces/ISwaggerSettings.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">interface</span> ISwaggerSettings <span class="token punctuation">{</span>
  path<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  hidden?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  doc?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  cssPath?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  jsPath?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  options?<span class="token punctuation">:</span> <a href="/api/swagger/interfaces/SwaggerUIOptions.html"><span class="token">SwaggerUIOptions</span></a><span class="token punctuation">;</span>
  showExplorer?<span class="token punctuation">:</span> <span class="token keyword">boolean</span><span class="token punctuation">;</span>
  specPath?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  outFile?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  operationIdFormat?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
  spec?<span class="token punctuation">:</span> <span class="token punctuation">{</span>
    swagger?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    info?<span class="token punctuation">:</span> Info<span class="token punctuation">;</span>
    externalDocs?<span class="token punctuation">:</span> ExternalDocs<span class="token punctuation">;</span>
    host?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    basePath?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
    schemes?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    consumes?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    produces?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    paths?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>pathName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> Path<span class="token punctuation">}</span><span class="token punctuation">;</span>
    definitions?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>definitionsName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <a href="/api/common/jsonschema/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">}</span><span class="token punctuation">;</span>
    parameters?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>parameterName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> BodyParameter | QueryParameter<span class="token punctuation">}</span><span class="token punctuation">;</span>
    responses?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>responseName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <a href="/api/common/filters/decorators/Response.html"><span class="token">Response</span></a><span class="token punctuation">}</span><span class="token punctuation">;</span>
    security?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>securityDefinitionName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    securityDefinitions?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>securityDefinitionName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <a href="/api/swagger/decorators/Security.html"><span class="token">Security</span></a><span class="token punctuation">}</span><span class="token punctuation">;</span>
    tags?<span class="token punctuation">:</span> Tag<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>



<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">path<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">hidden?<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">doc?<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">cssPath?<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">jsPath?<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">options?<span class="token punctuation">:</span> <a href="/api/swagger/interfaces/SwaggerUIOptions.html"><span class="token">SwaggerUIOptions</span></a></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">showExplorer?<span class="token punctuation">:</span> <span class="token keyword">boolean</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">specPath?<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">outFile?<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">operationIdFormat?<span class="token punctuation">:</span> <span class="token keyword">string</span></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang ">spec?<span class="token punctuation">:</span> <span class="token punctuation">{</span>
 swagger?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
 info?<span class="token punctuation">:</span> Info<span class="token punctuation">;</span>
 externalDocs?<span class="token punctuation">:</span> ExternalDocs<span class="token punctuation">;</span>
 host?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
 basePath?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>
 schemes?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 consumes?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 produces?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 paths?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>pathName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> Path<span class="token punctuation">}</span><span class="token punctuation">;</span>
 definitions?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>definitionsName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <a href="/api/common/jsonschema/decorators/Schema.html"><span class="token">Schema</span></a><span class="token punctuation">}</span><span class="token punctuation">;</span>
 parameters?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>parameterName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> BodyParameter | QueryParameter<span class="token punctuation">}</span><span class="token punctuation">;</span>
 responses?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>responseName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <a href="/api/common/filters/decorators/Response.html"><span class="token">Response</span></a><span class="token punctuation">}</span><span class="token punctuation">;</span>
 security?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>securityDefinitionName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 securityDefinitions?<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>securityDefinitionName<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <a href="/api/swagger/decorators/Security.html"><span class="token">Security</span></a><span class="token punctuation">}</span><span class="token punctuation">;</span>
 tags?<span class="token punctuation">:</span> Tag<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>

</div>



:::