(()=>{"use strict";var e={165:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(l.Switch,null,n.default.createElement(l.Route,{path:"/",render:function(e){return n.default.createElement(u.default,e)}}))};var n=a(r(297)),l=r(374),u=a(r(689));function a(e){return e&&e.__esModule?e:{default:e}}},689:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return l.default.createElement("div",null,l.default.createElement("h1",null," Home Page "),l.default.createElement("p",null," Created by Vinayak Sonar"),l.default.createElement("p",null,"Good to go..."),l.default.createElement("button",{onClick:function(){console.log(" u clicked ")}}," Click me"))};var n,l=(n=r(297))&&n.__esModule?n:{default:n}},294:e=>{e.exports=require("babel-polyfill")},473:e=>{e.exports=require("body-parser")},127:e=>{e.exports=require("express")},297:e=>{e.exports=require("react")},747:e=>{e.exports=require("react-dom/server")},374:e=>{e.exports=require("react-router")}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}(()=>{r(294);var e=o(r(127)),t=o(r(297)),n=o(r(747)),l=r(374),u=o(r(473)),a=o(r(165));function o(e){return e&&e.__esModule?e:{default:e}}var d=(0,e.default)(),i=process.env.PORT||3e3;d.use(u.default.json()),d.use(e.default.static("build/public")),d.get("*",(function(e,r){var u='\n        <html>\n            <head></head>\n            <body>\n                <div id = "root"> '+n.default.renderToString(t.default.createElement(l.StaticRouter,{location:e.url},t.default.createElement(a.default,null)))+' </div>\n                <script src = "client_bundle.js"><\/script>\n            </body>            \n        </html>\n    ';r.send(u)})),d.listen(i,(function(){console.log("App is running on "+i)}))})()})();