(this["webpackJsonpnaughty-frontend"]=this["webpackJsonpnaughty-frontend"]||[]).push([[22],{802:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Se}));var c,r,a,s,o,i,b,l,j,d,u,x,p,O,m,h=n(17),f=n(21),k=n(0),g=n(28),y=n(54),v=n(14),S=n.n(v),T=n(67),w=n(678),C=n(172),I=n(94),A=n(129),q=n(130),P=n(29),D=n(171),B=n(52),F=n(3),z=n(39),L=n(683),N=n(671),E=n(10),G=F.e.div(c||(c=Object(B.a)(["\n  margin-top: 24px;\n"]))),M=Object(F.e)(z.v)(r||(r=Object(B.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),J=function(e){var t=e.isTokenOnly,n=e.bscScanAddress,c=e.removed,r=e.totalValueFormated,a=e.lpLabel,s=e.quoteTokenAdresses,o=e.quoteTokenSymbol,i=e.tokenAddresses,b=Object(D.a)(),l=Object(N.a)({quoteTokenAdresses:s,quoteTokenSymbol:o,tokenAddresses:i});return Object(E.jsxs)(G,{children:[Object(E.jsxs)(z.p,{justifyContent:"space-between",children:[Object(E.jsxs)(z.I,{children:[b(316,"Stake"),":"]}),Object(E.jsx)(M,{href:t?"https://quickswap.exchange/#/swap/".concat(i[56]):"https://quickswap.exchange/#/add/".concat(l),children:a})]}),!c&&Object(E.jsxs)(z.p,{justifyContent:"space-between",children:[Object(E.jsxs)(z.I,{children:[b(23,"Total Liquidity"),":"]}),Object(E.jsx)(z.I,{children:r})]}),Object(E.jsx)(z.p,{justifyContent:"flex-start",children:Object(E.jsx)(z.u,{external:!0,href:n,bold:!1,children:"View on Matic Explorer"})})]})},Q=n(684),R=Object(F.e)(z.p)(a||(a=Object(B.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),W=Object(F.e)(z.H)(s||(s=Object(B.a)(["\n  margin-left: 4px;\n"]))),V=function(e){var t=e.lpLabel,n=e.multiplier,c=(e.risk,e.farmImage),r=e.tokenSymbol,a=e.depositFee;return Object(E.jsxs)(R,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(E.jsx)(z.s,{src:"/images/farms/".concat(c,".png"),alt:r,width:64,height:64}),Object(E.jsxs)(z.p,{flexDirection:"column",alignItems:"flex-end",children:[Object(E.jsx)(z.q,{mb:"4px",children:t}),Object(E.jsxs)(z.p,{justifyContent:"center",children:[Object(E.jsx)(W,{variant:"secondary",children:n}),0===a?Object(E.jsx)(Q.a,{}):null]})]})]})},H=n(4),U=n.n(H),X=n(16),$=n(670),K=n(674),Y=n(679),Z=n(672),_=n(685),ee=n(667),te=n(669),ne=n(673),ce=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,a=void 0===r?"":r,s=e.depositFeeBP,o=void 0===s?0:s,i=Object(k.useState)(""),b=Object(f.a)(i,2),l=b[0],j=b[1],d=Object(k.useState)(!1),u=Object(f.a)(d,2),x=u[0],p=u[1],O=Object(D.a)(),m=Object(k.useMemo)((function(){return Object(ee.b)(t)}),[t]),h=Object(k.useCallback)((function(e){j(e.currentTarget.value)}),[j]),g=Object(k.useCallback)((function(){j(m)}),[m,j]);return Object(E.jsxs)(z.z,{title:"".concat(O(316,"Deposit")," ").concat(a," Tokens"),onDismiss:c,children:[Object(E.jsx)(ne.a,{value:l,onSelectMax:g,onChange:h,max:m,symbol:a,depositFeeBP:o}),Object(E.jsxs)(te.a,{children:[Object(E.jsx)(z.e,{variant:"secondary",onClick:c,children:O(462,"Cancel")}),Object(E.jsx)(z.e,{disabled:x,onClick:Object(X.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,n(l);case 3:p(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:x?O(488,"Pending Confirmation"):O(464,"Confirm")})]})]})},re=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,a=void 0===r?"":r,s=Object(k.useState)(""),o=Object(f.a)(s,2),i=o[0],b=o[1],l=Object(k.useState)(!1),j=Object(f.a)(l,2),d=j[0],u=j[1],x=Object(D.a)(),p=Object(k.useMemo)((function(){return Object(ee.b)(c)}),[c]),O=Object(k.useCallback)((function(e){b(e.currentTarget.value)}),[b]),m=Object(k.useCallback)((function(){b(p)}),[p,b]);return Object(E.jsxs)(z.z,{title:"Withdraw ".concat(a),onDismiss:n,children:[Object(E.jsx)(ne.a,{onSelectMax:m,onChange:O,value:i,max:p,symbol:a}),Object(E.jsxs)(te.a,{children:[Object(E.jsx)(z.e,{variant:"secondary",onClick:n,children:x(462,"Cancel")}),Object(E.jsx)(z.e,{disabled:d,onClick:Object(X.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,t(i);case 3:u(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:d?x(488,"Pending Confirmation"):x(464,"Confirm")})]})]})},ae=F.e.div(o||(o=Object(B.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),se=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=e.depositFeeBP,s=Object(D.a)(),o=Object(Z.a)(r).onStake,i=Object(_.a)(r).onUnstake,b=Object(ee.a)(t),l=b.toLocaleString(),j=Object(z.O)(Object(E.jsx)(ce,{max:n,onConfirm:o,tokenName:c,depositFeeBP:a})),d=Object(f.a)(j,1)[0],u=Object(z.O)(Object(E.jsx)(re,{max:t,onConfirm:i,tokenName:c})),x=Object(f.a)(u,1)[0];return Object(E.jsxs)(z.p,{justifyContent:"space-between",alignItems:"center",children:[Object(E.jsx)(z.q,{color:0===b?"textDisabled":"text",children:l}),0===b?Object(E.jsx)(z.e,{onClick:d,children:s(999,"Stake")}):Object(E.jsxs)(ae,{children:[Object(E.jsx)(z.r,{variant:"tertiary",onClick:x,mr:"6px",children:Object(E.jsx)(z.y,{color:"primary"})}),Object(E.jsx)(z.r,{variant:"tertiary",onClick:d,children:Object(E.jsx)(z.a,{color:"primary"})})]})]})},oe=n(676),ie=F.e.div(i||(i=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),be=function(e){var t=e.earnings,n=e.pid,c=Object(D.a)(),r=Object(k.useState)(!1),a=Object(f.a)(r,2),s=a[0],o=a[1],i=Object(oe.b)(n).onReward,b=Object(Z.a)(n).onStake,l=Object(ee.a)(t),j=l.toLocaleString();return Object(E.jsxs)(z.p,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(E.jsx)(z.q,{color:0===l?"textDisabled":"text",children:j}),Object(E.jsxs)(ie,{children:[2===n?Object(E.jsx)(z.e,{disabled:0===l||s,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(X.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,b(l.toString());case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound")}):null,Object(E.jsx)(z.e,{disabled:0===l||s,onClick:Object(X.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,i();case 3:o(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})},le=F.e.div(b||(b=Object(B.a)(["\n  padding-top: 16px;\n"]))),je=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(D.a)(),a=Object(k.useState)(!1),s=Object(f.a)(a,2),o=s[0],i=s[1],b=Object(I.a)(t.pid),l=b.pid,j=b.lpAddresses,d=b.tokenAddresses,u=b.isTokenOnly,x=b.depositFeeBP,p=Object(I.b)(l),O=p.allowance,m=p.tokenBalance,h=p.stakedBalance,g=p.earnings,y=j[56],v=d[56],S=t.lpSymbol.toUpperCase(),T=c&&O&&O.isGreaterThan(0),w=Object(k.useMemo)((function(){return u?Object($.b)(n,v):Object($.b)(n,y)}),[n,y,v,u]),C=Object(Y.a)(w).onApprove,A=Object(k.useCallback)(Object(X.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,C();case 4:i(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[C]);return Object(E.jsxs)(le,{children:[Object(E.jsxs)(z.p,{children:[Object(E.jsx)(z.I,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"GAJ"}),Object(E.jsx)(z.I,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(E.jsx)(be,{earnings:g,pid:l}),Object(E.jsxs)(z.p,{children:[Object(E.jsx)(z.I,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:S}),Object(E.jsx)(z.I,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?T?Object(E.jsx)(se,{stakedBalance:h,tokenBalance:m,tokenName:S,pid:l,depositFeeBP:x}):Object(E.jsx)(z.e,{mt:"8px",fullWidth:!0,disabled:o,onClick:A,children:r(999,"Approve Contract")}):Object(E.jsx)(K.a,{mt:"8px",fullWidth:!0})]})},de=n(686),ue=F.e.div(l||(l=Object(B.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),xe=F.e.div(j||(j=Object(B.a)(["\n  margin-bottom: '10px';\n"]))),pe=Object(F.e)(z.I)(d||(d=Object(B.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),Oe=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,s=e.cakePrice,o=e.apy,i=Object(D.a)(),b=Object(N.a)({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),l=o.times(new S.a(100)).toNumber(),j=1e3/s.toNumber(),d=Object(de.b)({numberOfDays:1,farmApy:l,cakePrice:s}),u=Object(de.b)({numberOfDays:7,farmApy:l,cakePrice:s}),x=Object(de.b)({numberOfDays:30,farmApy:l,cakePrice:s}),p=Object(de.b)({numberOfDays:365,farmApy:l,cakePrice:s});return Object(E.jsxs)(z.z,{title:"ROI",onDismiss:t,children:[Object(E.jsxs)(ue,{children:[Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"GAJ per $1000")})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{children:"1d"})}),Object(E.jsx)(xe,{children:Object(E.jsxs)(z.I,{children:[Object(de.a)({amountEarned:d,amountInvested:j}),"%"]})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{children:d})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{children:"7d"})}),Object(E.jsx)(xe,{children:Object(E.jsxs)(z.I,{children:[Object(de.a)({amountEarned:u,amountInvested:j}),"%"]})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{children:u})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{children:"30d"})}),Object(E.jsx)(xe,{children:Object(E.jsxs)(z.I,{children:[Object(de.a)({amountEarned:x,amountInvested:j}),"%"]})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{children:x})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{children:"365d(APY)"})}),Object(E.jsx)(xe,{children:Object(E.jsxs)(z.I,{children:[Object(de.a)({amountEarned:p,amountInvested:j}),"%"]})}),Object(E.jsx)(xe,{children:Object(E.jsx)(z.I,{children:p})})]}),Object(E.jsx)(pe,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(E.jsx)(z.p,{justifyContent:"center",children:Object(E.jsxs)(z.v,{href:"https://exchange.pancakeswap.finance/#/add/".concat(b),children:[i(999,"Get")," ",n]})})]})},me=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,a=e.cakePrice,s=e.apy,o=Object(z.O)(Object(E.jsx)(Oe,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,cakePrice:a,apy:s})),i=Object(f.a)(o,1)[0];return Object(E.jsx)(z.r,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(E.jsx)(z.h,{})})},he=Object(F.f)(u||(u=Object(B.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),fe=F.e.div(x||(x=Object(B.a)(["\n  background: linear-gradient(45deg,\n  rgba(255, 0, 0, 1) 0%,\n  rgba(255, 154, 0, 1) 10%,\n  rgba(208, 222, 33, 1) 20%,\n  rgba(79, 220, 74, 1) 30%,\n  rgba(63, 218, 216, 1) 40%,\n  rgba(47, 201, 226, 1) 50%,\n  rgba(28, 127, 238, 1) 60%,\n  rgba(95, 21, 242, 1) 70%,\n  rgba(186, 12, 248, 1) 80%,\n  rgba(251, 7, 217, 1) 90%,\n  rgba(255, 0, 0, 1) 100%);\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),he),ke=F.e.div(p||(p=Object(B.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),ge=F.e.div(O||(O=Object(B.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),ye=F.e.div(m||(m=Object(B.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),ve=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,a=e.ethereum,s=e.account,o=Object(D.a)(),i=Object(k.useState)(!1),b=Object(f.a)(i,2),l=b[0],j=b[1],d=t.isTokenOnly?t.tokenSymbol.toLowerCase():"".concat(t.tokenSymbol.toLowerCase(),"-").concat(t.quoteTokenSymbol.toLowerCase()),u=Object(k.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===P.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===P.b.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),x=u?"$".concat(Number(u).toLocaleString(void 0,{maximumFractionDigits:0})):"-",p=t.lpSymbol,O=t.apy&&t.apy.times(new S.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),m=t.quoteTokenAdresses,h=t.quoteTokenSymbol,g=t.tokenAddresses,y=t.risk;return Object(E.jsxs)(ke,{children:["GAJ"===t.tokenSymbol&&Object(E.jsx)(fe,{}),Object(E.jsx)(V,{lpLabel:p,multiplier:t.multiplier,risk:y,depositFee:t.depositFeeBP,farmImage:d,tokenSymbol:t.tokenSymbol}),!n&&Object(E.jsxs)(z.p,{justifyContent:"space-between",alignItems:"center",children:[Object(E.jsxs)(z.I,{children:[o(352,"APR"),":"]}),Object(E.jsx)(z.I,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(me,{lpLabel:p,quoteTokenAdresses:m,quoteTokenSymbol:h,tokenAddresses:g,cakePrice:c,apy:t.apy}),O,"%"]}):Object(E.jsx)(z.F,{height:24,width:80})})]}),Object(E.jsxs)(z.p,{justifyContent:"space-between",children:[Object(E.jsxs)(z.I,{children:[o(318,"Earn"),":"]}),Object(E.jsx)(z.I,{bold:!0,children:"GAJ"})]}),Object(E.jsxs)(z.p,{justifyContent:"space-between",children:[Object(E.jsxs)(z.I,{style:{fontSize:"24px"},children:[o(10001,"Deposit Fee"),":"]}),Object(E.jsxs)(z.I,{bold:!0,style:{fontSize:"24px"},children:[t.depositFeeBP/100,"%"]})]}),Object(E.jsx)(je,{farm:t,ethereum:a,account:s}),Object(E.jsx)(ge,{}),Object(E.jsx)(L.a,{onClick:function(){return j(!l)},expanded:l}),Object(E.jsx)(ye,{expanded:l,children:Object(E.jsx)(J,{removed:n,isTokenOnly:t.isTokenOnly,bscScanAddress:t.isTokenOnly?"https://explorer-mainnet.maticvigil.com/tokens/".concat(t.tokenAddresses[56]):"https://explorer-mainnet.maticvigil.com/tokens/".concat(t.lpAddresses[56]),totalValueFormated:x,lpLabel:p,quoteTokenAdresses:m,quoteTokenSymbol:h,tokenAddresses:g})})]})},Se=function(e){Object(g.g)().path,Object(D.a)();var t=Object(I.c)(),n=Object(I.g)(),c=Object(I.e)(),r=Object(T.m)(),a=r.account,s=r.ethereum,o=e.tokenMode,i=Object(y.b)(),b=Object(A.a)().fastRefresh;Object(k.useEffect)((function(){a&&i(Object(q.a)(a))}),[a,i,b]);var l=Object(k.useState)(!1),j=Object(f.a)(l,2),d=(j[0],j[1],t.filter((function(e){return!!e.isTokenOnly===!!o&&"0X"!==e.multiplier&&8!==e.pid})));t.filter((function(e){return!!e.isTokenOnly===!!o&&"0X"===e.multiplier&&8!==e.pid})),d.filter((function(e){return e.userData&&new S.a(e.userData.stakedBalance).isGreaterThan(0)})),Object(k.useCallback)((function(e,t){return e.map((function(e){var t=new S.a(e.gajPerBlock||1).times(new S.a(e.poolWeight)).div(new S.a(10).pow(18)).times(w.a),r=n.times(t),a=new S.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===P.b.BNB&&(a=a.times(c)),a.comparedTo(0)>0&&(r=r.div(a)),Object(h.a)(Object(h.a)({},e),{},{apy:r})})).map((function(e){return Object(E.jsx)(ve,{farm:e,removed:t,bnbPrice:c,cakePrice:n,ethereum:s,account:a},e.pid)}))}),[c,a,n,s]);return Object(E.jsx)(C.a,{children:Object(E.jsx)("iframe",{src:"https://exchange.pancakeswap.finance/#/add/0xcF225F8961839CD587211DEE112cb2622f9227D7/0xe9e7cea3dedca5984780bafc599bd69add087d56",title:"Add Liquidity to GAJ",height:"700px",width:"100%"})})}}}]);
//# sourceMappingURL=22.9a4561cd.chunk.js.map