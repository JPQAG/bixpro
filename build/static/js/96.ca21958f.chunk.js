(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[96],{1488:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return n}))},1677:function(e,t,r){"use strict";var n=r(1678).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},1678:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=o(r(1)),a=o(r(1679));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?d(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){function t(){var e,r;l(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return f(d(r=p(this,(e=b(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=r.props,o=t.text,c=t.onCopy,s=t.children,i=t.options,l=n.default.Children.only(s),u=(0,a.default)(o,i);c&&c(o,u),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),r}var r,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=i(e,["text","onCopy","options","children"]),a=n.default.Children.only(t);return n.default.cloneElement(a,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{onClick:this.onClick}))}}])&&u(r.prototype,o),c&&u(r,c),t}(n.default.PureComponent);t.CopyToClipboard=j,f(j,"defaultProps",{onCopy:void 0,options:void 0})},1679:function(e,t,r){"use strict";var n=r(1680),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,c,s,i,l,u=!1;t||(t={}),r=t.debug||!1;try{if(c=n(),s=document.createRange(),i=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=a[t.format]||a.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(l),s.selectNodeContents(l),i.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){r&&console.error("unable to copy using execCommand: ",p),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){r&&console.error("unable to copy using clipboardData: ",p),r&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(s):i.removeAllRanges()),l&&document.body.removeChild(l),c()}return u}},1680:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},2357:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),o=r.n(a),c=r(946),s=r(954),i=r(316),l=r(2),u=r(295),p=r(1677),b=r(8),d=r(77),m=r.n(d),f=r(110),j=r(1488),y=r(942),h=r(945),O=r(1648),x=r(1652),g=r(123),v=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e},w=function(e){var t=e.className,r=Object(j.a)(e,["className"]),a=v(),c=Object(g.a)(),l=c.firebaseEmailPasswordSignIn,u=c.firebaseGoogleSignIn,p=function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(x.d,{initialValues:{email:"demo@gmail.com",password:"123456",submit:null},validationSchema:O.a().shape({email:O.b().email("Must be a valid email").max(255).required("Email is required"),password:O.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(f.a)(m.a.mark((function e(t,r){var n,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setErrors,o=r.setStatus,c=r.setSubmitting,e.prev=1,e.next=4,l(t.email,t.password);case 4:a.current&&(o({success:!0}),c(!0)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),a.current&&(o({success:!1}),n({submit:e.t0.message}),c(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}(),children:function(e){var a=e.errors,o=e.handleBlur,c=e.handleChange,l=e.handleSubmit,u=e.isSubmitting,p=e.touched,d=e.values;return Object(n.jsxs)("form",Object(b.a)(Object(b.a)({noValidate:!0,onSubmit:l,className:t},r),{},{children:[Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)("input",{className:"form-control",error:p.email&&a.email,label:"Email Address / Username",name:"email",onBlur:o,onChange:c,type:"email",value:d.email}),p.email&&a.email&&Object(n.jsx)("small",{class:"text-danger form-text",children:a.email})]}),Object(n.jsxs)("div",{className:"form-group mb-4",children:[Object(n.jsx)("input",{className:"form-control",error:p.password&&a.password,label:"Password",name:"password",onBlur:o,onChange:c,type:"password",value:d.password}),p.password&&a.password&&Object(n.jsx)("small",{class:"text-danger form-text",children:a.password})]}),a.submit&&Object(n.jsx)(y.a,{sm:12,children:Object(n.jsx)(s.a,{variant:"danger",children:a.submit})}),Object(n.jsxs)("div",{className:"custom-control custom-checkbox  text-left mb-4 mt-2",children:[Object(n.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(n.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Save credentials."})]}),Object(n.jsx)(h.a,{children:Object(n.jsx)(y.a,{mt:2,children:Object(n.jsx)(i.a,{className:"btn-block",color:"primary",disabled:u,size:"large",type:"submit",variant:"primary",children:"Signin"})})})]}))}}),Object(n.jsx)(h.a,{children:Object(n.jsx)(y.a,{sm:12,children:Object(n.jsx)("h5",{className:"my-3",children:" OR "})})}),Object(n.jsx)(h.a,{children:Object(n.jsx)(y.a,{sm:12,children:Object(n.jsxs)(i.a,{onClick:p,variant:"danger",children:[Object(n.jsx)("i",{className:"fa fa-lock"})," Sign in with Google"]})})}),Object(n.jsx)("hr",{})]})};t.default=function(){return Object(n.jsxs)(o.a.Fragment,{children:[Object(n.jsx)(u.a,{}),Object(n.jsx)("div",{className:"auth-wrapper",children:Object(n.jsxs)("div",{className:"auth-content",children:[Object(n.jsxs)("div",{className:"auth-bg",children:[Object(n.jsx)("span",{className:"r"}),Object(n.jsx)("span",{className:"r s"}),Object(n.jsx)("span",{className:"r s"}),Object(n.jsx)("span",{className:"r"})]}),Object(n.jsx)(c.a,{className:"borderless text-center",children:Object(n.jsxs)(c.a.Body,{children:[Object(n.jsx)("div",{className:"mb-4",children:Object(n.jsx)("i",{className:"feather icon-unlock auth-icon"})}),Object(n.jsx)(w,{}),Object(n.jsxs)("p",{className:"mb-2 text-muted",children:["Forgot password? ",Object(n.jsx)(l.c,{to:"/auth/reset-password-1",className:"f-w-400",children:"Reset"})]}),Object(n.jsxs)("p",{className:"mb-0 text-muted",children:["Don\u2019t have an account? ",Object(n.jsx)(l.c,{to:"/auth/signup-1",className:"f-w-400",children:"Signup"})]}),Object(n.jsxs)(s.a,{variant:"primary",className:"text-left mt-3",children:["Username:",Object(n.jsx)(p.CopyToClipboard,{text:"demo@gmail.com",children:Object(n.jsxs)(i.a,{variant:"outline-primary",as:l.b,to:"#",className:"badge mx-2 mb-2",size:"sm",children:[" ",Object(n.jsx)("i",{className:"fa fa-user mr-1"})," demo@gmail.com "]})}),Object(n.jsx)("br",{}),"Password:",Object(n.jsx)(p.CopyToClipboard,{text:"123456",children:Object(n.jsxs)(i.a,{variant:"outline-primary",as:l.b,to:"#",className:"badge mx-2",size:"sm",children:[" ",Object(n.jsx)("i",{className:"fa fa-lock mr-1"})," 123456 "]})})]})]})})]})})]})}}}]);
//# sourceMappingURL=96.ca21958f.chunk.js.map