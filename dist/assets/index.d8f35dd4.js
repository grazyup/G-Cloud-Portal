/* empty css                  */import{cb as h,r as f,Z as x,aA as b,W as k,o as V,g as U,C as e,S as l,c7 as u,aB as i,M as C,w as K,aC as P,aD as a,V as w,k as B,a0 as E,a1 as S}from"./index.9c2f3603.js";import{_ as q}from"./_plugin-vue_export-helper.cdc0426e.js";const o=d=>(E("data-v-45600747"),d=d(),S(),d),I={class:"content"},M={class:"sub-cont"},N=o(()=>e("div",{class:"img__text m--in"},[e("h2",null,"\u5DF2\u6709\u5E10\u53F7\uFF1F"),e("p",null,"\u6709\u5E10\u53F7\u5C31\u767B\u5F55\u5427\uFF0C\u597D\u4E45\u4E0D\u89C1\u4E86\uFF01")],-1)),R=o(()=>e("span",{class:"m--in"},"\u53BB \u767B \u5F55",-1)),T=[R],D={class:"form sign-up"},F=o(()=>e("h1",null,"G-Cloud \u4E91\u76D8\u6CE8\u518C",-1)),L=o(()=>e("span",null,"\u7528 \u6237 \u540D",-1)),A=o(()=>e("span",null,"\u5BC6 \u7801",-1)),G=o(()=>e("span",null,"\u786E \u8BA4 \u5BC6 \u7801",-1)),W=o(()=>e("span",null,"\u5BC6 \u4FDD \u95EE \u9898",-1)),Z=o(()=>e("span",null,"\u5BC6 \u4FDD \u7B54 \u6848",-1)),j={__name:"index",setup(d){const g=h(),p=f(!1),c=f(null);x(()=>{c.value.focus()});const s=b({username:"",password:"",rePassword:"",question:"",answer:""}),r=()=>{v()&&(p.value=!0,P.register(s,()=>{a.success("\u6CE8\u518C\u6210\u529F\uFF01\u5373\u5C06\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762"),setTimeout(_,1e3),p.value=!1},m=>{a.error(m.message),p.value=!1}))},v=()=>w.checkUsername(s.username)?w.checkPassword(s.password)?!s.rePassword||s.password!==s.rePassword?(a.error("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"),!1):s.question?s.answer?!0:(a.error("\u8BF7\u8F93\u5165\u5BC6\u4FDD\u7B54\u6848"),!1):(a.error("\u8BF7\u8F93\u5165\u5BC6\u4FDD\u95EE\u9898"),!1):(a.error("\u8BF7\u8F93\u51658-16\u4F4D\u7684\u5BC6\u7801"),!1):(a.error("\u8BF7\u8F93\u51656-16\u4F4D\u53EA\u5305\u542B\u6570\u5B57\u548C\u5B57\u6BCD\u7684\u7528\u6237\u540D"),!1),_=()=>{g.push({name:"Login"})};return(m,t)=>{const y=k;return V(),U("div",I,[e("div",M,[e("div",{class:"img"},[N,e("div",{class:"img__btn",onClick:_},T)]),e("div",D,[F,e("label",null,[L,l(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>s.username=n),onKeyup:i(r,["enter"]),ref_key:"usernameEl",ref:c},null,544),[[u,s.username]])]),e("label",null,[A,l(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=n=>s.password=n),onKeyup:i(r,["enter"])},null,544),[[u,s.password]])]),e("label",null,[G,l(e("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=n=>s.rePassword=n),onKeyup:i(r,["enter"])},null,544),[[u,s.rePassword]])]),e("label",null,[W,l(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=n=>s.question=n),onKeyup:i(r,["enter"])},null,544),[[u,s.question]])]),e("label",null,[Z,l(e("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=n=>s.answer=n),onKeyup:i(r,["enter"])},null,544),[[u,s.answer]])]),C(y,{type:"warning",class:"submit",loading:p.value,onClick:r,round:""},{default:K(()=>[B("\u6CE8 \u518C")]),_:1},8,["loading"])])])])}}},O=q(j,[["__scopeId","data-v-45600747"]]);export{O as default};
