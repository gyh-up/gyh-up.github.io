import{_ as s,c as n,o as a,a as e}from"./app.e5e644ed.js";const l="/guo-notes/docker/wps4.jpg",y=JSON.parse('{"title":"DockerHub\u548C\u79C1\u4EBA\u4ED3\u5E93","description":"","frontmatter":{"typora-root-url":"..\\\\..\\\\public"},"headers":[{"level":2,"title":"\u4E00\u3001DockerHub","slug":"\u4E00\u3001dockerhub","link":"#\u4E00\u3001dockerhub","children":[]},{"level":2,"title":"\u4E8C\u3001\u79C1\u4EBA\u4ED3\u5E93","slug":"\u4E8C\u3001\u79C1\u4EBA\u4ED3\u5E93","link":"#\u4E8C\u3001\u79C1\u4EBA\u4ED3\u5E93","children":[]},{"level":2,"title":"1\u3001\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA","slug":"_1\u3001\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA","link":"#_1\u3001\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA","children":[]},{"level":2,"title":"2\u3001\u4E0A\u4F20\u955C\u50CF\u81F3\u79C1\u6709\u4ED3\u5E93","slug":"_2\u3001\u4E0A\u4F20\u955C\u50CF\u81F3\u79C1\u6709\u4ED3\u5E93","link":"#_2\u3001\u4E0A\u4F20\u955C\u50CF\u81F3\u79C1\u6709\u4ED3\u5E93","children":[{"level":3,"title":"\u4E09\u3001 \u4ECE\u79C1\u6709\u4ED3\u5E93\u62C9\u53D6\u955C\u50CF","slug":"\u4E09\u3001-\u4ECE\u79C1\u6709\u4ED3\u5E93\u62C9\u53D6\u955C\u50CF","link":"#\u4E09\u3001-\u4ECE\u79C1\u6709\u4ED3\u5E93\u62C9\u53D6\u955C\u50CF","children":[]}]}],"relativePath":"classify/Docker/DockerHub\u548C\u79C1\u4EBA\u4ED3\u5E93.md","lastUpdated":1679637677000}'),p={name:"classify/Docker/DockerHub\u548C\u79C1\u4EBA\u4ED3\u5E93.md"},r=e(`<h1 id="dockerhub\u548C\u79C1\u4EBA\u4ED3\u5E93" tabindex="-1">DockerHub\u548C\u79C1\u4EBA\u4ED3\u5E93 <a class="header-anchor" href="#dockerhub\u548C\u79C1\u4EBA\u4ED3\u5E93" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001dockerhub" tabindex="-1">\u4E00\u3001DockerHub <a class="header-anchor" href="#\u4E00\u3001dockerhub" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u6709\u70B9\u7C7B\u4F3C\u4E8E composer \u7684\u4ED3\u5E93\u5730\u5740\u5C31\u662F\u7528\u6765\u5B58\u50A8\u5F00\u53D1\u4EBA\u5458\u7684\u955C\u50CF\u5730\u5740\u7684\uFF1B</p><p>\u5B98\u7F51\uFF1A<a href="https://hub.docker.com" target="_blank" rel="noreferrer">https://hub.docker.com</a></p><p>\u9996\u5148\u81EA\u5DF1\u6CE8\u518C\u4E00\u4E2A\u8D26\u53F7\uFF0C\u7136\u540E\u767B\u5F55</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># docker login </span></span>
<span class="line"><span style="color:#A6ACCD;">Username: hugo</span></span>
<span class="line"><span style="color:#A6ACCD;">Password: 111111</span></span>
<span class="line"><span style="color:#A6ACCD;">Login Successded </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728\u4E0A\u9762\u6267\u884C\u7684\u4EE3\u7801\u53EF\u80FD\u51FA\u73B0\u5982\u4E0B\u5F02\u5E38</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">error response from daemon: Get https://registry-1.docker.io/v2/library/hello-world/manifest </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E2A\u95EE\u9898\u7684\u5F02\u5E38\u4E3B\u8981\u662F</p><ul><li>\u89E3\u6790ip\u4E0D\u53EF\u7528</li><li>\u56E0\u4E3Adns\u57DF\u540D\u6CA1\u6709\u89E3\u6790\u7684\u539F\u56E0</li></ul><p>\u89E3\u51B3\uFF1A</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">yum install bind-utils</span></span>
<span class="line"><span style="color:#A6ACCD;">dig @114.114.114.114 registry-1.docker.io</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/hosts</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="`+l+`" alt="img"></p><p>\u767B\u5165\u6210\u529F\u4E4B\u540E\uFF0C\u4F7F\u7528push\u547D\u4EE4\u5C31\u53EF\u4EE5\u4E0A\u4F20\u955C\u50CF\uFF0C\u5982\u679C\u4E0D\u6307\u5B9Atag\u5219\u672C\u5730\u7684\u955C\u50CF\u90FD\u4F1A\u4E0A\u4F20\u3002</p><p>\u5982\u4E0B\u5B9E\u4F8B\uFF1A \u6CE8\u610Fdocker hub \u7684 push \u8981\u6C42\u662F\u5982\u4E0B\u683C\u5F0F</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">docker push \u6CE8\u518C\u540D/\u955C\u50CF\u540D:tag </span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5EFA\u8BAE\u53EF\u4EE5\u5148\u5728dockerhub\u4E2D\u5EFA\u8BAE\u4ED3\u5E93 \u3002</p><p>\u7136\u540E\u6211\u4EEC\u53EF\u4EE5 rmi \u6389\u672C\u5730\u7684\u955C\u50CF\uFF0Cpull \u6211\u4EEC\u81EA\u5DF1\u4E0A\u4F20\u7684\u955C\u50CF</p><h2 id="\u4E8C\u3001\u79C1\u4EBA\u4ED3\u5E93" tabindex="-1">\u4E8C\u3001\u79C1\u4EBA\u4ED3\u5E93 <a class="header-anchor" href="#\u4E8C\u3001\u79C1\u4EBA\u4ED3\u5E93" aria-hidden="true">#</a></h2><p>Docker Hub \u662F\u7528\u4E8E\u7BA1\u7406\u516C\u5171\u955C\u50CF\u7684\u4ED3\u5E93\uFF0C\u53EF\u4EE5\u4ECE\u4E0A\u9762\u62C9\u53D6\u955C\u50CF\u5230\u672C\u5730\uFF0C\u4E5F\u53EF\u4EE5\u628A\u81EA\u5DF1\u7684\u955C\u50CF\u63A8\u9001\u4E0A\u53BB\u3002\u4F46\u662F\u6709\u65F6\u5019\u4E0D\u5E0C\u671B\u5C06\u81EA\u5DF1\u7684\u955C\u50CF\u653E\u5230\u516C\u7F51\u4E0A\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u642D\u5EFA\u81EA\u5DF1\u7684\u79C1\u6709\u4ED3\u5E93\u6765\u5B58\u50A8\u548C\u7BA1\u7406\u81EA\u5DF1\u7684\u955C\u50CF\u3002</p><h2 id="_1\u3001\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA" tabindex="-1">1\u3001\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA <a class="header-anchor" href="#_1\u3001\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># 1\u3001\u62C9\u53D6\u79C1\u6709\u4ED3\u5E93\u955C\u50CF </span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull registry</span></span>
<span class="line"><span style="color:#676E95;"># 2\u3001\u542F\u52A8\u79C1\u6709\u4ED3\u5E93\u5BB9\u5668 </span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -id --name=registry -p 5000:5000 registry</span></span>
<span class="line"><span style="color:#676E95;"># 3\u3001\u6253\u5F00\u6D4F\u89C8\u5668 \u8F93\u5165\u5730\u5740http://\u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u5668ip:5000/v2/_catalog\uFF0C\u770B\u5230{&quot;repositories&quot;:[]} \u8868\u793A\u79C1\u6709\u4ED3\u5E93 \u642D\u5EFA\u6210\u529F</span></span>
<span class="line"><span style="color:#676E95;"># 4\u3001\u4FEE\u6539daemon.json   </span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/docker/daemon.json    </span></span>
<span class="line"><span style="color:#676E95;"># \u5728\u4E0A\u8FF0\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E00\u4E2Akey\uFF0C\u4FDD\u5B58\u9000\u51FA\u3002\u6B64\u6B65\u7528\u4E8E\u8BA9 docker \u4FE1\u4EFB\u79C1\u6709\u4ED3\u5E93\u5730\u5740\uFF1B\u6CE8\u610F\u5C06\u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u5668ip\u4FEE\u6539\u4E3A\u81EA\u5DF1\u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u5668\u771F\u5B9Eip </span></span>
<span class="line"><span style="color:#A6ACCD;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">insecure-registries</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u5668ip:5000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#676E95;"># 5\u3001\u91CD\u542Fdocker \u670D\u52A1 </span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker</span></span>
<span class="line"><span style="color:#A6ACCD;">docker start registry</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_2\u3001\u4E0A\u4F20\u955C\u50CF\u81F3\u79C1\u6709\u4ED3\u5E93" tabindex="-1">2\u3001\u4E0A\u4F20\u955C\u50CF\u81F3\u79C1\u6709\u4ED3\u5E93 <a class="header-anchor" href="#_2\u3001\u4E0A\u4F20\u955C\u50CF\u81F3\u79C1\u6709\u4ED3\u5E93" aria-hidden="true">#</a></h2><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># 1\u3001\u6807\u8BB0\u955C\u50CF\u4E3A\u79C1\u6709\u4ED3\u5E93\u7684\u955C\u50CF     </span></span>
<span class="line"><span style="color:#A6ACCD;">docker tag centos:7 \u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u5668IP:5000/centos:7</span></span>
<span class="line"><span style="color:#676E95;"># 2\u3001\u4E0A\u4F20\u6807\u8BB0\u7684\u955C\u50CF     </span></span>
<span class="line"><span style="color:#A6ACCD;">docker push \u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u5668IP:5000/centos:7</span></span>
<span class="line"><span style="color:#676E95;"># \u6253\u5F00\u6D4F\u89C8\u5668 \u8F93\u5165\u5730\u5740http://\u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u5668ip:5000/v2/_catalog\uFF0C\u770B\u5230{&quot;repositories&quot;:[centos]}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u4E09\u3001-\u4ECE\u79C1\u6709\u4ED3\u5E93\u62C9\u53D6\u955C\u50CF" tabindex="-1">\u4E09\u3001 \u4ECE\u79C1\u6709\u4ED3\u5E93\u62C9\u53D6\u955C\u50CF <a class="header-anchor" href="#\u4E09\u3001-\u4ECE\u79C1\u6709\u4ED3\u5E93\u62C9\u53D6\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;">#\u62C9\u53D6\u955C\u50CF </span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull \u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u5668ip:5000/centos:7</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,26),c=[r];function o(i,t,d,u,b,h){return a(),n("div",null,c)}const g=s(p,[["render",o]]);export{y as __pageData,g as default};
