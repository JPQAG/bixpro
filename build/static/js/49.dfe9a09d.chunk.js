(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[49],{1085:function(e,a,t){"use strict";var n=t(9),c=t(0),s=t(29),r=t(1),i=t.n(r),l=t(913),o=t(946),d=t(1148),j=t(2),b=t(86);a.a=function(e){var a,t,m,u,O,h=e.isOption,f=e.title,x=e.children,p=e.cardClass,v=e.optionClass,N=Object(r.useState)(!1),g=Object(s.a)(N,2),E=g[0],y=g[1],w=Object(r.useState)(!1),C=Object(s.a)(w,2),P=C[0],k=C[1],I=Object(r.useState)(!1),R=Object(s.a)(I,2),L=R[0],M=R[1],z=Object(r.useState)(!1),F=Object(s.a)(z,2),D=F[0],S=F[1],T=Object(b.a)(),B=[];return h&&(m=Object(c.jsx)("div",{className:"card-header-right "+v,children:Object(c.jsxs)(l.a,{alignRight:!0,className:"btn-group card-option",children:[Object(c.jsx)(l.a.Toggle,{id:"dropdown-basic",className:"btn-icon",children:Object(c.jsx)("i",{className:"feather icon-more-horizontal"})}),Object(c.jsxs)(l.a.Menu,{as:"ul",className:"list-unstyled card-option",children:[Object(c.jsxs)(l.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return y(!E)},children:[Object(c.jsx)("i",{className:E?"feather icon-minimize":"feather icon-maximize"}),Object(c.jsxs)(j.b,{to:"#",children:[" ",E?"Restore":"Maximize"," "]})]}),Object(c.jsxs)(l.a.Item,{as:"li",className:"dropdown-item",onClick:function(){return k(!P)},children:[Object(c.jsx)("i",{className:P?"feather icon-plus":"feather icon-minus"}),Object(c.jsxs)(j.b,{to:"#",children:[" ",P?"Expand":"Collapse"," "]})]}),Object(c.jsxs)(l.a.Item,{as:"li",className:"dropdown-item",onClick:function(){M(!0),setInterval((function(){M(!1)}),3e3)},children:[Object(c.jsx)("i",{className:"feather icon-refresh-cw"}),Object(c.jsx)(j.b,{to:"#",children:" Reload "})]}),Object(c.jsxs)(l.a.Item,{as:"li",className:"dropdown-item",onClick:function(){S(!0)},children:[Object(c.jsx)("i",{className:"feather icon-trash"}),Object(c.jsx)(j.b,{to:"#",children:" Remove "})]})]})]})})),u=Object(c.jsxs)(o.a.Header,{children:[Object(c.jsx)(o.a.Title,{as:"h5",children:f}),m]}),E&&(B=[].concat(Object(n.a)(B),["full-card"]),a={position:"fixed",top:0,left:0,right:0,width:T.width,height:T.height}),L&&(B=[].concat(Object(n.a)(B),["card-load"]),t=Object(c.jsx)("div",{className:"card-loader",children:Object(c.jsx)("i",{className:"pct-loader1 anim-rotate"})})),D&&(B=[].concat(Object(n.a)(B),["d-none"])),p&&(B=[].concat(Object(n.a)(B),[p])),O=Object(c.jsxs)(o.a,{className:B.join(" "),style:a,children:[u,Object(c.jsx)(d.a,{in:!P,children:Object(c.jsx)("div",{children:Object(c.jsx)(o.a.Body,{children:x})})}),t]}),Object(c.jsx)(i.a.Fragment,{children:O})}},1148:function(e,a,t){"use strict";var n,c=t(4),s=t(7),r=t(15),i=t.n(r),l=t(302),o=t(298),d=t(1),j=t.n(d),b=t(163),m=t(301),u=t(300),O={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(e,a){var t=a["offset"+e[0].toUpperCase()+e.slice(1)],n=O[e];return t+parseInt(Object(l.a)(a,n[0]),10)+parseInt(Object(l.a)(a,n[1]),10)}var f=((n={})[b.c]="collapse",n[b.d]="collapsing",n[b.b]="collapsing",n[b.a]="collapse show",n),x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:h},p=j.a.forwardRef((function(e,a){var t=e.onEnter,n=e.onEntering,r=e.onEntered,l=e.onExit,O=e.onExiting,x=e.className,p=e.children,v=e.dimension,N=void 0===v?"height":v,g=e.getDimensionValue,E=void 0===g?h:g,y=Object(s.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),w="function"===typeof N?N():N,C=Object(d.useMemo)((function(){return Object(m.a)((function(e){e.style[w]="0"}),t)}),[w,t]),P=Object(d.useMemo)((function(){return Object(m.a)((function(e){var a="scroll"+w[0].toUpperCase()+w.slice(1);e.style[w]=e[a]+"px"}),n)}),[w,n]),k=Object(d.useMemo)((function(){return Object(m.a)((function(e){e.style[w]=null}),r)}),[w,r]),I=Object(d.useMemo)((function(){return Object(m.a)((function(e){e.style[w]=E(w,e)+"px",Object(u.a)(e)}),l)}),[l,E,w]),R=Object(d.useMemo)((function(){return Object(m.a)((function(e){e.style[w]=null}),O)}),[w,O]);return j.a.createElement(b.e,Object(c.a)({ref:a,addEndListener:o.a},y,{"aria-expanded":y.role?y.in:null,onEnter:C,onEntering:P,onEntered:k,onExit:I,onExiting:R}),(function(e,a){return j.a.cloneElement(p,Object(c.a)({},a,{className:i()(x,p.props.className,f[e],"width"===w&&"width")}))}))}));p.defaultProps=x,a.a=p},1342:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(15),r=t.n(s),i=t(1),l=t.n(i),o=t(18),d=t(108),j=l.a.forwardRef((function(e,a){var t=e.active,s=e.disabled,i=e.className,o=e.style,j=e.activeLabel,b=e.children,m=Object(c.a)(e,["active","disabled","className","style","activeLabel","children"]),u=t||s?"span":d.a;return l.a.createElement("li",{ref:a,style:o,className:r()(i,"page-item",{active:t,disabled:s})},l.a.createElement(u,Object(n.a)({className:"page-link",disabled:s},m),b,t&&j&&l.a.createElement("span",{className:"sr-only"},j)))}));j.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},j.displayName="PageItem";var b=j;function m(e,a,t){function n(e){var n=e.children,s=Object(c.a)(e,["children"]);return l.a.createElement(j,s,l.a.createElement("span",{"aria-hidden":"true"},n||a),l.a.createElement("span",{className:"sr-only"},t))}return void 0===t&&(t=e),n.displayName=e,n}var u=m("First","\xab"),O=m("Prev","\u2039","Previous"),h=m("Ellipsis","\u2026","More"),f=m("Next","\u203a"),x=m("Last","\xbb"),p=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,d=e.size,j=Object(c.a)(e,["bsPrefix","className","children","size"]),b=Object(o.a)(t,"pagination");return l.a.createElement("ul",Object(n.a)({ref:a},j,{className:r()(s,b,d&&b+"-"+d)}),i)}));p.First=u,p.Prev=O,p.Ellipsis=h,p.Item=b,p.Next=f,p.Last=x;a.a=p},2280:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(1),s=t.n(c),r=t(1342),i=t(945),l=t(942),o=t(939),d=t(1085);a.default=function(){for(var e=[],a=[],t=[],c=1;c<=5;c++)e.push(Object(n.jsx)(r.a.Item,{children:c},c));for(var j=1;j<=5;j++)a.push(Object(n.jsx)(r.a.Item,{active:3===j,children:j},j));for(var b=1;b<=5;b++)t.push(Object(n.jsx)(r.a.Item,{disabled:4===b,children:b},b));return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(i.a,{children:Object(n.jsx)(l.a,{sm:12,children:Object(n.jsx)(o.a,{message:"For more info please check the components's official documentation",link:"https://react-bootstrap.github.io/components/pagination/"})})}),Object(n.jsx)(i.a,{children:Object(n.jsx)(l.a,{children:Object(n.jsxs)(d.a,{title:"Pagination",children:[Object(n.jsx)(r.a,{children:e}),Object(n.jsx)("h5",{className:"mt-5",children:"Working With Icons"}),Object(n.jsx)("hr",{}),Object(n.jsxs)(r.a,{children:[Object(n.jsx)(r.a.First,{}),Object(n.jsx)(r.a.Prev,{}),e,Object(n.jsx)(r.a.Next,{}),Object(n.jsx)(r.a.Last,{})]}),Object(n.jsx)("h5",{className:"mt-5",children:"More Options"}),Object(n.jsx)("hr",{}),Object(n.jsxs)(r.a,{children:[Object(n.jsx)(r.a.Prev,{}),Object(n.jsx)(r.a.Item,{children:1}),Object(n.jsx)(r.a.Ellipsis,{}),Object(n.jsx)(r.a.Item,{children:11}),Object(n.jsx)(r.a.Item,{active:!0,children:12}),Object(n.jsx)(r.a.Item,{children:13}),Object(n.jsx)(r.a.Ellipsis,{}),Object(n.jsx)(r.a.Item,{children:20}),Object(n.jsx)(r.a.Next,{})]}),Object(n.jsx)("h5",{className:"mt-5",children:"Active"}),Object(n.jsx)("hr",{}),Object(n.jsx)(r.a,{children:a}),Object(n.jsx)("h5",{className:"mt-5",children:"Disabled"}),Object(n.jsx)("hr",{}),Object(n.jsx)(r.a,{children:t}),Object(n.jsx)("h5",{className:"mt-5",children:"Sizing"}),Object(n.jsx)("hr",{}),Object(n.jsx)(r.a,{children:e}),Object(n.jsx)(r.a,{size:"lg",children:e}),Object(n.jsx)(r.a,{size:"sm",children:e})]})})})]})}},927:function(e,a,t){"use strict";var n=t(4),c=t(1),s=t.n(c),r=t(15),i=t.n(r);a.a=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},939:function(e,a,t){"use strict";var n=t(0),c=t(1),s=t.n(c),r=t(954);a.a=function(e){return Object(n.jsx)(s.a.Fragment,{children:Object(n.jsxs)(r.a,{variant:"warning",children:[e.message,Object(n.jsx)(r.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}},941:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(17),r=t.n(s),i=t(1),l=t.n(i),o=t(15),d=t.n(o),j={label:r.a.string.isRequired,onClick:r.a.func},b=l.a.forwardRef((function(e,a){var t=e.label,s=e.onClick,r=e.className,i=Object(c.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(n.a)({ref:a,type:"button",className:d()("close",r),onClick:s},i),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},t))}));b.displayName="CloseButton",b.propTypes=j,b.defaultProps={label:"Close"},a.a=b},942:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(15),r=t.n(s),i=t(1),l=t.n(i),o=t(18),d=["xl","lg","md","sm","xs"],j=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,j=void 0===i?"div":i,b=Object(c.a)(e,["bsPrefix","className","as"]),m=Object(o.a)(t,"col"),u=[],O=[];return d.forEach((function(e){var a,t,n,c=b[e];if(delete b[e],"object"===typeof c&&null!=c){var s=c.span;a=void 0===s||s,t=c.offset,n=c.order}else a=c;var r="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+m+r:""+m+r+"-"+a),null!=n&&O.push("order"+r+"-"+n),null!=t&&O.push("offset"+r+"-"+t)})),u.length||u.push(m),l.a.createElement(j,Object(n.a)({},b,{ref:a,className:r.a.apply(void 0,[s].concat(u,O))}))}));j.displayName="Col",a.a=j},945:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(15),r=t.n(s),i=t(1),l=t.n(i),o=t(18),d=["xl","lg","md","sm","xs"],j=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.noGutters,j=e.as,b=void 0===j?"div":j,m=Object(c.a)(e,["bsPrefix","className","noGutters","as"]),u=Object(o.a)(t,"row"),O=u+"-cols",h=[];return d.forEach((function(e){var a,t=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&h.push(""+O+n+"-"+a)})),l.a.createElement(b,Object(n.a)({ref:a},m,{className:r.a.apply(void 0,[s,u,i&&"no-gutters"].concat(h))}))}));j.displayName="Row",j.defaultProps={noGutters:!1},a.a=j},946:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(15),r=t.n(s),i=t(1),l=t.n(i),o=t(18),d=t(70),j=t(927),b=t(291),m=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.variant,d=e.as,j=void 0===d?"img":d,b=Object(c.a)(e,["bsPrefix","className","variant","as"]),m=Object(o.a)(t,"card-img");return l.a.createElement(j,Object(n.a)({ref:a,className:r()(i?m+"-"+i:m,s)},b))}));m.displayName="CardImg",m.defaultProps={variant:null};var u=m,O=Object(j.a)("h5"),h=Object(j.a)("h6"),f=Object(d.a)("card-body"),x=Object(d.a)("card-title",{Component:O}),p=Object(d.a)("card-subtitle",{Component:h}),v=Object(d.a)("card-link",{Component:"a"}),N=Object(d.a)("card-text",{Component:"p"}),g=Object(d.a)("card-header"),E=Object(d.a)("card-footer"),y=Object(d.a)("card-img-overlay"),w=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,d=e.bg,j=e.text,m=e.border,u=e.body,O=e.children,h=e.as,x=void 0===h?"div":h,p=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(o.a)(t,"card"),N=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return l.a.createElement(b.a.Provider,{value:N},l.a.createElement(x,Object(n.a)({ref:a},p,{className:r()(s,v,d&&"bg-"+d,j&&"text-"+j,m&&"border-"+m)}),u?l.a.createElement(f,null,O):O))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=u,w.Title=x,w.Subtitle=p,w.Body=f,w.Link=v,w.Text=N,w.Header=g,w.Footer=E,w.ImgOverlay=y;a.a=w},954:function(e,a,t){"use strict";var n=t(4),c=t(7),s=t(15),r=t.n(s),i=t(1),l=t.n(i),o=t(59),d=t(53),j=t(18),b=t(293),m=t(941),u=t(927),O=t(70),h=t(108),f=Object(u.a)("h4");f.displayName="DivStyledAsH4";var x=Object(O.a)("alert-heading",{Component:f}),p=Object(O.a)("alert-link",{Component:h.a}),v={show:!0,transition:b.a,closeLabel:"Close alert"},N=l.a.forwardRef((function(e,a){var t=Object(o.a)(e,{show:"onClose"}),s=t.bsPrefix,i=t.show,u=t.closeLabel,O=t.className,h=t.children,f=t.variant,x=t.onClose,p=t.dismissible,v=t.transition,N=Object(c.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),g=Object(j.a)(s,"alert"),E=Object(d.a)((function(e){x&&x(!1,e)})),y=!0===v?b.a:v,w=l.a.createElement("div",Object(n.a)({role:"alert"},y?void 0:N,{ref:a,className:r()(O,g,f&&g+"-"+f,p&&g+"-dismissible")}),p&&l.a.createElement(m.a,{onClick:E,label:u}),h);return y?l.a.createElement(y,Object(n.a)({unmountOnExit:!0},N,{ref:void 0,in:i}),w):i?w:null}));N.displayName="Alert",N.defaultProps=v,N.Link=p,N.Heading=x,a.a=N}}]);
//# sourceMappingURL=49.dfe9a09d.chunk.js.map