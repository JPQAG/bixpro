(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[131],{1088:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1);function c(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}},1318:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(168),c=n(1),r=function(e){var t;return"undefined"===typeof document?null:null==e?Object(a.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function o(e,t){var n=Object(c.useState)((function(){return r(e)})),a=n[0],o=n[1];if(!a){var s=r(e);s&&o(s)}return Object(c.useEffect)((function(){t&&a&&t(a)}),[t,a]),Object(c.useEffect)((function(){var t=r(e);t!==a&&o(t)}),[e,a]),a}},2348:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(77),r=n.n(c),o=n(110),s=n(29),v=n(1),i=n.n(v),w=n(945),u=n(942),T=n(946),V=n(1221),l=n(316),d=n(1334),j=n(2),f=n(304),b=function(e){var t=Object(v.createRef)(),n=Object(v.useState)(""),c=Object(s.a)(n,2),T=c[0],b=c[1],p=Object(v.useState)([]),O=Object(s.a)(p,2),h=O[0],m=O[1],x=(e.todoList?e:[]).todoList;Object(v.useEffect)((function(){m(x)}),[x]);var k=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/todo/basic/complete",{key:n,complete:t.target.checked}).then((function(e){m(e.data.basicTodo)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.a.post("/api/todo/basic/add",{note:T}).then((function(e){y(),m(e.data.basicTodo),b("")}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),y=function(){t.current.resetValidationState(!0)},N=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/todo/basic/delete",{key:t}).then((function(e){m(e.data.basicTodo)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=h.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"to-do-list mb-3",children:[Object(a.jsx)("div",{className:"d-inline-block",children:Object(a.jsxs)("label",{className:[e.complete?"done-task":"","check-task custom-control custom-checkbox d-flex justify-content-center"].join(" "),children:[Object(a.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck2",defaultChecked:e.complete,onChange:function(e){return k(e,t)}}),Object(a.jsx)("span",{className:"custom-control-label",children:e.note})]})}),Object(a.jsx)("div",{className:"float-right",children:Object(a.jsx)(j.b,{to:"#",className:"delete_todolist",onClick:function(){return N(t)},children:Object(a.jsx)("i",{className:"fa fa-trash-alt"})})})]})},t)}));return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(w.a,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(d.ValidationForm,{ref:t,onSubmit:S,onErrorSubmit:function(e,t,n){},children:Object(a.jsx)(V.a.Row,{children:Object(a.jsx)(V.a.Group,{as:u.a,children:Object(a.jsx)(d.TextInputGroup,{name:"newNote",id:"newNote",placeholder:"Create your task list",required:!0,append:Object(a.jsx)(l.a,{type:"submit",variant:"secondary",className:"btn-icon",children:Object(a.jsx)("i",{className:"fa fa-plus"})}),value:T,onChange:function(e){b(e.target.value)},autoComplete:"off"})})})}),Object(a.jsx)("div",{className:"new-task",children:g})]})})})},p=function(e){var t=Object(v.createRef)(),n=Object(v.useState)(""),c=Object(s.a)(n,2),T=c[0],j=c[1],b=Object(v.useState)([]),p=Object(s.a)(b,2),O=p[0],h=p[1],m=(e.todoList?e:[]).todoList;Object(v.useEffect)((function(){h(m)}),[m]);var x=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/todo/card/complete",{key:t}).then((function(e){console.log(e),h(e.data.cardTodo)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.a.post("/api/todo/card/add",{note:T}).then((function(e){S(),h(e.data.cardTodo),j("")}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),S=function(){t.current.resetValidationState(!0)},y={backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAADAFBMVEVMaXHwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTvwVTsvTK1fAAAA/3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1O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",")"),position:"absolute",top:"5px",right:"5px",content:"",width:"55px",height:"55px",backgroundSize:"100%"},N=O.map((function(e,t){return Object(a.jsxs)("li",{className:e.complete?"complete":"",onClick:function(){return x(t)},children:[e.complete?Object(a.jsx)("span",{style:y}):"",Object(a.jsx)("p",{children:e.note})]},t)}));return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(w.a,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(d.ValidationForm,{ref:t,onSubmit:k,onErrorSubmit:function(e,t,n){},children:Object(a.jsx)(V.a.Row,{children:Object(a.jsx)(V.a.Group,{as:u.a,children:Object(a.jsx)(d.TextInputGroup,{name:"newNoteCard",id:"newNoteCard",placeholder:"Create your task list",required:!0,append:Object(a.jsx)(l.a,{type:"submit",variant:"secondary",className:"btn-icon",children:Object(a.jsx)("i",{className:"fa fa-plus"})}),value:T,onChange:function(e){j(e.target.value)},autoComplete:"off"})})})}),Object(a.jsx)("section",{id:"task-container",children:Object(a.jsx)("ul",{id:"task-list",children:N})})]})})})},O=n(2329),h=function(e){var t=Object(v.createRef)(),n=Object(v.useState)(""),c=Object(s.a)(n,2),T=c[0],j=c[1],b=Object(v.useState)([]),p=Object(s.a)(b,2),h=p[0],m=p[1],x=Object(v.useState)(!1),k=Object(s.a)(x,2),S=k[0],y=k[1],N=(e.todoList?e:[]).todoList;Object(v.useEffect)((function(){m(N)}),[N]);var g=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/todo/modal/complete",{key:n,complete:t.target.checked}).then((function(e){m(e.data.modalTodo)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.a.post("/api/todo/modal/add",{note:T}).then((function(e){z(),m(e.data.modalTodo),j("")}));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),z=function(){t.current.resetValidationState(!0)},E=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/todo/modal/delete",{key:t}).then((function(e){m(e.data.modalTodo)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=h.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"to-do-list mb-3",children:[Object(a.jsx)("div",{className:"d-inline-block",children:Object(a.jsxs)("label",{className:[e.complete?"done-task":"","check-task custom-control custom-checkbox d-flex justify-content-center"].join(" "),children:[Object(a.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck2",defaultChecked:e.complete,onChange:function(e){return g(e,t)}}),Object(a.jsx)("span",{className:"custom-control-label",children:e.note})]})}),Object(a.jsx)("div",{className:"float-right",children:Object(a.jsx)("a",{href:"#!",className:"delete_todolist",onClick:function(){return E(t)},children:Object(a.jsx)("i",{className:"fa fa-trash-alt"})})})]})},t)}));return Object(a.jsx)(i.a.Fragment,{children:Object(a.jsx)(w.a,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)("div",{className:"new-task",children:A}),Object(a.jsx)(l.a,{variant:"primary",onClick:function(){return y(!0)},children:"ADD NEW TASK"}),Object(a.jsx)(O.a,{show:S,onHide:function(){return y(!1)},children:Object(a.jsxs)(d.ValidationForm,{ref:t,onSubmit:C,onErrorSubmit:function(e,t,n){},children:[Object(a.jsx)(O.a.Header,{closeButton:!0,children:Object(a.jsx)(O.a.Title,{as:"h5",children:"Add New Todo"})}),Object(a.jsx)(O.a.Body,{children:Object(a.jsx)(V.a.Row,{children:Object(a.jsx)(V.a.Group,{as:u.a,children:Object(a.jsx)(d.TextInput,{name:"newNoteModal",id:"newNoteModal",placeholder:"Create your task list",required:!0,value:T,onChange:function(e){j(e.target.value)},autoComplete:"off"})})})}),Object(a.jsxs)(O.a.Footer,{className:"p-3",children:[Object(a.jsx)(l.a,{variant:"primary",type:"submit",onClick:function(){return y(!1)},children:"Save"}),Object(a.jsx)(l.a,{variant:"light",onClick:function(){return y(!1)},children:"Close"})]})]})})]})})})};t.default=function(){var e=Object(v.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],V=Object(v.useState)([]),l=Object(s.a)(V,2),d=l[0],j=l[1],O=Object(v.useState)([]),m=Object(s.a)(O,2),x=m[0],k=m[1],S=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/todo/card");case 2:t=e.sent,c(t.data.cardTodo);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/todo/basic");case 2:t=e.sent,j(t.data.basicTodo);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/api/todo/modal");case 2:t=e.sent,k(t.data.modalTodo);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.useEffect)((function(){S(),y(),N()}),[]),Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(u.a,{xl:6,children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)(T.a.Header,{children:Object(a.jsx)(T.a.Title,{as:"h5",children:"To Do Card List"})}),Object(a.jsx)(T.a.Body,{children:Object(a.jsx)(p,{todoList:n})})]})}),Object(a.jsx)(u.a,{xl:6,children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)(T.a.Header,{children:Object(a.jsx)(T.a.Title,{as:"h5",children:"To Do List"})}),Object(a.jsx)(T.a.Body,{children:Object(a.jsx)(b,{todoList:d})})]})}),Object(a.jsx)(u.a,{xl:6,children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)(T.a.Header,{children:Object(a.jsx)(T.a.Title,{as:"h5",children:"To Do List in Modal"})}),Object(a.jsx)(T.a.Body,{children:Object(a.jsx)(h,{todoList:x})})]})})]})})}},941:function(e,t,n){"use strict";var a=n(4),c=n(7),r=n(17),o=n.n(r),s=n(1),v=n.n(s),i=n(15),w=n.n(i),u={label:o.a.string.isRequired,onClick:o.a.func},T=v.a.forwardRef((function(e,t){var n=e.label,r=e.onClick,o=e.className,s=Object(c.a)(e,["label","onClick","className"]);return v.a.createElement("button",Object(a.a)({ref:t,type:"button",className:w()("close",o),onClick:r},s),v.a.createElement("span",{"aria-hidden":"true"},"\xd7"),v.a.createElement("span",{className:"sr-only"},n))}));T.displayName="CloseButton",T.propTypes=u,T.defaultProps={label:"Close"},t.a=T}}]);
//# sourceMappingURL=131.9ca995be.chunk.js.map