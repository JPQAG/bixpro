(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[66],{1212:function(e,t,a){"use strict";t.a=a.p+"static/media/l1.b0d3fde5.jpg"},1299:function(e,t,a){"use strict";t.a=a.p+"static/media/l2.0d9f124c.jpg"},1300:function(e,t,a){"use strict";t.a=a.p+"static/media/l3.e03a3320.jpg"},1301:function(e,t,a){"use strict";t.a=a.p+"static/media/l4.ced56c75.jpg"},1302:function(e,t,a){"use strict";t.a=a.p+"static/media/l5.363fa5d7.jpg"},1303:function(e,t,a){"use strict";t.a=a.p+"static/media/l6.e00c75e9.jpg"},1515:function(e,t,a){"use strict";var c=a(29),i=a(1),s=a.n(i),l=a(944),n=a(945),r=a(1686),o=a(1687),d=a.n(o),j=a(2),b=a(0),m=function(e){var t,a=e.images,o=e.texts,m=e.singleItem,u=e.videos,x=e.heading,A=e.subheading,g=e.showThumbnails,p=e.theme,O=e.backdropClosesModal;t=a?"images":o?"texts":"videos";var I=Object(i.useState)(!1),f=Object(c.a)(I,2),E=f[0],k=f[1],y=Object(i.useState)(0),S=Object(c.a)(y,2),M=S[0],C=S[1],G=Object(i.useState)(t),Y=Object(c.a)(G,1)[0],v=function(e,t){e.preventDefault(),C(t),k(!0)},Q=function(){C((function(e){return e+1}))},B=function(e){C(e)},z=function(){M!==e[Y].length-1&&Q()};return Object(b.jsx)(s.a.Fragment,{children:Object(b.jsxs)("div",{className:"section",children:[x&&Object(b.jsx)("h2",{children:x}),A&&Object(b.jsx)("p",{children:A}),function(){if("images"===Y){if(!a)return;var e;return m?(e=a.filter((function(e){return e.useForDemo})).map((function(e,t){return Object(b.jsx)("a",{href:e.src,className:Object(r.css)(h.thumbnail,h[e.orientation]),onClick:function(e){return v(e,t)},children:Object(b.jsx)("div",{className:"img-thumbnail",children:Object(b.jsx)("img",{src:e.thumbnail,className:Object(r.css)(h.source),alt:""})})},t)})),Object(b.jsx)("div",{className:Object(r.css)(h.gallery),children:e})):(e=a.filter((function(e){return e.useForDemo})).map((function(e,t){return Object(b.jsx)(l.a,{xl:2,lg:3,md:4,sm:6,xs:12,className:"mb-1",children:Object(b.jsx)("a",{href:e.src,className:Object(r.css)(h.thumbnail,h[e.orientation]),onClick:function(e){return v(e,t)},children:Object(b.jsx)("div",{className:"img-thumbnail",children:Object(b.jsx)("img",{src:e.thumbnail,className:Object(r.css)(h.source),alt:""})})})},t)})),Object(b.jsx)("div",{className:Object(r.css)(h.gallery),children:Object(b.jsx)(n.a,{children:e})}))}if("texts"===Y){var t;if(!o)return;return m?(t=o.map((function(e,t){return Object(b.jsx)("p",{className:Object(r.css)(h.text_thumbail),onClick:function(e){return v(e,t)},children:e},t)})),Object(b.jsx)("div",{className:Object(r.css)(h.gallery),children:t})):(t=o.map((function(e,t){return Object(b.jsx)(l.a,{xl:2,lg:3,md:4,sm:6,xs:12,className:"mb-1",children:Object(b.jsx)("p",{className:Object(r.css)(h.text_thumbail),onClick:function(e){return v(e,t)},children:e})},t)})),Object(b.jsx)("div",{className:Object(r.css)(h.gallery),children:t}))}var c;if(u)return m?(c=u.map((function(e,t){var a="https://img.youtube.com/vi/".concat(e,"/0.jpg");return Object(b.jsx)(j.b,{to:"#",className:Object(r.css)(h.video_thumbnail),onClick:function(e){return v(e,t)},children:Object(b.jsx)("div",{className:"img-thumbnail",children:Object(b.jsx)("img",{src:a,className:Object(r.css)(h.source_video),alt:""})})},t)})),Object(b.jsx)("div",{className:Object(r.css)(h.gallery),children:c})):(c=u.map((function(e,t){var a="https://img.youtube.com/vi/".concat(e,"/0.jpg");return Object(b.jsx)(l.a,{xl:2,lg:3,md:4,sm:6,xs:12,className:"mb-1",children:Object(b.jsx)(j.b,{to:"#",className:Object(r.css)(h.video_thumbnail),onClick:function(e){return v(e,t)},children:Object(b.jsx)("div",{className:"img-thumbnail",children:Object(b.jsx)("img",{src:a,className:Object(r.css)(h.source_video),alt:""})})})},t)})),Object(b.jsx)("div",{className:Object(r.css)(h.gallery),children:Object(b.jsx)(n.a,{children:c})}))}(),Object(b.jsx)(d.a,{currentItem:M,items:{type:Y,items:e[Y]},isOpen:E,onClickImage:function(){return z},onClickNext:Q,onClickPrev:function(){C((function(e){return e-1}))},onClickThumbnail:function(){return B},onClose:function(){C(0),k(!1)},showThumbnails:g,theme:p,backdropClosesModal:O})]})})};m.displayName="Gallery";var u=2,x=4,h=r.StyleSheet.create({gallery:{marginRight:-u,overflow:"hidden","@media (min-width: 500px)":{marginRight:-x}},thumbnail:{boxSizing:"border-box",display:"block",float:"left",lineHeight:0,paddingRight:u,paddingBottom:u,overflow:"hidden","@media (min-width: 500px)":{paddingRight:x,paddingBottom:x}},video_thumbnail:{width:"50%",height:"258px",boxSizing:"border-box",display:"block",float:"left",lineHeight:0,paddingRight:u,paddingBottom:u,overflow:"hidden","@media (min-width: 500px)":{paddingRight:x,paddingBottom:x}},text_thumbail:{cursor:"pointer",height:"200px","text-align":"justify","font-size":"16px",width:"46%",padding:"10px",margin:"10px",boxSizing:"border-box",display:"block",float:"left",overflow:"scroll",border:"solid 1px #E6E6E8","border-radius":"4px",color:"darkgray","@media (min-width: 500px)":{}},landscape:{width:"30%"},square:{paddingBottom:0,width:"40%","@media (min-width: 500px)":{paddingBottom:0}},source:{border:0,display:"block",height:"auto",maxWidth:"100%",width:"auto"},source_video:{border:0,height:"auto",maxWidth:"90%",width:"auto"}});t.a=m},2619:function(e,t,a){"use strict";a.r(t);var c=a(29),i=a(1),s=a.n(i),l=a(945),n=a(944),r=a(946),o=a(316),d=a(2243),j=a.n(d),b=a(1515),m=a(940),u=a(1212),x=a(1299),h=a(1300),A=a(1301),g=a(1302),p=a(1303),O=a.p+"static/media/sl1.edc9cb13.jpg",I=a.p+"static/media/sl2.ffc70461.jpg",f="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowM0RDNTVBNkU3MjgxMUU4QjExRThCRkM5RUM4Q0IwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowM0RDNTVBN0U3MjgxMUU4QjExRThCRkM5RUM4Q0IwRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzREM1NUE0RTcyODExRThCMTFFOEJGQzlFQzhDQjBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAzREM1NUE1RTcyODExRThCMTFFOEJGQzlFQzhDQjBFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJ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",E=a.p+"static/media/sl4.62513add.jpg",k=a.p+"static/media/sl5.c527fc06.jpg",y=a.p+"static/media/sl6.fb6d1e62.jpg",S=a(0);t.default=function(){var e,t,a=Object(i.useState)(!0),d=Object(c.a)(a,1)[0],M=Object(i.useState)(!1),C=Object(c.a)(M,2),G=C[0],Y=C[1],v=Object(i.useState)(!1),Q=Object(c.a)(v,2),B=Q[0],z=Q[1];return G&&(t=Object(S.jsx)("div",{style:{height:"350px"},children:Object(S.jsx)(j.a,{data:[{url:u.a,type:"photo",altTag:"placeholder image"},{url:x.a,type:"photo",altTag:"placeholder image"},{url:h.a,type:"photo",altTag:"placeholder image"},{url:A.a,type:"photo",altTag:"placeholder image"},{url:g.a,type:"photo",altTag:"placeholder image"}],startIndex:0,showResourceCount:!0,onCloseCallback:function(){return Y(!1)}})})),B&&(e=Object(S.jsx)("div",{style:{height:"350px"},children:Object(S.jsx)(j.a,{data:[{url:"https://www.youtube.com/embed/IkyZHPnfFnE",type:"video",altTag:"placeholder video"},{url:"https://www.youtube.com/embed/IkyZHPnfFnE",type:"video",altTag:"placeholder video"},{url:"https://www.youtube.com/embed/IkyZHPnfFnE",type:"video",altTag:"placeholder video"},{url:"https://www.youtube.com/embed/IkyZHPnfFnE",type:"video",altTag:"placeholder video"},{url:"https://www.youtube.com/embed/IkyZHPnfFnE",type:"video",altTag:"placeholder video"}],startIndex:0,showResourceCount:!0,onCloseCallback:function(){return z(!1)}})})),Object(S.jsxs)(s.a.Fragment,{children:[Object(S.jsx)(l.a,{children:Object(S.jsx)(n.a,{sm:12,children:Object(S.jsx)(m.a,{message:"For more info please check the components's official documentation",link:"https://www.npmjs.com/package/react-image-video-lightbox"})})}),Object(S.jsx)(l.a,{children:Object(S.jsxs)(n.a,{children:[Object(S.jsxs)(r.a,{children:[Object(S.jsx)(r.a.Header,{children:Object(S.jsx)(r.a.Title,{as:"h5",children:"Single Images"})}),Object(S.jsx)(r.a.Body,{children:Object(S.jsxs)(l.a,{children:[Object(S.jsx)(n.a,{xl:2,lg:3,sm:4,xs:12,children:Object(S.jsx)(b.a,{images:[{src:u.a,thumbnail:O,caption:"Gradient Able Image 1",useForDemo:!0}],backdropClosesModal:!0,singleItem:d})}),Object(S.jsx)(n.a,{xl:2,lg:3,sm:4,xs:12,children:Object(S.jsx)(b.a,{images:[{src:x.a,thumbnail:I,caption:"Gradient Able Image 2",useForDemo:!0}],backdropClosesModal:!0,singleItem:d})}),Object(S.jsx)(n.a,{xl:2,lg:3,sm:4,xs:12,children:Object(S.jsx)(b.a,{images:[{src:h.a,thumbnail:f,caption:"Gradient Able Image 3",useForDemo:!0}],backdropClosesModal:!0,singleItem:d})}),Object(S.jsx)(n.a,{xl:2,lg:3,sm:4,xs:12,children:Object(S.jsx)(b.a,{images:[{src:A.a,thumbnail:E,caption:"Gradient Able Image 4",useForDemo:!0}],backdropClosesModal:!0,singleItem:d})}),Object(S.jsx)(n.a,{xl:2,lg:3,sm:4,xs:12,children:Object(S.jsx)(b.a,{images:[{src:g.a,thumbnail:k,caption:"Gradient Able Image 5",useForDemo:!0}],backdropClosesModal:!0,singleItem:d})}),Object(S.jsx)(n.a,{xl:2,lg:3,sm:4,xs:12,children:Object(S.jsx)(b.a,{images:[{src:p.a,thumbnail:y,caption:"Gradient Able Image 6",useForDemo:!0}],backdropClosesModal:!0,singleItem:d})})]})})]}),Object(S.jsxs)(r.a,{children:[Object(S.jsx)(r.a.Header,{children:Object(S.jsx)(r.a.Title,{as:"h5",children:"Image Gallery"})}),Object(S.jsx)(r.a.Body,{children:Object(S.jsx)(b.a,{images:[{src:u.a,thumbnail:O,caption:"Gallery Image 1",useForDemo:!0},{src:x.a,thumbnail:I,caption:"Gallery Image 2",useForDemo:!0},{src:h.a,thumbnail:f,caption:"Gallery Image 3",useForDemo:!0},{src:A.a,thumbnail:E,caption:"Gallery Image 4",useForDemo:!0},{src:g.a,thumbnail:k,caption:"Gallery Image 5",useForDemo:!0},{src:p.a,thumbnail:y,caption:"Gallery Image 6",useForDemo:!0}],backdropClosesModal:!0})})]}),Object(S.jsxs)(r.a,{children:[Object(S.jsx)(r.a.Header,{children:Object(S.jsx)(r.a.Title,{as:"h5",children:"Video Gallery"})}),Object(S.jsx)(r.a.Body,{children:Object(S.jsx)(b.a,{videos:["0LjlawWMXCw","ZQ264Axbjxg","bYbV_PFdfQs","IkyZHPnfFnE","HjV2aWgavdo","Rh03jAsRHQM"],backdropClosesModal:!0})})]}),Object(S.jsxs)(r.a,{children:[Object(S.jsx)(r.a.Header,{children:Object(S.jsx)(r.a.Title,{as:"h5",children:"Inline Gallery"})}),Object(S.jsx)(r.a.Body,{children:Object(S.jsxs)(l.a,{children:[Object(S.jsxs)(n.a,{md:6,children:[Object(S.jsx)(o.a,{onClick:function(){return Y(!0)},children:"Inline Photo Gallery"}),t]}),Object(S.jsxs)(n.a,{md:6,children:[Object(S.jsx)(o.a,{onClick:function(){return z(!0)},children:"Inline Video Gallery"}),e]})]})})]})]})})]})}},940:function(e,t,a){"use strict";var c=a(1),i=a.n(c),s=a(960),l=a(0);t.a=function(e){return Object(l.jsx)(i.a.Fragment,{children:Object(l.jsxs)(s.a,{variant:"warning",children:[e.message,Object(l.jsx)(s.a.Link,{href:e.link,target:"_blank",className:"float-right",children:"Demo & Documentation"})]})})}}}]);
//# sourceMappingURL=66.d10f9ffd.chunk.js.map