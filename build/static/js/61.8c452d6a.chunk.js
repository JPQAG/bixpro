(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[61],{1095:function(e,a,t){"use strict";var n=t(9),c=t(29),s=t(1),r=t.n(s),i=t(912),l=t(944),o=t(1167),d=t(2),j=t(85),b=t(0);a.a=function(e){var a,t,m,u,h,f=e.isOption,O=e.title,x=e.children,p=e.cardClass,v=e.optionClass,g=Object(s.useState)(!1),N=Object(c.a)(g,2),E=N[0],y=N[1],w=Object(s.useState)(!1),C=Object(c.a)(w,2),k=C[0],P=C[1],R=Object(s.useState)(!1),B=Object(c.a)(R,2),I=B[0],L=B[1],M=Object(s.useState)(!1),D=Object(c.a)(M,2),S=D[0],T=D[1],z=Object(j.a)(),F=[];return f&&(m=Object(b.jsx)("div",{className:"card-header-right "+v,children:Object(b.jsxs)(i.a,{alignRight:!0,className:"btn-group card-option",children:[Object(b.jsx)(i.a.Toggle,{id:"dropdown-basic",className:"btn-icon",children:Object(b.jsx)("i",{className:"feather icon-more-horizontal"})}),Object(b.jsxs)(i.a.Menu,{as:"ul",className:"list-unstyled card-option",children:[Object(b.jsxs)(i.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return y(!E)},children:[Object(b.jsx)("i",{className:E?"feather icon-minimize":"feather icon-maximize"}),Object(b.jsxs)(d.b,{to:"#",children:[" ",E?"Restore":"Maximize"," "]})]}),Object(b.jsxs)(i.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return P(!k)},children:[Object(b.jsx)("i",{className:k?"feather icon-plus":"feather icon-minus"}),Object(b.jsxs)(d.b,{to:"#",children:[" ",k?"Expand":"Collapse"," "]})]}),Object(b.jsxs)(i.a.Item,{as:"li",className:"dropdown-item",onClick:function(){L(!0),setInterval((function(){L(!1)}),3e3)},children:[Object(b.jsx)("i",{className:"feather icon-refresh-cw"}),Object(b.jsx)(d.b,{to:"#",children:" Reload "})]}),Object(b.jsxs)(i.a.Item,{as:"li",className:"dropdown-item",onClick:function(){T(!0)},children:[Object(b.jsx)("i",{className:"feather icon-trash"}),Object(b.jsx)(d.b,{to:"#",children:" Remove "})]})]})]})})),u=Object(b.jsxs)(l.a.Header,{children:[Object(b.jsx)(l.a.Title,{as:"h5",children:O}),m]}),E&&(F=[].concat(Object(n.a)(F),["full-card"]),a={position:"fixed",top:0,left:0,right:0,width:z.width,height:z.height}),I&&(F=[].concat(Object(n.a)(F),["card-load"]),t=Object(b.jsx)("div",{className:"card-loader",children:Object(b.jsx)("i",{className:"pct-loader1 anim-rotate"})})),S&&(F=[].concat(Object(n.a)(F),["d-none"])),p&&(F=[].concat(Object(n.a)(F),[p])),h=Object(b.jsxs)(l.a,{className:F.join(" "),style:a,children:[u,Object(b.jsx)(o.a,{in:!k,children:Object(b.jsx)("div",{children:Object(b.jsx)(l.a.Body,{children:x})})}),t]}),Object(b.jsx)(r.a.Fragment,{children:h})}},1167:function(e,a,t){"use strict";var n,c=t(4),s=t(7),r=t(15),i=t.n(r),l=t(302),o=t(298),d=t(1),j=t.n(d),b=t(165),m=t(301),u=t(300),h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function f(e,a){var t=a["offset"+e[0].toUpperCase()+e.slice(1)],n=h[e];return t+parseInt(Object(l.a)(a,n[0]),10)+parseInt(Object(l.a)(a,n[1]),10)}var O=((n={})[b.c]="collapse",n[b.d]="collapsing",n[b.b]="collapsing",n[b.a]="collapse show",n),x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:f},p=j.a.forwardRef((function(e,a){var t=e.onEnter,n=e.onEntering,r=e.onEntered,l=e.onExit,h=e.onExiting,x=e.className,p=e.children,v=e.dimension,g=void 0===v?"height":v,N=e.getDimensionValue,E=void 0===N?f:N,y=Object(s.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),w="function"===typeof g?g():g,C=Object(d.useMemo)((function(){return Object(m.a)((function(e){e.style[w]="0"}),t)}),[w,t]),k=Object(d.useMemo)((function(){return Object(m.a)((function(e){var a="scroll"+w[0].toUpperCase()+w.slice(1);e.style[w]=e[a]+"px"}),n)}),[w,n]),P=Object(d.useMemo)((function(){return Object(m.a)((function(e){e.style[w]=null}),r)}),[w,r]),R=Object(d.useMemo)((function(){return Object(m.a)((function(e){e.style[w]=E(w,e)+"px",Object(u.a)(e)}),l)}),[l,E,w]),B=Object(d.useMemo)((function(){return Object(m.a)((function(e){e.style[w]=null}),h)}),[w,h]);return j.a.createElement(b.e,Object(c.a)({ref:a,addEndListener:o.a},y,{"aria-expanded":y.role?y.in:null,onEnter:C,onEntering:k,onEntered:P,onExit:R,onExiting:B}),(function(e,a){return j.a.cloneElement(p,Object(c.a)({},a,{className:i()(x,p.props.className,O[e],"width"===w&&"width")}))}))}));p.defaultProps=x,a.a=p},2670:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(316),r=t(4),i=t(7),l=t(15),o=t.n(l),d=t(18),j=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,s=e.pill,l=e.className,j=e.as,b=void 0===j?"span":j,m=Object(i.a)(e,["bsPrefix","variant","pill","className","as"]),u=Object(d.a)(t,"badge");return c.a.createElement(b,Object(r.a)({ref:a},m,{className:o()(l,u,s&&u+"-pill",n&&u+"-"+n)}))}));j.displayName="Badge",j.defaultProps={pill:!1};var b=j,m=t(942),u=t(940),h=t(2),f=t(937),O=t(1095),x=t(0);a.default=function(){var e=["primary","secondary","success","danger","warning","info","light","dark"],a=e.map((function(e,a){return Object(x.jsxs)(s.a,{variant:e,className:"text-capitalize",children:[e,Object(x.jsx)(b,{variant:"light",className:"ml-1",children:"4"})]},a)})),t=e.map((function(e,a){return Object(x.jsx)(b,{variant:e,className:"mr-1",children:e},a)})),n=e.map((function(e,a){return Object(x.jsx)(b,{pill:!0,variant:e,className:"mr-1",children:e},a)})),r=e.map((function(e,a){return Object(x.jsx)(h.b,{to:"#",children:Object(x.jsx)(b,{variant:e,className:"mr-1",children:e})},a)}));return Object(x.jsxs)(c.a.Fragment,{children:[Object(x.jsx)(m.a,{children:Object(x.jsx)(u.a,{sm:12,children:Object(x.jsx)(f.a,{message:"For more info please check the components's official documentation",link:"https://react-bootstrap.github.io/components/badge/"})})}),Object(x.jsx)(m.a,{children:Object(x.jsxs)(u.a,{className:"btn-page",children:[Object(x.jsxs)(O.a,{title:"Basic Badges",children:[Object(x.jsxs)("h1",{children:["Example heading ",Object(x.jsx)(b,{variant:"secondary",children:"New"})]}),Object(x.jsxs)("h2",{children:["Example heading ",Object(x.jsx)(b,{variant:"secondary",children:"New"})]}),Object(x.jsxs)("h3",{children:["Example heading ",Object(x.jsx)(b,{variant:"secondary",children:"New"})]}),Object(x.jsxs)("h4",{children:["Example heading ",Object(x.jsx)(b,{variant:"secondary",children:"New"})]}),Object(x.jsxs)("h5",{children:["Example heading ",Object(x.jsx)(b,{variant:"secondary",children:"New"})]}),Object(x.jsxs)("h6",{children:["Example heading ",Object(x.jsx)(b,{variant:"secondary",children:"New"})]})]}),Object(x.jsx)(O.a,{title:"Button Badges",children:a}),Object(x.jsx)(O.a,{title:"Contextual Variations",children:t}),Object(x.jsx)(O.a,{title:"Pill Badges",children:n}),Object(x.jsx)(O.a,{title:"Links",children:r})]})})]})}},925:function(e,a,t){"use strict";var n=t(4),c=t(1),s=t.n(c),r=t(15),i=t.n(r);a.a=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},937:function(e,a,t){"use strict";var n=t(1),c=t.n(n),s=t(953),r=t(0);a.a=function(e){return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsxs)(s.a,{variant:"warning",children:[e.message,Object(r.jsx)(s.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}},940:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(15),r=t.n(s),i=t(1),l=t.n(i),o=t(18),d=["xl","lg","md","sm","xs"],j=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,j=void 0===i?"div":i,b=Object(c.a)(e,["bsPrefix","className","as"]),m=Object(o.a)(t,"col"),u=[],h=[];return d.forEach((function(e){var a,t,n,c=b[e];if(delete b[e],"object"===typeof c&&null!=c){var s=c.span;a=void 0===s||s,t=c.offset,n=c.order}else a=c;var r="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+m+r:""+m+r+"-"+a),null!=n&&h.push("order"+r+"-"+n),null!=t&&h.push("offset"+r+"-"+t)})),u.length||u.push(m),l.a.createElement(j,Object(n.a)({},b,{ref:a,className:r.a.apply(void 0,[s].concat(u,h))}))}));j.displayName="Col",a.a=j},941:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(17),r=t.n(s),i=t(1),l=t.n(i),o=t(15),d=t.n(o),j={label:r.a.string.isRequired,onClick:r.a.func},b=l.a.forwardRef((function(e,a){var t=e.label,s=e.onClick,r=e.className,i=Object(c.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(n.a)({ref:a,type:"button",className:d()("close",r),onClick:s},i),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},t))}));b.displayName="CloseButton",b.propTypes=j,b.defaultProps={label:"Close"},a.a=b},942:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(15),r=t.n(s),i=t(1),l=t.n(i),o=t(18),d=["xl","lg","md","sm","xs"],j=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.noGutters,j=e.as,b=void 0===j?"div":j,m=Object(c.a)(e,["bsPrefix","className","noGutters","as"]),u=Object(o.a)(t,"row"),h=u+"-cols",f=[];return d.forEach((function(e){var a,t=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&f.push(""+h+n+"-"+a)})),l.a.createElement(b,Object(n.a)({ref:a},m,{className:r.a.apply(void 0,[s,u,i&&"no-gutters"].concat(f))}))}));j.displayName="Row",j.defaultProps={noGutters:!1},a.a=j},944:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(15),r=t.n(s),i=t(1),l=t.n(i),o=t(18),d=t(70),j=t(925),b=t(291),m=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.variant,d=e.as,j=void 0===d?"img":d,b=Object(c.a)(e,["bsPrefix","className","variant","as"]),m=Object(o.a)(t,"card-img");return l.a.createElement(j,Object(n.a)({ref:a,className:r()(i?m+"-"+i:m,s)},b))}));m.displayName="CardImg",m.defaultProps={variant:null};var u=m,h=Object(j.a)("h5"),f=Object(j.a)("h6"),O=Object(d.a)("card-body"),x=Object(d.a)("card-title",{Component:h}),p=Object(d.a)("card-subtitle",{Component:f}),v=Object(d.a)("card-link",{Component:"a"}),g=Object(d.a)("card-text",{Component:"p"}),N=Object(d.a)("card-header"),E=Object(d.a)("card-footer"),y=Object(d.a)("card-img-overlay"),w=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,d=e.bg,j=e.text,m=e.border,u=e.body,h=e.children,f=e.as,x=void 0===f?"div":f,p=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(o.a)(t,"card"),g=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return l.a.createElement(b.a.Provider,{value:g},l.a.createElement(x,Object(n.a)({ref:a},p,{className:r()(s,v,d&&"bg-"+d,j&&"text-"+j,m&&"border-"+m)}),u?l.a.createElement(O,null,h):h))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=u,w.Title=x,w.Subtitle=p,w.Body=O,w.Link=v,w.Text=g,w.Header=N,w.Footer=E,w.ImgOverlay=y;a.a=w},953:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(15),r=t.n(s),i=t(1),l=t.n(i),o=t(59),d=t(53),j=t(18),b=t(293),m=t(941),u=t(925),h=t(70),f=t(108),O=Object(u.a)("h4");O.displayName="DivStyledAsH4";var x=Object(h.a)("alert-heading",{Component:O}),p=Object(h.a)("alert-link",{Component:f.a}),v={show:!0,transition:b.a,closeLabel:"Close alert"},g=l.a.forwardRef((function(e,a){var t=Object(o.a)(e,{show:"onClose"}),s=t.bsPrefix,i=t.show,u=t.closeLabel,h=t.className,f=t.children,O=t.variant,x=t.onClose,p=t.dismissible,v=t.transition,g=Object(c.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),N=Object(j.a)(s,"alert"),E=Object(d.a)((function(e){x&&x(!1,e)})),y=!0===v?b.a:v,w=l.a.createElement("div",Object(n.a)({role:"alert"},y?void 0:g,{ref:a,className:r()(h,N,O&&N+"-"+O,p&&N+"-dismissible")}),p&&l.a.createElement(m.a,{onClick:E,label:u}),f);return y?l.a.createElement(y,Object(n.a)({unmountOnExit:!0},g,{ref:void 0,in:i}),w):i?w:null}));g.displayName="Alert",g.defaultProps=v,g.Link=p,g.Heading=x,a.a=g}}]);
//# sourceMappingURL=61.8c452d6a.chunk.js.map