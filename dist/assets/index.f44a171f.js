/* empty css                  */import{E as b,a as k,b as L,c as N}from"./el-col.603e12da.js";import"./el-tooltip.2dc03f92.js";import"./el-icon.b71b87e5.js";import{E as U}from"./el-divider.d895b557.js";import{P as C}from"./index.12afe42b.js";import{Y as D,r as u,Z as R,o as v,g as h,M as s,C as t,t as g,w as i,ca as F,aD as x,am as A,bR as H,V as m,f as O,a0 as T,a1 as Y}from"./index.f88c3f7a.js";import{_ as Z}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.f59700c3.js";import"./index.562dcf9f.js";import"./el-input.3bf0fc1e.js";import"./index.1e5902a9.js";const j=r=>(T("data-v-80ac79c9"),r=r(),Y(),r),q={class:"pan-video-content"},z={class:"video-name-content"},G={class:"video-name"},J={class:"video-content"},K=["src"],Q={class:"video-list-content"},W=j(()=>t("i",{class:"fa fa-video-camera"},null,-1)),X={slot:"title"},$={__name:"index",setup(r){const p=D(),c=u(""),o=u([]),d=u(""),l=u("0"),y=a=>{o.value=new Array,a.forEach((e,n)=>{e.filename=e.filename.substring(0,e.filename.lastIndexOf(".")),e.filename.length>15&&(e.filename=e.filename.substring(0,16)+"..."),e.fileId===p.params.fileId&&(c.value=e.filename,d.value=m.getPreviewUrl(e.fileId)),o.value.push(e)}),l.value=p.params.fileId},E=()=>{let a="",e=l.value;if(o.value.some((_,f)=>{if(_.fileId===e)return a=f,!0}),a===o.value.length-1)return;let n=o.value[++a];c.value=n.filename,d.value=m.getPreviewUrl(n.fileId),l.value=n.fileId},w=a=>{l.value=a,o.value.some(e=>{if(e.fileId===a)return c.value=e.filename,d.value=m.getPreviewUrl(e.fileId),!0})},S=()=>{document.getElementById("r_pan_video_player").addEventListener("ended",()=>{E()},!1)},P=()=>{F.list({parentId:p.params.parentId,fileTypes:"9"},function(a){a.code===0?(y(a.data),S()):x.error(a.message)},function(a){x.error(a)})};return R(()=>{P()}),(a,e)=>{const n=U,_=b,f=k,V=L,B=N;return v(),h("div",null,[s(C),t("div",q,[t("div",z,[t("p",G,"\u6B63\u5728\u64AD\u653E: "+g(c.value),1)]),s(n,{style:{margin:"5px 0px"}}),s(B,null,{default:i(()=>[s(_,{span:18},{default:i(()=>[t("div",J,[t("video",{id:"r_pan_video_player",src:d.value,autoplay:"true",controls:"true"},null,8,K)])]),_:1}),s(_,{span:6},{default:i(()=>[t("div",Q,[s(V,{class:"video-list","default-active":l.value,onSelect:w},{default:i(()=>[(v(!0),h(A,null,H(o.value,(I,M)=>(v(),O(f,{key:M,index:I.fileId},{default:i(()=>[W,t("span",X,g(I.filename),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])])]),_:1})]),_:1})])])}}},ue=Z($,[["__scopeId","data-v-80ac79c9"]]);export{ue as default};