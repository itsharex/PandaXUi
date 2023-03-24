var U=Object.defineProperty;var h=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var y=(o,u,e)=>u in o?U(o,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[u]=e,C=(o,u)=>{for(var e in u||(u={}))J.call(u,e)&&y(o,e,u[e]);if(h)for(var e of h(u))M.call(u,e)&&y(o,e,u[e]);return o};import{$ as m,_ as O,H as P,k as R,p as q,a as j,h as r,w as l,a2 as L,M as D,r as i,aC as z,o as F,y as H,i as n,t as A,b as f,F as v,e as k,f as T,g as $}from"./index.1661925429160.js";function be(o){return m({url:"/job/list",method:"get",params:o})}function W(o){return m({url:"/job",method:"post",data:o})}function K(o){return m({url:"/job",method:"put",data:o})}function fe(o){return m({url:"/job/"+o,method:"delete"})}function _e(o){return m({url:"/job/changeStatus",method:"put",data:o})}function ge(o){return m({url:"/job/start/"+o,method:"get"})}function je(o){return m({url:"/job/stop/"+o,method:"get"})}const Q={name:"editMenu",props:{title:{type:String,default:()=>""}},setup(){const{proxy:o}=$(),u=P(null),e=R({isShowDialog:!1,loading:!1,ruleForm:{jobId:0,jobName:"",jobGroup:"",jobType:"1",invokeTarget:"",args:"",cronExpression:"",concurrent:"",misfirePolicy:"1",status:"",remark:""},jobGroupOptions:[],statusOptions:[],ruleRules:{jobName:[{required:!0,message:"\u4EFB\u52A1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],invokeTarget:[{required:!0,message:"\u8C03\u7528\u76EE\u6807\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],cronExpression:[{required:!0,message:"cron\u6267\u884C\u8868\u8FBE\u5F0F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}}),_=a=>{console.log("\u6253\u5F00\u5F39\u7A97",a),a.jobId&&a.jobId!=null&&a.jobId!=""?(e.ruleForm=a,e.ruleForm.jobId=a.jobId,e.ruleForm.jobName=a.jobName,e.ruleForm.jobGroup=a.jobGroup,e.ruleForm.jobType=a.jobType,e.ruleForm.args=a.args,e.ruleForm.invokeTarget=a.invokeTarget,e.ruleForm.cronExpression=a.cronExpression,e.ruleForm.concurrent=a.concurrent,e.ruleForm.misfirePolicy=a.misfirePolicy,e.ruleForm.status=a.status,e.ruleForm.remark=a.remark):s(),e.isShowDialog=!0,e.loading=!1,o.getDicts("sys_normal_disable").then(d=>{e.statusOptions=d.data}),o.getDicts("sys_job_group").then(d=>{e.jobGroupOptions=d.data})},c=a=>{o.mittBus.emit("onEditJobModule",a),e.isShowDialog=!1},B=()=>{c()},p=()=>{const a=L(u);!a||a.validate(d=>{d&&(e.loading=!0,e.ruleForm.jobId!=null&&e.ruleForm.jobId!=0?K(e.ruleForm).then(g=>{D.success("\u4FEE\u6539\u6210\u529F"),e.loading=!1,c(e.ruleForm)}):W(e.ruleForm).then(g=>{D.success("\u65B0\u589E\u6210\u529F"),e.loading=!1,c(e.ruleForm)}))})},s=()=>{e.ruleForm.jobId=0,e.ruleForm.jobName="",e.ruleForm.jobGroup="",e.ruleForm.invokeTarget="",e.ruleForm.jobType="1",e.ruleForm.args="",e.ruleForm.cronExpression="",e.ruleForm.concurrent="",e.ruleForm.misfirePolicy="1",e.ruleForm.status="",e.ruleForm.remark=""};return C({ruleFormRef:u,openDialog:_,closeDialog:c,onCancel:B,initForm:s,onSubmit:p},q(e))}},X={class:"system-job-container"},Y={style:{"font-size":"large"}},Z=n(" \u8C03\u7528\u65B9\u6CD5 "),w=n(" \u4F7F\u7528\u793A\u4F8B\uFF1AcronHandle \u65B9\u6CD5\u540E\u7AEF\u5B9E\u73B0\u903B\u8F91, \u63A5\u53E3\u7C7B\u578B\u76F4\u63A5\u586B\u5199\u63A5\u53E3 "),x=f("i",{class:"fa fa-exclamation-circle"},null,-1),ee=n(" \u8C03\u7528\u53C2\u6570 "),oe=n(" \u4F7F\u7528\u793A\u4F8B\uFF1A\u7C7B\u578Bstring "),ue=f("i",{class:"fa fa-exclamation-circle"},null,-1),le=n("\u63A5\u53E3"),re=n("\u51FD\u6570"),te=n("\u7ACB\u5373\u6267\u884C"),ae=n("\u6267\u884C\u4E00\u6B21"),ne=n("\u653E\u5F03\u6267\u884C"),se={class:"dialog-footer"},ie=n("\u53D6 \u6D88"),de=n("\u7F16 \u8F91");function me(o,u,e,_,c,B){const p=i("el-input"),s=i("el-form-item"),a=i("el-option"),d=i("el-select"),g=i("el-tooltip"),b=i("el-radio-button"),E=i("el-radio-group"),S=i("el-radio"),N=i("el-form"),V=i("el-button"),G=i("el-dialog"),I=z("drag");return F(),j("div",X,[r(G,{modelValue:o.isShowDialog,"onUpdate:modelValue":u[8]||(u[8]=t=>o.isShowDialog=t),width:"769px",center:""},{header:l(()=>[H((F(),j("div",Y,[n(A(e.title),1)])),[[I,[".system-job-container .el-dialog",".system-job-container .el-dialog__header"]]])]),footer:l(()=>[f("span",se,[r(V,{onClick:_.onCancel},{default:l(()=>[ie]),_:1},8,["onClick"]),r(V,{type:"primary",onClick:_.onSubmit,loading:o.loading},{default:l(()=>[de]),_:1},8,["onClick","loading"])])]),default:l(()=>[r(N,{model:o.ruleForm,rules:o.ruleRules,ref:"ruleFormRef","label-width":"100px"},{default:l(()=>[r(s,{label:"\u4EFB\u52A1\u540D\u79F0",prop:"jobName"},{default:l(()=>[r(p,{modelValue:o.ruleForm.jobName,"onUpdate:modelValue":u[0]||(u[0]=t=>o.ruleForm.jobName=t),placeholder:"\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0"},null,8,["modelValue"])]),_:1}),r(s,{label:"\u4EFB\u52A1\u5206\u7EC4",prop:"jobGroup"},{default:l(()=>[r(d,{modelValue:o.ruleForm.jobGroup,"onUpdate:modelValue":u[1]||(u[1]=t=>o.ruleForm.jobGroup=t),placeholder:"\u8BF7\u9009\u62E9"},{default:l(()=>[(F(!0),j(v,null,k(o.jobGroupOptions,t=>(F(),T(a,{key:t.dictValue,label:t.dictLabel,value:t.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{prop:"invokeTarget"},{label:l(()=>[f("span",null,[Z,r(g,{placement:"top"},{content:l(()=>[w]),default:l(()=>[x]),_:1})])]),default:l(()=>[r(p,{modelValue:o.ruleForm.invokeTarget,"onUpdate:modelValue":u[2]||(u[2]=t=>o.ruleForm.invokeTarget=t),placeholder:"\u8BF7\u8F93\u5165\u8C03\u7528\u76EE\u6807"},null,8,["modelValue"])]),_:1}),r(s,{prop:"args"},{label:l(()=>[f("span",null,[ee,r(g,{placement:"top"},{content:l(()=>[oe]),default:l(()=>[ue]),_:1})])]),default:l(()=>[r(p,{modelValue:o.ruleForm.args,"onUpdate:modelValue":u[3]||(u[3]=t=>o.ruleForm.args=t),placeholder:"\u8C03\u7528\u53C2\u6570"},null,8,["modelValue"])]),_:1}),r(s,{label:"cron\u8868\u8FBE\u5F0F",prop:"cronExpression"},{default:l(()=>[r(p,{modelValue:o.ruleForm.cronExpression,"onUpdate:modelValue":u[4]||(u[4]=t=>o.ruleForm.cronExpression=t),placeholder:"\u8BF7\u8F93\u5165cron\u6267\u884C\u8868\u8FBE\u5F0F"},null,8,["modelValue"])]),_:1}),r(s,{label:"\u4EFB\u52A1\u7C7B\u578B",prop:"jobType"},{default:l(()=>[r(E,{modelValue:o.ruleForm.jobType,"onUpdate:modelValue":u[5]||(u[5]=t=>o.ruleForm.jobType=t)},{default:l(()=>[r(b,{label:"1"},{default:l(()=>[le]),_:1}),r(b,{label:"2"},{default:l(()=>[re]),_:1})]),_:1},8,["modelValue"])]),_:1}),r(s,{label:"\u9519\u8BEF\u7B56\u7565",prop:"misfirePolicy"},{default:l(()=>[r(E,{modelValue:o.ruleForm.misfirePolicy,"onUpdate:modelValue":u[6]||(u[6]=t=>o.ruleForm.misfirePolicy=t)},{default:l(()=>[r(b,{label:"1"},{default:l(()=>[te]),_:1}),r(b,{label:"2"},{default:l(()=>[ae]),_:1}),r(b,{label:"3"},{default:l(()=>[ne]),_:1})]),_:1},8,["modelValue"])]),_:1}),r(s,{label:"\u72B6\u6001"},{default:l(()=>[r(E,{modelValue:o.ruleForm.status,"onUpdate:modelValue":u[7]||(u[7]=t=>o.ruleForm.status=t)},{default:l(()=>[(F(!0),j(v,null,k(o.statusOptions,t=>(F(),T(S,{key:t.dictValue,label:t.dictValue},{default:l(()=>[n(A(t.dictLabel),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}var pe=O(Q,[["render",me]]),Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});export{pe as E,ge as a,_e as c,fe as d,Ee as e,be as l,je as r};