(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4,5],{308:function(t,e,o){"use strict";function n(source,t){if(null==source)return{};var e,i,o=function(source,t){if(null==source)return{};var e,i,o={},n=Object.keys(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||(o[e]=source[e]);return o}(source,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(source);for(i=0;i<n.length;i++)e=n[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(o[e]=source[e])}return o}o.d(e,"a",(function(){return n}))},309:function(t,e,o){var content=o(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(90).default)("0cd39ecc",content,!0,{sourceMap:!1})},310:function(t,e,o){"use strict";var n=o(2),r=o(68).findIndex,c=o(116),d="findIndex",l=!0;d in[]&&Array(1)[d]((function(){l=!1})),n({target:"Array",proto:!0,forced:l},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},311:function(t,e,o){"use strict";o(309)},312:function(t,e,o){var n=o(89)((function(i){return i[1]}));n.push([t.i,".post[data-v-21b71c04]{background-color:var(--white);border:1px solid var(--chinese-white);border-radius:5px;margin-top:20px;overflow:hidden;position:relative;width:100%;z-index:20}.post a img[data-v-21b71c04]{cursor:pointer;height:100%;max-height:500px;max-width:700px;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top;width:100%}.post[data-v-21b71c04]:hover{border-left:1px solid var(--dark-charcoal)}.edit-content[data-v-21b71c04]{border-bottom:5px solid var(--white);cursor:pointer;display:table-cell;float:right;padding:10px;position:relative;text-align:center;width:15%}.edit-content a[data-v-21b71c04]{color:var(--chinese-silver)}.edit-content a[data-v-21b71c04]:hover{color:var(--dark-charcoal)}.post-content[data-v-21b71c04]{padding:50px 100px}.button-container__row[data-v-21b71c04]{display:table-row}.button-container[data-v-21b71c04]{display:table}.post-content__desc[data-v-21b71c04]{max-height:80px;overflow:hidden}.post-content__desc.visible[data-v-21b71c04]{max-height:none}.show-more[data-v-21b71c04]{color:var(--chinese-silver);cursor:pointer;display:block}.show-more[data-v-21b71c04]:hover{-webkit-text-decoration:underline;text-decoration:underline}.visible[data-v-21b71c04]{height:auto}.container__content[data-v-21b71c04]{display:table-cell;padding:10px;vertical-align:middle}.like-button[data-v-21b71c04]{background:none;border:none;color:var(--chinese-silver)}.like-button[data-v-21b71c04]:hover{cursor:pointer;transition:.1s;-webkit-transition:.2s;-moz-transition:.2s;-ms-transition:.2s;-o-transition:.2s}.like-btn__clicked[data-v-21b71c04],.like-button[data-v-21b71c04]:hover{color:var(--jasper)}.image-popup[data-v-21b71c04]{align-items:center;background:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;opacity:0;overflow-y:scroll;position:fixed;top:0;visibility:hidden;width:100%;z-index:1000}.image-popup[data-v-21b71c04],.image-popup.active[data-v-21b71c04]{transition:visibility 0s,opacity .5s}.image-popup.active[data-v-21b71c04]{opacity:1;visibility:visible}.image-popup-overlay[data-v-21b71c04]{height:100%;left:0;position:fixed;top:0;width:100%}.image-popup-content[data-v-21b71c04]{max-height:80%;max-width:80%;position:absolute}.image-popup-content img[data-v-21b71c04]{height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center;width:100%}@media screen and (max-width:700px){.post-content[data-v-21b71c04]{padding:50px}}@media screen and (max-width:500px){.post-content[data-v-21b71c04]{padding:50px 20px 20px}}",""]),n.locals={},t.exports=n},314:function(t,e,o){"use strict";o.r(e);var n=o(308),r=o(8),c=(o(48),o(213),o(14),o(310),o(212),["id"]),d={data:function(){return{isVisible:!1,isImagePopupActive:!1,wordLimit:50}},props:{detail:{type:Object,default:""}},computed:{descWords:function(){return this.detail.desc.split(" ").length},showMore:function(){return this.descWords>this.wordLimit},likeCount:function(){return 1===this.detail.dataLikes.length?"null"===this.detail.dataLikes[0]?0:1:this.detail.dataLikes.length},likeIcon:function(){var t=this;return this.detail.dataLikes.find((function(e){return e===t.userEmail}))?"like-btn__clicked":""},userEmail:function(){return this.$store.getters.userEmail}},methods:{toggleMore:function(){this.isVisible=!this.isVisible},showImagePopup:function(){(this.isImagePopupActive=!this.isImagePopupActive,!0===this.isImagePopupActive)?document.querySelector("body").style.overflowY="hidden":document.querySelector("body").style.overflowY="auto"},likeClick:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o,r,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.getters.isAuthenticated){e.next=3;break}return t.$router.push("/user/login"),e.abrupt("return");case 3:return o=t.userEmail,1===(r=JSON.parse(JSON.stringify(t.detail))).dataLikes.length&&"null"===r.dataLikes[0]?r.dataLikes[0]=o:r.dataLikes.find((function(t){return t===o}))?1===r.dataLikes.length?r.dataLikes[0]="null":(d=r.dataLikes.findIndex((function(t){return t===o})),r.dataLikes.splice(d,1)):r.dataLikes.push(o),r.id,l=Object(n.a)(r,c),e.next=9,t.$store.dispatch("likeUpdate",{portfolioId:t.detail.id,newDataPortfolio:l});case 9:return e.next=11,t.$store.dispatch("getPortfolioList");case 11:case"end":return e.stop()}}),e)})))()}}},l=(o(311),o(47)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"post"},[e("a",{on:{click:t.showImagePopup}},[e("img",{attrs:{src:t.detail.image,alt:"Nice panorama! Awesome."}})]),t._v(" "),e("nuxt-link",{staticClass:"edit-content",attrs:{tag:"a",to:"/portfolio/".concat(t.detail.id,"/edit")}},[e("a",[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-pen-to-square"}})],1)]),t._v(" "),e("div",{staticClass:"post-content"},[e("div",[e("p",[e("nuxt-link",{attrs:{tag:"a",to:"/".concat(t.detail.userName)}},[t._v(t._s(t.detail.userName))]),t._v(":")],1),t._v(" "),e("blockquote",[e("h1",[e("a",[t._v(t._s(t.detail.title))])]),t._v(" "),e("div",[e("div",{staticClass:"post-content__desc",class:{visible:t.isVisible}},[e("p",{staticStyle:{margin:"0"}},[e("span",[t._v(t._s(t.detail.desc))])])]),t._v(" "),t.showMore?e("span",{staticClass:"show-more",on:{click:t.toggleMore}},[t._v(t._s(t.isVisible?"Show Less":"Show More..."))]):t._e()])]),t._v(" "),e("div",{staticClass:"button-container"},[e("div",{staticClass:"button-container__row"},[e("div",{staticClass:"container__content"},[e("button",{staticClass:"like-button",on:{click:t.likeClick}},[e("font-awesome-icon",{class:t.likeIcon,attrs:{icon:"fa-solid fa-heart"}})],1)]),t._v(" "),e("div",{staticClass:"container__content"},[e("p",[t._v(t._s(t.likeCount)+" people like this")])])])])])])],1),t._v(" "),e("div",{staticClass:"image-popup",class:{active:t.isImagePopupActive}},[e("div",{staticClass:"image-popup-overlay",on:{click:t.showImagePopup}}),t._v(" "),e("div",{staticClass:"image-popup-content"},[e("img",{attrs:{src:t.detail.image,alt:"Nice panorama! Awesome."}})])])])}),[],!1,null,"21b71c04",null);e.default=component.exports},315:function(t,e,o){"use strict";o.r(e);o(49);var n={name:"IndexPage",props:{portfolioData:{type:Array,default:""},isUser:{type:Boolean,default:!1}}},r=o(47),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.portfolioData.length?e("div",t._l(t.portfolioData.slice().reverse(),(function(t){return e("HomepagePostItem",{key:t.id,attrs:{detail:t}})})),1):e("uiWaitingList")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomepagePostItem:o(314).default})},318:function(t,e,o){var content=o(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(90).default)("57435694",content,!0,{sourceMap:!1})},320:function(t,e,o){"use strict";o(318)},321:function(t,e,o){var n=o(89)((function(i){return i[1]}));n.push([t.i,".profile-container[data-v-00ded7ac]{position:fixed}.profile-content[data-v-00ded7ac]{background-color:var(--white);border:1px solid var(--chinese-white);border-radius:5px;left:-320px;position:absolute;width:300px}.profile-content__header[data-v-00ded7ac]{height:200px;width:100%}.profile-content__image[data-v-00ded7ac]{left:100px;position:absolute;top:150px}.profile-content__image img[data-v-00ded7ac]{border:5px solid var(--white);border-radius:100%;display:block;height:100px;width:100px}.profile-content__text[data-v-00ded7ac]{padding:50px 20px}.profile-content__text h3[data-v-00ded7ac]{color:var(--dark-charcoal);font-weight:var(--fwReguler)}.profile-content__text blockquote p[data-v-00ded7ac]{cursor:pointer}.profile-content__table[data-v-00ded7ac]{display:table;text-align:center;width:100%}.content-table__row[data-v-00ded7ac]{display:table-row}.table-row__item[data-v-00ded7ac]{border-bottom:5px solid var(--white);cursor:pointer;display:table-cell;padding:10px;position:relative;width:33%}.table-row__item[data-v-00ded7ac]:first-child{border-radius:0 0 0 5px}.table-row__item[data-v-00ded7ac]:nth-child(3){border-radius:0 0 5px 0}.table-row__item[data-v-00ded7ac]:hover{border-bottom:5px solid var(--dark-charcoal)}@media screen and (max-width:990px){.profile-container[data-v-00ded7ac]{position:static}.profile-content[data-v-00ded7ac]{border-radius:0 0 5px 5px;left:0;position:static;width:100%}.profile-content__text[data-v-00ded7ac]{padding:50px}.profile-content .profile-content__text h3[data-v-00ded7ac]{text-align:left}}@media screen and (max-width:700px){.profile-container[data-v-00ded7ac]{position:static}.profile-content__text[data-v-00ded7ac]{padding:50px}.profile-content .profile-content__image[data-v-00ded7ac]{left:50px;top:150px}}@media screen and (max-width:500px){.profile-content__text[data-v-00ded7ac]{padding:50px 20px 20px}}",""]),n.locals={},t.exports=n},329:function(t,e,o){var content=o(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(90).default)("24f66cb2",content,!0,{sourceMap:!1})},334:function(t,e,o){"use strict";o.r(e);o(320);var n=o(47),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile-container"},[e("div",{staticClass:"profile-content"},[e("div",{staticClass:"profile-content__header",staticStyle:{background:"url(https://31.media.tumblr.com/d83b99e22981d5e58e2bd74ed2494087/tumblr_n4ef3ynCZP1st5lhmo1_1280.jpg) no-repeat center center","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover"}}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"profile-content__text"},[e("h3",[t._v(t._s(t.$route.params.username))]),t._v(" "),e("p",[t._v("UI/UX Designers")]),t._v(" "),e("p",[t._v("\n                A designer, developer, and\n                photographer.\n            ")])]),t._v(" "),e("div",{staticClass:"profile-content__table"},[e("div",{staticClass:"content-table__row"},[e("a",{staticClass:"table-row__item",attrs:{href:"https://dribbble.com/mkchin"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-d"}})],1),t._v(" "),e("a",{staticClass:"table-row__item",attrs:{href:"https://www.instagram.com/masrbb"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-hashtag"}})],1),t._v(" "),e("a",{staticClass:"table-row__item",attrs:{href:"https://www.linkedin.com/in/albani-robbyan-s-y-6367a5147"}},[e("font-awesome-icon",{attrs:{icon:"fa-brands fa-linkedin-in"}})],1)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"profile-content__image"},[t("a",[t("img",{attrs:{src:"https://assets.tumblr.com/images/default_avatar/sphere_open_128.png"}})])])}],!1,null,"00ded7ac",null);e.default=component.exports},349:function(t,e,o){"use strict";o(329)},350:function(t,e,o){var n=o(89)((function(i){return i[1]}));n.push([t.i,".container{margin:0 auto;max-width:700px;position:relative;width:100%}@media screen and (max-width:990px){.container{padding:0 20px 20px}}@media screen and (max-width:500px){.container{padding:10px}}",""]),n.locals={},t.exports=n},366:function(t,e,o){"use strict";o.r(e);o(37),o(14);var n={computed:{portfolioData:function(){var t=this;this.$store.getters.userId;return this.$store.getters.portfolioData.filter((function(e){return e.userName==t.$route.params.username}))}}},r=(o(349),o(47)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("UiAuthorProfile"),t._v(" "),e("HomepagePostList",{attrs:{isUser:!0,portfolioData:t.portfolioData}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiAuthorProfile:o(334).default,HomepagePostList:o(315).default})}}]);