/* empty css                  */import{E as oe}from"./el-link.9a234f0c.js";import{aX as re,cm as ie,K as ue,b as Q,b_ as Y,J as ee,d as O,u as se,a9 as X,a3 as ce,o as v,g as k,j as q,n as p,a as t,_ as te,aj as ae,af as de,r as c,a4 as pe,Z as ne,a5 as ve,c as S,aA as fe,h as x,C as n,D as Z,f as L,w,E as _e,F,M as m,y as me,z as he,t as A,k as b,p as ye,ao as Se,cb as ge,W as we,S as M,c7 as W,aB as j,aD as g,aC as H,ae as J,a0 as ke,a1 as Ce,V as Ee}from"./index.9c2f3603.js";import{_ as be}from"./_plugin-vue_export-helper.cdc0426e.js";const $e=(d,u,s)=>ie(d.subTree).filter(r=>{var e;return ue(r)&&((e=r.type)==null?void 0:e.name)===u&&!!r.component}).map(r=>r.component.uid).map(r=>s[r]).filter(r=>!!r),Pe=(d,u)=>{const s={},o=re([]);return{children:o,addChild:e=>{s[e.uid]=e,o.value=$e(d,u,s)},removeChild:e=>{delete s[e],o.value=o.value.filter(i=>i.uid!==e)}}},Ne=Q({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),xe={[Y]:(d,u)=>[d,u].every(ee)},Ve=O({name:"ElSteps"}),Ie=O({...Ve,props:Ne,emits:xe,setup(d,{emit:u}){const s=d,o=se("steps"),{children:f,addChild:r,removeChild:e}=Pe(ae(),"ElStep");return X(f,()=>{f.value.forEach((i,l)=>{i.setIndex(l)})}),ce("ElSteps",{props:s,steps:f,addStep:r,removeStep:e}),X(()=>s.active,(i,l)=>{u(Y,i,l)}),(i,l)=>(v(),k("div",{class:p([t(o).b(),t(o).m(i.simple?"simple":i.direction)])},[q(i.$slots,"default")],2))}});var Be=te(Ie,[["__file","steps.vue"]]);const Te=Q({title:{type:String,default:""},icon:{type:de},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),Ke=O({name:"ElStep"}),Ue=O({...Ke,props:Te,setup(d){const u=d,s=se("step"),o=c(-1),f=c({}),r=c(""),e=pe("ElSteps"),i=ae();ne(()=>{X([()=>e.props.active,()=>e.props.processStatus,()=>e.props.finishStatus],([a])=>{_(a)},{immediate:!0})}),ve(()=>{e.removeStep(h.uid)});const l=S(()=>u.status||r.value),V=S(()=>{const a=e.steps.value[o.value-1];return a?a.currentStatus:"wait"}),U=S(()=>e.props.alignCenter),I=S(()=>e.props.direction==="vertical"),y=S(()=>e.props.simple),B=S(()=>e.steps.value.length),D=S(()=>{var a;return((a=e.steps.value[B.value-1])==null?void 0:a.uid)===(i==null?void 0:i.uid)}),C=S(()=>y.value?"":e.props.space),G=S(()=>[s.b(),s.is(y.value?"simple":e.props.direction),s.is("flex",D.value&&!C.value&&!U.value),s.is("center",U.value&&!I.value&&!y.value)]),T=S(()=>{const a={flexBasis:ee(C.value)?`${C.value}px`:C.value?C.value:`${100/(B.value-(U.value?0:1))}%`};return I.value||D.value&&(a.maxWidth=`${100/B.value}%`),a}),R=a=>{o.value=a},z=a=>{const E=a==="wait",P={transitionDelay:`${E?"-":""}${150*o.value}ms`},K=a===e.props.processStatus||E?0:100;P.borderWidth=K&&!y.value?"1px":0,P[e.props.direction==="vertical"?"height":"width"]=`${K}%`,f.value=P},_=a=>{a>o.value?r.value=e.props.finishStatus:a===o.value&&V.value!=="error"?r.value=e.props.processStatus:r.value="wait";const E=e.steps.value[o.value-1];E&&E.calcProgress(r.value)},h=fe({uid:i.uid,currentStatus:l,setIndex:R,calcProgress:z});return e.addStep(h),(a,E)=>(v(),k("div",{style:Z(t(T)),class:p(t(G))},[x(" icon & line "),n("div",{class:p([t(s).e("head"),t(s).is(t(l))])},[t(y)?x("v-if",!0):(v(),k("div",{key:0,class:p(t(s).e("line"))},[n("i",{class:p(t(s).e("line-inner")),style:Z(f.value)},null,6)],2)),n("div",{class:p([t(s).e("icon"),t(s).is(a.icon||a.$slots.icon?"icon":"text")])},[q(a.$slots,"icon",{},()=>[a.icon?(v(),L(t(F),{key:0,class:p(t(s).e("icon-inner"))},{default:w(()=>[(v(),L(_e(a.icon)))]),_:1},8,["class"])):t(l)==="success"?(v(),L(t(F),{key:1,class:p([t(s).e("icon-inner"),t(s).is("status")])},{default:w(()=>[m(t(me))]),_:1},8,["class"])):t(l)==="error"?(v(),L(t(F),{key:2,class:p([t(s).e("icon-inner"),t(s).is("status")])},{default:w(()=>[m(t(he))]),_:1},8,["class"])):t(y)?x("v-if",!0):(v(),k("div",{key:3,class:p(t(s).e("icon-inner"))},A(o.value+1),3))])],2)],2),x(" title & description "),n("div",{class:p(t(s).e("main"))},[n("div",{class:p([t(s).e("title"),t(s).is(t(l))])},[q(a.$slots,"title",{},()=>[b(A(a.title),1)])],2),t(y)?(v(),k("div",{key:0,class:p(t(s).e("arrow"))},null,2)):(v(),k("div",{key:1,class:p([t(s).e("description"),t(s).is(t(l))])},[q(a.$slots,"description",{},()=>[b(A(a.description),1)])],2))],2)],6))}});var le=te(Ue,[["__file","item.vue"]]);const De=ye(Be,{Step:le}),ze=Se(le);const $=d=>(ke("data-v-17c22b5e"),d=d(),Ce(),d),Ge={class:"content"},Le={class:"steps-content"},Me={key:0,class:"form"},We=$(()=>n("h1",null,"G-Cloud \u4E91\u76D8\u6821\u9A8C\u7528\u6237\u540D",-1)),je={class:"forget-form-content"},qe={class:"forget-form-item"},Ae=$(()=>n("span",null,"\u7528 \u6237 \u540D",-1)),Oe={class:"login-link-content"},Re={key:1,class:"form"},Fe=$(()=>n("h1",null,"G-Cloud \u4E91\u76D8\u6821\u9A8C\u5BC6\u4FDD\u7B54\u6848",-1)),He={class:"forget-form-content"},Je={class:"forget-form-item"},Xe=$(()=>n("span",null,"\u60A8\u7684\u5BC6\u4FDD\u95EE\u9898\u4E3A",-1)),Ze={class:"question-content"},Qe=$(()=>n("span",null,"\u60A8\u7684\u5BC6\u4FDD\u7B54\u6848\u4E3A",-1)),Ye={class:"login-link-content"},es={key:2,class:"form"},ss=$(()=>n("h1",null,"G-Cloud \u4E91\u76D8\u91CD\u7F6E\u5BC6\u7801",-1)),ts={class:"forget-form-content"},as={class:"forget-form-item"},ns=$(()=>n("span",null,"\u65B0 \u5BC6 \u7801",-1)),ls=$(()=>n("span",null,"\u786E \u8BA4 \u5BC6 \u7801",-1)),os={class:"login-link-content"},rs={__name:"index",setup(d){const u=c(0),s=c("process"),o=c(""),f=c(""),r=c(""),e=c(""),i=c(""),l=c(!1),V=c(""),U=ge(),I=c(null),y=c(null),B=c(null);ne(()=>{I.value.focus()});const D=()=>{l.value=!0,u.value=0,o.value="",f.value="",r.value="",e.value="",i.value="",V.value="",s.value="process",J(function(){I.focus()}),l.value=!1},C=()=>{if(!o.value){g.error("\u8BF7\u8F93\u5165\u8981\u4FEE\u6539\u5BC6\u7801\u7684\u7528\u6237\u540D");return}l.value=!0,H.checkUsername({username:o.value},_=>{f.value=_.data,u.value=1,J(function(){y.value.focus(),l.value=!1})},_=>{g.error(_.message),l.value=!1})},G=()=>{if(!r.value){g.error("\u8BF7\u8F93\u5165\u5BC6\u4FDD\u7B54\u6848");return}l.value=!0,H.checkAnswer({username:o.value,question:f.value,answer:r.value},_=>{V.value=_.data,u.value=2,J(function(){B.value.focus(),l.value=!1})},_=>{g.error(_.message),l.value=!1})},T=()=>{U.push({name:"Login"})},R=()=>Ee.checkPassword(e.value)?!i.value||e.value!==i.value?(g.error("\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"),!1):!0:(g.error("\u8BF7\u8F93\u51658-16\u4F4D\u7684\u5BC6\u7801"),!1),z=()=>{if(!V.value){g.error("\u7531\u4E8E\u60A8\u957F\u65F6\u95F4\u672A\u64CD\u4F5C\uFF0C\u5C06\u8FD4\u56DE\u6B65\u9AA4\u4E00\u91CD\u65B0\u7533\u8BF7\u5BC6\u7801\u91CD\u7F6E"),D();return}R()&&(l.value=!0,H.resetPassword({username:o.value,password:e.value,token:V.value},()=>{l.value=!1,s.value="success",g.success("\u5BC6\u7801\u91CD\u7F6E\u6210\u529F\uFF01\u5373\u5C06\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762"),setTimeout(T,1e3)},_=>{_.code===2?(l.value=!1,g.error("\u7531\u4E8E\u60A8\u957F\u65F6\u95F4\u672A\u64CD\u4F5C\uFF0C\u5C06\u8FD4\u56DE\u6B65\u9AA4\u4E00\u91CD\u65B0\u7533\u8BF7\u5BC6\u7801\u91CD\u7F6E"),D()):(l.value=!1,g.error(_.message))}))};return(_,h)=>{const a=ze,E=De,P=we,K=oe;return v(),k("div",Ge,[n("div",Le,[m(E,{active:u.value,direction:"vertical","finish-status":"success","process-status":s.value},{default:w(()=>[m(a,{title:"\u6821\u9A8C\u7528\u6237\u540D"}),m(a,{title:"\u6821\u9A8C\u5BC6\u4FDD\u7B54\u6848"}),m(a,{title:"\u4FEE\u6539\u5BC6\u7801"})]),_:1},8,["active","process-status"])]),u.value===0?(v(),k("div",Me,[We,n("div",je,[n("div",qe,[n("label",null,[Ae,M(n("input",{type:"text","onUpdate:modelValue":h[0]||(h[0]=N=>o.value=N),onKeyup:j(C,["enter"]),ref_key:"usernameEl",ref:I},null,544),[[W,o.value]])])])]),m(P,{type:"warning",class:"submit",loading:!1,onClick:C,round:""},{default:w(()=>[b("\u4E0B\u4E00\u6B65")]),_:1}),n("div",Oe,[m(K,{type:"primary",onClick:T},{default:w(()=>[b("\u53BB\u767B\u9646")]),_:1})])])):x("",!0),u.value===1?(v(),k("div",Re,[Fe,n("div",He,[n("div",Je,[n("label",null,[Xe,n("div",Ze,A(f.value),1)]),n("label",null,[Qe,M(n("input",{type:"text","onUpdate:modelValue":h[1]||(h[1]=N=>r.value=N),onKeyup:j(G,["enter"]),ref_key:"answerEl",ref:y},null,544),[[W,r.value]])])])]),m(P,{type:"warning",class:"submit",loading:l.value,onClick:G,round:""},{default:w(()=>[b("\u4E0B\u4E00\u6B65")]),_:1},8,["loading"]),n("div",Ye,[m(K,{type:"primary",onClick:T},{default:w(()=>[b("\u53BB\u767B\u9646")]),_:1})])])):x("",!0),u.value===2?(v(),k("div",es,[ss,n("div",ts,[n("div",as,[n("label",null,[ns,M(n("input",{type:"password","onUpdate:modelValue":h[2]||(h[2]=N=>e.value=N),onKeyup:j(z,["enter"]),ref_key:"newPasswordEl",ref:B},null,544),[[W,e.value]])]),n("label",null,[ls,M(n("input",{type:"password","onUpdate:modelValue":h[3]||(h[3]=N=>i.value=N),onKeyup:j(z,["enter"])},null,544),[[W,i.value]])])])]),m(P,{type:"warning",class:"submit",loading:!1,onClick:z,round:""},{default:w(()=>[b("\u63D0 \u4EA4")]),_:1}),n("div",os,[m(K,{type:"primary",onClick:T},{default:w(()=>[b("\u53BB\u767B\u9646")]),_:1})])])):x("",!0)])}}},ps=be(rs,[["__scopeId","data-v-17c22b5e"]]);export{ps as default};
