var j=Object.defineProperty;var q=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var M=(l,n,d)=>n in l?j(l,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):l[n]=d,R=(l,n)=>{for(var d in n||(n={}))H.call(n,d)&&M(l,d,n[d]);if(q)for(var d of q(n))X.call(n,d)&&M(l,d,n[d]);return l};import{_ as G,H as J,k as W,m as Y,P as Z,p as $,a as A,h as e,w as u,g as ee,S as te,N as U,M as E,r as s,aC as z,o as c,aD as ae,F as I,e as N,f,b as g,y as C,i as _,t as le,A as oe,z as ue}from"./index.1661925429160.js";import{E as ne,l as se,c as de,d as re}from"./editModule.16619254291602.js";const ie={name:"index",components:{EditModule:ne},setup(){const{proxy:l}=ee(),n=J(),d="http://192.168.10.42:7788",t=W({loading:!0,debugOpen:!1,url:"",headers:{},ids:[],single:!0,multiple:!0,title:"",tableData:[],total:0,statusOptions:[],ossOptions:[],debugForm:{},queryParams:{pageNum:1,pageSize:10,category:void 0,ossCode:void 0,status:void 0}}),h=()=>{t.loading=!0,se(t.queryParams).then(a=>{t.tableData=a.data.data,t.total=a.data.total,t.loading=!1})},P=()=>{t.queryParams.category=void 0,t.queryParams.ossCode=void 0,t.queryParams.status=void 0,h()},v=a=>{t.queryParams.pageNum=a,h()},y=a=>{t.queryParams.pageSize=a,h()},D=a=>l.selectDictLabel(t.statusOptions,a.status),B=a=>l.selectDictLabel(t.ossOptions,a.category),i=a=>{a=[],t.title="\u6DFB\u52A0ResOss",n.value.openDialog(a)},m=a=>{t.title="\u4FEE\u6539ResOss",n.value.openDialog(a)},w=a=>{t.debugOpen=!0,t.debugForm=a,t.url=d+"/resource/oss/uploadFile?ossCode="+a.ossCode,t.headers={"X-TOKEN":`${te.get("token")}`}},O=a=>{let p=a.status==="0"?"\u542F\u7528":"\u505C\u7528";U({message:'\u786E\u8BA4\u8981"'+p+'""'+a.ossCode+'"Oss\u5417?',title:"\u8B66\u544A",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(function(){return de({ossId:a.ossId,status:a.status})}).then(()=>{E({message:p+"\u6210\u529F",type:"success"})}).catch(function(){a.status=a.status==="0"?"1":"0"})},r=a=>{const p=a.ossId||t.ids;U({message:'\u662F\u5426\u786E\u8BA4\u5220\u9664\u5C97\u4F4D\u7F16\u53F7\u4E3A"'+p+'"\u7684\u6570\u636E\u9879?',title:"\u8B66\u544A",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(function(){return re(p).then(()=>{h(),E.success("\u5220\u9664\u6210\u529F")})})},V=a=>{t.ids=a.map(p=>p.ossId),t.single=a.length!=1,t.multiple=!a.length},k=a=>{a.length>t.limit&&E.warning(`\u6700\u5927\u5355\u6B21\u53EA\u53EF\u4E0A\u4F20${t.limit}\u6761`)},S=(a,p)=>{a.code==200?E.success(`\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\uFF0C\u8DEF\u5F84\u4E3A${a.data}`):E.error("\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25")};return Y(()=>{h(),l.getDicts("sys_normal_disable").then(a=>{t.statusOptions=a.data}),l.getDicts("res_oss_category").then(a=>{t.ossOptions=a.data}),l.mittBus.on("onEditResOssesModule",a=>{h()})}),Z(()=>{l.mittBus.off("onEditResOssesModule")}),R({editModuleRef:n,ossFormat:B,handleSelectionChange:V,handleQuery:h,handleCurrentChange:v,handleSizeChange:y,resetQuery:P,statusFormat:D,onOpenAddModule:i,onOpenEditModule:m,onOpenDebugModule:w,handleStatusChange:O,onTabelRowDel:r,handleLimit:k,handleUplaodSuccess:S},$(t))}},ce={class:"app-container"},me=_(" \u641C\u7D22 "),pe=_(" \u91CD\u7F6E "),ge={class:"card-header"},_e=g("span",{class:"card-header-text"},"\u5BF9\u8C61\u5B58\u50A8\u5217\u8868",-1),he=_(" \u65B0\u589E "),ye=_(" \u5220\u9664 "),fe=_(" \u4FEE\u6539 "),Ce=_(" \u5220\u9664 "),be=_(" \u8C03\u8BD5 "),Fe=g("div",{class:"el-upload__text"},[_(" \u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u6216 "),g("em",null,"\u70B9\u51FB\u6587\u4EF6\u4E0A\u4F20")],-1);function Ee(l,n,d,t,h,P){const v=s("el-input"),y=s("el-form-item"),D=s("el-option"),B=s("el-select"),i=s("SvgIcon"),m=s("el-button"),w=s("el-form"),O=s("el-card"),r=s("el-table-column"),V=s("el-tag"),k=s("el-switch"),S=s("el-popover"),a=s("el-table"),p=s("el-divider"),T=s("el-pagination"),K=s("EditModule"),L=s("el-upload"),x=s("el-dialog"),b=z("auth"),Q=z("loading");return c(),A("div",ce,[e(O,{shadow:"always"},{default:u(()=>[e(w,{model:l.queryParams,ref:"queryForm",inline:!0,"label-width":"68px"},{default:u(()=>[e(y,{label:"\u8D44\u6E90\u7F16\u53F7",prop:"ossCode"},{default:u(()=>[e(v,{placeholder:"\u8BF7\u8F93\u5165\u8D44\u6E90\u7F16\u53F7\u7CCA\u67E5\u8BE2",clearable:"",onKeyup:ae(t.handleQuery,["enter"]),style:{width:"240px"},modelValue:l.queryParams.ossCode,"onUpdate:modelValue":n[0]||(n[0]=o=>l.queryParams.ossCode=o)},null,8,["onKeyup","modelValue"])]),_:1}),e(y,{label:"\u5206\u7C7B",prop:"category"},{default:u(()=>[e(B,{modelValue:l.queryParams.category,"onUpdate:modelValue":n[1]||(n[1]=o=>l.queryParams.category=o),placeholder:"\u5206\u7C7B",clearable:""},{default:u(()=>[(c(!0),A(I,null,N(l.ossOptions,o=>(c(),f(D,{key:o.dictValue,label:o.dictLabel,value:o.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(y,{label:"\u72B6\u6001",prop:"status"},{default:u(()=>[e(B,{modelValue:l.queryParams.status,"onUpdate:modelValue":n[2]||(n[2]=o=>l.queryParams.status=o),placeholder:"\u72B6\u6001",clearable:"",style:{width:"240px"}},{default:u(()=>[(c(!0),A(I,null,N(l.statusOptions,o=>(c(),f(D,{key:o.dictValue,label:o.dictLabel,value:o.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(y,null,{default:u(()=>[e(m,{type:"primary",plain:"",onClick:t.handleQuery},{default:u(()=>[e(i,{name:"elementSearch"}),me]),_:1},8,["onClick"]),e(m,{onClick:t.resetQuery},{default:u(()=>[e(i,{name:"elementRefresh"}),pe]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(O,{class:"box-card"},{header:u(()=>[g("div",ge,[_e,g("div",null,[C((c(),f(m,{type:"primary",plain:"",onClick:t.onOpenAddModule},{default:u(()=>[e(i,{name:"elementPlus"}),he]),_:1},8,["onClick"])),[[b,"resource:file:add"]]),C((c(),f(m,{type:"danger",plain:"",disabled:l.multiple,onClick:t.onTabelRowDel},{default:u(()=>[e(i,{name:"elementDelete"}),ye]),_:1},8,["disabled","onClick"])),[[b,"resource:file:delete"]])])])]),default:u(()=>[C((c(),f(a,{data:l.tableData,onSelectionChange:t.handleSelectionChange},{default:u(()=>[e(r,{type:"selection",width:"55",align:"center"}),e(r,{label:"\u7F16\u53F7",align:"center",prop:"ossId"}),e(r,{label:"\u5206\u7C7B",align:"center",width:"80",prop:"category"},{default:u(o=>[e(V,{type:o.row.category==="0"?"danger":o.row.category==="0"?"success":"warning","disable-transitions":""},{default:u(()=>[_(le(t.ossFormat(o.row)),1)]),_:2},1032,["type"])]),_:1}),e(r,{label:"\u8D44\u6E90\u7F16\u53F7",align:"center",prop:"ossCode"}),e(r,{label:"\u8D44\u6E90\u5730\u5740",align:"center",width:"250",prop:"endpoint"}),e(r,{label:"\u7A7A\u95F4\u540D",align:"center",prop:"bucketName"}),e(r,{label:"accessKey",align:"center",prop:"accessKey"}),e(r,{label:"secretKey",align:"center",prop:"secretKey"}),e(r,{label:"\u72B6\u6001",align:"center"},{default:u(o=>[e(k,{modelValue:o.row.status,"onUpdate:modelValue":F=>o.row.status=F,"active-value":"0","inactive-value":"1",onClick:F=>t.handleStatusChange(o.row)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1}),e(r,{label:"\u64CD\u4F5C",align:"center",width:"300","class-name":"small-padding fixed-width"},{default:u(o=>[e(S,{placement:"left"},{reference:u(()=>[e(m,{type:"primary",circle:""},{default:u(()=>[e(i,{name:"elementStar"})]),_:1})]),default:u(()=>[g("div",null,[C((c(),f(m,{text:"",type:"primary",onClick:F=>t.onOpenEditModule(o.row)},{default:u(()=>[e(i,{name:"elementEdit"}),fe]),_:2},1032,["onClick"])),[[b,"resource:file:edit"]])]),g("div",null,[o.row.parentId!=0?C((c(),f(m,{key:0,text:"",type:"primary",onClick:F=>t.onTabelRowDel(o.row)},{default:u(()=>[e(i,{name:"elementDelete"}),Ce]),_:2},1032,["onClick"])),[[b,"resource:file:delete"]]):oe("",!0)]),g("div",null,[C((c(),f(m,{text:"",type:"primary",onClick:F=>t.onOpenDebugModule(o.row)},{default:u(()=>[e(i,{name:"elementUploadFilled"}),be]),_:2},1032,["onClick"])),[[b,"resource:file:debug"]])])]),_:2},1024)]),_:1})]),_:1},8,["data","onSelectionChange"])),[[Q,l.loading]]),C(g("div",null,[e(p),e(T,{background:"",total:l.total,"current-page":l.queryParams.pageNum,"page-size":l.queryParams.pageSize,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:t.handleSizeChange,onCurrentChange:t.handleCurrentChange},null,8,["total","current-page","page-size","onSizeChange","onCurrentChange"])],512),[[ue,l.total>0]])]),_:1}),e(K,{ref:"editModuleRef",title:l.title},null,8,["title"]),e(x,{title:"\u6D4B\u8BD5\u6587\u4EF6\u4E0A\u4F20",modelValue:l.debugOpen,"onUpdate:modelValue":n[4]||(n[4]=o=>l.debugOpen=o),width:"769px",center:""},{default:u(()=>[e(w,{"label-width":"80px"},{default:u(()=>[e(y,{label:"\u8D44\u6E90\u7F16\u53F7"},{default:u(()=>[e(v,{modelValue:l.debugForm.ossCode,"onUpdate:modelValue":n[3]||(n[3]=o=>l.debugForm.ossCode=o),disabled:!0},null,8,["modelValue"])]),_:1}),e(y,{label:"\u4E0A\u4F20\u6587\u4EF6"},{default:u(()=>[e(L,{drag:"",action:l.url,headers:l.headers,"auto-upload":!0,"on-exceed":t.handleLimit,"on-success":t.handleUplaodSuccess},{default:u(()=>[e(i,{name:"elementPlus"}),Fe]),_:1},8,["action","headers","on-exceed","on-success"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var we=G(ie,[["render",Ee]]);export{we as default};