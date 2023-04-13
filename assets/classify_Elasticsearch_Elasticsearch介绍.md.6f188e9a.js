import{_ as t,c as e,o as a,a as c}from"./app.b8d26054.js";const E=JSON.parse('{"title":"ElasticSearch \u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001ES\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6BD4\u8F83","slug":"\u4E00\u3001es\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6BD4\u8F83","link":"#\u4E00\u3001es\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6BD4\u8F83","children":[]},{"level":2,"title":"\u4E8C\u3001\u7269\u7406\u8BBE\u8BA1","slug":"\u4E8C\u3001\u7269\u7406\u8BBE\u8BA1","link":"#\u4E8C\u3001\u7269\u7406\u8BBE\u8BA1","children":[]},{"level":2,"title":"\u4E09\u3001\u903B\u8F91\u8BBE\u8BA1","slug":"\u4E09\u3001\u903B\u8F91\u8BBE\u8BA1","link":"#\u4E09\u3001\u903B\u8F91\u8BBE\u8BA1","children":[]},{"level":2,"title":"\u5012\u6392\u7D22\u5F15","slug":"\u5012\u6392\u7D22\u5F15","link":"#\u5012\u6392\u7D22\u5F15","children":[]},{"level":2,"title":"elasticsearch\u7684\u7D22\u5F15\u548CLucene\u7684\u7D22\u5F15\u5BF9\u6BD4","slug":"elasticsearch\u7684\u7D22\u5F15\u548Clucene\u7684\u7D22\u5F15\u5BF9\u6BD4","link":"#elasticsearch\u7684\u7D22\u5F15\u548Clucene\u7684\u7D22\u5F15\u5BF9\u6BD4","children":[]}],"relativePath":"classify/Elasticsearch/Elasticsearch\u4ECB\u7ECD.md","lastUpdated":1681360865000}'),r={name:"classify/Elasticsearch/Elasticsearch\u4ECB\u7ECD.md"},d=c('<h1 id="elasticsearch-\u4ECB\u7ECD" tabindex="-1">ElasticSearch \u4ECB\u7ECD <a class="header-anchor" href="#elasticsearch-\u4ECB\u7ECD" aria-hidden="true">#</a></h1><p>Elasticsearch \u662F\u4E00\u4E2A\u5F00\u6E90\u7684<strong>\u5206\u5E03\u5F0F\u3001RESTful \u98CE\u683C\u7684\u641C\u7D22</strong>\u548C\u6570\u636E\u5206\u6790\u5F15\u64CE\uFF0C\u5B83\u7684\u5E95\u5C42\u662F\u5F00\u6E90\u5E93 Apache Lucene\u3002</p><p>Lucene \u53EF\u4EE5\u8BF4\u662F\u5F53\u4E0B\u6700\u5148\u8FDB\u3001\u9AD8\u6027\u80FD\u3001\u5168\u529F\u80FD\u7684\u641C\u7D22\u5F15\u64CE\u5E93\u2014\u65E0\u8BBA\u662F\u5F00\u6E90\u8FD8\u662F\u79C1\u6709\uFF0C\u4F46\u5B83\u4E5F\u4EC5\u4EC5\u53EA\u662F\u4E00\u4E2A\u5E93\u3002\u4E3A\u4E86\u5145\u5206\u53D1\u6325\u5176\u529F\u80FD\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 Java \u5E76\u5C06 Lucene \u76F4\u63A5\u96C6\u6210\u5230\u5E94\u7528\u7A0B\u5E8F\u4E2D\u3002 \u66F4\u7CDF\u7CD5\u7684\u662F\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u83B7\u5F97\u4FE1\u606F\u68C0\u7D22\u5B66\u4F4D\u624D\u80FD\u4E86\u89E3\u5176\u5DE5\u4F5C\u539F\u7406\uFF0C\u56E0\u4E3A Lucene \u975E\u5E38\u590D\u6742\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3 Lucene \u4F7F\u7528\u65F6\u7684\u7E41\u590D\u6027\uFF0C\u4E8E\u662F Elasticsearch \u4FBF\u5E94\u8FD0\u800C\u751F\u3002\u5B83\u4F7F\u7528 Java \u7F16\u5199\uFF0C\u5185\u90E8\u91C7\u7528 Lucene \u505A\u7D22\u5F15\u4E0E\u641C\u7D22\uFF0C\u4F46\u662F\u5B83\u7684\u76EE\u6807\u662F\u4F7F\u5168\u6587\u68C0\u7D22\u53D8\u5F97\u66F4\u7B80\u5355\uFF0C\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u5BF9 Lucene \u505A\u4E86\u4E00\u5C42\u5C01\u88C5\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u5957\u7B80\u5355\u4E00\u81F4\u7684 RESTful API \u6765\u5E2E\u52A9\u6211\u4EEC\u5B9E\u73B0\u5B58\u50A8\u548C\u68C0\u7D22\u3002</p><p>\u5F53\u7136\uFF0CElasticSearch \u4E0D\u4EC5\u4EC5\u662F Lucene\uFF0C\u5E76\u4E14\u4E5F\u4E0D\u4EC5\u4EC5\u53EA\u662F\u4E00\u4E2A\u5168\u6587\u641C\u7D22\u5F15\u64CE\u3002 \u5B83\u53EF\u4EE5\u88AB\u4E0B\u9762\u8FD9\u6837\u51C6\u786E\u5730\u5F62\u5BB9\uFF1A</p><ul><li>\u4E00\u4E2A\u5206\u5E03\u5F0F\u7684<strong>\u5B9E\u65F6\u6587\u6863\u5B58\u50A8</strong>\uFF0C\u6BCF\u4E2A\u5B57\u6BB5\u53EF\u4EE5\u88AB\u7D22\u5F15\u4E0E\u641C\u7D22\uFF1B</li><li>\u4E00\u4E2A\u5206\u5E03\u5F0F\u5B9E\u65F6\u5206\u6790\u641C\u7D22\u5F15\u64CE\uFF1B</li><li>\u80FD\u80DC\u4EFB\u4E0A\u767E\u4E2A\u670D\u52A1\u8282\u70B9\u7684\u6269\u5C55\uFF0C\u5E76\u652F\u6301 PB \u7EA7\u522B\u7684\u7ED3\u6784\u5316\u6216\u8005\u975E\u7ED3\u6784\u5316\u6570\u636E\u3002</li></ul><p>\u7531\u4E8E Elasticsearch \u7684\u529F\u80FD\u5F3A\u5927\u548C\u4F7F\u7528\u7B80\u5355\uFF0C\u7EF4\u57FA\u767E\u79D1\u3001\u536B\u62A5\u3001Stack Overflow\u3001GitHub \u7B49\u90FD\u7EB7\u7EB7\u91C7\u7528\u5B83\u6765\u505A\u641C\u7D22\u3002\u73B0\u5728\uFF0CElasticsearch \u5DF2\u6210\u4E3A\u5168\u6587\u641C\u7D22\u9886\u57DF\u7684\u4E3B\u6D41\u8F6F\u4EF6\u4E4B\u4E00\u3002</p><h2 id="\u4E00\u3001es\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6BD4\u8F83" tabindex="-1">\u4E00\u3001ES\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6BD4\u8F83 <a class="header-anchor" href="#\u4E00\u3001es\u4E0E\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6BD4\u8F83" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5173\u7CFB\u6570\u636E\u5E93</th><th>Elasticsearch</th></tr></thead><tbody><tr><td>\u6570\u636E\u5E93\uFF08database\uFF09</td><td>\u7D22\u5F15\uFF08Index\uFF09</td></tr><tr><td>\u8868\uFF08table\uFF09</td><td>\u7C7B\u578B\uFF08type\uFF09</td></tr><tr><td>\u884C\uFF08row\uFF09</td><td>\u6587\u6863\uFF08Docments\uFF09</td></tr><tr><td>\u5217\uFF08Columns\uFF09</td><td>\u5B57\u6BB5\uFF08Fields\uFF09</td></tr></tbody></table><h2 id="\u4E8C\u3001\u7269\u7406\u8BBE\u8BA1" tabindex="-1">\u4E8C\u3001\u7269\u7406\u8BBE\u8BA1 <a class="header-anchor" href="#\u4E8C\u3001\u7269\u7406\u8BBE\u8BA1" aria-hidden="true">#</a></h2><p>ElasticSearch \u5728\u540E\u53F0\u628A\u6BCF\u4E2A\u7D22\u5F15\u5212\u5206\u6210\u591A\u4E2A\u5206\u7247\uFF0C\u6BCF\u5206\u5206\u7247\u53EF\u4EE5\u5728\u96C6\u7FA4\u4E2D\u7684\u4E0D\u540C\u670D\u52A1\u5668\u95F4\u8FC1\u79FB\uFF0C\u4E00\u4E2A\u4EBA\u5C31\u662F\u4E00\u4E2A\u96C6\u7FA4\uFF01\u9ED8\u8BA4\u7684\u96C6\u7FA4\u540D\u79F0\u5C31\u662F ElasticSearch \u3002</p><h2 id="\u4E09\u3001\u903B\u8F91\u8BBE\u8BA1" tabindex="-1">\u4E09\u3001\u903B\u8F91\u8BBE\u8BA1 <a class="header-anchor" href="#\u4E09\u3001\u903B\u8F91\u8BBE\u8BA1" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u7D22\u5F15\u7C7B\u578B\u4E2D\uFF0C\u5305\u542B\u591A\u4E2A\u6587\u6863\uFF0C\u6BD4\u5982\u8BF4\u6587\u68631\uFF0C\u6587\u68632\u3002\u5F53\u6211\u4EEC\u7D22\u5F15\u4E00\u7BC7\u6587\u6863\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u6837\u7684\u4E00\u4E2A\u987A\u5E8F\u627E\u5230 \u5B83: <code>\u7D22\u5F15 &gt;&gt; \u7C7B\u578B &gt;&gt; \u6587\u6863ID</code> \uFF0C\u901A\u8FC7\u8FD9\u4E2A\u7EC4\u5408\u6211\u4EEC\u5C31\u80FD\u7D22\u5F15\u5230\u67D0\u4E2A\u5177\u4F53\u7684\u6587\u6863\u3002</p><p><strong>\u6CE8\u610F</strong>\uFF1AID\u4E0D\u5FC5\u662F\u6574 \u6570\uFF0C\u5B9E\u9645\u4E0A\u5B83\u662F\u4E2A\u5B57\u7B26\u4E32\u3002</p><p>Elasticsearch \u662F\u9762\u5411\u6587\u6863\u7684\uFF0C\u90A3\u4E48\u5C31\u610F\u5473\u7740\u7D22\u5F15\u548C\u641C\u7D22\u6570\u636E\u7684\u6700\u5C0F\u5355\u4F4D\u662F\u6587\u6863\uFF0CElasticSearch \u4E2D\uFF0C\u6587\u6863\u6709<strong>\u51E0\u4E2A\u91CD\u8981\u5C5E\u6027</strong>\uFF1A</p><ul><li>\u81EA\u6211\u5305\u542B\uFF0C\u4E00\u7BC7\u6587\u6863\u540C\u65F6\u5305\u542B\u5B57\u6BB5\u548C\u5BF9\u5E94\u7684\u503C\uFF0C\u4E5F\u5C31\u662F\u540C\u65F6\u5305\u542B key\u548Cvalue\uFF01</li><li>\u53EF\u4EE5\u662F\u5C42\u6B21\u578B\u7684\uFF0C\u4E00\u4E2A\u6587\u6863\u4E2D\u5305\u542B\u81EA\u6587\u6863\uFF0C\u590D\u6742\u7684\u903B\u8F91\u5B9E\u4F53\u5C31\u662F\u8FD9\u4E48\u6765\u7684\uFF01\u5C31\u662F\u4E00\u4E2Ajson\u5BF9\u8C61\uFF01fastjson\u8FDB\u884C\u81EA\u52A8\u8F6C\u6362\uFF01</li><li>\u7075\u6D3B\u7684\u7ED3\u6784\uFF0C\u6587\u6863\u4E0D\u4F9D\u8D56\u9884\u5148\u5B9A\u4E49\u7684\u6A21\u5F0F\uFF0C\u6211\u4EEC\u77E5\u9053\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\uFF0C\u8981\u63D0\u524D\u5B9A\u4E49\u5B57\u6BB5\u624D\u80FD\u4F7F\u7528\uFF0C \u5728Elasticsearch \u4E2D\uFF0C\u5BF9\u4E8E\u5B57\u6BB5\u662F\u975E\u5E38\u7075\u6D3B\u7684\uFF0C\u6709\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5FFD\u7565\u8BE5\u5B57\u6BB5\uFF0C\u6216\u8005\u52A8\u6001\u7684\u6DFB\u52A0\u4E00\u4E2A \u65B0\u7684\u5B57\u6BB5\u3002</li></ul><p>\u5C3D\u7BA1\u6211\u4EEC\u53EF\u4EE5\u968F\u610F\u7684\u65B0\u589E\u6216\u8005\u5FFD\u7565\u67D0\u4E2A\u5B57\u6BB5\uFF0C\u4F46\u662F\uFF0C\u6BCF\u4E2A\u5B57\u6BB5\u7684\u7C7B\u578B\u975E\u5E38\u91CD\u8981\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5E74\u9F84\u5B57\u6BB5\u7C7B\u578B\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26 \u4E32\u4E5F\u53EF\u4EE5\u662F\u6574\u5F62\u3002\u56E0\u4E3Aelasticsearch\u4F1A\u4FDD\u5B58\u5B57\u6BB5\u548C\u7C7B\u578B\u4E4B\u95F4\u7684\u6620\u5C04\u53CA\u5176\u4ED6\u7684\u8BBE\u7F6E\u3002\u8FD9\u79CD\u6620\u5C04\u5177\u4F53\u5230\u6BCF\u4E2A\u6620\u5C04\u7684\u6BCF\u79CD\u7C7B\u578B\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u5728elasticsearch\u4E2D\uFF0C\u7C7B\u578B\u6709\u65F6\u5019\u4E5F\u79F0\u4E3A\u6620\u5C04\u7C7B\u578B\u3002</p><h2 id="\u5012\u6392\u7D22\u5F15" tabindex="-1">\u5012\u6392\u7D22\u5F15 <a class="header-anchor" href="#\u5012\u6392\u7D22\u5F15" aria-hidden="true">#</a></h2><p>elasticsearch\u4F7F\u7528\u7684\u662F\u4E00\u79CD\u79F0\u4E3A\u5012\u6392\u7D22\u5F15\u7684\u7ED3\u6784\uFF0C\u91C7\u7528Lucene\u5012\u6392\u7D22\u4F5C\u4E3A\u5E95\u5C42\u3002\u8FD9\u79CD\u7ED3\u6784\u9002\u7528\u4E8E\u5FEB\u901F\u7684\u5168\u6587\u641C\u7D22\uFF0C \u4E00\u4E2A\u7D22\u5F15\u7531\u6587\u6863\u4E2D\u6240\u6709\u4E0D\u91CD\u590D\u7684\u5217\u8868\u6784\u6210\uFF0C\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u8BCD\uFF0C\u90FD\u6709\u4E00\u4E2A\u5305\u542B\u5B83\u7684\u6587\u6863\u5217\u8868\u3002 \u4F8B\u5982\uFF0C\u901A\u8FC7\u535A\u5BA2\u6807\u7B7E\u6765\u641C\u7D22\u535A\u5BA2\u6587\u7AE0\uFF1A</p><table><thead><tr><th>\u6587\u7AE0\uFF08\u539F\u59CB\u6570\u636E\uFF09</th><th></th><th>\u7D22\u5F15\u5217\u8868\uFF08\u5012\u6392\u7D22\u5F15\uFF09</th><th></th></tr></thead><tbody><tr><td>\u6587\u7AE0 ID</td><td>\u6807\u7B7E</td><td>\u6807\u7B7E</td><td>\u6587\u7AE0 ID</td></tr><tr><td>1</td><td>python</td><td>python</td><td>1\uFF0C2\uFF0C3</td></tr><tr><td>2</td><td>python</td><td>linux</td><td>3\uFF0C4</td></tr><tr><td>3</td><td>linux\uFF0Cpython</td><td></td><td></td></tr><tr><td>4</td><td>linux</td><td></td><td></td></tr></tbody></table><p>\u5982\u679C\u8981\u641C\u7D22\u542B\u6709 python \u6807\u7B7E\u7684\u6587\u7AE0\uFF0C\u90A3\u76F8\u5BF9\u4E8E\u67E5\u627E\u6240\u6709\u539F\u59CB\u6570\u636E\u800C\u8A00\uFF0C\u67E5\u627E\u5012\u6392\u7D22\u5F15\u540E\u7684\u6570\u636E\u5C06\u4F1A\u5FEB\u7684\u591A\u3002\u53EA\u9700\u8981\u67E5\u770B\u6807\u7B7E\u8FD9\u4E00\u680F\uFF0C\u7136\u540E\u83B7\u53D6\u76F8\u5173\u7684\u6587\u7AE0ID\u5373\u53EF\u3002\u5B8C\u5168\u8FC7\u6EE4\u6389\u65E0\u5173\u7684\u6240\u6709\u6570\u636E\uFF0C\u63D0\u9AD8\u6548\u7387\uFF01</p><h2 id="elasticsearch\u7684\u7D22\u5F15\u548Clucene\u7684\u7D22\u5F15\u5BF9\u6BD4" tabindex="-1">elasticsearch\u7684\u7D22\u5F15\u548CLucene\u7684\u7D22\u5F15\u5BF9\u6BD4 <a class="header-anchor" href="#elasticsearch\u7684\u7D22\u5F15\u548Clucene\u7684\u7D22\u5F15\u5BF9\u6BD4" aria-hidden="true">#</a></h2><p>\u5728elasticsearch\u4E2D\uFF0C \u7D22\u5F15\uFF08\u5E93\uFF09\u8FD9\u4E2A\u8BCD\u88AB\u9891\u7E41\u4F7F\u7528\uFF0C\u8FD9\u5C31\u662F\u672F\u8BED\u7684\u4F7F\u7528\u3002 \u5728 ElasticSearch \u4E2D\uFF0C\u7D22\u5F15\u88AB\u5206\u4E3A\u591A\u4E2A\u5206\u7247\uFF0C\u6BCF\u4EFD\u5206\u7247\u662F\u4E00\u4E2A Lucene \u7684\u7D22\u5F15\u3002\u6240\u4EE5\u4E00\u4E2A ElasticSearch \u7D22\u5F15\u662F\u7531\u591A\u4E2A Lucene \u7D22\u5F15\u7EC4\u6210 \u7684\u3002\u522B\u95EE\u4E3A\u4EC0\u4E48\uFF0C\u8C01\u8BA9 ElasticSearch \u4F7F\u7528 Lucene \u4F5C\u4E3A\u5E95\u5C42\u5462! \u5982\u65E0\u7279\u6307\uFF0C\u8BF4\u8D77\u7D22\u5F15\u90FD\u662F\u6307 ElasticSearch \u7684\u7D22\u5F15\u3002</p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1>',24),s=[d];function l(h,i,n,o,u,p){return a(),e("div",null,s)}const f=t(r,[["render",l]]);export{E as __pageData,f as default};
