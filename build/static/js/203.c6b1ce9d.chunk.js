(this["webpackJsonpdatta-able-react-hook"]=this["webpackJsonpdatta-able-react-hook"]||[]).push([[203],{2643:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r.n(t),l=r(942),o=r(940),n=r(944),s=r(1337),i=r.n(s),h=r(0);var j=function(){var e=function(){for(var e=[],a=[],r=[],t=0;t<100;t++)e.push({x:t,y:Math.sin(t/10)}),a.push({x:t,y:.25*Math.sin(t/10)+.5}),r.push({x:t,y:.5*Math.cos(t/10)});return[{values:e,key:"Sine Wave",color:"#A389D4"},{values:r,key:"Cosine Wave",color:"#04a9f5"},{values:a,key:"Another sine wave",color:"#1de9b6",area:!0}]}();return Object(h.jsx)(c.a.Fragment,{children:c.a.createElement(i.a,{xAxis:{tickFormat:function(e){return e},axisLabel:"Time (ms)"},yAxis:{axisLabel:"Voltage (v)",tickFormat:function(e){return parseFloat(e).toFixed(2)}},type:"lineChart",datum:e,x:"x",y:"y",height:300,renderEnd:function(){console.log("renderEnd")}})})},d=[{key:"Cumulative Return",values:[{label:"A",value:-29.765957771107,color:"#3ebfea"},{label:"B",value:10,color:"#04a9f5"},{label:"C",value:32.807804682612,color:"#ff8a65"},{label:"D",value:196.45946739256,color:"#1de9b6"},{label:"E",value:.25434030906893,color:"#4C5667"},{label:"F",value:-98.079782601442,color:"#69CEC6"},{label:"G",value:-13.925743130903,color:"#a389d4"},{label:"H",value:-5.1387322875705,color:"#FE8A7D"}]}],y=function(){return Object(h.jsx)(i.a,{tooltip:{enabled:!0},type:"discreteBarChart",datum:d,x:"label",y:"value",height:300,showValues:!0})},u=[{key:"One",y:29,color:"#ff8a65"},{key:"Two",y:0,color:"#f4c22b"},{key:"Three",y:32,color:"#04a9f5"},{key:"Four",y:196,color:"#3ebfea"},{key:"Five",y:2,color:"#4F5467"},{key:"Six",y:98,color:"#1de9b6"},{key:"Seven",y:13,color:"#a389d4"},{key:"Eight",y:5,color:"#FE8A7D"}],b=function(){return Object(h.jsx)(i.a,{id:"chart",height:300,type:"pieChart",datum:u,x:"key",y:"y",donut:!0,labelType:"percent"})},x=[{key:"One",y:29,color:"#ff8a65"},{key:"Two",y:0,color:"#f4c22b"},{key:"Three",y:32,color:"#04a9f5"},{key:"Four",y:196,color:"#3ebfea"},{key:"Five",y:2,color:"#4F5467"},{key:"Six",y:98,color:"#1de9b6"},{key:"Seven",y:13,color:"#a389d4"},{key:"Eight",y:5,color:"#FE8A7D"}],O=function(){return Object(h.jsx)(i.a,{id:"chart",height:300,type:"pieChart",datum:x,x:"key",y:"y"})};function f(e,a){return Math.floor(Math.random()*(a-e+1)+e)}var k=function(){var e=function(){for(var e=[],a=[],r=[],t=35+35*Math.random(),c=0;c<t;c++)e.push({x:c,y:f(0,60)}),a.push({x:c,y:f(0,100)}),r.push({x:c,y:f(0,30)});return[{values:e,key:"Stream #0",color:"#A389D4"},{values:r,key:"Stream #1",color:"#04a9f5"},{values:a,key:"Stream #3",color:"#1de9b6",area:!0}]}();return Object(h.jsx)(i.a,{type:"multiBarChart",datum:e,x:"x",y:"y",height:300,showValues:!0,groupSpacing:.2})};a.default=function(){return Object(h.jsx)(c.a.Fragment,{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(o.a,{md:6,children:Object(h.jsxs)(n.a,{children:[Object(h.jsx)(n.a.Header,{children:Object(h.jsx)(n.a.Title,{as:"h5",children:"Line Chart"})}),Object(h.jsx)(n.a.Body,{children:Object(h.jsx)(j,{})})]})}),Object(h.jsx)(o.a,{md:6,children:Object(h.jsxs)(n.a,{children:[Object(h.jsx)(n.a.Header,{children:Object(h.jsx)(n.a.Title,{as:"h5",children:"Discrete Bar Chart"})}),Object(h.jsx)(n.a.Body,{children:Object(h.jsx)(y,{})})]})}),Object(h.jsx)(o.a,{sm:12,children:Object(h.jsxs)(n.a,{children:[Object(h.jsx)(n.a.Header,{children:Object(h.jsx)(n.a.Title,{as:"h5",children:"Stacked/Grouped Multi-Bar Chart"})}),Object(h.jsx)(n.a.Body,{children:Object(h.jsx)(k,{})})]})}),Object(h.jsx)(o.a,{md:6,children:Object(h.jsxs)(n.a,{children:[Object(h.jsx)(n.a.Header,{children:Object(h.jsx)(n.a.Title,{as:"h5",children:"Pie Basic Chart"})}),Object(h.jsx)(n.a.Body,{className:"text-center",children:Object(h.jsx)(O,{})})]})}),Object(h.jsx)(o.a,{md:6,children:Object(h.jsxs)(n.a,{children:[Object(h.jsx)(n.a.Header,{children:Object(h.jsx)(n.a.Title,{as:"h5",children:"Donut Chart"})}),Object(h.jsx)(n.a.Body,{className:"text-center",children:Object(h.jsx)(b,{})})]})})]})})}}}]);
//# sourceMappingURL=203.c6b1ce9d.chunk.js.map