import{P as r}from"./index.acff3f7a.js";import{r as l,Y as d,Z as _,o as u,g as p,M as m,C as c,t as f,cq as x,V as v}from"./index.9c2f3603.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.b1ab905b.js";/* empty css                  */import"./el-input.21e9418b.js";import"./el-icon.d9410ea7.js";import"./index.e923ab54.js";const g={class:"code-text-content"},h={class:"layui-code code-text"},b={__name:"index",setup(B){const e=l(""),s=d(),n=(t,o)=>{x.get(v.getPreviewUrl(t)).then(a=>{a.status===200?(e.value=a.data,layui.use("code",function(){layui.code({elem:".layui-code.code-text",title:o,encode:!1,about:!1})})):e.value="\u83B7\u53D6\u8D44\u6E90\u5931\u8D25"}).catch(a=>{e.value="\u83B7\u53D6\u8D44\u6E90\u5931\u8D25"})},i=()=>{let t=s.params.fileId,o=s.query.filename;n(t,o)};return _(()=>{i()}),(t,o)=>(u(),p("div",null,[m(r),c("div",g,[c("pre",h,"                "+f(e.value)+`
            `,1)])]))}},S=y(b,[["__scopeId","data-v-c24b1407"]]);export{S as default};
