(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[123],{2506:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(1),r=t.n(c),n=t(948),l=t(947),o=t(946),d=t(2),i=t(295);a.default=function(){return Object(s.jsxs)(r.a.Fragment,{children:[Object(s.jsx)(i.a,{}),Object(s.jsx)("div",{className:"auth-wrapper",children:Object(s.jsxs)("div",{className:"auth-content",children:[Object(s.jsxs)("div",{className:"auth-bg",children:[Object(s.jsx)("span",{className:"r"}),Object(s.jsx)("span",{className:"r s"}),Object(s.jsx)("span",{className:"r s"}),Object(s.jsx)("span",{className:"r"})]}),Object(s.jsx)(n.a,{className:"borderless",children:Object(s.jsx)(l.a,{className:"align-items-center text-center",children:Object(s.jsx)(o.a,{children:Object(s.jsxs)(n.a.Body,{className:"card-body",children:[Object(s.jsx)("div",{className:"mb-4",children:Object(s.jsx)("i",{className:"feather icon-lock auth-icon"})}),Object(s.jsx)("h3",{className:"mb-4 f-w-400",children:"Change Password"}),Object(s.jsx)("div",{className:"input-group mb-2",children:Object(s.jsx)("input",{type:"password",className:"form-control",placeholder:"Current Password"})}),Object(s.jsx)("div",{className:"input-group mb-2",children:Object(s.jsx)("input",{type:"password",className:"form-control",placeholder:"New Password"})}),Object(s.jsx)("div",{className:"input-group mb-4",children:Object(s.jsx)("input",{type:"password",className:"form-control",placeholder:"Re-Type New Password"})}),Object(s.jsx)("button",{className:"btn btn-primary mb-4",children:"Change password"}),Object(s.jsxs)("p",{className:"mb-0 text-muted",children:["Don\u2019t have an account? ",Object(s.jsx)(d.c,{to:"/auth/signup-1",children:"Signup"})]})]})})})})]})})]})}},930:function(e,a,t){"use strict";var s=t(4),c=t(1),r=t.n(c),n=t(15),l=t.n(n);a.a=function(e){return r.a.forwardRef((function(a,t){return r.a.createElement("div",Object(s.a)({},a,{ref:t,className:l()(a.className,e)}))}))}},946:function(e,a,t){"use strict";var s=t(4),c=t(7),r=t(15),n=t.n(r),l=t(1),o=t.n(l),d=t(18),i=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.as,b=void 0===l?"div":l,j=Object(c.a)(e,["bsPrefix","className","as"]),m=Object(d.a)(t,"col"),u=[],p=[];return i.forEach((function(e){var a,t,s,c=j[e];if(delete j[e],"object"===typeof c&&null!=c){var r=c.span;a=void 0===r||r,t=c.offset,s=c.order}else a=c;var n="xs"!==e?"-"+e:"";a&&u.push(!0===a?""+m+n:""+m+n+"-"+a),null!=s&&p.push("order"+n+"-"+s),null!=t&&p.push("offset"+n+"-"+t)})),u.length||u.push(m),o.a.createElement(b,Object(s.a)({},j,{ref:a,className:n.a.apply(void 0,[r].concat(u,p))}))}));b.displayName="Col",a.a=b},947:function(e,a,t){"use strict";var s=t(4),c=t(7),r=t(15),n=t.n(r),l=t(1),o=t.n(l),d=t(18),i=["xl","lg","md","sm","xs"],b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.noGutters,b=e.as,j=void 0===b?"div":b,m=Object(c.a)(e,["bsPrefix","className","noGutters","as"]),u=Object(d.a)(t,"row"),p=u+"-cols",f=[];return i.forEach((function(e){var a,t=m[e];delete m[e];var s="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&f.push(""+p+s+"-"+a)})),o.a.createElement(j,Object(s.a)({ref:a},m,{className:n.a.apply(void 0,[r,u,l&&"no-gutters"].concat(f))}))}));b.displayName="Row",b.defaultProps={noGutters:!1},a.a=b},948:function(e,a,t){"use strict";var s=t(4),c=t(7),r=t(15),n=t.n(r),l=t(1),o=t.n(l),d=t(18),i=t(70),b=t(930),j=t(291),m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.variant,i=e.as,b=void 0===i?"img":i,j=Object(c.a)(e,["bsPrefix","className","variant","as"]),m=Object(d.a)(t,"card-img");return o.a.createElement(b,Object(s.a)({ref:a,className:n()(l?m+"-"+l:m,r)},j))}));m.displayName="CardImg",m.defaultProps={variant:null};var u=m,p=Object(b.a)("h5"),f=Object(b.a)("h6"),O=Object(i.a)("card-body"),h=Object(i.a)("card-title",{Component:p}),x=Object(i.a)("card-subtitle",{Component:f}),v=Object(i.a)("card-link",{Component:"a"}),N=Object(i.a)("card-text",{Component:"p"}),g=Object(i.a)("card-header"),y=Object(i.a)("card-footer"),w=Object(i.a)("card-img-overlay"),P=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.bg,b=e.text,m=e.border,u=e.body,p=e.children,f=e.as,h=void 0===f?"div":f,x=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(d.a)(t,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return o.a.createElement(j.a.Provider,{value:N},o.a.createElement(h,Object(s.a)({ref:a},x,{className:n()(r,v,i&&"bg-"+i,b&&"text-"+b,m&&"border-"+m)}),u?o.a.createElement(O,null,p):p))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=u,P.Title=h,P.Subtitle=x,P.Body=O,P.Link=v,P.Text=N,P.Header=g,P.Footer=y,P.ImgOverlay=w;a.a=P}}]);
//# sourceMappingURL=123.4bfa6c7a.chunk.js.map