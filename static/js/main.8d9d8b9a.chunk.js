(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(2),r=a.n(i),c=(a(13),a(3)),o=a.n(c),u=(a(14),a(4)),s=a(5),d=a(7),h=a(6),m=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleClear=function(){n.setState({inputStr:"0"})},n.handleClick=function(e){"0"===n.state.inputStr?n.setState({inputStr:e.target.value}):n.setState({inputStr:n.state.inputStr+e.target.value})},n.handleZero=function(){"0"!==n.state.inputStr&&n.setState({inputStr:n.state.inputStr+"0"})},n.state={inputStr:"0",result:0},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Calculator"),l.a.createElement("p",null,"Buttons are grouped as numbers or operators. You can navigate to a button with the keyboard and press Enter to activate. The equals button will give you the result of your current calculation."),l.a.createElement("h3",null,"Numbers"),l.a.createElement("div",{id:"numbers"},l.a.createElement("button",{value:"1",onClick:this.handleClick,id:"one"},"1"),l.a.createElement("button",{value:"2",onClick:this.handleClick,id:"two"},"2"),l.a.createElement("button",{value:"3",onClick:this.handleClick,id:"three"},"3"),l.a.createElement("button",{value:"4",onClick:this.handleClick,id:"four"},"4"),l.a.createElement("button",{value:"5",onClick:this.handleClick,id:"five"},"5"),l.a.createElement("button",{value:"6",onClick:this.handleClick,id:"six"},"6"),l.a.createElement("button",{value:"7",onClick:this.handleClick,id:"seven"},"7"),l.a.createElement("button",{value:"8",onClick:this.handleClick,id:"eight"},"8"),l.a.createElement("button",{value:"9",onClick:this.handleClick,id:"nine"},"9"),l.a.createElement("button",{onClick:this.handleZero,id:"zero"},"0")),l.a.createElement("h3",null,"Operators"),l.a.createElement("div",{id:"operators"},l.a.createElement("button",{value:"+",onClick:this.handleClick,id:"add"},"plus (+)"),l.a.createElement("button",{value:"-",onClick:this.handleClick,id:"subtract"},"minus (-)"),l.a.createElement("button",{value:"*",onClick:this.handleClick,id:"multiply"},"times (*)"),l.a.createElement("button",{value:"/",onClick:this.handleClick,id:"divide"},"divided by (/)"),l.a.createElement("button",{id:"decimal"},"Decimal point (.)"),l.a.createElement("button",{id:"equals"},"equals (=)"),l.a.createElement("button",{onClick:this.handleClear,id:"clear"},"Clear!")),l.a.createElement("h3",null,"Current Display"),l.a.createElement("div",{id:"display"},"Display: ",this.state.inputStr))}}]),a}(l.a.Component),p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"})),l.a.createElement("h1",null,"Edgar's React Calculator"),l.a.createElement("div",null,l.a.createElement("p",null,"This is Edgar's simple and accessible calculator."),l.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8d9d8b9a.chunk.js.map