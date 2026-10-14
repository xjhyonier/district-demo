"use strict";(self.webpackChunkan_admin=self.webpackChunkan_admin||[]).push([[395,1332,5265],{72859:(function($,b,i){i.r(b),i.d(b,{default:function(){return Ye}});var j=i(55472),f=i.n(j),C=i(62997),s=i.n(C),g=i(67321),_=i(43222),m=i(45814),A=i(54794),S=i(17447),p=i(30758),M=i(96675);function x(cn){const Y=(0,p.useRef)(0),[X,U]=(0,p.useState)(cn),V=(0,p.useCallback)(dn=>{cancelAnimationFrame(Y.current),Y.current=requestAnimationFrame(()=>{U(dn)})},[]);return(0,M.A)(()=>{cancelAnimationFrame(Y.current)}),[X,V]}var d=x,O=i(43298),h=i(27323),k=i(93268),v=i(87047),R=(0,v.A)(p.useLayoutEffect),B=h.A?R:k.A;function G(cn){const[Y,X]=d(()=>{const U=(0,O.e)(cn);return U?{width:U.clientWidth,height:U.clientHeight}:void 0});return B(()=>{const U=(0,O.e)(cn);if(!U)return;const V=new S.A(dn=>{dn.forEach(jn=>{const{clientWidth:Rn,clientHeight:fn}=jn.target;X({width:Rn,height:fn})})});return V.observe(U),()=>{V.disconnect()}},[],cn),Y}var K=G,a=i(98530),e=i(49197),u=i(20875),l=i(82258),D=i(20878),n=i(86070),Q,T,L,W,F,H,P,z,y,Z,xn,tn,vn,rn,on,Nn,Yn,Qn,Hn,Zn,Jn,Gn,Xn,Vn,qn,ne,ee,te,re,oe,t="geC9",ze=e.Ay.div(Q||(Q=s()([`
  flex: 1;
  overflow-y: auto;
  background-color: transparent;
`]))),ae=e.Ay.div(T||(T=s()([`
  padding: 8px 16px;
  border-bottom: 1px solid rgba(229, 231, 235, 0.5);
`]))),ie=e.Ay.input(L||(L=s()([`
  width: 100%;
  padding: 10px 15px 10px 40px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  height: 42px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
    font-size: 14px;
  }
`]))),ce=e.Ay.div(W||(W=s()([`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  font-size: 14px;
`]))),se=e.Ay.div(F||(F=s()([`
  position: relative;
`]))),le=e.Ay.button(H||(H=s()([`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f3f4f6;
    color: #6b7280;
  }
`]))),Le=e.Ay.div(P||(P=s()([`
  padding: 12px;
`]))),On=e.Ay.div(z||(z=s()([`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 10px;
  background: #ffffff;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #f9fafb;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`]))),wn=e.Ay.div(y||(y=s()([`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  width: 100%;
`]))),An=e.Ay.div(Z||(Z=s()([`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`]))),Pn=e.Ay.div(xn||(xn=s()([`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`]))),We=e.Ay.div(tn||(tn=s()([`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 10px;
  flex-shrink: 0;
  min-width: fit-content;
`]))),ue=e.Ay.div(vn||(vn=s()([`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  flex-wrap: wrap;
  min-width: 0;
  flex: 0 1 auto;
`]))),de=e.Ay.div(rn||(rn=s()([`
  font-weight: 600;
  font-size: 16px;
  color: #111827;
  flex: 1 1 auto;
  min-width: 0;
  margin-right: 6px;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
`]))),Dn=e.Ay.span(on||(on=s()([`
  background: #ffe4cb;
  color: #f68206;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
`]))),Fe=e.Ay.div(Nn||(Nn=s()([`
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  margin-bottom: 4px;
`]))),fe=e.Ay.div(Yn||(Yn=s()([`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-wrap: wrap;
  flex: 1;
  min-width: 0;
  max-width: 100%;
`]))),Ue=e.Ay.div(Qn||(Qn=s()([`
  font-size: 14px;
  color: #6b7280;
  margin-right: 3px;
  // white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`]))),Tn=e.Ay.div(Hn||(Hn=s()([`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  border-top: 1px solid #e5e7eb;
  padding-top: 8px;
  margin-top: 6px;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;

  @media (max-width: 480px) {
    gap: 6px;
  }
`]))),an=e.Ay.button(Zn||(Zn=s()([`
  background: #f4f4f4;
  color: #006ff9;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  flex: 1;
  min-width: 70px;
  white-space: nowrap;
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
    min-width: 60px;
    gap: 2px;
  }

  @media (max-width: 320px) {
    min-width: 50px;
    padding: 3px 6px;
    font-size: 11px;

    > span {
      display: none;
    }
  }

  &:hover {
    background: #e8f1ff;
    color: #0052cc;
  }

  &:active {
    background: #d9edff;
  }
`]))),Ke=e.Ay.div(Jn||(Jn=s()([`
  flex: 1 1 0;
  overflow: hidden;
  background-color: white;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0 16px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 10px;
  height: auto;
  min-height: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 10px;
  }
`]))),$e=e.Ay.div(Gn||(Gn=s()([`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-bottom: 12px;
  flex: 1 1 0;
  min-height: 0;
  .ant-table-wrapper .ant-table-pagination {
    padding-right: 15px;
  }
`]))),pe=e.Ay.div(Xn||(Xn=s()([`
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
`]))),Mn=e.Ay.span(Vn||(Vn=s()([`
  font-weight: 600;
  font-size: 15px;
  color: #111827;
`]))),mn=e.Ay.span(qn||(qn=s()([`
  font-size: 14px;
  color: #6b7280;
  margin-left: auto;
  text-align: right;
  flex-shrink: 0;
`]))),_n=e.Ay.a(ne||(ne=s()([`
  font-size: 14px;
  color: #6b7280;
  margin-left: auto;
  text-decoration: none;
  text-align: right;
  flex-shrink: 0;
`]))),gn=e.Ay.div(ee||(ee=s()([`
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-top: 6px;
`]))),yn=e.Ay.span(te||(te=s()([`
  font-size: 14px;
  color: #374151;
  font-weight: 400;
  flex-shrink: 0;
`]))),bn=e.Ay.span(re||(re=s()([`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
`]))),In=e.Ay.div(oe||(oe=s()([`
  width: 16px;
  height: 16px;
  border: 2px solid #d1d5db;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`]))),Ne=function(Y){var X,U=Y.onContactChat,V=Y.displayMode,dn=V===void 0?"table":V,jn=Y.perspective,Rn=jn===void 0?"regulator":jn,fn=Y.qyzzMC,Qe=(0,p.useState)(""),he=f()(Qe,2),q=he[0],pn=he[1],He=(0,p.useState)([]),xe=f()(He,2),Bn=xe[0],Ze=xe[1],Je=(0,p.useState)(!1),ve=f()(Je,2),zn=ve[0],me=ve[1],Ge=(0,p.useState)([]),_e=f()(Ge,2),Cn=_e[0],Xe=_e[1],Ve=(0,p.useState)(!1),ge=f()(Ve,2),Ln=ge[0],ye=ge[1],nn=(0,A.A)(q,{wait:500}),qe=(0,p.useState)(!1),be=f()(qe,2),je=be[0],En=be[1],nt=(0,p.useState)(null),Ce=f()(nt,2),hn=Ce[0],et=Ce[1],tt=(0,u.useSearchParams)(),rt=f()(tt,1),ot=rt[0],I="",at=ot.get("qyzzMC")||"",Wn=(fn!=null?fn:at)||"",it=(0,p.useState)([]),ct=f()(it,1),kn=ct[0],st=(0,p.useState)(!1),lt=f()(st,1),Fn=lt[0],Ee=p.useRef(null),sn=K(Ee),ut=(0,p.useState)(420),ke=f()(ut,2),Un=ke[0],dt=ke[1],ft=(0,p.useState)(1),Se=f()(ft,2),Kn=Se[0],pt=Se[1],ht=(0,p.useState)(10),Oe=f()(ht,2),$n=Oe[0],xt=Oe[1],vt=(0,p.useState)(0),we=f()(vt,2),mt=we[0],_t=we[1],gt=(0,p.useState)(1),Ae=f()(gt,2),yt=Ae[0],bt=Ae[1],jt=(0,p.useState)(10),Pe=f()(jt,2),Ct=Pe[0],Et=Pe[1],kt=(0,p.useState)(1),De=f()(kt,2),St=De[0],Ot=De[1],wt=(0,p.useState)(10),Te=f()(wt,2),At=Te[0],Pt=Te[1],Dt=(0,u.useModel)("userInfoModel"),en=Dt.userInfo,Tt=(0,p.useState)((en==null||(X=en.user)===null||X===void 0?void 0:X.FORMQYZZ)===!0),Me=f()(Tt,2),E=Me[0],Mt=Me[1];(0,p.useEffect)(function(){var o;Mt((en==null||(o=en.user)===null||o===void 0?void 0:o.FORMQYZZ)===!0)},[en]),(0,p.useEffect)(function(){q!==Wn&&pn(Wn)},[Wn]),(0,p.useEffect)(function(){if(E){ye(!0),(0,l.fetchEnterpriseExperts)().then(function(r){var c=(r==null?void 0:r.datas)||(r==null?void 0:r.data)||[];Xe(c)}).finally(function(){return ye(!1)});return}var o={pageNo:Kn,pageSize:$n,nsrmc:q};nn&&(o.nsrmc=nn),me(!0),(0,l.fetchEnterpriseContacts)(o).then(function(r){var c=(r==null?void 0:r.datas)||[];Ze(c),_t((r==null?void 0:r.count)||(r==null?void 0:r.total)||c.length||0)}).finally(function(){me(!1)})},[nn,Rn,I,Kn,$n]),(0,p.useEffect)(function(){var o=(sn==null?void 0:sn.height)||0;o>0&&dt(Math.max(240,o-120))},[sn==null?void 0:sn.height,E,I]);var Ie=function(r){et(r),En(!0)},ln=function(r){var c=(r==null?void 0:r.xnzzYhId)||"",Sn=(r==null?void 0:r.nickname)||"",Be=(r==null?void 0:r.qyzzId)||"",It=(r==null?void 0:r.id)||"",Rt=(r==null?void 0:r.xm)||"",Bt=(r==null?void 0:r.rylxMc)||"";if(!(!Be&&!c)){var zt=E?(0,l.startCustomerSession)({staffId:c,staffName:Sn}):(0,l.startStaffSession)({qyzzId:Be,customerId:It,customerName:Rt});zt.then(function(un){var w=(un==null?void 0:un.datas)||(un==null?void 0:un.data),Lt={id:w==null?void 0:w.id,name:E?w==null?void 0:w.staffName:w==null?void 0:w.customerName,specialization:Bt,companyName:(hn==null?void 0:hn.nsrmc)||"",companyType:"",phone:E?(r==null?void 0:r.mobile)||"":(r==null?void 0:r.sjhm)||"",lastActiveTime:w!=null&&w.modificationDate?new Date(w.modificationDate):new Date,unreadCount:E?w==null?void 0:w.customerUnreadCount:w==null?void 0:w.staffUnreadCount,isOnline:!1};En(!1),U==null||U(Lt)})}},Re=function(r){var c=String(r);return c==="10"?"\u5DE5\u8D38\u4F01\u4E1A":c==="20"?"\u6D88\u9632\u573A\u6240":c==="30"?"\u51FA\u79DF\u623F":c==="60"?"\u6751\u793E":"\u672A\u77E5"};return dn==="table"?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(Ke,{_nk:"".concat(t,"11"),children:[!E&&!I&&(0,n.jsx)(ae,{_nk:"".concat(t,"21"),children:(0,n.jsxs)(se,{_nk:"".concat(t,"31"),children:[(0,n.jsx)(ce,{_nk:"".concat(t,"41"),children:(0,n.jsx)(m.gc,{icon:_.MjD,_nk:"".concat(t,"51")})}),(0,n.jsx)(ie,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u5355\u4F4D\u540D\u79F0",value:q,onChange:function(r){return pn(r.target.value)},_nk:"".concat(t,"61")}),q&&(0,n.jsx)(le,{onClick:function(){return pn("")},_nk:"".concat(t,"71"),children:"\xD7"})]})}),(0,n.jsxs)($e,{ref:Ee,_nk:"".concat(t,"81"),children:[!E&&!I&&(0,n.jsx)(a.A,{rowKey:function(r){return r.id},columns:[{title:"\u5355\u4F4D\u540D\u79F0",dataIndex:"nsrmc",key:"nsrmc",align:"center"},{title:"\u793E\u4F1A\u4FE1\u606F\u4EE3\u7801",dataIndex:"shxydm",key:"shxydm",align:"center",render:function(r){return r||"-"}},{title:"\u4E3B\u7BA1\u673A\u5173",dataIndex:"jgmc",key:"jgmc",align:"center"},{title:"\u6240\u5C5E\u6751\u793E",dataIndex:"csjgmc",key:"csjgmc",align:"center",render:function(r){return r||"-"}},{title:"\u8D23\u4EFB\u4E3B\u4F53\u7C7B\u578B",dataIndex:"qycslx",key:"qycslx",align:"center",render:function(r){return(0,n.jsx)(Dn,{_nk:"".concat(t,"a1"),children:Re(r)})}},{title:"",key:"action",align:"center",render:function(r,c){return(0,n.jsxs)(an,{variant:"chat",onClick:function(){return Ie(c)},title:"\u4E0E ".concat(c.nsrmc," \u5728\u7EBF\u804A\u5929"),_nk:"".concat(t,"b1"),children:[(0,n.jsx)(m.gc,{icon:_.q9p,_nk:"".concat(t,"52")}),(0,n.jsx)("span",{_nk:"".concat(t,"c1"),children:"\u5728\u7EBF\u8054\u7CFB"})]})}}],dataSource:Bn,loading:zn,scroll:{x:"max-content",y:Un},style:{width:"100%"},pagination:{current:Kn,pageSize:$n,total:mt,showSizeChanger:!0,showQuickJumper:!0,hideOnSinglePage:!1,showTotal:function(r,c){return"\u7B2C ".concat(c[0],"-").concat(c[1]," \u6761/\u5171 ").concat(r," \u6761")},onChange:function(r,c){pt(r),xt(c||10)}},_nk:"".concat(t,"91")}),!E&&I&&(0,n.jsx)(a.A,{rowKey:function(r){return r==null?void 0:r.id},columns:[{title:"\u59D3\u540D",dataIndex:"xm",key:"xm",align:"center",render:function(r,c){return(0,n.jsxs)("div",{_nk:"".concat(t,"d1"),children:[(0,n.jsx)(Mn,{_nk:"".concat(t,"e1"),children:(c==null?void 0:c.xm)||""}),(c==null?void 0:c.rylxMc)&&(0,n.jsx)("span",{style:{background:"#ffe4cb",color:"#f68206",padding:"2px 6px",borderRadius:"6px",fontSize:"12px",fontWeight:500,marginLeft:6},_nk:"".concat(t,"c2"),children:c.rylxMc})]})}},{title:"\u624B\u673A\u53F7\u7801",dataIndex:"sjhm",key:"sjhm",align:"center",render:function(r){return(0,g.M)()&&r?(0,n.jsx)(_n,{href:"tel:".concat(r),_nk:"".concat(t,"f1"),children:r}):(0,n.jsx)(mn,{_nk:"".concat(t,"g1"),children:r||""})}},{title:"\u64CD\u4F5C",key:"action",align:"center",render:function(r,c){return(0,n.jsxs)(an,{variant:"chat",onClick:function(){return ln(c)},title:"\u4E0E ".concat((c==null?void 0:c.xm)||""," \u5728\u7EBF\u804A\u5929"),_nk:"".concat(t,"b2"),children:[(0,n.jsx)(m.gc,{icon:_.q9p,_nk:"".concat(t,"53")}),(0,n.jsx)("span",{_nk:"".concat(t,"c3"),children:"\u5728\u7EBF\u8054\u7CFB"})]})}}],dataSource:kn,loading:Fn,scroll:{x:"max-content",y:Un},style:{width:"100%"},pagination:{current:yt,pageSize:Ct,total:kn.length,showSizeChanger:!0,showQuickJumper:!0,hideOnSinglePage:!1,showTotal:function(r,c){return"\u7B2C ".concat(c[0],"-").concat(c[1]," \u6761/\u5171 ").concat(r," \u6761")},onChange:function(r,c){bt(r),Et(c||10)},locale:{items_per_page:"\u6761/\u9875"}},locale:{emptyText:"\u6682\u65E0\u8054\u7CFB\u4EBA"},_nk:"".concat(t,"92")}),E&&(0,n.jsx)(a.A,{rowKey:function(r){return r==null?void 0:r.xnzzYhId},columns:[{title:"\u4E13\u5BB6\u540D\u79F0",dataIndex:"nickname",key:"nickname",align:"center",render:function(r){return(0,n.jsx)(Mn,{_nk:"".concat(t,"e2"),children:r})}},{title:"\u4E13\u5BB6\u7B80\u4ECB",key:"intro",align:"center",render:function(r,c){return(0,n.jsxs)("div",{style:{maxWidth:500,margin:"0 auto"},_nk:"".concat(t,"d2"),children:[(c==null?void 0:c.qualificate)&&(0,n.jsxs)(gn,{_nk:"".concat(t,"h1"),children:[(0,n.jsx)(yn,{_nk:"".concat(t,"i1"),children:"\u4E13\u4E1A\u8D44\u8D28\uFF1A"}),(0,n.jsx)(bn,{_nk:"".concat(t,"j1"),children:(c==null?void 0:c.qualificate)||""})]}),(0,n.jsxs)(gn,{_nk:"".concat(t,"h2"),children:[(0,n.jsx)(yn,{_nk:"".concat(t,"i2"),children:"\u64C5\u957F\u9886\u57DF\uFF1A"}),(0,n.jsx)(bn,{_nk:"".concat(t,"j2"),children:(c==null?void 0:c.expertise)||""})]})]})}},{title:"\u624B\u673A\u53F7\u7801",dataIndex:"mobile",key:"mobile",align:"center",render:function(r){return(0,g.M)()&&r?(0,n.jsx)(_n,{href:"tel:".concat(r),_nk:"".concat(t,"f2"),children:r}):(0,n.jsx)(mn,{_nk:"".concat(t,"g2"),children:r||""})}},{title:"\u64CD\u4F5C",key:"action",align:"center",render:function(r,c){return(0,n.jsxs)(an,{variant:"chat",onClick:function(){return ln(c)},title:"\u4E0E ".concat(c.nickname," \u5728\u7EBF\u804A\u5929"),_nk:"".concat(t,"b3"),children:[(0,n.jsx)(m.gc,{icon:_.q9p,_nk:"".concat(t,"54")}),(0,n.jsx)("span",{_nk:"".concat(t,"c4"),children:"\u54A8\u8BE2"})]})}}],dataSource:Cn.filter(function(o){return nn?(o.nickname||"").includes(nn):!0}),loading:Ln,scroll:{x:"max-content",y:Un},style:{width:"100%"},pagination:{current:St,pageSize:At,total:Cn.length,showSizeChanger:!0,showQuickJumper:!0,hideOnSinglePage:!1,showTotal:function(r,c){return"\u7B2C ".concat(c[0],"-").concat(c[1]," \u6761/\u5171 ").concat(r," \u6761")},onChange:function(r,c){Ot(r),Pt(c||10)}},_nk:"".concat(t,"93")})]})]}),!E&&!I&&(0,n.jsx)(D.default,{isOpen:je,enterprise:hn,onClose:function(){return En(!1)},onSelectPerson:ln,variant:"center",_nk:"".concat(t,"k1")})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(ze,{_nk:"".concat(t,"l1"),children:[!E&&!I&&(0,n.jsx)(ae,{_nk:"".concat(t,"22"),children:(0,n.jsxs)(se,{_nk:"".concat(t,"32"),children:[(0,n.jsx)(ce,{_nk:"".concat(t,"42"),children:(0,n.jsx)(m.gc,{icon:_.MjD,_nk:"".concat(t,"55")})}),(0,n.jsx)(ie,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u5355\u4F4D\u540D\u79F0",value:q,onChange:function(r){return pn(r.target.value)},_nk:"".concat(t,"62")}),q&&(0,n.jsx)(le,{onClick:function(){return pn("")},_nk:"".concat(t,"72"),children:"\xD7"})]})}),(0,n.jsxs)(Le,{_nk:"".concat(t,"m1"),children:[!E&&!I&&zn&&(0,n.jsxs)("div",{style:{padding:"24px",textAlign:"center",color:"#6b7280",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},_nk:"".concat(t,"d3"),children:[(0,n.jsx)(In,{_nk:"".concat(t,"n1")}),"\u52A0\u8F7D\u4E2D\u2026"]}),!E&&!I&&!zn&&Bn.length===0&&(0,n.jsx)("div",{style:{padding:"24px",textAlign:"center",color:"#6b7280",width:"100%"},_nk:"".concat(t,"d4"),children:"\u6682\u65E0\u6570\u636E"}),!E&&!I&&Bn.map(function(o){return(0,n.jsxs)(On,{_nk:"iAr".concat(t,"o1"),children:[(0,n.jsxs)(wn,{_nk:"".concat(t,"p1"),children:[(0,n.jsx)(Pn,{_nk:"".concat(t,"q1"),children:(0,n.jsxs)(An,{_nk:"".concat(t,"r1"),children:[(0,n.jsxs)(ue,{_nk:"".concat(t,"s1"),children:[(0,n.jsx)(de,{_nk:"".concat(t,"t1"),children:o.nsrmc}),(0,n.jsx)(Dn,{_nk:"".concat(t,"a2"),children:Re(o.qycslx)})]}),(0,n.jsx)(fe,{_nk:"".concat(t,"u1"),children:(0,n.jsx)(Fe,{_nk:"".concat(t,"v1"),children:o.shxydm})}),(0,n.jsx)(fe,{_nk:"".concat(t,"u2"),children:(0,n.jsxs)(Ue,{_nk:"".concat(t,"101"),children:[o.jgmc," ",o.csjgmc&&"-".concat(" ",o.csjgmc)]})})]})}),(0,n.jsx)(We,{_nk:"".concat(t,"111")})]}),(0,n.jsx)(Tn,{_nk:"".concat(t,"121"),children:(0,n.jsxs)(an,{variant:"chat",onClick:function(){return Ie(o)},title:"\u4E0E ".concat(o.nsrmc," \u5728\u7EBF\u804A\u5929"),_nk:"".concat(t,"b4"),children:[(0,n.jsx)(m.gc,{icon:_.q9p,_nk:"".concat(t,"56")}),(0,n.jsx)("span",{_nk:"".concat(t,"c5"),children:"\u5728\u7EBF\u8054\u7CFB"})]})})]},o.id)}),!E&&I&&Fn&&(0,n.jsxs)("div",{style:{padding:"24px",textAlign:"center",color:"#6b7280",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},_nk:"".concat(t,"d5"),children:[(0,n.jsx)(In,{_nk:"".concat(t,"n2")}),"\u52A0\u8F7D\u4E2D\u2026"]}),!E&&I&&!Fn&&kn.length===0&&(0,n.jsx)("div",{style:{padding:"24px",textAlign:"center",color:"#6b7280",width:"100%"},_nk:"".concat(t,"d6"),children:"\u6682\u65E0\u8054\u7CFB\u4EBA"}),!E&&I&&kn.map(function(o,r){return(0,n.jsxs)(On,{_nk:"iAr".concat(t,"o2"),children:[(0,n.jsx)(wn,{_nk:"".concat(t,"p2"),children:(0,n.jsx)(Pn,{_nk:"".concat(t,"q2"),children:(0,n.jsx)(An,{_nk:"".concat(t,"r2"),children:(0,n.jsxs)(pe,{_nk:"".concat(t,"131"),children:[(0,n.jsxs)(ue,{_nk:"".concat(t,"s2"),children:[(0,n.jsx)(de,{_nk:"".concat(t,"t2"),children:(o==null?void 0:o.xm)||""}),(o==null?void 0:o.rylxMc)&&(0,n.jsx)(Dn,{_nk:"".concat(t,"a3"),children:o.rylxMc})]}),(0,g.M)()&&o!==null&&o!==void 0&&o.sjhm?(0,n.jsx)(_n,{href:"tel:".concat(o.sjhm),_nk:"".concat(t,"f3"),children:o.sjhm}):(0,n.jsx)(mn,{_nk:"".concat(t,"g3"),children:(o==null?void 0:o.sjhm)||""})]})})})}),(0,n.jsx)(Tn,{_nk:"".concat(t,"122"),children:(0,n.jsxs)(an,{variant:"chat",onClick:function(){return ln(o)},title:"\u4E0E ".concat((o==null?void 0:o.xm)||""," \u5728\u7EBF\u804A\u5929"),_nk:"".concat(t,"b5"),children:[(0,n.jsx)(m.gc,{icon:_.q9p,_nk:"".concat(t,"57")}),(0,n.jsx)("span",{_nk:"".concat(t,"c6"),children:"\u5728\u7EBF\u8054\u7CFB"})]})})]},"person-card-".concat(r))}),E&&Ln&&(0,n.jsxs)("div",{style:{padding:"24px",textAlign:"center",color:"#6b7280",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},_nk:"".concat(t,"d7"),children:[(0,n.jsx)(In,{_nk:"".concat(t,"n3")}),"\u52A0\u8F7D\u4E2D\u2026"]}),E&&!Ln&&Cn.length===0&&(0,n.jsx)("div",{style:{padding:"24px",textAlign:"center",color:"#6b7280",width:"100%"},_nk:"".concat(t,"d8"),children:"\u6682\u65E0\u6570\u636E"}),E&&Cn.filter(function(o){return nn?(o.nickname||"").includes(nn):!0}).map(function(o,r){return(0,n.jsxs)(On,{_nk:"iAr".concat(t,"o3"),children:[(0,n.jsx)(wn,{_nk:"".concat(t,"p3"),children:(0,n.jsx)(Pn,{_nk:"".concat(t,"q3"),children:(0,n.jsx)(An,{_nk:"".concat(t,"r3"),children:(0,n.jsxs)(pe,{_nk:"".concat(t,"132"),children:[(0,n.jsx)(Mn,{_nk:"".concat(t,"e3"),children:o.nickname}),(0,g.M)()&&o.mobile?(0,n.jsx)(_n,{href:"tel:".concat(o.mobile),_nk:"".concat(t,"f4"),children:o.mobile}):(0,n.jsx)(mn,{_nk:"".concat(t,"g4"),children:o.mobile||""})]})})})}),(o==null?void 0:o.qualificate)&&(0,n.jsxs)(gn,{_nk:"".concat(t,"h3"),children:[(0,n.jsx)(yn,{_nk:"".concat(t,"i3"),children:"\u4E13\u4E1A\u8D44\u8D28\uFF1A"}),(0,n.jsx)(bn,{_nk:"".concat(t,"j3"),children:(o==null?void 0:o.qualificate)||""})]}),(0,n.jsxs)(gn,{_nk:"".concat(t,"h4"),children:[(0,n.jsx)(yn,{_nk:"".concat(t,"i4"),children:"\u64C5\u957F\u9886\u57DF\uFF1A"}),(0,n.jsx)(bn,{_nk:"".concat(t,"j4"),children:(o==null?void 0:o.expertise)||""})]}),(0,n.jsx)(Tn,{_nk:"".concat(t,"123"),children:(0,n.jsxs)(an,{variant:"chat",onClick:function(){return ln(o)},title:"\u4E0E ".concat(o.nickname," \u5728\u7EBF\u804A\u5929"),_nk:"".concat(t,"b6"),children:[(0,n.jsx)(m.gc,{icon:_.q9p,_nk:"".concat(t,"58")}),(0,n.jsx)("span",{_nk:"".concat(t,"c7"),children:"\u54A8\u8BE2"})]})})]},"".concat(o.xnzzYhId,"-").concat(r))})]})]}),!E&&!I&&(0,n.jsx)(D.default,{isOpen:je,enterprise:hn,onClose:function(){return En(!1)},onSelectPerson:ln,variant:"center",_nk:"".concat(t,"k2")})]})},Ye=Ne}),20878:(function($,b,i){i.r(b);var j=i(55472),f=i.n(j),C=i(62997),s=i.n(C),g=i(60913),_=i(43222),m=i(45814),A=i(30758),S=i(17173),p=i.n(S),M=i(49197),x=i(78003),d=i(86070),O,h="e1v4",k=M.Ay.div(O||(O=s()([`
  width: 16px;
  height: 16px;
  border: 2px solid #d1d5db;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`]))),v=function(R){var N=R.isOpen,B=R.enterprise,G=R.onClose,K=R.onSelectPerson,a=R.variant,e=a===void 0?"center":a,u=A.useState(!1),l=f()(u,2),D=l[0],n=l[1],Q=A.useState([]),T=f()(Q,2),L=T[0],W=T[1],F=A.useState(null),H=f()(F,2),P=H[0],z=H[1];return A.useEffect(function(){!N||!B||(n(!0),(0,g._Z)({pageNum:1,pageSize:100,searchKey:"",qyzzId:B.qyzzId,rylxDms:[1,3,5,6,7]}).then(function(y){var Z=(y==null?void 0:y.datas)||(y==null?void 0:y.data)||(y==null?void 0:y.list)||[];W(Z)}).catch(function(){return W([])}).finally(function(){return n(!1)}))},[N,B]),(0,d.jsx)(x.default,{isOpen:N,title:B?"".concat(B.nsrmc," \u8054\u7CFB\u4EBA"):"\u8054\u7CFB\u4EBA",onClose:G,contentScrollable:!0,variant:e,_nk:"".concat(h,"11"),children:D?(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"16px"},_nk:"".concat(h,"21"),children:[(0,d.jsx)(k,{_nk:"".concat(h,"31")}),"\u52A0\u8F7D\u4E2D\u2026"]}):L.length===0?(0,d.jsx)("div",{style:{padding:"16px",textAlign:"center",color:"#6b7280"},_nk:"".concat(h,"22"),children:"\u6682\u65E0\u8054\u7CFB\u4EBA"}):(0,d.jsxs)("div",{style:{padding:"8px 12px"},_nk:"".concat(h,"23"),children:[(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1fr 1fr",gap:"8px",padding:"8px 0",borderBottom:"1px solid #e5e7eb",fontWeight:600,color:"#374151",textAlign:"center"},_nk:"".concat(h,"24"),children:[(0,d.jsx)("div",{_nk:"".concat(h,"25"),children:"\u59D3\u540D"}),(0,d.jsx)("div",{_nk:"".concat(h,"26"),children:"\u624B\u673A\u53F7"}),(0,d.jsx)("div",{_nk:"".concat(h,"27"),children:"\u64CD\u4F5C"})]}),(0,d.jsx)("div",{_nk:"".concat(h,"28"),children:L.map(function(y,Z){var xn=(y==null?void 0:y.xm)||"",tn=(y==null?void 0:y.sjhm)||"",vn=(y==null?void 0:y.rylxMc)||"";return(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1fr 1fr",gap:"8px",padding:"10px 0",borderBottom:"1px solid #f3f4f6",alignItems:"center",cursor:"pointer",textAlign:"center"},_nk:"iAr".concat(h,"29"),children:[(0,d.jsxs)("div",{style:{color:"#111827",alignItems:"center",gap:"6px",textAlign:"center"},_nk:"".concat(h,"2a"),children:[(0,d.jsx)("span",{_nk:"".concat(h,"41"),children:xn}),(0,d.jsx)("span",{style:{background:"#ffe4cb",color:"#f68206",padding:"2px 6px",borderRadius:"6px",fontSize:"12px",fontWeight:500,marginLeft:4},_nk:"".concat(h,"42"),children:vn})]}),(0,d.jsxs)("div",{style:{color:"#374151",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},_nk:"".concat(h,"2b"),children:[(0,d.jsx)("span",{_nk:"".concat(h,"43"),children:tn}),tn&&(0,d.jsx)(p(),{text:tn,onCopy:function(){z(Z),window.setTimeout(function(){return z(null)},1500)},_nk:"".concat(h,"51"),children:(0,d.jsx)("button",{type:"button",title:P===Z?"\u5DF2\u590D\u5236":"\u590D\u5236\u624B\u673A\u53F7",style:{border:"none",background:"transparent",cursor:"pointer",color:P===Z?"#10b981":"#6b7280",padding:"2px",borderRadius:"6px"},onMouseEnter:function(on){on.currentTarget.style.background="#f3f4f6"},onMouseLeave:function(on){on.currentTarget.style.background="transparent"},_nk:"".concat(h,"61"),children:(0,d.jsx)(m.gc,{icon:_.jPR,_nk:"".concat(h,"71")})})})]}),(0,d.jsxs)("div",{style:{color:"#6b7280"},onClick:function(){return K(y)},_nk:"".concat(h,"2c"),children:[(0,d.jsx)(m.gc,{icon:_.q9p,style:{color:"#3b82f6"},title:"\u70B9\u51FB\u5F00\u59CB\u804A\u5929",_nk:"".concat(h,"72")})," ","\u53D1\u8D77\u804A\u5929"," "]})]},"person-".concat(Z))})})]})})};b.default=v}),78003:(function($,b,i){i.r(b);var j=i(62997),f=i.n(j),C=i(43222),s=i(45814),g=i(30758),_=i(49197),m=i(86070),A,S="ruQX",p=_.Ay.div(A||(A=f()([`
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
`])),function(x){return x.$variant==="center"?"center":"flex-end"},function(x){return x.$isOpen?1:0},function(x){return x.$isOpen?"auto":"none"},function(x){return x.$fullHeight?"height: 100%;":"max-height: 100%;"},function(x){return x.$variant==="center"?"16px":"16px 16px 0 0"},function(x){return x.$variant==="center"?"0 8px 32px rgba(0, 0, 0, 0.2)":"0 -8px 32px rgba(0, 0, 0, 0.2)"},function(x){return x.$variant==="center"?x.$isOpen?"scale(1)":"scale(0.95)":x.$isOpen?"translateY(0)":"translateY(100%)"},function(x){return x.$variant==="center"?"12px":"12px 12px 0 0"},function(x){return x.$variant==="center"?"8px":"8px 8px 0 0"}),M=function(d){var O=d.isOpen,h=d.onClose,k=d.title,v=k===void 0?"\u8BE6\u60C5":k,J=d.tag,R=d.children,N=d.className,B=d.contentScrollable,G=B===void 0?!0:B,K=d.onContentScroll,a=d.reachTopThreshold,e=a===void 0?20:a,u=d.historyLoadDebounceMs,l=u===void 0?250:u,D=d.contentRef,n=d.variant,Q=n===void 0?"bottom":n,T=d.fullHeight,L=T===void 0?!1:T;(0,g.useEffect)(function(){if(O){var P=document.body.style.overflow,z=document.documentElement.style.overflow;return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",function(){document.body.style.overflow=P,document.documentElement.style.overflow=z}}},[O]);var W=function(z){z.stopPropagation()},F=(0,g.useRef)(null),H=(0,g.useCallback)(function(P){K&&K(P);var z=P.currentTarget,y=z.scrollTop<=e;y&&(F.current&&(clearTimeout(F.current),F.current=null),F.current=window.setTimeout(function(){K&&K(P),F.current=null},l))},[K,e,l]);return(0,m.jsx)(p,{$isOpen:O,$variant:Q,$fullHeight:L,className:N,_nk:"".concat(S,"11"),children:(0,m.jsxs)("div",{className:"container",onClick:W,_nk:"".concat(S,"21"),children:[(0,m.jsxs)("div",{className:"header",_nk:"".concat(S,"22"),children:[(0,m.jsxs)("h3",{className:"title",_nk:"".concat(S,"31"),children:[v,J&&(0,m.jsx)("span",{className:"tag",_nk:"".concat(S,"41"),children:J})]}),(0,m.jsxs)("div",{className:"sidebar-close",onClick:h,_nk:"".concat(S,"23"),children:[(0,m.jsx)(s.gc,{icon:C.GRI,_nk:"".concat(S,"51")}),"\u5173\u95ED"]})]}),(0,m.jsx)("div",{className:"content",style:{overflowY:G?"auto":"hidden"},onScroll:H,ref:D,_nk:"".concat(S,"24"),children:R})]})})};b.default=M}),82258:(function($,b,i){i.r(b),i.d(b,{doRecallMessage:function(){return x},fetchEnterpriseContacts:function(){return d},fetchEnterpriseExperts:function(){return O},getChatMessages:function(){return g},getSessionById:function(){return h},getSessionUnreadCount:function(){return S},readCustomerByCid:function(){return M},readStaffByCid:function(){return p},searchConversations:function(){return _},startCustomerSession:function(){return A},startStaffSession:function(){return m}});var j=i(62729),f="8Rcj",C=j.Em.post,s=j.Em.get,g=function(v){return C("/dsb/yqarw/api/manual/chat/page",v)},_=function(v){return C("/dsb/yqarw/api/manual/session/search",v)},m=function(v){return C("/dsb/yqarw/api/staff/startSession",v)},A=function(v){return C("/dsb/yqarw/api/customer/startSession",v)},S=function(){return C("/dsb/yqarw/api/manual/session/unReadCount",{})},p=function(v){return s("/dsb/yqarw/api/staff/read",{sessionId:v})},M=function(v){return s("/dsb/yqarw/api/customer/read",{sessionId:v})},x=function(v){return s("/dsb/yqarw/api/manual/chat/revoke",{messageId:v})},d=function(v){return C("/dsb/yqarw/api/staff/qyzz/list",v)},O=function(){return s("/dsb/yqarw/api/customer/getStaffYhList",{})},h=function(v){return s("/dsb/yqarw/api/manual/session/getById",{id:v})}}),54794:(function($,b,i){var j=i(30758),f=i(23526);function C(s,g){const[_,m]=(0,j.useState)(s),{run:A}=(0,f.A)(()=>{m(s)},g);return(0,j.useEffect)(()=>{A()},[s]),_}b.A=C}),87047:(function($,b,i){var j=i(30758),f=i(96675),C=i(24325),s=i(43298);const g=_=>(A,S,p)=>{const M=(0,j.useRef)(!1),x=(0,j.useRef)([]),d=(0,j.useRef)([]),O=(0,j.useRef)(void 0);_(()=>{var h;const v=(Array.isArray(p)?p:[p]).map(J=>(0,s.e)(J));if(!M.current){M.current=!0,x.current=v,d.current=S,O.current=A();return}(v.length!==x.current.length||!(0,C.A)(x.current,v)||!(0,C.A)(d.current,S))&&((h=O.current)===null||h===void 0||h.call(O),x.current=v,d.current=S,O.current=A())}),(0,f.A)(()=>{var h;(h=O.current)===null||h===void 0||h.call(O),M.current=!1})};b.A=g}),43298:(function($,b,i){i.d(b,{e:function(){return C}});var j=i(41983),f=i(27323);function C(s,g){if(!f.A)return;if(!s)return g;let _;return(0,j.Tn)(s)?_=s():"current"in s?_=s.current:_=s,_}}),93268:(function($,b,i){var j=i(30758),f=i(87047);const C=(0,f.A)(j.useEffect);b.A=C}),36398:(function($,b,i){Object.defineProperty(b,"__esModule",{value:!0}),b.CopyToClipboard=void 0;var j=s(i(83042)),f=s(i(30758)),C=["text","onCopy","options","children"];function s(a){return a&&a.__esModule?a:{default:a}}function g(a){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(a)}function _(a,e){var u=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);e&&(l=l.filter(function(D){return Object.getOwnPropertyDescriptor(a,D).enumerable})),u.push.apply(u,l)}return u}function m(a){for(var e=1;e<arguments.length;e++){var u=arguments[e]!=null?arguments[e]:{};e%2?_(Object(u),!0).forEach(function(l){N(a,l,u[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(u)):_(Object(u)).forEach(function(l){Object.defineProperty(a,l,Object.getOwnPropertyDescriptor(u,l))})}return a}function A(a,e){if(a==null)return{};var u,l,D=S(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(l=0;l<n.length;l++)u=n[l],e.indexOf(u)===-1&&{}.propertyIsEnumerable.call(a,u)&&(D[u]=a[u])}return D}function S(a,e){if(a==null)return{};var u={};for(var l in a)if({}.hasOwnProperty.call(a,l)){if(e.indexOf(l)!==-1)continue;u[l]=a[l]}return u}function p(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function M(a,e){for(var u=0;u<e.length;u++){var l=e[u];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(a,B(l.key),l)}}function x(a,e,u){return e&&M(a.prototype,e),u&&M(a,u),Object.defineProperty(a,"prototype",{writable:!1}),a}function d(a,e,u){return e=v(e),O(a,k()?Reflect.construct(e,u||[],v(a).constructor):e.apply(a,u))}function O(a,e){if(e&&(g(e)=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(a)}function h(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function k(){try{var a=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(k=function(){return!!a})()}function v(a){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(a)}function J(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&R(a,e)}function R(a,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,l){return u.__proto__=l,u},R(a,e)}function N(a,e,u){return(e=B(e))in a?Object.defineProperty(a,e,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[e]=u,a}function B(a){var e=G(a,"string");return g(e)=="symbol"?e:e+""}function G(a,e){if(g(a)!="object"||!a)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var l=u.call(a,e||"default");if(g(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}var K=b.CopyToClipboard=(function(a){function e(){var u;p(this,e);for(var l=arguments.length,D=new Array(l),n=0;n<l;n++)D[n]=arguments[n];return u=d(this,e,[].concat(D)),N(u,"onClick",function(Q){var T=u.props,L=T.text,W=T.onCopy,F=T.children,H=T.options,P=f.default.Children.only(F),z=(0,j.default)(L,H);W&&W(L,z),P!=null&&P.props&&typeof P.props.onClick=="function"&&P.props.onClick(Q)}),u}return J(e,a),x(e,[{key:"render",value:function(){var l=this.props,D=l.text,n=l.onCopy,Q=l.options,T=l.children,L=A(l,C),W=f.default.Children.only(T);return f.default.cloneElement(W,m(m({},L),{},{onClick:this.onClick}))}}])})(f.default.PureComponent);N(K,"defaultProps",{onCopy:void 0,options:void 0})}),17173:(function($,b,i){var j=i(36398),f=j.CopyToClipboard;f.CopyToClipboard=f,$.exports=f})}]);
