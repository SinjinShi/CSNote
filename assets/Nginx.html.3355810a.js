import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as i,c as p,a as n,b as t,F as l,e as o,d as c}from"./app.b7ed1dca.js";const r={},d=o(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="why-nginx" tabindex="-1"><a class="header-anchor" href="#why-nginx" aria-hidden="true">#</a> Why nginx\uFF1F</h2><p>Nginx \u6027\u80FD\u9AD8</p><h3 id="\u67B6\u6784\u597D" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u597D" aria-hidden="true">#</a> \u67B6\u6784\u597D</h3><p>\u73B0\u5728 CPU \u53D7\u9650\u4E8E\u6563\u70ED\uFF0C\u9891\u7387\u65E0\u6CD5\u63D0\u9AD8\uFF0C\u76EE\u524D\u4E3B\u8981\u5411\u591A\u6838\u53D1\u5C55\uFF0C\u6240\u4EE5\u5355\u8FDB\u7A0B/\u5355\u7EBF\u7A0B\u5E94\u7528\u6027\u80FD\u65E0\u6CD5\u63D0\u9AD8</p><p>Nginx \u901A\u8FC7\u591A\u8FDB\u7A0B\u5145\u5206\u4F7F\u7528 CPU \u7684\u591A\u6838\u6027\u80FD</p><ul><li>master \u8FDB\u7A0B\uFF1A\u8D1F\u8D23\u8BFB\u53D6\u914D\u7F6E\u3001\u7ED1\u5B9A\u7AEF\u53E3\u3001\u521B\u5EFA\u5B50\u8FDB\u7A0B\uFF1B</li><li>worker \u8FDB\u7A0B\uFF1A\u8D1F\u8D23\u5927\u591A\u6570\u7684\u903B\u8F91\uFF0C\u6BD4\u5982\uFF0C\u5904\u7406\u7F51\u7EDC\u8BF7\u6C42\u3001\u8BFB\u5199\u78C1\u76D8\u3001\u548C\u5176\u4ED6\u670D\u52A1\u901A\u4FE1\u7B49\uFF1B</li><li>cache manager\u3001cache loader\uFF1A\u7F13\u5B58\u76F8\u5173\u903B\u8F91\uFF1B</li></ul><ol><li>\u9ED8\u8BA4Nginx \u6709\u51E0\u4E2A\u6838\u5FC3\u5C31\u4F1A\u521B\u5EFA\u51E0\u4E2A worker \u8FDB\u7A0B</li><li>master \u8FDB\u7A0B\u76D1\u542C\u4E86 80\u3001443 \u7AEF\u53E3\uFF0Cworker \u8FDB\u7A0B\u5C5E\u4E8E master \u7684\u5B50\u8FDB\u7A0B\uFF0C\u5728 linux \u4E2D\u5B50\u8FDB\u7A0B\u5C06\u9ED8\u8BA4\u7EE7\u627F\u7236\u8FDB\u7A0B\u76D1\u542C\u7684\u7AEF\u53E3\uFF1B\u4E0D\u4F1A\u7AEF\u53E3\u51B2\u7A81</li><li>\u652F\u6301\u70ED\u66F4\u65B0</li></ol><h3 id="\u7EC6\u8282\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u7EC6\u8282\u4F18\u5316" aria-hidden="true">#</a> \u7EC6\u8282\u4F18\u5316</h3><p>Linux \u4F5C\u4E3A\u5206\u65F6\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4F1A\u5C06 CPU \u7684\u6267\u884C\u65F6\u95F4\u5206\u4E3A\u8BB8\u591A\u788E\u7247\uFF0C\u4EA4\u7531\u6240\u6709\u8FDB\u7A0B\u8F6E\u756A\u6267\u884C\u3002\u8FD9\u4E9B\u65F6\u95F4\u7247\u6709\u957F\u6709\u77ED\uFF0C\u4ECE5\u6BEB\u79D2\u5230800\u6BEB\u79D2\u4E0D\u7B49\uFF0C\u5185\u6838\u5206\u914D\u5176\u957F\u77ED\u65F6\uFF0C\u4F1A\u4F9D\u636E\u8FDB\u7A0B\u7684\u9759\u6001\u4F18\u5148\u7EA7\u6765\u5206\u914D\u3002</p><p>Nginx \u4E3A\u4E86\u8BA9 worker \u8FDB\u7A0B\u80FD\u5206\u5230\u66F4\u957F\u7684\u65F6\u95F4\u7247\uFF0C\u4F1A\u589E\u52A0 worker \u8FDB\u7A0B\u7684\u9759\u6001\u4F18\u5148\u7EA7\uFF0C</p><h2 id="\u4F7F\u7528\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5165\u95E8" aria-hidden="true">#</a> \u4F7F\u7528\u5165\u95E8</h2><p>Nginx \u7684\u914D\u7F6E\u7CFB\u7EDF\u7531\u4E00\u4E2A\u4E3B\u914D\u7F6E\u6587\u4EF6\u548C\u5176\u4ED6\u4E00\u4E9B\u8F85\u52A9\u7684\u914D\u7F6E\u6587\u4EF6\u6784\u6210\u3002\u8FD9\u4E9B\u914D\u7F6E\u6587\u4EF6\u5747\u662F\u7EAF\u6587\u672C\u6587\u4EF6\uFF0C\u5168\u90E8\u4F4D\u4E8E Nginx \u5B89\u88C5\u76EE\u5F55\u4E0B\u7684 conf \u76EE\u5F55\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u7528&#39;#&#39;\u8FDB\u884C\u6CE8\u91CA</span>

<span class="token comment"># \u914D\u7F6E\u6307\u4EE4-\u6307\u4EE4\u53C2\u6570-\u6307\u4EE4\u4E0A\u4E0B\u6587</span>
<span class="token comment"># main \u4E0A\u4E0B\u6587</span>
user  nginx<span class="token punctuation">;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    server <span class="token punctuation">{</span>
        listen          <span class="token number">80</span><span class="token punctuation">;</span>
        server_name     www.example.com<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
            index index.html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

mail <span class="token punctuation">{</span>
    auth_http  <span class="token number">127.0</span>.0.1:80/auth.php<span class="token punctuation">;</span>
    pop3_capabilities  <span class="token string">&quot;TOP&quot;</span>  <span class="token string">&quot;USER&quot;</span><span class="token punctuation">;</span>
    imap_capabilities  <span class="token string">&quot;IMAP4rev1&quot;</span>  <span class="token string">&quot;UIDPLUS&quot;</span><span class="token punctuation">;</span>

    server <span class="token punctuation">{</span>
        listen     <span class="token number">110</span><span class="token punctuation">;</span>
        protocol   pop3<span class="token punctuation">;</span>
        proxy      on<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E38\u89C1\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u6307\u4EE4" aria-hidden="true">#</a> \u5E38\u89C1\u6307\u4EE4</h3><p>include</p><p>\u4ECE\u5176\u4ED6\u6587\u4EF6\u5F15\u5165\u914D\u7F6E\uFF0C\u53EF\u7528\u6765\u5BF9\u590D\u6742\u7684 Nginx \u914D\u7F6E\u505A\u62C6\u5206\uFF1B</p><p>server</p><p>server \u5757\u7528\u6765\u914D\u7F6E \u201C\u865A\u62DF\u670D\u52A1\u5668\u201D \uFF0C\u6BCF\u4E00\u4E2A server \u5757\u90FD\u76F8\u5F53\u4E8E\u4E00\u53F0 \u201C\u865A\u62DF\u670D\u52A1\u5668\u201D\uFF0C\u201C\u865A\u62DF\u670D\u52A1\u5668\u201D \u662F\u4E00\u4E2A\u4E0E\u5B9E\u4F53\u670D\u52A1\u5668\u76F8\u5BF9\u5E94\u7684\u6982\u5FF5\uFF0C\u5C06\u4E00\u53F0\u5B9E\u4F53\u670D\u52A1\u5668\u8FDB\u884C\u5212\u5206\uFF0C\u5BF9\u5916\u8868\u73B0\u4E3A\u591A\u4E2A\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u5145\u5206\u5229\u7528\u670D\u52A1\u5668\u7684\u786C\u4EF6\u8D44\u6E90\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4E0D\u7528\u4E3A\u6BCF\u4E00\u4E2A\u8981\u8FD0\u884C\u7684\u7F51\u7AD9\u63D0\u4F9B\u5355\u72EC\u7684 Nginx \u670D\u52A1\u5668\uFF1B</p><p>listen</p><p>\u7528\u6765\u914D\u7F6E \u201C\u865A\u62DF\u670D\u52A1\u5668\u201D \u76D1\u542C\u7684 ip \u548C port\uFF0C\u53EA\u80FD\u914D\u7F6E\u5728 server \u5757\u4E2D</p><p>server_name</p><p>\u7528\u6765\u914D\u7F6E \u201C\u865A\u62DF\u670D\u52A1\u5668\u201D \u7684\u7F51\u5740\uFF0C\u53EA\u80FD\u914D\u7F6E\u5728 server \u5757\u4E2D \u4F18\u5148\u7EA7\uFF0C\u6839\u636E\u5339\u914D\u4F18\u5148\u5EA6\u5339\u914D</p><p>rewrite \u548C proxy_pass</p><h3 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h3><blockquote><p>\u57DF\u540D -&gt; \u57DF\u540D</p></blockquote><p>\u5C06\u67D0\u4E00\u4E2A\u57DF\u540D\u7684\u8BF7\u6C42\u5728\u672C\u5730\u62E6\u622A\u4E4B\u540E\uFF0C\u8F6C\u53D1\u5230 nginx \u4E2D\uFF0Cnginx \u5C06\u8BF7\u6C42\u8F6C\u53D1\u5230\u5176\u4ED6\u57DF\u540D\uFF1B</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name www<span class="token operator">.</span>baidu<span class="token operator">.</span>com<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span><span class="token comment">//www.google.com;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u57DF\u540D -&gt; \u672C\u5730 ip</p></blockquote><p>\u5C06\u67D0\u4E00\u4E2A\u57DF\u540D\u7684\u8BF7\u6C42\u62E6\u622A\u4E4B\u540E\uFF0C\u8F6C\u5230\u5230 nginx \u4E2D\uFF0Cnginx \u5C06\u5BF9\u5E94\u7684\u8BF7\u6C42\u6253\u5230\u672C\u5730\u7684\u5176\u4ED6 ip\uFF1B</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name www<span class="token operator">.</span>baidu<span class="token operator">.</span>com<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_pass http<span class="token punctuation">:</span><span class="token comment">//127.0.0.1:8001;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8DEF\u5F84 -&gt; \u57DF\u540D</p></blockquote><p>\u6839\u636E\u4E0D\u540C\u8DEF\u5F84\u5C06\u8BF7\u6C42\u8F6C\u53D1\u81F3\u4E0D\u540C\u7684\u57DF\u540D\uFF1B</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name www<span class="token operator">.</span>baidu<span class="token operator">.</span>com<span class="token punctuation">;</span>
    
    location <span class="token operator">^</span><span class="token operator">~</span> <span class="token operator">/</span>to_google <span class="token punctuation">{</span>
        proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        rewrite <span class="token operator">.</span><span class="token operator">*</span> <span class="token operator">/</span><span class="token punctuation">;</span>
        proxy_pass http<span class="token punctuation">:</span><span class="token comment">//google.com/;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u63A5\u53E3\u8DE8\u57DF</p></blockquote><p>\u89E3\u51B3\u524D\u7AEF\u672C\u5730\u5F00\u53D1\u73AF\u5883\u8C03\u7528\u7EBF\u4E0A\u63A5\u53E3\u65F6\u8DE8\u57DF\u7684\u95EE\u9898\uFF1B</p><p>server { listen 80;</p><pre><code>location ^~ /api {
    proxy_pass http://example.com;
    
    add_header Access-Control-Allow-Methods *;
    add_header Access-Control-Max-Age 3600;
    add_header Access-Control-Allow-Credentials true;
    add_header Access-Control-Allow-Origin $http_origin;

    if ($request_method = OPTIONS){
        return 200;
    }
}
</code></pre><p>}</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,40),u={href:"https://mp.weixin.qq.com/s/JrQa88BhRiFFOc7P6zMZZQ",target:"_blank",rel:"noopener noreferrer"},v=c("Nginx\u5165\u95E8");function m(b,k){const s=e("ExternalLinkIcon");return i(),p(l,null,[d,n("ul",null,[n("li",null,[n("a",u,[v,t(s)])])])],64)}var x=a(r,[["render",m],["__file","Nginx.html.vue"]]);export{x as default};
