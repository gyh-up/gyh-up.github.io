import{_ as s,c as n,o as a,a as e}from"./app.e5e644ed.js";const p="/guo-notes/kubenetes/image-20200520144548997.png",l="/guo-notes/kubenetes/image-20200520144959353.png",r="/guo-notes/kubenetes/image-20200520154628679.png",o="/guo-notes/kubenetes/image-20200520162605102.png",c="/guo-notes/kubenetes/image-20200520163253644.png",t="/guo-notes/kubenetes/image-20200520163552110.png",i="/guo-notes/kubenetes/image-20200520163832827.png",F=JSON.parse('{"title":"DashBoard","description":"","frontmatter":{"typora-root-url":"..\\\\..\\\\public","typora-copy-images-to":"..\\\\..\\\\public\\\\kubenetes"},"headers":[{"level":2,"title":"\u4E00\u3001\u90E8\u7F72Dashboard","slug":"\u4E00\u3001\u90E8\u7F72dashboard","link":"#\u4E00\u3001\u90E8\u7F72dashboard","children":[]},{"level":2,"title":"\u4E8C\u3001\u4F7F\u7528DashBoard","slug":"\u4E8C\u3001\u4F7F\u7528dashboard","link":"#\u4E8C\u3001\u4F7F\u7528dashboard","children":[]}],"relativePath":"classify/Kubernetes/DashBoard.md","lastUpdated":1680256036000}'),b={name:"classify/Kubernetes/DashBoard.md"},d=e(`<h1 id="dashboard" tabindex="-1">DashBoard <a class="header-anchor" href="#dashboard" aria-hidden="true">#</a></h1><p>\u4E4B\u524D\u5728kubernetes\u4E2D\u5B8C\u6210\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u662F\u901A\u8FC7\u547D\u4EE4\u884C\u5DE5\u5177kubectl\u5B8C\u6210\u7684\u3002\u5176\u5B9E\uFF0C\u4E3A\u4E86\u63D0\u4F9B\u66F4\u4E30\u5BCC\u7684\u7528\u6237\u4F53\u9A8C\uFF0Ckubernetes\u8FD8\u5F00\u53D1\u4E86\u4E00\u4E2A\u57FA\u4E8Eweb\u7684\u7528\u6237\u754C\u9762\uFF08Dashboard\uFF09\u3002\u7528\u6237\u53EF\u4EE5\u4F7F\u7528Dashboard\u90E8\u7F72\u5BB9\u5668\u5316\u7684\u5E94\u7528\uFF0C\u8FD8\u53EF\u4EE5\u76D1\u63A7\u5E94\u7528\u7684\u72B6\u6001\uFF0C\u6267\u884C\u6545\u969C\u6392\u67E5\u4EE5\u53CA\u7BA1\u7406kubernetes\u4E2D\u5404\u79CD\u8D44\u6E90\u3002</p><h2 id="\u4E00\u3001\u90E8\u7F72dashboard" tabindex="-1">\u4E00\u3001\u90E8\u7F72Dashboard <a class="header-anchor" href="#\u4E00\u3001\u90E8\u7F72dashboard" aria-hidden="true">#</a></h2><ol><li>\u4E0B\u8F7Dyaml\uFF0C\u5E76\u8FD0\u884CDashboard</li></ol><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u4E0B\u8F7Dyaml</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@k8s-master01 </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># wget  https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0/aio/deploy/recommended.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u4FEE\u6539kubernetes-dashboard\u7684Service\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">kind: Service</span></span>
<span class="line"><span style="color:#A6ACCD;">apiVersion: v1</span></span>
<span class="line"><span style="color:#A6ACCD;">metadata:</span></span>
<span class="line"><span style="color:#A6ACCD;">  labels:</span></span>
<span class="line"><span style="color:#A6ACCD;">    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: kubernetes-dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">  namespace: kubernetes-dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">spec:</span></span>
<span class="line"><span style="color:#A6ACCD;">  type: NodePort  </span><span style="color:#676E95;"># \u65B0\u589E</span></span>
<span class="line"><span style="color:#A6ACCD;">  ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - port: 443</span></span>
<span class="line"><span style="color:#A6ACCD;">      targetPort: 8443</span></span>
<span class="line"><span style="color:#A6ACCD;">      nodePort: 30009  </span><span style="color:#676E95;"># \u65B0\u589E</span></span>
<span class="line"><span style="color:#A6ACCD;">  selector:</span></span>
<span class="line"><span style="color:#A6ACCD;">    k8s-app: kubernetes-dashboard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u90E8\u7F72</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@k8s-master01 </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># kubectl create -f recommended.yaml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770Bnamespace\u4E0B\u7684kubernetes-dashboard\u4E0B\u7684\u8D44\u6E90</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@k8s-master01 </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># kubectl get pod,svc -n kubernetes-dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">NAME                                            READY   STATUS    RESTARTS   AGE</span></span>
<span class="line"><span style="color:#A6ACCD;">pod/dashboard-metrics-scraper-c79c65bb7-zwfvw   1/1     Running   0          111s</span></span>
<span class="line"><span style="color:#A6ACCD;">pod/kubernetes-dashboard-56484d4c5-z95z5        1/1     Running   0          111s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">NAME                               TYPE       CLUSTER-IP      EXTERNAL-IP  PORT</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">S</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">         AGE</span></span>
<span class="line"><span style="color:#A6ACCD;">service/dashboard-metrics-scraper  ClusterIP  10.96.89.218    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">none</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">       8000/TCP        111s</span></span>
<span class="line"><span style="color:#A6ACCD;">service/kubernetes-dashboard       NodePort   10.104.178.171  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">none</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">       443:30009/TCP   111s</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>2\uFF09\u521B\u5EFA\u8BBF\u95EE\u8D26\u6237\uFF0C\u83B7\u53D6token</p><div class="language-shell line-numbers-mode"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u8D26\u53F7</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@k8s-master01-1 </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># kubectl create serviceaccount dashboard-admin -n kubernetes-dashboard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6388\u6743</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@k8s-master01-1 </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># kubectl create clusterrolebinding dashboard-admin-rb --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:dashboard-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u83B7\u53D6\u8D26\u53F7token</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@k8s-master01 </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;">#  kubectl get secrets -n kubernetes-dashboard | grep dashboard-admin</span></span>
<span class="line"><span style="color:#A6ACCD;">dashboard-admin-token-xbqhh        kubernetes.io/service-account-token   3      2m35s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@k8s-master01 </span><span style="color:#89DDFF;">~]</span><span style="color:#676E95;"># kubectl describe secrets dashboard-admin-token-xbqhh -n kubernetes-dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">Name:         dashboard-admin-token-xbqhh</span></span>
<span class="line"><span style="color:#A6ACCD;">Namespace:    kubernetes-dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">Labels:       </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">none</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Annotations:  kubernetes.io/service-account.name: dashboard-admin</span></span>
<span class="line"><span style="color:#A6ACCD;">              kubernetes.io/service-account.uid: 95d84d80-be7a-4d10-a2e0-68f90222d039</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Type:  kubernetes.io/service-account-token</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Data</span></span>
<span class="line"><span style="color:#A6ACCD;">====</span></span>
<span class="line"><span style="color:#A6ACCD;">namespace:  20 bytes</span></span>
<span class="line"><span style="color:#A6ACCD;">token:      eyJhbGciOiJSUzI1NiIsImtpZCI6ImJrYkF4bW5XcDhWcmNGUGJtek5NODFuSXl1aWptMmU2M3o4LTY5a2FKS2cifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkYXNoYm9hcmQtYWRtaW4tdG9rZW4teGJxaGgiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGFzaGJvYXJkLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiOTVkODRkODAtYmU3YS00ZDEwLWEyZTAtNjhmOTAyMjJkMDM5Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmVybmV0ZXMtZGFzaGJvYXJkOmRhc2hib2FyZC1hZG1pbiJ9.NAl7e8ZfWWdDoPxkqzJzTB46sK9E8iuJYnUI9vnBaY3Jts7T1g1msjsBnbxzQSYgAG--cV0WYxjndzJY_UWCwaGPrQrt_GunxmOK9AUnzURqm55GR2RXIZtjsWVP2EBatsDgHRmuUbQvTFOvdJB4x3nXcYLN2opAaMqg3rnU2rr-A8zCrIuX_eca12wIp_QiuP3SF-tzpdLpsyRfegTJZl6YnSGyaVkC9id-cxZRb307qdCfXPfCHR_2rt5FVfxARgg_C0e3eFHaaYQO7CitxsnIoIXpOFNAR8aUrmopJyODQIPqBWUehb7FhlU1DCduHnIIXVC_UICZ-MKYewBDLw</span></span>
<span class="line"><span style="color:#A6ACCD;">ca.crt:     1025 bytes</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>3\uFF09\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EEDashboard\u7684UI</p><p>\u5728\u767B\u5F55\u9875\u9762\u4E0A\u8F93\u5165\u4E0A\u9762\u7684token</p><p><img src="`+p+'" alt="image-20200520144548997"></p><p>\u51FA\u73B0\u4E0B\u9762\u7684\u9875\u9762\u4EE3\u8868\u6210\u529F</p><p><img src="'+l+'" alt="image-20200520144959353"></p><h2 id="\u4E8C\u3001\u4F7F\u7528dashboard" tabindex="-1">\u4E8C\u3001\u4F7F\u7528DashBoard <a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528dashboard" aria-hidden="true">#</a></h2><p>\u672C\u7AE0\u8282\u4EE5Deployment\u4E3A\u4F8B\u6F14\u793ADashBoard\u7684\u4F7F\u7528</p><p><strong>\u67E5\u770B</strong></p><p>\u9009\u62E9\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4<code>dev</code>\uFF0C\u7136\u540E\u70B9\u51FB<code>Deployments</code>\uFF0C\u67E5\u770Bdev\u7A7A\u95F4\u4E0B\u7684\u6240\u6709deployment</p><p><img src="'+r+'" alt="img"></p><p><strong>\u6269\u7F29\u5BB9</strong></p><p>\u5728<code>Deployment</code>\u4E0A\u70B9\u51FB<code>\u89C4\u6A21</code>\uFF0C\u7136\u540E\u6307\u5B9A<code>\u76EE\u6807\u526F\u672C\u6570\u91CF</code>\uFF0C\u70B9\u51FB\u786E\u5B9A</p><p><img src="'+o+'" alt="img"></p><p><strong>\u7F16\u8F91</strong></p><p>\u5728<code>Deployment</code>\u4E0A\u70B9\u51FB<code>\u7F16\u8F91</code>\uFF0C\u7136\u540E\u4FEE\u6539<code>yaml\u6587\u4EF6</code>\uFF0C\u70B9\u51FB\u786E\u5B9A</p><p><img src="'+c+'" alt="image-20200520163253644"></p><p><strong>\u67E5\u770BPod</strong></p><p>\u70B9\u51FB<code>Pods</code>, \u67E5\u770Bpods\u5217\u8868</p><p><img src="'+t+'" alt="img"></p><p><strong>\u64CD\u4F5CPod</strong></p><p>\u9009\u4E2D\u67D0\u4E2APod\uFF0C\u53EF\u4EE5\u5BF9\u5176\u6267\u884C\u65E5\u5FD7\uFF08logs\uFF09\u3001\u8FDB\u5165\u6267\u884C\uFF08exec\uFF09\u3001\u7F16\u8F91\u3001\u5220\u9664\u64CD\u4F5C</p><p><img src="'+i+'" alt="img"></p><blockquote><p>Dashboard\u63D0\u4F9B\u4E86kubectl\u7684\u7EDD\u5927\u90E8\u5206\u529F\u80FD\uFF0C\u8FD9\u91CC\u4E0D\u518D\u4E00\u4E00\u6F14\u793A</p></blockquote>',30),m=[d];function u(D,y,C,A,h,g){return a(),n("div",null,m)}const _=s(b,[["render",u]]);export{F as __pageData,_ as default};
