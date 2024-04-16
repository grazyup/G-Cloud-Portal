/* empty css                  */import{v as Ye}from"./el-loading.e51fa89b.js";import{E as Ze}from"./el-tree.a3964b3b.js";import{E as Qe,a as Xe}from"./el-tag.3dcc71a2.js";import{E as ea,b as aa,d as oa}from"./el-input.3bf0fc1e.js";import"./el-tooltip.2dc03f92.js";import{E as sa}from"./el-icon.b71b87e5.js";import{E as ta,a as la}from"./el-breadcrumb-item.312d1066.js";import{E as na}from"./el-divider.d895b557.js";import{E as ra}from"./el-link.10359f38.js";import{b as da,q as ia,d as _e,u as ca,o as f,g as m,n as $,a as x,j as X,h as g,C as l,D as ua,_ as fa,k as c,t as _,p as pa,Y as ma,r,aA as M,Z as ha,cn as _a,$ as ee,F as va,W as ga,aE as ya,S as Ca,M as o,w as s,aC as R,aG as wa,aF as ba,aD as p,ca as ka,am as Sa,bR as Ea,al as he,aB as ae,V as v,cl as Fa,co as Ta,cp as Da,c9 as Ia,f as Va}from"./index.f88c3f7a.js";import{s as k}from"./index.6e658aee.js";import"./index.f59700c3.js";import"./debounce.a729bf40.js";const xa=da({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:ia([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),Ra=_e({name:"ElCard"}),$a=_e({...Ra,props:xa,setup(ve){const y=ca("card");return(d,H)=>(f(),m("div",{class:$([x(y).b(),x(y).is(`${d.shadow}-shadow`)])},[d.$slots.header||d.header?(f(),m("div",{key:0,class:$(x(y).e("header"))},[X(d.$slots,"header",{},()=>[c(_(d.header),1)])],2)):g("v-if",!0),l("div",{class:$([x(y).e("body"),d.bodyClass]),style:ua(d.bodyStyle)},[X(d.$slots,"default")],6),d.$slots.footer||d.footer?(f(),m("div",{key:1,class:$(x(y).e("footer"))},[X(d.$slots,"footer",{},()=>[c(_(d.footer),1)])],2)):g("v-if",!0)],2))}});var Oa=fa($a,[["__file","card.vue"]]);const Pa=pa(Oa);const Ua={"element-loading-text":"\u52A0\u8F7D\u4E2D...",class:"pan-share-content"},Ba={class:"pan-share-header-content"},Na={class:"pan-share-header-content-wrapper"},La={key:0,class:"pan-share-header-user-info-content"},za={key:1,class:"pan-share-header-button-content"},Aa={class:"pan-share-list-content"},Ma={class:"pan-share-list-wrapper"},Ha={key:0,slot:"header",class:"pan-share-list-card-header"},Ka={class:"pan-share-list-card-header-share-info-content"},Wa={class:"pan-share-list-card-header-share-info"},ja={class:"pan-share-list-card-header-time"},Ja={class:"pan-share-list-card-header-create-date"},qa=l("i",{class:"fa fa-clock-o"},null,-1),Ga={class:"pan-share-list-card-header-expire-date"},Ya=l("i",{class:"fa fa-clock-o"},null,-1),Za={class:"pan-share-list-card-button-group"},Qa={key:1,class:"pan-share-list-card-error-message"},Xa=l("span",null,"Sorry,\u60A8\u6765\u665A\u5566~ \u8BE5\u5206\u4EAB\u5DF2\u5230\u671F\u6216\u5DF2\u5931\u6548~",-1),eo=[Xa],ao={key:2,class:"pan-share-list-card-operate-content"},oo={class:"pan-share-list-card-operate-bread-crumb"},so=["onClick"],to={key:3,class:"pan-share-list"},lo=["onClick"],no={style:{cursor:"pointer"}},ro={class:"file-operation-content"},io={class:"dialog-footer"},co={class:"pan-share-code-content"},uo={class:"pan-share-code-wrapper"},fo={class:"tree-content"},po={class:"custom-tree-node"},mo={class:"dialog-footer"},Ro={__name:"index",setup(ve){const y=ma(),d=r(null),H=r(null),K=r(null),ge=r(null),oe=r(null),se=r(null),ye=()=>{oe.value.focus()},Ce=()=>{d.value.resetFields()},we=()=>{se.value.focus()},be=()=>{K.value.resetFields()},ke=M({username:[{validator:(e,a,t)=>{if(!v.checkUsername(a)){t("\u8BF7\u8F93\u51656-16\u4F4D\u53EA\u5305\u542B\u6570\u5B57\u548C\u5B57\u6BCD\u7684\u7528\u6237\u540D");return}t()},trigger:"blur"}],password:[{validator:(e,a,t)=>{if(!v.checkPassword(a)){t("\u8BF7\u8F93\u51658-16\u4F4D\u7684\u5BC6\u7801");return}t()},trigger:"blur"}]}),Se=M({shareCode:[{required:!0,message:"\u8BF7\u8F93\u5165\u63D0\u53D6\u7801",trigger:"blur"}]}),C=M({username:"",password:""}),u=r(!1),O=r(""),S=r(!1),E=r(!1),F=r(!1),P=M({shareCode:""}),U=r(""),T=r(!1),W=r([]),Ee=r(window.innerHeight-300),h=r([]),te=r(!0),le=r(""),j=r(""),D=r([{id:"-1",name:"\u5168\u90E8\u6587\u4EF6"}]),J=r([]),b=r(!1),B=r(void 0),Fe=e=>{let a=e.shareUserInfoVO.username,t=e.shareName;U.value=a+"\u7684\u5206\u4EAB\uFF1A"+t,le.value=e.createTime,e.shareDay===0?j.value="\u6C38\u4E45\u6709\u6548":j.value=e.shareEndTime,W.value=e.userFileVOList},q=()=>y.params.shareId,ne=()=>{T.value=!0},Te=()=>{k.getSimpleShareDetail({shareId:q()},e=>{e.code===0?(F.value=!0,U.value=e.data.shareUserInfoVO.username+"\u7684\u5206\u4EAB\uFF1A"+e.data.shareName):(F.value=!1,ne())})},G=()=>{k.getShareDetail(e=>{e.code===0?Fe(e.data):e.code===4?Te():ne()})},N=()=>{R.infoWithoutPageJump(e=>{e.code===0?(O.value=e.data.username,E.value=!0):(O.value="",E.value=!1)})},L=()=>{S.value=!0},De=()=>{wa.confirm("\u786E\u5B9A\u8981\u9000\u51FA\u767B\u5F55\u5417?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{R.exit(()=>{ba(),E.value=!1,O.value=""},e=>{p.error(e.message)})})},Y=async()=>{await d.value.validate((e,a)=>{e&&(u.value=!0,R.login({username:C.username,password:C.password},t=>{u.value=!1,Fa(t.data),S.value=!1,N()},t=>{u.value=!1,p.error(t.message)}))})},Ie=()=>{window.location.href="/"},re=async()=>{await K.value.validate(e=>{e&&(u.value=!0,k.checkShareCode({shareId:q(),shareCode:P.shareCode},a=>{a.code===0?(u.value=!1,Ta(a.data),F.value=!1,G()):(u.value=!1,p.error(a.message))}))})},Ve=e=>{h.value=e},xe=(e,a,t,w)=>{v.showOperation(t)},Re=(e,a,t,w)=>{v.hiddenOperation(t)},$e=e=>{e.folderFlag===1&&Oe(e)},Oe=e=>{D.value.push({id:e.fileId,name:e.filename}),de(e.fileId)},de=e=>{k.getShareFiles({parentId:e},a=>{a.code===0?W.value=a.data:window.location.reload()})},Pe=e=>{if(e==="-1")D.value=[{id:"-1",name:"\u5168\u90E8\u6587\u4EF6"}],G();else{let a=new Array;D.value.some(t=>{if(a.push(t),t.id===e)return!0}),D.value=a,de(e)}},Ue=()=>{if(!h.value||h.value.length===0){p.error("\u8BF7\u9009\u62E9\u8981\u4E0B\u8F7D\u7684\u6587\u4EF6");return}for(let e=0,a=h.value.length;e<a;e++)if(h.value[e].folderFlag===1){p.error("\u6587\u4EF6\u5939\u6682\u4E0D\u652F\u6301\u4E0B\u8F7D");return}ie(h.value)},ie=(e,a)=>{a||(a=0),e.length!==a&&setTimeout(function(){ce(e[a]),a++,ie(e,a)},500)},ce=e=>{if(e.folderFlag===1){p.error("\u6587\u4EF6\u5939\u6682\u4E0D\u652F\u6301\u4E0B\u8F7D");return}R.infoWithoutPageJump(a=>{a.code===0?k.getSimpleShareDetail({shareId:q()},t=>{if(t.code===0){let w=v.getUrlPrefix()+"/share/file/download?fileId="+v.handleId(e.fileId)+"&shareToken="+Da()+"&authorization="+Ia(),I=e.filename,i=document.createElement("a");i.style.display="none",i.href=w,i.setAttribute("download",I),document.body.appendChild(i),i.click(),document.body.removeChild(i)}else window.location.reload()}):(N(),L())})},Be=()=>{J.value=new Array,B.value=void 0},Ne=()=>{ka.getFolderTree(e=>{J.value=e.data},e=>{p.error(e.message)})},Le=()=>{u.value=!0;let e=H.value.getCurrentNode();if(!e){p.error("\u8BF7\u9009\u62E9\u6587\u4EF6\u5939"),u.value=!1;return}ze(e.id)},ue=e=>{if(e)B.value=e;else if(!h.value||h.value.length===0){p.error("\u8BF7\u9009\u62E9\u8981\u4FDD\u5B58\u7684\u6587\u4EF6");return}R.infoWithoutPageJump(a=>{a.code===0?b.value=!0:L()})},ze=e=>{let a="";if(B.value)a=B.value.fileId;else{let t=new Array;h.value.forEach(w=>{t.push(w.fileId)}),a=t.join(v.COMMON_SEPARATOR)}k.saveShareFiles({fileIds:a,targetParentId:e},t=>{t.code===0?(p.success("\u4FDD\u5B58\u6210\u529F"),b.value=!1):t.code===10?(b.value=!1,N(),L()):p.error(t.message),u.value=!1})},Ae=e=>v.getFileFontElement(e);return ha(()=>{_a(),G(),N(),te.value=!1}),(e,a)=>{const t=ra,w=ee("DocumentCopy"),I=va,i=ga,Me=ee("Download"),He=na,Ke=ta,We=la,z=Qe,fe=sa,je=Xe,pe=Pa,Z=ya,A=ea,me=aa,Q=oa,Je=ee("Folder"),qe=Ze,Ge=Ye;return Ca((f(),m("div",Ua,[l("div",Ba,[l("div",Na,[l("div",{class:"pan-share-header-title-font-content"},[l("span",{class:"pan-share-header-title-font",onClick:Ie},"G-Cloud")]),E.value?(f(),m("div",La,[o(t,{underline:!1,type:"success",class:"pan-share-username"},{default:s(()=>[c(" \u6B22\u8FCE\u60A8,"+_(O.value),1)]),_:1}),o(t,{underline:!1,type:"success",class:"pan-share-exit-button",onClick:De},{default:s(()=>[c(" \u9000\u51FA ")]),_:1})])):g("",!0),E.value?g("",!0):(f(),m("div",za,[o(t,{underline:!1,type:"primary",class:"pan-share-login-button",onClick:L},{default:s(()=>[c(" \u767B\u5F55 ")]),_:1}),o(t,{underline:!1,type:"primary",class:"pan-share-register-button",href:"/register",target:"_blank"},{default:s(()=>[c(" \u6CE8\u518C ")]),_:1})]))])]),l("div",Aa,[l("div",Ma,[o(pe,{shadow:"always",class:"pan-share-list-card"},{default:s(()=>[T.value?g("",!0):(f(),m("div",Ha,[l("div",Ka,[l("span",Wa,_(U.value),1),l("div",ja,[l("span",Ja,[qa,c("\u5206\u4EAB\u65F6\u95F4\uFF1A"+_(le.value),1)]),l("span",Ga,[Ya,c("\u5931\u6548\u65F6\u95F4\uFF1A"+_(j.value),1)])])]),l("div",Za,[o(i,{type:"success",size:"default",round:"",onClick:a[0]||(a[0]=n=>ue(void 0))},{default:s(()=>[c("\u4FDD\u5B58\u5230\u6211\u7684R\u76D8 "),o(I,{class:"el-icon--right"},{default:s(()=>[o(w)]),_:1})]),_:1}),o(i,{type:"info",size:"default",round:"",onClick:Ue},{default:s(()=>[c("\u4E0B\u8F7D "),o(I,{class:"el-icon--right"},{default:s(()=>[o(Me)]),_:1})]),_:1})]),o(He)])),T.value?(f(),m("div",Qa,eo)):g("",!0),T.value?g("",!0):(f(),m("div",ao,[l("div",oo,[o(We,{"separator-class":"el-icon-arrow-right"},{default:s(()=>[(f(!0),m(Sa,null,Ea(D.value,(n,V)=>(f(),Va(Ke,{key:V},{default:s(()=>[l("a",{class:"breadcrumb-item-a",onClick:vo=>Pe(n.id),href:"#"},_(n.name),9,so)]),_:2},1024))),128))]),_:1})])])),T.value?g("",!0):(f(),m("div",to,[o(je,{ref_key:"fileTableRef",ref:ge,data:W.value,height:Ee.value,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:Ve,onCellMouseEnter:xe,onCellMouseLeave:Re},{default:s(()=>[o(z,{type:"selection",width:"55"}),o(z,{label:"\u6587\u4EF6\u540D",prop:"filename",sortable:"","show-overflow-tooltip":"","min-width":"750"},{default:s(n=>[l("div",{onClick:V=>$e(n.row),class:"file-name-content"},[l("i",{class:$(Ae(n.row.fileType)),style:{"margin-right":"15px","font-size":"20px",cursor:"pointer"}},null,2),l("span",no,_(n.row.filename),1)],8,lo),l("div",ro,[o(fe,{class:"item",effect:"light",content:"\u4FDD\u5B58\u5230\u6211\u7684R\u76D8",placement:"top"},{default:s(()=>[o(i,{type:"success",icon:"DocumentCopy",size:"small",circle:"",onClick:V=>ue(n.row)},null,8,["onClick"])]),_:2},1024),o(fe,{class:"item",effect:"light",content:"\u4E0B\u8F7D",placement:"top"},{default:s(()=>[o(i,{type:"info",icon:"Download",size:"small",circle:"",onClick:V=>ce(n.row)},null,8,["onClick"])]),_:2},1024)])]),_:1}),o(z,{prop:"fileSizeDesc",sortable:"",label:"\u5927\u5C0F","min-width":"120",align:"center"}),o(z,{prop:"updateTime",sortable:"",align:"center",label:"\u4FEE\u6539\u65E5\u671F","min-width":"240"})]),_:1},8,["data","height"])]))]),_:1})])]),o(Q,{title:"\u6B22\u8FCE\u767B\u5F55",modelValue:S.value,"onUpdate:modelValue":a[5]||(a[5]=n=>S.value=n),onOpened:ye,onClosed:Ce,width:"30%","append-to-body":"","modal-append-to-body":!1,center:""},{footer:s(()=>[l("span",io,[o(i,{onClick:a[4]||(a[4]=n=>S.value=!1)},{default:s(()=>[c("\u53D6 \u6D88")]),_:1}),o(i,{type:"primary",onClick:Y,loading:u.value},{default:s(()=>[c("\u786E \u5B9A")]),_:1},8,["loading"])])]),default:s(()=>[l("div",null,[o(me,{"label-width":"100px",rules:ke,ref_key:"loginFormRef",ref:d,model:C,"status-icon":"",onSubmit:a[3]||(a[3]=he(()=>{},["prevent"]))},{default:s(()=>[o(A,{label:"\u7528\u6237\u540D",prop:"username"},{default:s(()=>[o(Z,{type:"text",ref_key:"usernameEl",ref:oe,onKeyup:ae(Y,["enter","native"]),modelValue:C.username,"onUpdate:modelValue":a[1]||(a[1]=n=>C.username=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(A,{label:"\u5BC6\u7801",prop:"password"},{default:s(()=>[o(Z,{type:"password","show-password":"",onKeyup:ae(Y,["enter","native"]),modelValue:C.password,"onUpdate:modelValue":a[2]||(a[2]=n=>C.password=n),autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])])]),_:1},8,["modelValue"]),o(Q,{modelValue:F.value,"onUpdate:modelValue":a[8]||(a[8]=n=>F.value=n),onOpened:we,onClosed:be,width:"30%",fullscreen:"","append-to-body":"","modal-append-to-body":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{default:s(()=>[l("div",co,[l("div",uo,[o(pe,{header:U.value,shadow:"always",class:"pan-share-code-card"},{default:s(()=>[o(me,{class:"pan-share-code-form",inline:"",rules:Se,ref_key:"shareCodeFormRef",ref:K,model:P,onSubmit:a[7]||(a[7]=he(()=>{},["prevent"]))},{default:s(()=>[o(A,{label:"\u63D0\u53D6\u7801",prop:"shareCode"},{default:s(()=>[o(Z,{type:"text",ref_key:"shareCodeEl",ref:se,onKeyup:ae(re,["enter","native"]),modelValue:P.shareCode,"onUpdate:modelValue":a[6]||(a[6]=n=>P.shareCode=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(A,null,{default:s(()=>[o(i,{type:"primary",loading:u.value,onClick:re},{default:s(()=>[c("\u786E \u5B9A")]),_:1},8,["loading"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["header"])])])]),_:1},8,["modelValue"]),o(Q,{title:"\u4FDD\u5B58\u5230\u6211\u7684R\u76D8",modelValue:b.value,"onUpdate:modelValue":a[10]||(a[10]=n=>b.value=n),onOpen:Ne,onClosed:Be,width:"30%","append-to-body":"","modal-append-to-body":!1,center:""},{footer:s(()=>[l("span",mo,[o(i,{onClick:a[9]||(a[9]=n=>b.value=!1)},{default:s(()=>[c("\u53D6 \u6D88")]),_:1}),o(i,{type:"primary",onClick:Le,loading:u.value},{default:s(()=>[c("\u786E \u5B9A")]),_:1},8,["loading"])])]),default:s(()=>[l("div",fo,[o(qe,{data:J.value,class:"tree","empty-text":"\u6682\u65E0\u6587\u4EF6\u5939\u6570\u636E","default-expand-all":"","highlight-current":"","check-on-click-node":"","expand-on-click-node":!1,ref_key:"treeRef",ref:H},{default:s(({node:n,data:V})=>[l("span",po,[o(I,{size:20,style:{"margin-right":"15px",cursor:"pointer"}},{default:s(()=>[o(Je)]),_:1}),l("span",null,_(n.label),1)])]),_:1},8,["data"])])]),_:1},8,["modelValue"])])),[[Ge,te.value]])}}};export{Ro as default};
