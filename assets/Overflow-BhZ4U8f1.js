import{K as R,t as Be,d as n,Y as W,w as _,y as fe,H as x,O as Je,J as g,N as qe,b3 as Ze,c as et,U as tt}from"./index-DgDS95zu.js";import{R as Ce}from"./index-R0fvpz9K.js";const rt=new R("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),nt=new R("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),at=new R("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),it=new R("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),st=new R("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),ot=new R("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),ft=new R("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),lt=new R("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),ut={"slide-up":{inKeyframes:rt,outKeyframes:nt},"slide-down":{inKeyframes:at,outKeyframes:it},"slide-left":{inKeyframes:st,outKeyframes:ot},"slide-right":{inKeyframes:ft,outKeyframes:lt}},Ct=(e,s)=>{const{antCls:l}=e,i=`${l}-${s}`,{inKeyframes:f,outKeyframes:a}=ut[s];return[Be(i,f,a,e.motionDurationMid),{[`
      ${i}-enter,
      ${i}-appear
    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${i}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]};var ct=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],b=void 0;function dt(e,s){var l=e.prefixCls,i=e.invalidate,f=e.item,a=e.renderItem,u=e.responsive,S=e.responsiveDisabled,d=e.registerSize,C=e.itemKey,I=e.className,Q=e.style,B=e.children,J=e.display,m=e.order,U=e.component,K=U===void 0?"div":U,D=W(e,ct),v=u&&!J;function X(p){d(C,p)}n.useEffect(function(){return function(){X(null)}},[]);var q=a&&f!==b?a(f):B,O;i||(O={opacity:v?0:1,height:v?0:b,overflowY:v?"hidden":b,order:u?m:b,pointerEvents:v?"none":b,position:v?"absolute":b});var Y={};v&&(Y["aria-hidden"]=!0);var E=n.createElement(K,_({className:fe(!i&&l,I),style:x(x({},O),Q)},Y,D,{ref:s}),q);return u&&(E=n.createElement(Ce,{onResize:function(Z){var A=Z.offsetWidth;X(A)},disabled:S},E)),E}var $=n.forwardRef(dt);$.displayName="Item";function mt(e){if(typeof MessageChannel>"u")Je(e);else{var s=new MessageChannel;s.port1.onmessage=function(){return e()},s.port2.postMessage(void 0)}}function vt(){var e=n.useRef(null),s=function(i){e.current||(e.current=[],mt(function(){Ze.unstable_batchedUpdates(function(){e.current.forEach(function(f){f()}),e.current=null})})),e.current.push(i)};return s}function P(e,s){var l=n.useState(s),i=g(l,2),f=i[0],a=i[1],u=qe(function(S){e(function(){a(S)})});return[f,u]}var G=et.createContext(null),yt=["component"],gt=["className"],St=["className"],pt=function(s,l){var i=n.useContext(G);if(!i){var f=s.component,a=f===void 0?"div":f,u=W(s,yt);return n.createElement(a,_({},u,{ref:l}))}var S=i.className,d=W(i,gt),C=s.className,I=W(s,St);return n.createElement(G.Provider,{value:null},n.createElement($,_({ref:l,className:fe(S,C)},d,I)))},Ie=n.forwardRef(pt);Ie.displayName="RawItem";var Rt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Oe="responsive",Ne="invalidate";function Et(e){return"+ ".concat(e.length," ...")}function ht(e,s){var l=e.prefixCls,i=l===void 0?"rc-overflow":l,f=e.data,a=f===void 0?[]:f,u=e.renderItem,S=e.renderRawItem,d=e.itemKey,C=e.itemWidth,I=C===void 0?10:C,Q=e.ssr,B=e.style,J=e.className,m=e.maxCount,U=e.renderRest,K=e.renderRawRest,D=e.suffix,v=e.component,X=v===void 0?"div":v,q=e.itemComponent,O=e.onVisibleChange,Y=W(e,Rt),E=Q==="full",p=vt(),Z=P(p,null),A=g(Z,2),F=A[0],be=A[1],h=F||0,xe=P(p,new Map),le=g(xe,2),ue=le[0],Ke=le[1],De=P(p,0),ce=g(De,2),ze=ce[0],Me=ce[1],Pe=P(p,0),de=g(Pe,2),L=de[0],We=de[1],$e=P(p,0),me=g($e,2),T=me[0],Ue=me[1],Xe=n.useState(null),ve=g(Xe,2),ee=ve[0],ye=ve[1],Ye=n.useState(null),ge=g(Ye,2),V=ge[0],Ae=ge[1],N=n.useMemo(function(){return V===null&&E?Number.MAX_SAFE_INTEGER:V||0},[V,F]),Fe=n.useState(!1),Se=g(Fe,2),Le=Se[0],Te=Se[1],te="".concat(i,"-item"),pe=Math.max(ze,L),re=m===Oe,y=a.length&&re,Re=m===Ne,Ve=y||typeof m=="number"&&a.length>m,w=n.useMemo(function(){var t=a;return y?F===null&&E?t=a:t=a.slice(0,Math.min(a.length,h/I)):typeof m=="number"&&(t=a.slice(0,m)),t},[a,I,F,m,y]),ne=n.useMemo(function(){return y?a.slice(N+1):a.slice(w.length)},[a,w,y,N]),k=n.useCallback(function(t,r){var o;return typeof d=="function"?d(t):(o=d&&(t==null?void 0:t[d]))!==null&&o!==void 0?o:r},[d]),ke=n.useCallback(u||function(t){return t},[u]);function j(t,r,o){V===t&&(r===void 0||r===ee)||(Ae(t),o||(Te(t<a.length-1),O==null||O(t)),r!==void 0&&ye(r))}function je(t,r){be(r.clientWidth)}function Ee(t,r){Ke(function(o){var c=new Map(o);return r===null?c.delete(t):c.set(t,r),c})}function Ge(t,r){We(r),Me(L)}function He(t,r){Ue(r)}function ae(t){return ue.get(k(w[t],t))}tt(function(){if(h&&typeof pe=="number"&&w){var t=T,r=w.length,o=r-1;if(!r){j(0,null);return}for(var c=0;c<r;c+=1){var M=ae(c);if(E&&(M=M||0),M===void 0){j(c-1,void 0,!0);break}if(t+=M,o===0&&t<=h||c===o-1&&t+ae(o)<=h){j(o,null);break}else if(t+pe>h){j(c-1,t-M-T+L);break}}D&&ae(0)+T>h&&ye(null)}},[h,ue,L,T,k,w]);var he=Le&&!!ne.length,we={};ee!==null&&y&&(we={position:"absolute",left:ee,top:0});var z={prefixCls:te,responsive:y,component:q,invalidate:Re},Qe=S?function(t,r){var o=k(t,r);return n.createElement(G.Provider,{key:o,value:x(x({},z),{},{order:r,item:t,itemKey:o,registerSize:Ee,display:r<=N})},S(t,r))}:function(t,r){var o=k(t,r);return n.createElement($,_({},z,{order:r,key:o,item:t,renderItem:ke,itemKey:o,registerSize:Ee,display:r<=N}))},ie,_e={order:he?N:Number.MAX_SAFE_INTEGER,className:"".concat(te,"-rest"),registerSize:Ge,display:he};if(K)K&&(ie=n.createElement(G.Provider,{value:x(x({},z),_e)},K(ne)));else{var se=U||Et;ie=n.createElement($,_({},z,_e),typeof se=="function"?se(ne):se)}var oe=n.createElement(X,_({className:fe(!Re&&i,J),style:B,ref:s},Y),w.map(Qe),Ve?ie:null,D&&n.createElement($,_({},z,{responsive:re,responsiveDisabled:!y,order:N,className:"".concat(te,"-suffix"),registerSize:He,display:!0,style:we}),D));return re&&(oe=n.createElement(Ce,{onResize:je,disabled:!y},oe)),oe}var H=n.forwardRef(ht);H.displayName="Overflow";H.Item=Ie;H.RESPONSIVE=Oe;H.INVALIDATE=Ne;export{H as F,rt as a,it as b,nt as c,Ct as i,at as s};
