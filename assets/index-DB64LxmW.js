import{d as i,I as le,w as ce,j as e,p as x,b2 as X,a5 as M}from"./index-DgDS95zu.js";import{A as de}from"./index-BDLKheLK.js";import{u as y}from"./useMutation-BVHFNGNj.js";import{m as j}from"./api-Df7WHB2j.js";import{A as ue}from"./index-BtGq94Vz.js";/* empty css              */import{I as me}from"./index-DWF4fKbI.js";import"./index-R0fvpz9K.js";import"./index-DwhGeG0W.js";import"./index-C3RW8Dcq.js";import"./PurePanel-CkQP6TjL.js";import"./TextArea-DPz20TLR.js";var pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"},fe=function(n,t){return i.createElement(le,ce({},n,{ref:t,icon:pe}))},xe=i.forwardRef(fe);const ge=({content:s})=>e.jsxs("div",{className:"flex items-end p-2 w-full justify-start text-scondary",children:[e.jsx("div",{className:"w-[40px] h-[40px] flex-none border-2 border-white rounded-full overflow-hidden",children:e.jsx("img",{className:"w-full h-full object-cover",src:"/static/assets/simple_logo.png",alt:"Avatar"})}),e.jsx("div",{className:"p-3 rounded-2xl mx-2 ml-4 message-end-incoming relative",children:s})]}),he=()=>e.jsxs("div",{className:"typing-indicator",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"dot"}),e.jsx("span",{className:"dot"})]}),ye=()=>e.jsxs("div",{className:"flex items-end p-2 w-full justify-start text-scondary",children:[e.jsx("div",{className:"w-[40px] h-[40px] flex-none border-2 border-white rounded-full overflow-hidden",children:e.jsx("img",{className:"w-full h-full object-cover",src:"/static/assets/simple_logo.png",alt:"Avatar"})}),e.jsx("div",{className:"p-3 rounded-2xl mx-2 ml-4 message-end-incoming relative",children:e.jsx(he,{})})]}),je=({content:s})=>{const{user:n}=x(t=>t.auth);return e.jsxs("div",{className:"flex items-end p-2 w-full justify-end",children:[e.jsx("div",{className:"p-3 rounded-2xl mx-2 mr-4 message-end-outgoing relative  text-white",children:s}),e.jsx("div",{className:"w-[40px] h-[40px] flex-none border-2 border-white rounded-full overflow-hidden",children:e.jsx("img",{className:"w-full h-full object-cover",src:n["Profile Image"]||"/static/assets/simple_logo.png",alt:"Avatar"})})]})},ve=({meditation:s,onClick:n})=>{var t,r,l,c;return e.jsxs("a",{className:"favorites-item text-secondary  !h-[18em] !w-[11em]",onClick:n,children:[e.jsx("img",{src:(t=s==null?void 0:s.meditation_id)==null?void 0:t.thumbnail_src,className:"favorites-background-image",alt:(r=s==null?void 0:s.meditation_id)==null?void 0:r.session_title}),e.jsxs("div",{className:"favorites-text-div w-full p-2",children:[e.jsx("span",{className:"favorites-title",children:(l=s==null?void 0:s.meditation_id)==null?void 0:l.session_title}),e.jsx("img",{src:"/static/assets/play.svg",className:" bg-[#7994cc] rounded-full opacity-85 video-player-icon my-1"}),e.jsx("span",{className:"favorites-length text-primary",children:"2 minutes"}),e.jsx("span",{className:"favorites-type text-primary",children:(c=s==null?void 0:s.meditation_id)==null?void 0:c.session_type})]})]})},we=({meditation:s,onClick:n})=>e.jsxs("div",{className:"flex items-end p-2 w-full justify-start text-scondary",children:[e.jsx("div",{className:"w-[40px] h-[40px] flex-none border-2 border-white rounded-full overflow-hidden",children:e.jsx("img",{className:"w-full h-full object-cover",src:"/static/assets/simple_logo.png",alt:"Avatar"})}),e.jsx("div",{className:"rounded-2xl mx-2 ml-4 gap-2 relative flex w-full",children:s.map((t,r)=>e.jsx(ve,{meditation:t[0],onClick:()=>n(t[0].meditation_id)},r))})]}),E=({role:s,...n})=>{if(s==="system")return e.jsx(e.Fragment,{});if(s==="typing")return e.jsx(ye,{});const t=s==="assistant"?ge:je;return e.jsx(t,{...n})},Ne=()=>{const s=x(o=>o.auth.user.id),n=async(o={})=>(await j.get(`/meditations/v1/${s}/recommendations/`,o,{headers:{"Content-Type":"application/json"}})).data,{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}=y(n);return{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}},Se=()=>{const s=x(o=>o.auth.user.id),n=async(o={})=>(await j.post(`/meditations/v1/${s}/recommendations/`,o,{headers:{"Content-Type":"application/json"}})).data,{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}=y(n);return{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}},be=()=>{const s=x(o=>o.auth.user.id),n=async(o={})=>(await j.post(`/meditations/v1/${s}/start_recommendation_meditation/`,o,{headers:{"Content-Type":"application/json"}})).data,{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}=y(n);return{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}},_e=()=>{const s=x(o=>o.auth.user.id),n=async(o={})=>(await j.post(`/meditations/v1/${s}/chats/`,o,{headers:{"Content-Type":"application/json"}})).data,{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}=y(n);return{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}},Me=()=>{const s=x(o=>o.auth.user.id),n=async({data:o,chat_id:u})=>(await j.put(`/meditations/v1/${s}/chats/${u}/`,o,{headers:{"Content-Type":"application/json"}})).data,{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}=y(n);return{mutate:t,data:r,error:l,isLoading:c,isError:d,isSuccess:p}},Ee=()=>{const s=x(u=>u.auth.user.id),n=async u=>(await j.get(`/meditations/v1/${s}/meditations/${u}`)).data,t=async u=>Promise.all(u.map(n)),{mutate:r,data:l,error:c,isLoading:d,isError:p,isSuccess:o}=y(t);return{mutate:r,data:l,error:c,isLoading:d,isError:p,isSuccess:o}},Oe=()=>{const[s,n]=i.useState(!1),[t,r]=i.useState([]),[l,c]=i.useState(null),[d,p]=i.useState(),{mutate:o,data:u,error:g,isError:I,isLoading:Y,isSuccess:C}=Ne(),h=localStorage.getItem("firstInteractionDone")&&JSON.parse(localStorage.getItem("firstInteractionDone")),{mutate:J,data:D}=Se(),{mutate:q,isLoading:L}=_e(),{mutate:K,isLoading:A}=Me(),{mutate:Q,isLoading:v}=be(),[V,Z]=i.useState([]),[ee,se]=i.useState(null),[S,T]=i.useState(!1),[N,R]=i.useState([]);i.useEffect(()=>{h&&o()},[]),i.useEffect(()=>{h&&D&&o()},[D]),i.useEffect(()=>{var a;h&&I&&((a=g==null?void 0:g.response)==null?void 0:a.status)===400&&J()},[I,g]);const[te,k]=i.useState(!1),[w,ae]=i.useState([]),{mutate:F}=Ee(),ne=async(a,m)=>{var O,z,G,H,U,W;let B=0;for(;B<25;)try{const f=await new Promise((_,ie)=>m(a,{onSuccess:_,onError:ie}));if(console.log(f),(G=(z=(O=f==null?void 0:f[0])==null?void 0:O[0])==null?void 0:z.meditation_id)!=null&&G.audio_url&&((W=(U=(H=f==null?void 0:f[1])==null?void 0:H[0])==null?void 0:U.meditation_id)!=null&&W.audio_url))return f;await new Promise(_=>setTimeout(_,1e4)),B++}catch(f){console.error("Error fetching meditation :",f);break}return null};i.useEffect(()=>{(async()=>{if(!(!N||N.length===0)){k(!0);try{const m=N.map($=>$.meditation_id),b=await ne(m,F);console.log({results:b}),ae(b)}catch(m){console.error("Error polling meditation details:",m)}finally{k(!1)}}})()},[N,F]);const P=()=>{if(u&&u.length>0){const m=[...u].sort(()=>.5-Math.random()).slice(0,3);Z(m)}};i.useEffect(()=>{h&&C&&P()},[u,C]);const oe=a=>{se(a.title),Q({recommendation_title:a.title,recommendation_id:a.recommendation_id,recommendation_type:a.meditation_type},{onSuccess:m=>{R(m),T(!0)}})},re=()=>{r([...t,{role:"user",content:d}]),p(""),l?K({data:{message:d,firstInteractionToday:!1},chat_id:l.history_id},{onSuccess:a=>{var m;(m=a==null?void 0:a.userMeditations)!=null&&m.length&&(R(a.userMeditations),T(!0)),r(a.conversation)}}):(q({message:d,firstInteractionToday:!0},{onSuccess:a=>{c(a),r(a.conversation)}}),localStorage.setItem("firstInteractionDone",!0))};return Y?e.jsx(X,{visible:!0}):(console.log(w),e.jsxs("div",{className:"w-full h-full  px-[10px] sm:px-[20px] flex flex-col justify-end py-[10px] sm:py-[10px] ",children:[e.jsxs("div",{className:"relative flex flex-col justify-end",style:{overflowY:"auto",overflowX:"hidden",maxHeight:"100%"},children:[e.jsxs("div",{className:"custom-scroll-none",style:{overflowY:"auto",overflowX:"hidden",maxHeight:"100%"},children:[!h&&!(t!=null&&t.length)&&e.jsxs("div",{className:"w-full flex items-center justify-center flex-col py-5 pb-[50%] md:pb-[25%] text-[1rem] sm:text-[1.5em] text-center no-select",children:[e.jsx(ue,{}),e.jsx("span",{className:"text-customBlueLighter",children:"Welcome to the IdeaSpace! Tell us a little bit about yourself:"}),e.jsx("span",{className:"text-customBlueLighter",children:"Nickname (Optional), Experience level, and Goals."})]}),h&&e.jsxs(e.Fragment,{children:[e.jsx(E,{role:"assistant",content:` Describe the type of meditation you want to listen to\r
              today(length, style, guided, etc.).`}),e.jsxs("div",{className:"w-full flex items-center justify-center flex-col py-5 text-center no-select px-[25%] gap-3",children:[V.map((a,m)=>e.jsx(M,{type:"secondary",className:"w-full uppercase text-secondary text-[1.5em] py-5 bg-[#ED8951] hover:bg-[#d95e1a] rounded-full text-white",onClick:()=>oe(a),disabled:v||S||!!(t!=null&&t.length),loading:ee===a.title&&v,children:a.title},m)),e.jsx(M,{type:"secondary",icon:e.jsx("img",{src:"/static/assets/shuffle.svg"}),className:"w-full uppercase text-secondary text-[1.5em] py-5 bg-[#91B4B4] hover:bg-[#4f8989] rounded-full text-white",onClick:P,disabled:v||S||!!(t!=null&&t.length),children:"Shuffle"})]})]}),t.map((a,m)=>i.createElement(E,{...a,key:m})),(L||A||v)&&e.jsx(E,{role:"typing"}),te&&e.jsx("div",{className:"loader-wrapper",children:e.jsx(X,{visible:!0,defaultTexts:!0,fullscreen:!1})}),!!(w!=null&&w.length)&&e.jsx(we,{meditation:w,onClick:n})]}),e.jsx("div",{className:"absolute bottom-0 left-0 w-full z-[1]",children:s&&e.jsx(de,{title:s.session_title,trackUrl:s.audio_url,onClose:()=>n(!1)},s.audio_url)})]}),e.jsxs("div",{className:"flex items-end p-2 bg-white rounded-3xl",children:[e.jsx(me.TextArea,{autoSize:{minRows:1,maxRows:10},placeholder:"Type your message...",className:"flex-grow mr-2 custom-textarea custom-scroll",value:d,onChange:a=>{p(a.target.value)}}),e.jsx(M,{type:"secondary",icon:e.jsx(xe,{}),onClick:re,disabled:L||A||S||v,className:"flex-shrink-0"})]})]}))};export{Oe as default};
