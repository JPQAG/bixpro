(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[60],{1095:function(e,t,a){"use strict";var n=a(9),c=a(29),s=a(1),i=a.n(s),r=a(912),o=a(944),l=a(1167),d=a(2),b=a(85),j=a(0);t.a=function(e){var t,a,u,m,f,h=e.isOption,O=e.title,p=e.children,x=e.cardClass,v=e.optionClass,g=Object(s.useState)(!1),N=Object(c.a)(g,2),y=N[0],w=N[1],E=Object(s.useState)(!1),k=Object(c.a)(E,2),C=k[0],P=k[1],R=Object(s.useState)(!1),I=Object(c.a)(R,2),L=I[0],M=I[1],A=Object(s.useState)(!1),D=Object(c.a)(A,2),H=D[0],S=D[1],T=Object(b.a)(),B=[];return h&&(u=Object(j.jsx)("div",{className:"card-header-right "+v,children:Object(j.jsxs)(r.a,{alignRight:!0,className:"btn-group card-option",children:[Object(j.jsx)(r.a.Toggle,{id:"dropdown-basic",className:"btn-icon",children:Object(j.jsx)("i",{className:"feather icon-more-horizontal"})}),Object(j.jsxs)(r.a.Menu,{as:"ul",className:"list-unstyled card-option",children:[Object(j.jsxs)(r.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return w(!y)},children:[Object(j.jsx)("i",{className:y?"feather icon-minimize":"feather icon-maximize"}),Object(j.jsxs)(d.b,{to:"#",children:[" ",y?"Restore":"Maximize"," "]})]}),Object(j.jsxs)(r.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return P(!C)},children:[Object(j.jsx)("i",{className:C?"feather icon-plus":"feather icon-minus"}),Object(j.jsxs)(d.b,{to:"#",children:[" ",C?"Expand":"Collapse"," "]})]}),Object(j.jsxs)(r.a.Item,{as:"li",className:"dropdown-item",onClick:function(){M(!0),setInterval((function(){M(!1)}),3e3)},children:[Object(j.jsx)("i",{className:"feather icon-refresh-cw"}),Object(j.jsx)(d.b,{to:"#",children:" Reload "})]}),Object(j.jsxs)(r.a.Item,{as:"li",className:"dropdown-item",onClick:function(){S(!0)},children:[Object(j.jsx)("i",{className:"feather icon-trash"}),Object(j.jsx)(d.b,{to:"#",children:" Remove "})]})]})]})})),m=Object(j.jsxs)(o.a.Header,{children:[Object(j.jsx)(o.a.Title,{as:"h5",children:O}),u]}),y&&(B=[].concat(Object(n.a)(B),["full-card"]),t={position:"fixed",top:0,left:0,right:0,width:T.width,height:T.height}),L&&(B=[].concat(Object(n.a)(B),["card-load"]),a=Object(j.jsx)("div",{className:"card-loader",children:Object(j.jsx)("i",{className:"pct-loader1 anim-rotate"})})),H&&(B=[].concat(Object(n.a)(B),["d-none"])),x&&(B=[].concat(Object(n.a)(B),[x])),f=Object(j.jsxs)(o.a,{className:B.join(" "),style:t,children:[m,Object(j.jsx)(l.a,{in:!C,children:Object(j.jsx)("div",{children:Object(j.jsx)(o.a.Body,{children:p})})}),a]}),Object(j.jsx)(i.a.Fragment,{children:f})}},1167:function(e,t,a){"use strict";var n,c=a(4),s=a(7),i=a(15),r=a.n(i),o=a(302),l=a(298),d=a(1),b=a.n(d),j=a(165),u=a(301),m=a(300),f={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=f[e];return a+parseInt(Object(o.a)(t,n[0]),10)+parseInt(Object(o.a)(t,n[1]),10)}var O=((n={})[j.c]="collapse",n[j.d]="collapsing",n[j.b]="collapsing",n[j.a]="collapse show",n),p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:h},x=b.a.forwardRef((function(e,t){var a=e.onEnter,n=e.onEntering,i=e.onEntered,o=e.onExit,f=e.onExiting,p=e.className,x=e.children,v=e.dimension,g=void 0===v?"height":v,N=e.getDimensionValue,y=void 0===N?h:N,w=Object(s.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),E="function"===typeof g?g():g,k=Object(d.useMemo)((function(){return Object(u.a)((function(e){e.style[E]="0"}),a)}),[E,a]),C=Object(d.useMemo)((function(){return Object(u.a)((function(e){var t="scroll"+E[0].toUpperCase()+E.slice(1);e.style[E]=e[t]+"px"}),n)}),[E,n]),P=Object(d.useMemo)((function(){return Object(u.a)((function(e){e.style[E]=null}),i)}),[E,i]),R=Object(d.useMemo)((function(){return Object(u.a)((function(e){e.style[E]=y(E,e)+"px",Object(m.a)(e)}),o)}),[o,y,E]),I=Object(d.useMemo)((function(){return Object(u.a)((function(e){e.style[E]=null}),f)}),[E,f]);return b.a.createElement(j.e,Object(c.a)({ref:t,addEndListener:l.a},w,{"aria-expanded":w.role?w.in:null,onEnter:k,onEntering:C,onEntered:P,onExit:R,onExiting:I}),(function(e,t){return b.a.cloneElement(x,Object(c.a)({},t,{className:r()(p,x.props.className,O[e],"width"===E&&"width")}))}))}));x.defaultProps=p,t.a=x},2575:function(e,t,a){"use strict";a.r(t);var n=a(29),c=a(1),s=a.n(c),i=a(953),r=a(942),o=a(940),l=a(2),d=a(937),b=a(1095),j=a(0),u=["primary","secondary","success","danger","warning","info","light","dark"];t.default=function(){var e=Object(c.useState)(u),t=Object(n.a)(e,2),a=t[0],m=t[1],f=u.map((function(e,t){return Object(j.jsxs)(i.a,{variant:e,children:["A simple ",e," alert\u2014check it out!"]},t)})),h=u.map((function(e,t){return Object(j.jsxs)(i.a,{variant:e,children:["A simple ",e," alert with"," ",Object(j.jsx)(i.a.Link,{as:l.b,to:"#",children:"an example link"}),". Give it a click if you like."]},t)})),O=u.map((function(e,t){return Object(j.jsx)(i.a,{show:a.findIndex((function(t){return t===e}))>-1,dismissible:!0,variant:e,onClick:function(){return m(a.filter((function(t){return t!==e})))},children:"Holy guacamole! You should check in on some of those fields below."},t)}));return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)(r.a,{children:Object(j.jsx)(o.a,{sm:12,children:Object(j.jsx)(d.a,{message:"For more info please check the components's official documentation",link:"https://react-bootstrap.github.io/components/alerts/"})})}),Object(j.jsx)(r.a,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(b.a,{title:"Basic",children:f})})}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(o.a,{children:Object(j.jsx)(b.a,{title:"Link Alert",children:h})}),Object(j.jsx)(o.a,{children:Object(j.jsx)(b.a,{title:"Dismissing",children:O})})]}),Object(j.jsx)(r.a,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(b.a,{title:"Additional Content",children:Object(j.jsxs)(i.a,{variant:"success",children:[Object(j.jsx)(i.a.Heading,{as:"h4",children:"Well done!"}),Object(j.jsx)("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})})})})]})}},925:function(e,t,a){"use strict";var n=a(4),c=a(1),s=a.n(c),i=a(15),r=a.n(i);t.a=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(n.a)({},t,{ref:a,className:r()(t.className,e)}))}))}},937:function(e,t,a){"use strict";var n=a(1),c=a.n(n),s=a(953),i=a(0);t.a=function(e){return Object(i.jsx)(c.a.Fragment,{children:Object(i.jsxs)(s.a,{variant:"warning",children:[e.message,Object(i.jsx)(s.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}},940:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(15),i=a.n(s),r=a(1),o=a.n(r),l=a(18),d=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,r=e.as,b=void 0===r?"div":r,j=Object(c.a)(e,["bsPrefix","className","as"]),u=Object(l.a)(a,"col"),m=[],f=[];return d.forEach((function(e){var t,a,n,c=j[e];if(delete j[e],"object"===typeof c&&null!=c){var s=c.span;t=void 0===s||s,a=c.offset,n=c.order}else t=c;var i="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+u+i:""+u+i+"-"+t),null!=n&&f.push("order"+i+"-"+n),null!=a&&f.push("offset"+i+"-"+a)})),m.length||m.push(u),o.a.createElement(b,Object(n.a)({},j,{ref:t,className:i.a.apply(void 0,[s].concat(m,f))}))}));b.displayName="Col",t.a=b},941:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(17),i=a.n(s),r=a(1),o=a.n(r),l=a(15),d=a.n(l),b={label:i.a.string.isRequired,onClick:i.a.func},j=o.a.forwardRef((function(e,t){var a=e.label,s=e.onClick,i=e.className,r=Object(c.a)(e,["label","onClick","className"]);return o.a.createElement("button",Object(n.a)({ref:t,type:"button",className:d()("close",i),onClick:s},r),o.a.createElement("span",{"aria-hidden":"true"},"\xd7"),o.a.createElement("span",{className:"sr-only"},a))}));j.displayName="CloseButton",j.propTypes=b,j.defaultProps={label:"Close"},t.a=j},942:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(15),i=a.n(s),r=a(1),o=a.n(r),l=a(18),d=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,r=e.noGutters,b=e.as,j=void 0===b?"div":b,u=Object(c.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(l.a)(a,"row"),f=m+"-cols",h=[];return d.forEach((function(e){var t,a=u[e];delete u[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&h.push(""+f+n+"-"+t)})),o.a.createElement(j,Object(n.a)({ref:t},u,{className:i.a.apply(void 0,[s,m,r&&"no-gutters"].concat(h))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},t.a=b},944:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(15),i=a.n(s),r=a(1),o=a.n(r),l=a(18),d=a(70),b=a(925),j=a(291),u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,r=e.variant,d=e.as,b=void 0===d?"img":d,j=Object(c.a)(e,["bsPrefix","className","variant","as"]),u=Object(l.a)(a,"card-img");return o.a.createElement(b,Object(n.a)({ref:t,className:i()(r?u+"-"+r:u,s)},j))}));u.displayName="CardImg",u.defaultProps={variant:null};var m=u,f=Object(b.a)("h5"),h=Object(b.a)("h6"),O=Object(d.a)("card-body"),p=Object(d.a)("card-title",{Component:f}),x=Object(d.a)("card-subtitle",{Component:h}),v=Object(d.a)("card-link",{Component:"a"}),g=Object(d.a)("card-text",{Component:"p"}),N=Object(d.a)("card-header"),y=Object(d.a)("card-footer"),w=Object(d.a)("card-img-overlay"),E=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,d=e.bg,b=e.text,u=e.border,m=e.body,f=e.children,h=e.as,p=void 0===h?"div":h,x=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(l.a)(a,"card"),g=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return o.a.createElement(j.a.Provider,{value:g},o.a.createElement(p,Object(n.a)({ref:t},x,{className:i()(s,v,d&&"bg-"+d,b&&"text-"+b,u&&"border-"+u)}),m?o.a.createElement(O,null,f):f))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=m,E.Title=p,E.Subtitle=x,E.Body=O,E.Link=v,E.Text=g,E.Header=N,E.Footer=y,E.ImgOverlay=w;t.a=E},953:function(e,t,a){"use strict";var n=a(4),c=a(7),s=a(15),i=a.n(s),r=a(1),o=a.n(r),l=a(59),d=a(53),b=a(18),j=a(293),u=a(941),m=a(925),f=a(70),h=a(108),O=Object(m.a)("h4");O.displayName="DivStyledAsH4";var p=Object(f.a)("alert-heading",{Component:O}),x=Object(f.a)("alert-link",{Component:h.a}),v={show:!0,transition:j.a,closeLabel:"Close alert"},g=o.a.forwardRef((function(e,t){var a=Object(l.a)(e,{show:"onClose"}),s=a.bsPrefix,r=a.show,m=a.closeLabel,f=a.className,h=a.children,O=a.variant,p=a.onClose,x=a.dismissible,v=a.transition,g=Object(c.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),N=Object(b.a)(s,"alert"),y=Object(d.a)((function(e){p&&p(!1,e)})),w=!0===v?j.a:v,E=o.a.createElement("div",Object(n.a)({role:"alert"},w?void 0:g,{ref:t,className:i()(f,N,O&&N+"-"+O,x&&N+"-dismissible")}),x&&o.a.createElement(u.a,{onClick:y,label:m}),h);return w?o.a.createElement(w,Object(n.a)({unmountOnExit:!0},g,{ref:void 0,in:r}),E):r?E:null}));g.displayName="Alert",g.defaultProps=v,g.Link=x,g.Heading=p,t.a=g}}]);
//# sourceMappingURL=60.7b72cb62.chunk.js.map