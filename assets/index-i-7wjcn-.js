import{u as S,f as L,d as h,h as G,R as v,s as y,k as N,j as e,l as C,n as O}from"./index-DgDS95zu.js";/* empty css              */import{u as w}from"./useMutation-BVHFNGNj.js";import{u as x}from"./api-Df7WHB2j.js";import{s as p}from"./index-ojMjYGyW.js";const k=()=>{const i=async g=>(await x.post("/userservice/v1/google/callback/",g,{headers:{"Content-Type":"application/json"}})).data,{mutate:t,data:c,error:s,isLoading:o,isError:u,isSuccess:a}=w(i);return{mutate:t,data:c,error:s,isLoading:o,isError:u,isSuccess:a}},A=()=>{const i=async g=>(await x.get("/userservice/v1/authenticate/",g,{headers:{"Content-Type":"application/json"}})).data,{mutate:t,data:c,error:s,isLoading:o,isError:u,isSuccess:a}=w(i);return{mutate:t,data:c,error:s,isLoading:o,isError:u,isSuccess:a}},F=()=>{const i=S(),t=L(),{mutate:c,data:s,error:o,isLoading:u,isError:a,isSuccess:g}=k(),{mutate:m,data:l,error:d,isLoading:b,isError:f,isSuccess:j}=A();h.useEffect(()=>{var r,n;f&&p.error(((n=(r=d==null?void 0:d.response)==null?void 0:r.data)==null?void 0:n.error)||d.message)},[f]),h.useEffect(()=>{l!=null&&l.response&&(t(G(l.response)),i(v.HOME))},[j,l]),h.useEffect(()=>{var r,n;a&&p.error(((n=(r=o==null?void 0:o.response)==null?void 0:r.data)==null?void 0:n.error)||o.message)},[a]),h.useEffect(()=>{s!=null&&s.refresh&&(t(y(s)),m())},[g,s]);const E=N({ux_mode:"popup",flow:"auth-code",onSuccess:async r=>{if(C(r,"email","profile","openid","https://www.googleapis.com/auth/user.birthday.read","https://www.googleapis.com/auth/user.gender.read"))try{c({...r,redirect_uri:window.location.origin})}catch{p.error("Something went wrong!")}else p.error("Some required scopes were not granted."),O()},onError:()=>{p.error("Google Sign-In failed")},scope:"email profile openid https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.gender.read"});return u||b?e.jsxs("button",{className:"google-o-auth-btn text-primary disabled",disabled:!0,children:[e.jsx("img",{src:"/static/assets/google_icon.svg",alt:"Google Logo"}),e.jsx("span",{children:"Logging in with Google... "})]}):e.jsxs("button",{onClick:E,className:"google-o-auth-btn text-primary",children:[e.jsx("img",{src:"/static/assets/google_icon.svg",alt:"Google Logo"}),e.jsx("span",{children:"Continue with Google"})]})},R=()=>e.jsxs("div",{className:"w-full flex items-center gap-5",children:[e.jsx("hr",{className:"border-0 h-px w-full bg-[rgba(121,148,204,0.95)]"}),e.jsx("span",{className:"mx-1",children:"or"}),e.jsx("hr",{className:"border-0 h-px w-full bg-[rgba(121,148,204,0.95)]"})]});export{F as G,R as O};