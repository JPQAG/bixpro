(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[69],{1125:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1);function r(e){var t=function(e){var t=Object(n.useRef)(e);return t.current=e,t}(e);Object(n.useEffect)((function(){return function(){return t.current()}}),[])}},1160:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(1),r=a(305),c=a(1125),o=Math.pow(2,31)-1;function s(e,t,a){var n=a-Date.now();e.current=n<=o?setTimeout(t,n):setTimeout((function(){return s(e,t,a)}),o)}function l(){var e=Object(r.a)(),t=Object(n.useRef)();return Object(c.a)((function(){return clearTimeout(t.current)})),Object(n.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(a(),r<=o?t.current=setTimeout(n,r):s(t,n,Date.now()+r))},clear:a}}),[])}},1535:function(e,t,a){"use strict";var n=a(4),r=a(7),c=a(53),o=a(1),s=a.n(o);var l=function(e,t){var a=Object(o.useRef)(!0);Object(o.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},i=a(311),u=a(1160),d=a(15),f=a.n(d),b=a(298),v=a(164),m=a(17),p=a.n(m),O=a(59),j=a(70),h=Object(j.a)("carousel-caption"),N=a(18),x=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"div":a,o=e.bsPrefix,l=e.children,i=e.className,u=Object(r.a)(e,["as","bsPrefix","children","className"]),d=f()(i,Object(N.a)(o,"carousel-item"));return s.a.createElement(c,Object(n.a)({ref:t},u,{className:d}),l)}));x.displayName="CarouselItem";var y=x,E=a(168),C=a(108),w=a(300),g={bsPrefix:p.a.string,as:p.a.elementType,slide:p.a.bool,fade:p.a.bool,controls:p.a.bool,indicators:p.a.bool,activeIndex:p.a.number,onSelect:p.a.func,onSlide:p.a.func,onSlid:p.a.func,interval:p.a.number,keyboard:p.a.bool,pause:p.a.oneOf(["hover",!1]),wrap:p.a.bool,touch:p.a.bool,prevIcon:p.a.node,prevLabel:p.a.string,nextIcon:p.a.node,nextLabel:p.a.string},k={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:s.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:s.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function P(e,t){var a=Object(O.a)(e,{activeIndex:"onSelect"}),d=a.as,m=void 0===d?"div":d,p=a.bsPrefix,j=a.slide,h=a.fade,x=a.controls,y=a.indicators,g=a.activeIndex,k=a.onSelect,P=a.onSlide,S=a.onSlid,I=a.interval,R=a.keyboard,T=a.onKeyDown,L=a.pause,M=a.onMouseOver,D=a.onMouseOut,A=a.wrap,H=a.touch,B=a.onTouchStart,G=a.onTouchMove,K=a.onTouchEnd,F=a.prevIcon,J=a.prevLabel,X=a.nextIcon,q=a.nextLabel,z=a.className,Q=a.children,U=Object(r.a)(a,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),V=Object(N.a)(p,"carousel"),W=Object(o.useRef)(null),Y=Object(o.useState)("next"),Z=Y[0],$=Y[1],_=Object(o.useState)(!1),ee=_[0],te=_[1],ae=Object(o.useState)(!1),ne=ae[0],re=ae[1],ce=Object(o.useState)(g||0),oe=ce[0],se=ce[1];ne||g===oe||(W.current?$(W.current):$((g||0)>oe?"next":"prev"),j&&re(!0),se(g||0)),Object(o.useEffect)((function(){W.current&&(W.current=null)}));var le,ie=0;Object(E.a)(Q,(function(e,t){++ie,t===g&&(le=e.props.interval)}));var ue=Object(i.a)(le),de=Object(o.useCallback)((function(e){if(!ne){var t=oe-1;if(t<0){if(!A)return;t=ie-1}W.current="prev",k&&k(t,e)}}),[ne,oe,k,A,ie]),fe=Object(c.a)((function(e){if(!ne){var t=oe+1;if(t>=ie){if(!A)return;t=0}W.current="next",k&&k(t,e)}})),be=Object(o.useRef)();Object(o.useImperativeHandle)(t,(function(){return{element:be.current,prev:de,next:fe}}));var ve=Object(c.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(be.current)&&fe()})),me="next"===Z?"left":"right";l((function(){j||(P&&P(oe,me),S&&S(oe,me))}),[oe]);var pe=V+"-item-"+Z,Oe=V+"-item-"+me,je=Object(o.useCallback)((function(e){Object(w.a)(e),P&&P(oe,me)}),[P,oe,me]),he=Object(o.useCallback)((function(){re(!1),S&&S(oe,me)}),[S,oe,me]),Ne=Object(o.useCallback)((function(e){if(R&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void de(e);case"ArrowRight":return e.preventDefault(),void fe(e)}T&&T(e)}),[R,T,de,fe]),xe=Object(o.useCallback)((function(e){"hover"===L&&te(!0),M&&M(e)}),[L,M]),ye=Object(o.useCallback)((function(e){te(!1),D&&D(e)}),[D]),Ee=Object(o.useRef)(0),Ce=Object(o.useRef)(0),we=Object(u.a)(),ge=Object(o.useCallback)((function(e){Ee.current=e.touches[0].clientX,Ce.current=0,"hover"===L&&te(!0),B&&B(e)}),[L,B]),ke=Object(o.useCallback)((function(e){e.touches&&e.touches.length>1?Ce.current=0:Ce.current=e.touches[0].clientX-Ee.current,G&&G(e)}),[G]),Pe=Object(o.useCallback)((function(e){if(H){var t=Ce.current;Math.abs(t)>40&&(t>0?de(e):fe(e))}"hover"===L&&we.set((function(){te(!1)}),I||void 0),K&&K(e)}),[H,L,de,fe,we,I,K]),Se=null!=I&&!ee&&!ne,Ie=Object(o.useRef)();Object(o.useEffect)((function(){var e,t;if(Se)return Ie.current=window.setInterval(document.visibilityState?ve:fe,null!=(e=null!=(t=ue.current)?t:I)?e:void 0),function(){null!==Ie.current&&clearInterval(Ie.current)}}),[Se,fe,ue,I,ve]);var Re=Object(o.useMemo)((function(){return y&&Array.from({length:ie},(function(e,t){return function(e){k&&k(t,e)}}))}),[y,ie,k]);return s.a.createElement(m,Object(n.a)({ref:be},U,{onKeyDown:Ne,onMouseOver:xe,onMouseOut:ye,onTouchStart:ge,onTouchMove:ke,onTouchEnd:Pe,className:f()(z,V,j&&"slide",h&&V+"-fade")}),y&&s.a.createElement("ol",{className:V+"-indicators"},Object(E.b)(Q,(function(e,t){return s.a.createElement("li",{key:t,className:t===oe?"active":void 0,onClick:Re?Re[t]:void 0})}))),s.a.createElement("div",{className:V+"-inner"},Object(E.b)(Q,(function(e,t){var a=t===oe;return j?s.a.createElement(v.e,{in:a,onEnter:a?je:void 0,onEntered:a?he:void 0,addEndListener:b.a},(function(t){return s.a.cloneElement(e,{className:f()(e.props.className,a&&"entered"!==t&&pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Oe)})})):s.a.cloneElement(e,{className:f()(e.props.className,a&&"active")})}))),x&&s.a.createElement(s.a.Fragment,null,(A||0!==g)&&s.a.createElement(C.a,{className:V+"-control-prev",onClick:de},F,J&&s.a.createElement("span",{className:"sr-only"},J)),(A||g!==ie-1)&&s.a.createElement(C.a,{className:V+"-control-next",onClick:fe},X,q&&s.a.createElement("span",{className:"sr-only"},q))))}var S=s.a.forwardRef(P);S.displayName="Carousel",S.propTypes=g,S.defaultProps=k,S.Caption=h,S.Item=y;t.a=S},930:function(e,t,a){"use strict";var n=a(4),r=a(1),c=a.n(r),o=a(15),s=a.n(o);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(n.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},944:function(e,t,a){"use strict";var n=a(4),r=a(7),c=a(17),o=a.n(c),s=a(1),l=a.n(s),i=a(15),u=a.n(i),d={label:o.a.string.isRequired,onClick:o.a.func},f=l.a.forwardRef((function(e,t){var a=e.label,c=e.onClick,o=e.className,s=Object(r.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(n.a)({ref:t,type:"button",className:u()("close",o),onClick:c},s),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},a))}));f.displayName="CloseButton",f.propTypes=d,f.defaultProps={label:"Close"},t.a=f},946:function(e,t,a){"use strict";var n=a(4),r=a(7),c=a(15),o=a.n(c),s=a(1),l=a.n(s),i=a(18),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.as,d=void 0===s?"div":s,f=Object(r.a)(e,["bsPrefix","className","as"]),b=Object(i.a)(a,"col"),v=[],m=[];return u.forEach((function(e){var t,a,n,r=f[e];if(delete f[e],"object"===typeof r&&null!=r){var c=r.span;t=void 0===c||c,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+b+o:""+b+o+"-"+t),null!=n&&m.push("order"+o+"-"+n),null!=a&&m.push("offset"+o+"-"+a)})),v.length||v.push(b),l.a.createElement(d,Object(n.a)({},f,{ref:t,className:o.a.apply(void 0,[c].concat(v,m))}))}));d.displayName="Col",t.a=d},947:function(e,t,a){"use strict";var n=a(4),r=a(7),c=a(15),o=a.n(c),s=a(1),l=a.n(s),i=a(18),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.noGutters,d=e.as,f=void 0===d?"div":d,b=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(i.a)(a,"row"),m=v+"-cols",p=[];return u.forEach((function(e){var t,a=b[e];delete b[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&p.push(""+m+n+"-"+t)})),l.a.createElement(f,Object(n.a)({ref:t},b,{className:o.a.apply(void 0,[c,v,s&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},948:function(e,t,a){"use strict";var n=a(4),r=a(7),c=a(15),o=a.n(c),s=a(1),l=a.n(s),i=a(18),u=a(70),d=a(930),f=a(291),b=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(i.a)(a,"card-img");return l.a.createElement(d,Object(n.a)({ref:t,className:o()(s?b+"-"+s:b,c)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,m=Object(d.a)("h5"),p=Object(d.a)("h6"),O=Object(u.a)("card-body"),j=Object(u.a)("card-title",{Component:m}),h=Object(u.a)("card-subtitle",{Component:p}),N=Object(u.a)("card-link",{Component:"a"}),x=Object(u.a)("card-text",{Component:"p"}),y=Object(u.a)("card-header"),E=Object(u.a)("card-footer"),C=Object(u.a)("card-img-overlay"),w=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.bg,d=e.text,b=e.border,v=e.body,m=e.children,p=e.as,j=void 0===p?"div":p,h=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),N=Object(i.a)(a,"card"),x=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return l.a.createElement(f.a.Provider,{value:x},l.a.createElement(j,Object(n.a)({ref:t},h,{className:o()(c,N,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),v?l.a.createElement(O,null,m):m))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=v,w.Title=j,w.Subtitle=h,w.Body=O,w.Link=N,w.Text=x,w.Header=y,w.Footer=E,w.ImgOverlay=C;t.a=w},962:function(e,t,a){"use strict";var n=a(4),r=a(7),c=a(15),o=a.n(c),s=a(1),l=a.n(s),i=a(59),u=a(53),d=a(18),f=a(293),b=a(944),v=a(930),m=a(70),p=a(108),O=Object(v.a)("h4");O.displayName="DivStyledAsH4";var j=Object(m.a)("alert-heading",{Component:O}),h=Object(m.a)("alert-link",{Component:p.a}),N={show:!0,transition:f.a,closeLabel:"Close alert"},x=l.a.forwardRef((function(e,t){var a=Object(i.a)(e,{show:"onClose"}),c=a.bsPrefix,s=a.show,v=a.closeLabel,m=a.className,p=a.children,O=a.variant,j=a.onClose,h=a.dismissible,N=a.transition,x=Object(r.a)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),y=Object(d.a)(c,"alert"),E=Object(u.a)((function(e){j&&j(!1,e)})),C=!0===N?f.a:N,w=l.a.createElement("div",Object(n.a)({role:"alert"},C?void 0:x,{ref:t,className:o()(m,y,O&&y+"-"+O,h&&y+"-dismissible")}),h&&l.a.createElement(b.a,{onClick:E,label:v}),p);return C?l.a.createElement(C,Object(n.a)({unmountOnExit:!0},x,{ref:void 0,in:s}),w):s?w:null}));x.displayName="Alert",x.defaultProps=N,x.Link=h,x.Heading=j,t.a=x}}]);
//# sourceMappingURL=69.a7be885e.chunk.js.map