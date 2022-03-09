import{i as e,e as t,r as n,o as s,c as a,n as r,A as l,w as o,b as i,a as p,t as u,F as c,x as y,j as k,k as d}from"./vendor.047b1323.js";import{u as m,b}from"./index.e43aca0f.js";import{m as f}from"./SourceButton.vue_vue&type=script&setup=true&lang.84abffe3.js";function h(e,t){const n=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/i.exec(e);n&&(e=n[1]);const s=n?n[2]:null,a=e.split(/(\.|#)/);return t.links[a[0]]?{text:null!=s?s:e,link:"object"==typeof t.links[a[0]]?{name:t.links[a[0]].name,params:t.links[a[0]].params,query:{scrollTo:a[1]?`${"."===a[1]?"s-":""}${a[2]}`:void 0}}:t.links[a[0]]}:/^https?:\/\//i.exec(e)?{text:null!=s?s:e,link:e}:{text:null!=s?s:e}}function x(e,t,n,s){if(!e)return null;const a=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/gi;let r,l="",o=0;for(;r=a.exec(e);){l+=e.slice(o,r.index);const a=h(r[0],t);if(a.link){let e;"object"==typeof a.link?(a.link.params||(a.link.params={}),a.link.params.source=s.params.source,a.link.params.tag=s.params.tag,e=n.resolve(a.link).href):e=a.link,l+=`[${a.text}](${e})`}else l+=a.text;o=r.index+r[0].length}return l?(l+=e.slice(o),l):e}function v(e){return"string"==typeof e?e:e.join("-")}const g={key:0},w={key:3};var j=e({props:{type:{type:[String,Array],required:!0}},setup(e){const y=e,k=m(),d=t((()=>k.state.docs)),f=t((()=>"function"===y.type[0]?"Function":y.type[0])),h=t((()=>{var e;return(null==(e=d.value)?void 0:e.links[y.type[0]])?d.value.links[y.type[0]]:null}));return(t,y)=>{const k=n("router-link"),d=b;return s(),a(c,null,[r(h)?"object"==typeof r(h)?(s(),a(k,{key:1,to:r(h)},{default:o((()=>[i(l(r(f)),1)])),_:1},8,["to"])):(s(),a("a",{key:2,href:r(h),target:"_blank",rel:"noopener"},[i(l(r(f))+" ",1),p(d,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(s(),a("span",g,l(r(f)),1)),e.type[1]?(s(),a("span",w,l(e.type[1]),1)):u("",!0)],64)}}});const A={class:"docs-type inline-block whitespace-pre-wrap"},_={class:"font-semibold"},q={key:0};var M=e({props:{names:{type:[String,Array,Array],required:!0},nullable:{type:Boolean,required:!1},variable:{type:Boolean,required:!1}},setup:e=>(t,n)=>(s(),a("div",A,[p("span",_,l(e.nullable?"?":"")+l(e.variable?"...":""),1),Array.isArray(e.names)?(s(),a("span",q,[(s(!0),a(c,null,y(e.names,(e=>(s(),a(j,{key:r(v)(e),type:e},null,8,["type"])))),128))])):u("",!0)]))});const T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},L=p("g",{fill:"none"},[p("path",{d:"M5 13l4 4L19 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var $={name:"heroicons-outline-check",render:function(e,t){return s(),a("svg",T,[L])}};const B={class:"grid"},H={class:"overflow-x-auto lg:custom-scroll border dark:border-gray-600 rounded-md mt-2 mb-8"},S={class:"!text-base !text-center !my-0 min-w-max xl:min-w-0"},D={class:"bg-discord-blurple-500 !text-gray-200"},F={class:"!uppercase"},C=p("th",{class:"!p-4 w-96"},"Parameter",-1),O=p("th",{class:"!p-4 w-48"},"Type",-1),P={key:0,class:"!p-4 w-40"},R={key:1,class:"!p-4 w-40"},Y=p("th",{class:"!p-4 w-96"},"Description",-1),z={class:"!pl-2.5 !py-5"},E={class:"!py-5"},G={key:0,class:"!py-5"},I=p("span",{class:"sr-only"},"True",-1),J={key:1,class:"!py-5"},K={key:0};var N=e({props:{parameters:{type:Array,required:!0}},setup(e){const n=e,o=k(),i=d(),b=m(),h=t((()=>b.state.docs)),g=t((()=>n.parameters.some((e=>e.optional)))),w=e=>f(x(e.description,h.value,o,i)),j=e=>e.optional?`<code>${e.default}</code>`:"";return(t,n)=>{const o=$;return s(),a("div",B,[p("div",H,[p("table",S,[p("thead",D,[p("tr",F,[C,O,r(g)?(s(),a("th",P,"Optional")):u("",!0),r(g)?(s(),a("th",R,"Default")):u("",!0),Y])]),p("tbody",null,[(s(!0),a(c,null,y(e.parameters,(e=>(s(),a("tr",{key:e.name},[p("td",z,l(e.name),1),p("td",E,[p("div",null,[(s(!0),a(c,null,y(e.type,(t=>(s(),a(M,{key:r(v)(t),names:t,variable:e.variable,nullable:e.nullable},null,8,["names","variable","nullable"])))),128))])]),r(g)?(s(),a("td",G,[I,e.optional?(s(),a(o,{key:0,class:"h-5 w-5 mx-auto","aria-hidden":"true"})):u("",!0)])):u("",!0),r(g)?(s(),a("td",J,[e.optional&&void 0===e.default?(s(),a("em",K,"none")):(s(),a("span",{key:1,innerHTML:j(e)},null,8,["innerHTML"]))])):u("",!0),p("td",{class:"!pr-2.5 !py-0",innerHTML:w(e)},null,8,["innerHTML"])])))),128))])])])])}}});const Q={class:"break-words-legacy mt-4"},U=i(" See also: "),V={key:0},W={key:2},X={key:1},Z={key:2};var ee=e({props:{see:{type:Array,required:!0}},setup(e){const u=e,k=m(),d=t((()=>k.state.docs)),f=t((()=>{const e=new Array(u.see.length);for(let t=0;t<u.see.length;t++)e[t]=h(u.see[t],d.value);return e}));return(t,u)=>{const k=n("router-link"),d=b;return s(),a("div",Q,[U,e.see.length>1?(s(),a("ul",V,[(s(!0),a(c,null,y(r(f),(e=>(s(),a("li",{key:e.text},["object"==typeof e.link?(s(),a(k,{key:0,to:e.link},{default:o((()=>[i(l(e.text),1)])),_:2},1032,["to"])):"string"==typeof e.link?(s(),a("a",{key:1,href:e.link,target:"_blank",rel:"noopener"},[i(l(e.text)+" ",1),p(d,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(s(),a("span",W,l(e.text),1))])))),128))])):(s(),a("span",X,["object"==typeof r(f)[0].link?(s(),a(k,{key:0,to:r(f)[0].link},{default:o((()=>[i(l(r(f)[0].text),1)])),_:1},8,["to"])):"string"==typeof r(f)[0].link?(s(),a("a",{key:1,href:r(f)[0].link,target:"_blank",rel:"noopener"},[i(l(r(f)[0].text)+" ",1),p(d,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(s(),a("span",Z,l(r(f)[0].text),1))]))])}}});export{N as _,ee as a,M as b,x as c,j as d,h as p,v as t};
