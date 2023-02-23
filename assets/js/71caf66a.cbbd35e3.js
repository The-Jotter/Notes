"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={title:"Submitting Notes",sidebar_position:3},a="Submitting Notes",u={unversionedId:"submitting",id:"submitting",title:"Submitting Notes",description:"1. git push it",source:"@site/docs/meta/submitting.md",sourceDirName:".",slug:"/submitting",permalink:"/Notes/meta/submitting",draft:!1,editUrl:"https://github.com/The-Jotter/Notes/tree/main/docs/meta/submitting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Submitting Notes",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Writing Notes",permalink:"/Notes/meta/writing-notes"}},s={},l=[{value:"1. <code>git push</code> it",id:"1-git-push-it",level:2},{value:"2. Pull/Merge Request",id:"2-pullmerge-request",level:2},{value:"3. The Review Process",id:"3-the-review-process",level:2}],c={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"submitting-notes"},"Submitting Notes"),(0,i.kt)("h2",{id:"1-git-push-it"},"1. ",(0,i.kt)("inlineCode",{parentName:"h2"},"git push")," it"),(0,i.kt)("p",null,"To synchronise your changes with the online repo, execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"git push")," command, either through the version control UI in your IDE, or using the command lone."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you are on the correct branch!\nPushing to ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," is not allowed, and ",(0,i.kt)("em",{parentName:"p"},"should")," throw an error ","\u2014"," you must push to your own branch first!")),(0,i.kt)("h2",{id:"2-pullmerge-request"},"2. Pull/Merge Request"),(0,i.kt)("p",null,"Once you've pushed your changes, visit the GitHub URL for your repository, and file a Pull Request (into --\x3e ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),")."),(0,i.kt)("h2",{id:"3-the-review-process"},"3. The Review Process"),(0,i.kt)("p",null,"Get someone to review your notes, then if they accept the changes it will be automagically updated on the website (after like 3 mins)."))}m.isMDXComponent=!0}}]);