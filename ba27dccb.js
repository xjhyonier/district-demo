"use strict";(self.webpackChunkan_admin=self.webpackChunkan_admin||[]).push([[4433],{13847:(function(H,l,e){e.r(l);var j=e(55472),d=e.n(j),D=e(62997),_=e.n(D),s=e(30758),r=e(49197),n=e(86070),u,m,c,p,f,t="8OAX",C=r.Ay.div(u||(u=_()([`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 180px;
`]))),v=r.Ay.div(m||(m=_()([`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
`]))),M=r.Ay.div(c||(c=_()([`
  width: 100%;
  height: 16px;
  background: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`]))),T=r.Ay.div(p||(p=_()([`
  height: 100%;
  background: linear-gradient(90deg, #1890ff 0%, #40a9ff 100%);
  width: `,`%;
  transition: width
    `,`;
  border-radius: 8px;
`])),function(a){return a.animated?Math.min(a.percentage,100):0},function(a){return a.animated?"0.75s ease-in-out":"0.3s ease"}),B=r.Ay.div(f||(f=_()([`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  font-weight: 500;
  color: `,`;
  z-index: 1;
`])),function(a){return a.percentage>50?"white":"#333"}),k=function(h){var E=h.followers,o=h.targetFollowers,i=o>0?E/o*100:0,w=(0,s.useState)(!1),g=d()(w,2),y=g[0],F=g[1],U=(0,s.useState)(0),A=d()(U,2),b=A[0],L=A[1],W=function(P,I,R){var K=performance.now(),S=function z(V){var X=V-K,O=Math.min(X/R,1),G=P+(I-P)*O;L(Math.round(G*100)/100),O<1&&requestAnimationFrame(z)};requestAnimationFrame(S)};return(0,s.useEffect)(function(){var x=setTimeout(function(){F(!0),W(0,i,750)},300);return function(){return clearTimeout(x)}},[i]),(0,n.jsxs)(C,{_nk:"".concat(t,"11"),children:[(0,n.jsx)(v,{_nk:"".concat(t,"21"),children:(0,n.jsxs)("span",{_nk:"".concat(t,"31"),children:["\u5173\u6CE8\u4EBA\u6570\uFF1A",E,"\u4EBA"]})}),(0,n.jsx)(v,{_nk:"".concat(t,"22"),children:(0,n.jsxs)("span",{_nk:"".concat(t,"32"),children:["\u5E94\u5173\u6CE8\u4EBA\u6570\uFF1A",o,"\u4EBA"]})}),(0,n.jsxs)(M,{_nk:"".concat(t,"41"),children:[(0,n.jsx)(T,{percentage:i,animated:y,_nk:"".concat(t,"51")}),(0,n.jsxs)(B,{percentage:b,_nk:"".concat(t,"61"),children:[b.toFixed(1),"%"]})]})]})};l.default=k})}]);
