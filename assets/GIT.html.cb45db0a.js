import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as l,c as t,a as n,b as c,F as o,d as s,e as d}from"./app.45d6761d.js";var r="/note/assets/2022-06-24-10-56-12.58cd1598.png";const p={},v=n("h1",{id:"git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),s(" GIT")],-1),m={href:"https://mrhope.site/file/git/gitCheatSheet.pdf",target:"_blank",rel:"noopener noreferrer"},u=s("\u5E38\u7528\u6307\u4EE4"),b=d('<div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u5B89\u88C5\u65F6\u9009\u62E9 VS Code \u4F5C\u4E3A git \u5F97\u9ED8\u8BA4\u7F16\u8F91\u5668</p></div><p><img src="'+r+`" alt=""></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>GIT \u4F7F\u7528 HEAD \u4F5C\u4E3A\u6307\u9488\u6307\u5411\u7248\u672C\u94FE</p><ol><li>\u5DE5\u4F5C\u533A <ol><li>\u672C\u5730\u7F16\u8F91\u7684\u5185\u5BB9</li></ol></li><li>\u6682\u5B58\u533A <ol><li>\u4FEE\u6539\u7684\u5185\u5BB9 add \uFF0C\u4ECE\u5DE5\u4F5C\u533A\u79FB\u52A8\u5230\u6682\u5B58\u533A</li></ol></li><li>\u7248\u672C\u5E93 <ol><li>commit stage change\uFF0C\u4ECE\u6682\u5B58\u533A\u79FB\u52A8\u5230\u7248\u672C\u5E93\u5185</li></ol></li></ol><ul><li>master <ul><li>dev <ul><li>people</li></ul></li><li>bug</li></ul></li></ul></div><h2 id="git\u57FA\u672C\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#git\u57FA\u672C\u8BBE\u7F6E" aria-hidden="true">#</a> git\u57FA\u672C\u8BBE\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u914D\u7F6E</span>
<span class="token function">git</span> config --local --list
<span class="token function">git</span> config --global -l

<span class="token comment"># \u8BBE\u7F6E Proxy\uFF08\u7AEF\u53E3\u4F7F\u7528vpn\u7AEF\u53E3\uFF09</span>
<span class="token function">git</span> config --global http.proxy http://127.0.0.1:7890
<span class="token function">git</span> config --global https.proxy https://127.0.0.1:7890

<span class="token comment"># \u8BBE\u7F6E \u7528\u6237\u540D\u548C\u90AE\u7BB1</span>
<span class="token function">git</span> config --local user.name <span class="token string">&quot;xxx&quot;</span>

<span class="token function">git</span> config --global user.email <span class="token string">&quot;xxx@qq.com&quot;</span>

<span class="token comment"># \u5220\u9664\u5C5E\u6027</span>
<span class="token function">git</span> config --global --unset http.proxy
<span class="token function">git</span> config --global --unset https.proxy

<span class="token comment"># \u5173\u95EDssl \u6821\u9A8C</span>

<span class="token function">git</span> config --global http.sslVerify \u201Cfalse\u201D

<span class="token comment"># \u521B\u5EFA SSH KEY</span>

ssh-keygen -t rsa -C <span class="token string">&quot;youremail@example.com&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4ED3\u5E93\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u4ED3\u5E93\u521D\u59CB\u5316" aria-hidden="true">#</a> \u4ED3\u5E93\u521D\u59CB\u5316</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># QA \u514B\u9686\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> clone xxx.git

<span class="token comment"># QA \u672C\u5730\u6587\u4EF6\u5173\u8054\u4ED3\u5E93</span>
<span class="token comment"># \u672C\u5730\u521D\u59CB\u5316</span>
<span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin xxx.git
<span class="token comment"># \u6CE8\u610FMerge</span>
<span class="token function">git</span> push origin main

<span class="token comment"># QA \u66F4\u6362\u4ED3\u5E93</span>
<span class="token comment"># \u5220\u9664\u5173\u8054\u5173\u7CFB</span>
<span class="token function">git</span>  remote remove origin
<span class="token function">git</span> remote <span class="token function">add</span> origin xxx.git
<span class="token comment"># \u6539\u5206\u652F\u540D\u79F0\uFF08github \u4E0A\u4F7F\u7528main\uFF09</span>
<span class="token function">git</span> branch -m master main
<span class="token comment"># \u8BBE\u7F6E\u63D0\u4EA4\u5230\u8FDC\u7A0B\u5206\u652F</span>
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/main main
<span class="token comment"># \u8BBE\u7F6E\u8FDC\u7A0B\u4ED3\u5E93 head \u6307\u5411\u5F53\u524D\u5206\u652F</span>
<span class="token function">git</span> remote set-head origin -a
<span class="token function">git</span> push -f origin main
<span class="token function">git</span> push -u origin main

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u8FDC\u7A0B\u4ED3\u5E93</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u672C\u5730\u547D\u540D\u4E3A origin</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin xxx.git
<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93 origin</span>
<span class="token function">git</span>  remote remove origin

<span class="token comment"># \u83B7\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u5F97\u6570\u636E\uFF0C\u4F46\u662F\u4E0D\u4F1A\u81EA\u52A8\u5408\u5E76\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5F53\u524D\u5F97\u5DE5\u4F5C</span>
<span class="token function">git</span> fetch <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span>

<span class="token comment"># \u63A8\u9001\u672C\u5730\u6570\u636E\u5230\u8FDC\u7A0B\u4ED3\u5E93</span>
<span class="token function">git</span> push <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>branch<span class="token operator">&gt;</span>

<span class="token comment"># \u67E5\u770B\u8FDC\u7A0B\u4ED3\u5E93\u4FE1\u606F</span>
<span class="token function">git</span> remote show <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span>

<span class="token comment"># \u4FEE\u6539\u8FDC\u7A0B\u4ED3\u5E93\u540D\u79F0</span>
<span class="token function">git</span> remote <span class="token function">rename</span> pb paul

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u5F53\u524D\u72B6\u6001\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u72B6\u6001\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u72B6\u6001\u4FE1\u606F</h2><p><code>git status</code></p><h2 id="\u8865\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u8865\u63D0\u4EA4" aria-hidden="true">#</a> \u8865\u63D0\u4EA4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8865\u63D0\u4EA4\u4E0A\u6B21\u7684commit\uFF08\u672A push\uFF09</span>
<span class="token function">git</span> commit --amend


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7248\u672C\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C\u56DE\u9000" aria-hidden="true">#</a> \u7248\u672C\u56DE\u9000</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56DE\u9000\u4E0A\u4E00\u4E2A\u7248\u672C</span>
<span class="token function">git</span> reset --hard HEAD^

<span class="token comment"># \u56DE\u9000\u5230\u6307\u5B9A\u7684\u7248\u672C\uFF0Cid \u53EF\u4EE5\u53EA\u8F93\u5165\u524D 6 \u4F4D\uFF08\u56DE\u9000\u7248\u672C\u540E\uFF0C\u4E4B\u540E\u7684\u4FEE\u6539\u63D0\u4EA4\u90FD\u5C06\u4E22\u5931\uFF0C\u8BF7\u614E\u91CD\uFF09</span>
<span class="token comment"># \u5B9E\u8D28\u4E0A\u662F head \u6307\u9488\u6307\u5411\u63D0\u4EA4\uFF0C\u6240\u4EE5\u5982\u679C\u8BB0\u5F97\u6700\u540E\u7248\u672C\u7684 id\uFF0C\u4E5F\u53EF\u4EE5\u91CD\u65B0\u5C06 \u6307\u9488\u6307\u5411 \u6700\u540E\u7248\u672C\uFF09</span>
<span class="token function">git</span> reset --hard <span class="token operator">&lt;</span>commit id<span class="token operator">&gt;</span>

<span class="token comment"># \u56DE\u9000\u6587\u4EF6\u7248\u672C</span>
<span class="token function">git</span> reset --hard <span class="token operator">&lt;</span>commit id<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>file name<span class="token operator">&gt;</span>

<span class="token comment"># \u627E\u56DE commit id</span>
<span class="token function">git</span> reflog

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u64A4\u9500-\u5220\u9664\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u64A4\u9500-\u5220\u9664\u6587\u4EF6" aria-hidden="true">#</a> \u64A4\u9500/\u5220\u9664\u6587\u4EF6</h2><p>\u64A4\u9500 commit\uFF08un push\uFF09</p><ol><li><code>git reset HEAD &lt;file&gt;</code></li><li><code>git checkout -- &lt;file&gt;</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u629B\u5F03\u5F53\u524D\u4FEE\u6539\uFF0C\u5C06\u6587\u4EF6\u8FD8\u539F\u6210\u6700\u540E\u4E00\u6B21\u63D0\u4EA4</span>
<span class="token comment"># \u5371\u9669\uFF01\uFF01\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u547D\u4EE4\uFF0C\u53EF\u80FD\u9020\u6210\u6570\u636E\u4E22\u5931</span>
<span class="token function">git</span> checkout -- <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u628A\u6682\u5B58\u533A\u7684\u4FEE\u6539\u64A4\u9500\u6389(unstage)</span>
<span class="token function">git</span> reset HEAD <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># \u4E22\u5F03\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A\u7684\u5168\u90E8\u6587\u4EF6</span>
<span class="token function">git</span> reset --hard HEAD

<span class="token comment"># \u4ECEgit\u4E2D\u5220\u9664\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
<span class="token function">git</span> commit

<span class="token comment"># \u64A4\u9500\u5DE5\u4F5C\u533A\u5220\u9664</span>

<span class="token function">git</span> checkout -- test.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> \u5206\u652F\u7BA1\u7406</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u67E5\u770B\u5206\u652F</span>
<span class="token function">git</span> branch

<span class="token comment"># \u521B\u5EFA\u5206\u652F</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>

<span class="token comment"># \u5207\u6362\u5206\u652F</span>
<span class="token function">git</span> checkout <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>

<span class="token comment"># \u79FB\u56DE\u5230\u4E3B\u5E72\uFF0C\u5408\u5E76\u5206\u652F </span>
$ <span class="token function">git</span> checkout master
$ <span class="token function">git</span> merge <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u5206\u652F</span>
<span class="token function">git</span> branch -d <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
<span class="token comment"># \u5F3A\u5236\u5220\u9664\u5206\u652F</span>
<span class="token function">git</span> branch -D feature-vulcan

<span class="token comment"># \u63A8\u9001\u5206\u652F</span>
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>

<span class="token comment"># \u5C06 branch1\u7684commit1 \u5408\u5E76\u5230branch2\u5F53\u4E2D</span>
<span class="token comment"># \u5207\u6362\u5230branch2\u4E2D\uFF0C\u7136\u540E\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</span>
<span class="token function">git</span> cherry-pick commit1

<span class="token comment"># \u540C\u65F6\u521B\u5EFA \u672C\u5730 \u4E0E \u8FDC\u7A0B\u4ED3\u5E93 \u5206\u652F</span>
<span class="token function">git</span> checkout -b dev origin/dev

<span class="token comment"># \u8BBE\u7F6E dev \u548C origin/dev \u7684\u94FE\u63A5:</span>
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/dev dev


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u5408\u5E76\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u51B2\u7A81" aria-hidden="true">#</a> \u5408\u5E76\u51B2\u7A81</h1><p>\u5408\u5E76\u5206\u652F\u65F6\uFF0C\u63D0\u793A\u5408\u5E76\u51B2\u7A81\uFF0C\u8FDB\u5165vscode \u8D44\u6E90\u7BA1\u7406\uFF0C\u67E5\u770B\u51B2\u7A81\u6587\u4EF6\uFF0C\u624B\u52A8\u5408\u5E76\u5B8C\u6210\u540E\uFF0Ccommit\u5373\u53EF</p><h2 id="stash" tabindex="-1"><a class="header-anchor" href="#stash" aria-hidden="true">#</a> stash</h2><ol><li>\u5C06 dev \u5DE5\u4F5C\u533A \u6682\u5B58\u8D77\u6765 git stash</li><li>\u5207\u6362\u5206\u652F \u5230bug \u5206\u652F</li><li>\u4FEE\u590Dbug</li><li>\u5207\u56DE dev \u5206\u652F</li><li>git stash pop</li><li>\u8FD8\u539F\u5DE5\u4F5C\u533A\uFF0C\u7EE7\u7EED\u5F00\u53D1</li></ol><h2 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> .gitignore</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
*.pdf

build/

doc/*.txt

!lib.pdf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u627E\u51B2\u7A81\u89C4\u5219</span>

<span class="token function">git</span> check-ignore -v file.name

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tag" tabindex="-1"><a class="header-anchor" href="#tag" aria-hidden="true">#</a> tag</h2><p>\u6807\u7B7E\u9ED8\u8BA4\u5B58\u5728\u672C\u5730\uFF0C\u4E0E commit id \u7ED1\u5B9A\uFF0C\u53EF\u4EE5\u63A8\u9001\u6807\u7B7E\u81F3\u8FDC\u7A0B\uFF0C\u5220\u9664\u8FDC\u7A0B\u6807\u7B7E\u6BD4\u8F83\u9EBB\u70E6</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E0B\u8F7D\u6307\u5B9A tag \u7684\u4EE3\u7801\u8FDB\u884C\u53D1\u5E03</p><p><code>git clone --branch &lt;tagname&gt; xxx.git</code></p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6253\u6807\u7B7E \uFF08\u8BF4\u660E / \u6307\u5B9A\u6807\u7B7E\u4F4D\u7F6E\uFF09</span>
<span class="token function">git</span> tag <span class="token punctuation">[</span>-a<span class="token punctuation">]</span> <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-m <span class="token string">&quot;info&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>commit id<span class="token punctuation">]</span>

<span class="token comment"># \u67E5\u770B\u6807\u7B7E</span>
<span class="token function">git</span> tag

<span class="token comment"># \u67E5\u770B\u6807\u7B7E\u8BE6\u60C5</span>
<span class="token function">git</span> show <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>

<span class="token comment"># \u5220\u9664\u672C\u5730\u6807\u7B7E</span>
<span class="token function">git</span> tag -d <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>

<span class="token comment"># \u63A8\u9001\u6807\u7B7E\u81F3\u8FDC\u7A0B</span>
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>
<span class="token comment"># \u63A8\u9001\u6240\u6709\u6807\u7B7E\u81F3\u8FDC\u7A0B</span>
<span class="token function">git</span> push origin --tags

<span class="token comment"># \u5220\u9664\u8FDC\u7A0B\u6807\u7B7E</span>
<span class="token comment"># \u5148\u5220\u9664\u672C\u5730\u6807\u7B7E\uFF0C\u518D\u5220\u9664\u8FDC\u7A0B\u6807\u7B7E</span>
<span class="token function">git</span> tag -d <span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>
<span class="token function">git</span> push origin :refs/tags/<span class="token operator">&lt;</span>tagname<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rebase" tabindex="-1"><a class="header-anchor" href="#rebase" aria-hidden="true">#</a> rebase</h2>`,33);function g(h,k){const a=i("ExternalLinkIcon");return l(),t(o,null,[v,n("p",null,[n("a",m,[u,c(a)])]),b],64)}var _=e(p,[["render",g],["__file","GIT.html.vue"]]);export{_ as default};
