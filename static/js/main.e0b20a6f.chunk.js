(this["webpackJsonpcripto-tracker"]=this["webpackJsonpcripto-tracker"]||[]).push([[0],{74:function(e,t,n){"use strict";n.r(t);var r,c=n(27),i=n.n(c),a=n(17),o=n(14),s=n(48),l=n(0),d=n(6),u=n(5),h=n(41),p=n(42),j=Object(u.b)(r||(r=Object(h.a)(["\n  ","\n  body {\n    background: ",";\n    color: ","\n  }\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"])),p.a,(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text})),b={light:{colors:{primary:{blue_soft:"hsl(215, 51%, 70%)",cyan:"hsl(178, 100%, 50%)"},background:"hsl(0, 0%, 100%)",background_elevation:"whitesmoke",line:"hsl(215, 32%, 27%)",text:"hsl(217, 54%, 11%)"}},dark:{colors:{primary:{blue_soft:"hsl(215, 51%, 70%)",cyan:"hsl(178, 100%, 50%)"},background:"hsl(217, 54%, 11%)",background_elevation:"hsl(216, 50%, 16%)",line:"hsl(215, 32%, 27%)",text:"hsl(0, 0%, 100%)"}}},m=n(15),f=n.n(m),g=n(24),x="https://api.coinpaprika.com/v1",v=function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/coins"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/coins/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/tickers/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(g.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/coins/").concat(t,"/ohlcv/historical?start=2021-01-01&limit=20"));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(2);function I(e){var t=e.id,n=e.url,r=e.name,c=e.rank;return Object(k.jsxs)(S,{children:[Object(k.jsx)(C,{children:Object(k.jsx)("img",{src:n})}),Object(k.jsxs)(z,{children:[Object(k.jsx)("h3",{children:r}),Object(k.jsxs)("span",{children:["#",c]})]}),Object(k.jsx)(_,{to:"/".concat(t),children:"more"})]})}var S=u.d.div({position:"relative",width:"320px",display:"flex",flexDirection:"column",alignItems:"center",padding:"1em",marginBottom:"1em"},(function(e){return{background:e.theme.colors.background_elevation}})),C=u.d.div({"> img":{width:"80px"},marginBottom:"1em"}),z=u.d.div({display:"flex",flexDirection:"column",alignItems:"center",h3:{fontSize:"1.7rem",fontWeight:"300"},span:{margin:".5em 0"}}),_=Object(u.d)(a.b)((function(e){var t=e.theme;return{position:"absolute",fontSize:"0.7rem",fontWeight:"700",bottom:"1em",right:"1em",background:t.colors.primary.cyan,color:t.colors.background,padding:".5em .8em",borderRadius:"5px",textTransform:"uppercase"}})),E=function(e){return"".concat("https://cryptoicon-api.vercel.app/api/icon","/").concat(e.toLowerCase())};function D(e){var t=e.coins;return Object(k.jsx)(P,{children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.name,r=e.symbol,c=e.rank;return Object(k.jsx)(I,{id:t,url:E(r),name:n,rank:c},t)}))})}var P=u.d.div({margin:"0 auto",marginBottom:"1em",display:"flex",justifyContent:"center",flexWrap:"wrap","> *":{margin:"0 .5em",marginTop:"1em"}}),R=n.p+"static/media/bg-desktop-dark.73e47dbb.jpg";function B(){var e=Object(o.useQuery)("allCoins",v),t=(e.isLoading,e.data);e.error;return Object(k.jsxs)(M,{children:[Object(k.jsxs)(L,{children:[Object(k.jsx)("img",{src:R}),Object(k.jsx)("h1",{children:"Crypto Traker"})]}),Object(k.jsx)(D,{coins:null===t||void 0===t?void 0:t.slice(0,12)})]})}var L=u.d.header({position:"relative",height:"280px",textAlign:"center",marginBottom:"2em",img:{width:"100%",height:"100%",objectFit:"fill"},h1:{position:"absolute",fontSize:"4.5rem",top:"50%",left:"10%",color:"white"}}),M=u.d.div({}),q=n(47),Q=n.n(q),T={chart:{type:"candlestick",height:450},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"category",labels:{formatter:function(e){var t=new Date(e),n=t.getMonth()+1,r=t.getDate();return"".concat(n,"/").concat(r)}}},yaxis:{tooltip:{enabled:!0}},plotOptions:{candlestick:{colors:{upward:"#DF7D46",downward:"#3C90EB"}}},tooltip:{theme:"dark"}};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var F=l.createElement("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"});function A(e,t){var n=e.title,r=e.titleId,c=W(e,["title","titleId"]);return l.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",width:"current",height:"current",fill:"currentColor",ref:t,"aria-labelledby":r},c),n?l.createElement("title",{id:r},n):null,F)}var H=l.forwardRef(A);n.p;function J(){var e=Object(d.g)().coinId,t=Object(d.f)(),n=Object(o.useQuery)(["INFO",e],(function(){return O(e)})),r=n.isLoading,c=n.data,i=(n.error,Object(o.useQuery)(["OHLC",e],(function(){return w(e)}))),a=i.isLoading,s=i.data,l=(i.error,Object(o.useQuery)(["PRICE",e],(function(){return y(e)}))),u=l.isLoading,h=l.data;l.error;if(r||a||u)return Object(k.jsx)("span",{children:"IsLoading..."});var p=null===s||void 0===s?void 0:s.map((function(e){var t=e.open,n=e.high,r=e.low,c=e.close,i=e.time_close;return{x:new Date(i),y:[t,n,r,c].map((function(e){return e.toFixed(2)}))}}));return console.log(h),Object(k.jsxs)(N,{children:[Object(k.jsxs)(V,{children:[Object(k.jsx)(G,{onClick:function(){return t.push("/")},children:Object(k.jsx)(H,{width:"1em",height:"1em"})}),Object(k.jsx)("h1",{children:null===c||void 0===c?void 0:c.name}),Object(k.jsx)("p",{children:null===c||void 0===c?void 0:c.description})]}),Object(k.jsxs)(Y,{children:[Object(k.jsx)(Z,{to:"/".concat(e,"/chart"),children:"Chart"}),Object(k.jsx)(Z,{to:"/".concat(e,"/price"),children:"Price"})]}),Object(k.jsx)(X,{children:Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{path:"/".concat(e,"/chart"),children:Object(k.jsx)(K,{children:Object(k.jsx)(Q.a,{series:[{data:p}],type:"candlestick",height:350,options:T})})}),Object(k.jsx)(d.a,{path:"/".concat(e,"/price"),children:Object(k.jsxs)($,{children:[Object(k.jsxs)(ee,{children:[Object(k.jsx)("strong",{children:"1\uc2dc\uac04 \ubcc0\ub3d9\ub960"}),Object(k.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.percent_change_1h})]}),Object(k.jsxs)(ee,{children:[Object(k.jsx)("strong",{children:"6\uc2dc\uac04 \ubcc0\ub3d9\ub960"}),Object(k.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.percent_change_6h})]}),Object(k.jsxs)(ee,{children:[Object(k.jsx)("strong",{children:"12\uc2dc\uac04 \ubcc0\ub3d9\ub960"}),Object(k.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.percent_change_12h})]}),Object(k.jsxs)(ee,{children:[Object(k.jsx)("strong",{children:"\ud558\ub8e8 \ubcc0\ub3d9\ub960"}),Object(k.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.percent_change_24h})]}),Object(k.jsxs)(ee,{children:[Object(k.jsx)("strong",{children:"\uc77c\uc8fc\uc77c \ubcc0\ub3d9\ub960"}),Object(k.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.percent_change_7d})]}),Object(k.jsxs)(ee,{children:[Object(k.jsx)("strong",{children:"\ud55c\ub2ec \ubcc0\ub3d9\ub960"}),Object(k.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.percent_change_30d})]})]})})]})})]})}var N=u.d.div({}),V=u.d.header({position:"relative",textAlign:"center",padding:"1em",h1:{fontSize:"5rem",fontWeight:"400",marginBottom:".1em"},p:{fontSize:"1.2rem",width:"50%",margin:"0 auto",lineHeight:"1.2em",letterSpacing:"1px"}},(function(e){return{background:e.theme.colors.background_elevation}})),G=u.d.a({fontSize:"2rem",marginBottom:"1em",cursor:"pointer",":hover":{color:"orange"}}),X=u.d.main({margin:"0 auto",width:"80%",marginTop:"2em"}),K=u.d.div((function(e){e.theme;return{background:"white",padding:"1em"}})),Y=u.d.div({display:"flex",justifyContent:"center",alignItems:"center",marginTop:"1em","> *:first-of-type":{marginRight:"2em"}}),Z=Object(u.d)(a.b)((function(e){var t=e.theme;return{padding:".5em .8em",border:"1px solid ".concat(t.colors.primary.cyan),borderRadius:"5px"}})),$=u.d.ul({display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:"3em"}),ee=u.d.li({display:"flex",flexDirection:"column",alignItems:"center",strong:{marginBottom:"1em",fontSize:"1.2rem"},span:{}});function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var re=l.createElement("path",{fill:"blue",fillRule:"evenodd",d:"M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"});function ce(e,t){var n=e.title,r=e.titleId,c=ne(e,["title","titleId"]);return l.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:26,height:26,ref:t,"aria-labelledby":r},c),n?l.createElement("title",{id:r},n):null,re)}var ie=l.forwardRef(ce);n.p;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var se=l.createElement("path",{fill:"red",fillRule:"evenodd",d:"M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"});function le(e,t){var n=e.title,r=e.titleId,c=oe(e,["title","titleId"]);return l.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",width:26,height:26,ref:t,"aria-labelledby":r},c),n?l.createElement("title",{id:r},n):null,se)}var de=l.forwardRef(le);n.p;function ue(){var e=Object(l.useState)("dark"),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(k.jsx)(he,{children:Object(k.jsxs)(u.a,{theme:b[n],children:[Object(k.jsxs)(pe,{state:n,onClick:function(){return r((function(e){return"dark"===e?"light":"dark"}))},children:[Object(k.jsx)("span",{}),Object(k.jsx)("i",{children:Object(k.jsx)(ie,{})}),Object(k.jsx)("i",{children:Object(k.jsx)(de,{})})]}),Object(k.jsx)(j,{}),Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{exact:!0,path:"/",component:B}),Object(k.jsx)(d.a,{path:"/:coinId",component:J})]})]})})}var he=u.d.div({position:"relative",maxWidth:"1440px",margin:"0 auto"}),pe=u.d.div({position:"absolute",right:"3%",top:"3%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 .3em",width:"75px",height:"40px",borderRadius:"100px",cursor:"pointer",zIndex:"100",i:{display:"flex",justifyContent:"center",alignItems:"center"}},(function(e){var t=e.theme,n=e.state;return{background:t.colors.text,span:{position:"absolute",top:"9%",transform:"translateX(".concat("dark"===n?"0em":"2.7em",")"),width:"32px",height:"32px",borderRadius:"50%",background:t.colors.background,zIndex:"200",cursor:"pointer",transition:"all 300ms ease"}}})),je=new o.QueryClient;i.a.render(Object(k.jsx)(a.a,{basename:"/crypto-tracker",children:Object(k.jsx)(o.QueryClientProvider,{client:je,children:Object(k.jsx)(ue,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.e0b20a6f.chunk.js.map