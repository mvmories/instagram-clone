(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[3],{226:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(o){var s=Object.getOwnPropertyDescriptor(o,t);return s.get?s.get.call(n):s.value}})(e,t,n||e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=n(0),f=n(227),d=f.canvasStyle,m=f.mirrorProps,h=n(228).omit;function b(e,t){if("letters"!==t&&"words"!==t)throw new Error("Unsupported options basedOn: ".concat(t));if(e.nodeType===Node.TEXT_NODE){var n,o=document.createDocumentFragment();switch(t){case"words":n=e.textContent.split(/\b|(?=\W)/);break;case"letters":n=Array.from(e.textContent)}n.forEach((function(e){o.appendChild(function(e){var t=document.createElement("span");return t.className="LinesEllipsis-unit",t.textContent=e,t}(e))})),e.parentNode.replaceChild(o,e)}else if(e.nodeType===Node.ELEMENT_NODE)for(var s=[].slice.call(e.childNodes),i=s.length,r=0;r<i;r++)b(s[r],t)}function j(e){e.parentNode.replaceChild(document.createTextNode(e.textContent),e)}function v(e,t){if(t.contains(e)&&e!==t){for(;e.nextElementSibling;)e.parentNode.removeChild(e.nextElementSibling);v(e.parentNode,t)}}function y(e){for(var t=e;t=t.parentNode;)if(/p|div|main|section|h\d|ul|ol|li/.test(t.tagName.toLowerCase()))return t}function O(e){return!(!e.offsetHeight||!e.offsetWidth&&!/\S/.test(e.textContent))}var x={component:"div",unsafeHTML:"",maxLine:1,ellipsis:"\u2026",ellipsisHTML:void 0,className:"",basedOn:void 0,onReflow:function(){},winWidth:void 0},g=Object.keys(x),w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,l(t).call(this,e))).state={html:e.unsafeHTML,clamped:!1},n.canvas=null,n.maxLine=0,n.nlUnits=[],n}var n,o,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.initCanvas(),this.reflow(this.props)}},{key:"componentDidUpdate",value:function(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}},{key:"componentWillUnmount",value:function(){this.canvas.parentNode.removeChild(this.canvas)}},{key:"setState",value:function(e,n){return"undefined"!==typeof e.clamped&&(this.clamped=e.clamped),c(l(t.prototype),"setState",this).call(this,e,n)}},{key:"initCanvas",value:function(){if(!this.canvas){var e=this.canvas=document.createElement("div");e.className="LinesEllipsis-canvas ".concat(this.props.className),e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(d).forEach((function(t){e.style[t]=d[t]})),document.body.appendChild(e)}}},{key:"copyStyleToCanvas",value:function(){var e=this,t=window.getComputedStyle(this.target);m.forEach((function(n){e.canvas.style[n]=t[n]}))}},{key:"reflow",value:function(e){this.maxLine=+e.maxLine||1,this.canvas.innerHTML=e.unsafeHTML;var t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.unsafeHTML)?"words":"letters");b(this.canvas,t);var n={clamped:this.putEllipsis(this.calcIndexes()),html:this.canvas.innerHTML};this.setState(n,e.onReflow.bind(this,n))}},{key:"calcIndexes",value:function(){var e=[0],t=this.nlUnits=Array.from(this.canvas.querySelectorAll(".LinesEllipsis-unit")),n=t.length;if(!t.length)return e;var o=t.find(O);if(!o)return e;for(var s=1,i=o.offsetTop,r=1;r<n&&!(O(t[r])&&t[r].offsetTop-i>1&&(s++,e.push(r),i=t[r].offsetTop,s>this.maxLine));r++);return e}},{key:"putEllipsis",value:function(e){if(e.length<=this.maxLine)return!1;this.nlUnits=this.nlUnits.slice(0,e[this.maxLine]);var t=this.nlUnits.pop(),n=this.makeEllipsisSpan();do{v(t,this.canvas),y(t).appendChild(n),t=this.nlUnits.pop()}while(t&&(!O(t)||n.offsetHeight>t.offsetHeight||n.offsetTop>t.offsetTop));return t&&j(t),this.nlUnits.forEach(j),!0}},{key:"makeEllipsisSpan",value:function(){var e=this.props,t=e.ellipsisHTML,n=e.ellipsis,o=document.createElement("span");o.appendChild(document.createElement("wbr"));var s=document.createElement("span");return s.className="LinesEllipsis-ellipsis",t?s.innerHTML=t:s.textContent=n,o.appendChild(s),o}},{key:"isClamped",value:function(){return this.clamped}},{key:"render",value:function(){var e=this,t=this.state,n=t.html,o=t.clamped,r=this.props,a=r.component,c=r.className,l=r.unsafeHTML,u=i(r,["component","className","unsafeHTML"]);return p.createElement(a,s({className:"LinesEllipsis ".concat(o?"LinesEllipsis--clamped":""," ").concat(c),ref:function(t){return e.target=t}},h(u,g)),p.createElement("div",{dangerouslySetInnerHTML:{__html:o?n:l}}))}}])&&r(n.prototype,o),f&&r(n,f),t}(p.Component);w.defaultProps=x,e.exports=w},227:function(e,t,n){"use strict";e.exports={canvasStyle:{position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},mirrorProps:["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"]}},228:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports={omit:function(e,t){if(!e||"object"!==o(e))return e;var n={};return Object.keys(e).forEach((function(o){t.indexOf(o)>-1||(n[o]=e[o])})),n}}},229:function(e,t,n){"use strict";n.r(t);var o=n(19),s=n(0),i=n.n(s),r=n(8),a=n(49),c=n(89),l=n(12),u=n(15),p=n(29),f=n(47),d=n(222),m=n(72),h=n(220),b=n(226),j=n.n(b),v=n(87),y=n(1);function O(){var e=Object(r.h)(),t=i.a.useState(!1),n=Object(o.a)(t,2),s=n[0],a=n[1],c=s?l.s:l.k,u=s?e.liked:e.like,p=s?function(){console.log("unliked"),a(!1)}:function(){console.log("like"),a(!0)};return Object(y.jsx)(c,{className:u,onClick:p})}function x(){var e=Object(r.h)(),t=i.a.useState(!1),n=Object(o.a)(t,2),s=n[0],a=n[1],c=s?l.p:l.q,u=s?function(){console.log("removed"),a(!1)}:function(){console.log("saved"),a(!0)};return Object(y.jsx)(c,{className:e.saveIcon,onClick:u})}function g(){var e=Object(r.h)(),t=i.a.useState(""),n=Object(o.a)(t,2),s=n[0],a=n[1];return Object(y.jsxs)("div",{className:e.commentContainer,children:[Object(y.jsx)(h.a,{className:e.textField,fullWidth:!0,value:s,placeholder:"Add a comment...",multiline:!0,rowsMax:2,rows:1,onChange:function(e){return a(e.target.value)},InputProps:{classes:{root:e.root,underline:e.underline}}}),Object(y.jsx)(f.a,{color:"primary",className:e.commentButton,disabled:!s.trim(),children:"Post"})]})}t.default=function(e){var t=e.post,n=e.index,s=Object(r.h)(),h=i.a.useState(!1),b=Object(o.a)(h,2),w=b[0],N=b[1],k=i.a.useState(!1),S=Object(o.a)(k,2),E=S[0],C=S[1],L=t.id,T=t.media,H=t.likes,M=t.user,P=t.caption,_=t.comments,U=1===n;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("article",{className:s.article,style:{marginBottom:U&&30},children:[Object(y.jsxs)("div",{className:s.postHeader,children:[Object(y.jsx)(a.a,{user:M}),Object(y.jsx)(l.o,{className:s.moreIcon,onClick:function(){return C(!0)}})]}),Object(y.jsx)("div",{children:Object(y.jsx)("img",{src:T,alt:"",className:s.image})}),Object(y.jsxs)("div",{className:s.postButtonsWrapper,children:[Object(y.jsxs)("div",{className:s.postButtons,children:[Object(y.jsx)(O,{}),Object(y.jsx)(u.b,{to:"/p/".concat(L),children:Object(y.jsx)(l.c,{})}),Object(y.jsx)(l.r,{}),Object(y.jsx)(x,{})]}),Object(y.jsx)(p.a,{className:s.likes,variant:"subtitle2",children:Object(y.jsx)("span",{children:1===H?"1 like":"".concat(H," likes")})}),Object(y.jsxs)("div",{className:w?s.expanded:s.collapsed,children:[Object(y.jsx)(u.b,{to:"/".concat(M.username),children:Object(y.jsx)(p.a,{className:s.username,component:"span",variant:"subtitle2",children:M.username})}),w?Object(y.jsx)(p.a,{variant:"body2",component:"span",dangerouslySetInnerHTML:{__html:P}}):Object(y.jsxs)("div",{className:s.captionWrapper,children:[Object(y.jsx)(j.a,{unsafeHTML:P,className:s.caption,maxLine:"0",ellipsis:"...",basedOn:"letters"}),Object(y.jsx)(f.a,{className:s.moreButton,onClick:function(){return N(!0)},children:"more"})]})]}),Object(y.jsx)(u.b,{to:"/p/".concat(L),children:Object(y.jsxs)(p.a,{className:s.commentsLink,variant:"body2",component:"div",children:["View all ",_.length," comments"]})}),_.map((function(e){return Object(y.jsx)("div",{children:Object(y.jsxs)(u.b,{to:"/".concat(e.user.username),children:[Object(y.jsx)(p.a,{variant:"subtitle2",component:"span",className:s.commentUsername,children:e.user.username})," ",Object(y.jsx)(p.a,{variant:"body2",component:"span",children:e.content})]})},e.id)})),Object(y.jsxs)(p.a,{color:"textSecondary",className:s.datePosted,children:["5 DAYS AGO"," "]})]}),Object(y.jsxs)(d.a,{xsDown:!0,children:[Object(y.jsx)(m.a,{}),Object(y.jsx)(g,{})]})]}),U&&Object(y.jsx)(v.a,{}),E&&Object(y.jsx)(c.a,{onClose:function(){return C(!1)}})]})}}}]);
//# sourceMappingURL=3.5821d550.chunk.js.map