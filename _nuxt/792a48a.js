(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{378:function(t,e,r){var content=r(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("51c16ab2",content,!0,{sourceMap:!1})},394:function(t,e,r){"use strict";r(378)},395:function(t,e,r){(e=r(10)(!1)).push([t.i,".article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}",""]),t.exports=e},439:function(t,e,r){"use strict";r.r(e);r(70);var n=r(14),l={layout:"home",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("jenkins/articles",n.slug).only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 3:return l=e.sent,e.next=6,r("jenkins/tags",n.slug).only(["name","description","img","slug"]).sortBy("createdAt","asc").fetch();case 6:return c=e.sent,e.abrupt("return",{articles:l,tags:c});case 8:case"end":return e.stop()}}),e)})))()}},c=(r(394),r(46)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-8"},[r("h1",{staticClass:"font-bold text-4xl"},[t._v("Jenkins Tutorial")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap"},t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"},[r("NuxtLink",{staticClass:"flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col",attrs:{to:{name:"jenkins-slug",params:{slug:article.slug}}}},[article.img?r("img",{staticClass:"h-48 xxlmin:w-1/2 xxlmax:w-full object-cover",attrs:{src:article.img}}):t._e(),t._v(" "),r("div",{staticClass:"p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"},[r("h2",{staticClass:"font-bold"},[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v("by "+t._s(article.author.name))]),t._v(" "),r("p",{staticClass:"font-bold text-gray-600 text-sm"},[t._v("\n            "+t._s(article.description)+"\n          ")])])])],1)})),0),t._v(" "),r("h3",{staticClass:"mb-4 font-bold text-2xl uppercase text-center"},[t._v("Topics")]),t._v(" "),r("ul",{staticClass:"flex flex-wrap mb-4 text-center"},t._l(t.tags,(function(e){return r("li",{key:e.slug,staticClass:"xs:w-full md:w-1/3 lg:flex-1 px-2 text-center"},[r("NuxtLink",{attrs:{to:"/jenkins/tag/"+e.slug}},[r("p",{staticClass:"font-bold text-gray-600 uppercase tracking-wider font-medium text-ss"},[t._v("\n          "+t._s(e.name)+"\n        ")])])],1)})),0),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"flex justify-center border-gray-500 border-t-2"},[e("p",{staticClass:"mt-4"},[this._v("\n      Created by\n      "),e("a",{staticClass:"font-bold hover:underline",attrs:{href:"https://twitter.com/debs_obrien"}},[this._v("Abhinav Kumar")]),this._v("\n      at ISCRU.\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);