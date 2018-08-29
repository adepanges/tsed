---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation getNspSession function
---
# getNspSession <Badge text="Function" type="function"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { getNspSession }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/socketio/registries/NspSessionRegistry"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.1/src//socketio/registries/NspSessionRegistry.ts#L0-L0">/socketio/registries/NspSessionRegistry.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">getNspSession</span><span class="token punctuation">(</span>namespace<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation"> = </span>"/"<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  if <span class="token punctuation">(</span>!SESSIONS.<span class="token function">has</span><span class="token punctuation">(</span>namespace<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    SESSIONS.<span class="token function">set</span><span class="token punctuation">(</span>namespace<span class="token punctuation">,</span> new <span class="token function">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  return SESSIONS.<span class="token function">get</span><span class="token punctuation">(</span>namespace<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>