import{u as f,f as h,d,R as x,j as s,L as w,i as j}from"./index-DgDS95zu.js";/* empty css              */import{u as E}from"./api-Df7WHB2j.js";import{A as v}from"./index-BtGq94Vz.js";import{B as g}from"./index-CUjWgdxJ.js";import{F as N,C as L}from"./index-B0kuquvW.js";import{E as R}from"./index-DSjgFuH9.js";import"./index-Cl3IMY8X.js";import{u as S}from"./useMutation-BVHFNGNj.js";import{s as u}from"./index-ojMjYGyW.js";/* empty css              */import"./row-SZHG0-a2.js";import"./responsiveObserver-DRpm5Nti.js";import"./index-DwhGeG0W.js";import"./index-R0fvpz9K.js";import"./index-DWF4fKbI.js";import"./TextArea-DPz20TLR.js";const y=()=>{const a=async m=>(await E.post("/userservice/v1/reset-password-request/",m,{headers:{"Content-Type":"application/json"}})).data,{mutate:i,data:n,error:e,isLoading:t,isError:c,isSuccess:o}=S(a);return{mutate:i,data:n,error:e,isLoading:t,isError:c,isSuccess:o}},H=()=>{const a=f(),i=h(),{mutate:n,data:e,error:t,isLoading:c,isError:o,isSuccess:m}=y();d.useEffect(()=>{var r,l;o&&((l=(r=t==null?void 0:t.response)==null?void 0:r.data)!=null&&l.error)&&u.error(t.response.data.error)},[o]),d.useEffect(()=>{e!=null&&e.message&&(u.success(e.message),a(x.RESET_MAIL_SUCCESS))},[m,e]);const p=r=>{n(r),i(j(r.email))};return s.jsxs("div",{className:"flex items-center justify-center w-full h-[100vh] text-center",children:[s.jsxs("div",{className:"content w-[100vw] md:w-[50vw] lg:w-[40vw] p-2 text-white flex items-center flex-col",children:[s.jsx(v,{}),s.jsx("span",{className:"text-4xl md:text-4xl lg:text-5xl text-secondary px-[10%] mb-5",children:s.jsx("span",{className:"whitespace-nowrap",children:"ENTER EMAIL"})}),s.jsxs("div",{className:"w-full px-[10%]",children:[s.jsxs(N,{onFinish:p,children:[s.jsx(R,{hideIcon:!0}),s.jsx(L,{isLoading:c})]}),s.jsx("div",{className:"text-white text-sm  my-1 text-primary flex flex-col gap-1",children:s.jsxs("div",{children:["Remember password? ",s.jsx(w,{to:x.LOG_IN,className:"font-bold underline",children:"Login Instead"})]})})]})]}),s.jsx(g,{})]})};export{H as default};