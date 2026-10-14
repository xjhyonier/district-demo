"use strict";(self.webpackChunkan_admin=self.webpackChunkan_admin||[]).push([[395],{78003:(function(I,u,t){t.r(u);var w=t(62997),E=t.n(w),O=t(43222),k=t(45814),s=t(30758),C=t(49197),o=t(86070),f,r="ruQX",T=C.Ay.div(f||(f=E()([`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 10;
  display: flex;
  align-items: `,`;
  justify-content: center;
  padding: 10px;
  opacity: `,`;
  pointer-events: `,`;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  .container {
    background: white;
    width: 100%;
    max-width: 800px;
    `,`
    border-radius: `,`;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: `,`;
    transform: `,`;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .header {
    padding: 8px 12px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  }

  .title {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1a202c;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .tag {
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    background: #f0f8ff;
    color: #1890ff;
    border: 1px solid #d6e4ff;
  }

  .sidebar-close {
    height: 32px;
    padding: 0 12px;
    border-radius: 16px;
    border: none;
    background: #f5f5f5;
    color: #666;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    min-width: 80px;
  }

  .sidebar-close:hover {
    background: #e6e6e6;
    color: #333;
  }

  .sidebar-close:active {
    background: #d9d9d9;
    transform: scale(0.95);
  }

  .content {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 768px) {
    .container {
      max-width: 100%;
      max-height: 100%;
      border-radius: `,`;
    }

    .content {
      padding: 16px 8px;
    }
  }

  @media (max-width: 480px) {
    .container {
      border-radius: `,`;
    }

    .content {
      padding: 12px 6px;
    }
  }
`])),function(n){return n.$variant==="center"?"center":"flex-end"},function(n){return n.$isOpen?1:0},function(n){return n.$isOpen?"auto":"none"},function(n){return n.$fullHeight?"height: 100%;":"max-height: 100%;"},function(n){return n.$variant==="center"?"16px":"16px 16px 0 0"},function(n){return n.$variant==="center"?"0 8px 32px rgba(0, 0, 0, 0.2)":"0 -8px 32px rgba(0, 0, 0, 0.2)"},function(n){return n.$variant==="center"?n.$isOpen?"scale(1)":"scale(0.95)":n.$isOpen?"translateY(0)":"translateY(100%)"},function(n){return n.$variant==="center"?"12px":"12px 12px 0 0"},function(n){return n.$variant==="center"?"8px":"8px 8px 0 0"}),D=function(e){var d=e.isOpen,$=e.onClose,p=e.title,M=p===void 0?"\u8BE6\u60C5":p,_=e.tag,j=e.children,P=e.className,m=e.contentScrollable,L=m===void 0?!0:m,i=e.onContentScroll,h=e.reachTopThreshold,x=h===void 0?20:h,v=e.historyLoadDebounceMs,b=v===void 0?250:v,R=e.contentRef,g=e.variant,S=g===void 0?"bottom":g,y=e.fullHeight,N=y===void 0?!1:y;(0,s.useEffect)(function(){if(d){var a=document.body.style.overflow,c=document.documentElement.style.overflow;return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",function(){document.body.style.overflow=a,document.documentElement.style.overflow=c}}},[d]);var U=function(c){c.stopPropagation()},l=(0,s.useRef)(null),A=(0,s.useCallback)(function(a){i&&i(a);var c=a.currentTarget,B=c.scrollTop<=x;B&&(l.current&&(clearTimeout(l.current),l.current=null),l.current=window.setTimeout(function(){i&&i(a),l.current=null},b))},[i,x,b]);return(0,o.jsx)(T,{$isOpen:d,$variant:S,$fullHeight:N,className:P,_nk:"".concat(r,"11"),children:(0,o.jsxs)("div",{className:"container",onClick:U,_nk:"".concat(r,"21"),children:[(0,o.jsxs)("div",{className:"header",_nk:"".concat(r,"22"),children:[(0,o.jsxs)("h3",{className:"title",_nk:"".concat(r,"31"),children:[M,_&&(0,o.jsx)("span",{className:"tag",_nk:"".concat(r,"41"),children:_})]}),(0,o.jsxs)("div",{className:"sidebar-close",onClick:$,_nk:"".concat(r,"23"),children:[(0,o.jsx)(k.gc,{icon:O.GRI,_nk:"".concat(r,"51")}),"\u5173\u95ED"]})]}),(0,o.jsx)("div",{className:"content",style:{overflowY:L?"auto":"hidden"},onScroll:A,ref:R,_nk:"".concat(r,"24"),children:j})]})})};u.default=D})}]);
