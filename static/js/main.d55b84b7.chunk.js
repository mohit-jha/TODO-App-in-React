(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(5),r=n.n(c),o=(n(12),n(6)),u=n(3);function i(e){return l.a.createElement("div",{className:"todo_style"},l.a.createElement("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSel(e.id)}}),l.a.createElement("li",null," ",e.text," "))}function m(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),m=Object(u.a)(r,2),s=m[0],d=m[1],f=function(e){console.log("Deleted"),c((function(t){return t.filter((function(t,n){return console.log(n!==e),n!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main_div"},l.a.createElement("div",{className:"center_div"},l.a.createElement("h1",null,"Todo List"),l.a.createElement("br",null),l.a.createElement("input",{value:s,name:"add",type:"text",placeholder:"Add A Items ",autoComplete:"off",onChange:function(e){d(e.target.value)}}),l.a.createElement("button",{type:"submit",onClick:function(e){c((function(e){return[].concat(Object(o.a)(e),[s])})),d(" ")}},"+"),l.a.createElement("ol",null,n.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{text:e,id:t,key:t,onSel:f}))}))))))}r.a.render(l.a.createElement(m,null),document.getElementById("todo"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d55b84b7.chunk.js.map