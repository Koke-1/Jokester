(this.webpackJsonpjokes=this.webpackJsonpjokes||[]).push([[0],{14:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(1),c=s(6),a=s.n(c),o=s(4),u=s.n(o),i=s(7),j=s(2);s(5);function l(e){var t=Object(r.useState)(!0),s=Object(j.a)(t,2),c=s[0],a=s[1];return Object(n.jsxs)("section",{className:"joke",children:[Object(n.jsx)("h1",{className:"setup",children:e.setup}),c?Object(n.jsx)("h3",{className:"delivery",onMouseEnter:function(){a(!1)},children:"Hover over me "}):Object(n.jsx)("h3",{className:"delivery",children:e.delivery})]})}function p(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),s=t[0],c=t[1];Object(r.useEffect)((function(){a()}),[]);var a=function(){var e=Object(i.a)(u.a.mark((function e(){var t,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=twopart&amount=2");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,console.log(s.jokes),c(s.jokes);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("form",{className:"search-form",children:Object(n.jsx)("button",{type:"submit",className:"search-button",children:"More Jokes"})}),s.map((function(e){return Object(n.jsx)(l,{setup:e.setup,delivery:e.delivery},e.setup)}))]})}a.a.render(Object(n.jsx)(p,{}),document.querySelector("#root"))},5:function(e,t,s){}},[[14,1,2]]]);
//# sourceMappingURL=main.e9f0cd22.chunk.js.map