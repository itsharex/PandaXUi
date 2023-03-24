import{d as z,H as G,k as J,p as W,m as X,P as Y,a as k,h as e,w as n,a2 as s,g as Z,r as o,aC as O,o as p,aD as ee,F as te,e as ne,f as _,b as y,y as h,i,t as E,N as ue,M as ae}from"./index.1661925429160.js";import{l as oe,d as le}from"./menu.1661925429160.js";import se from"./editMenu.1661925429160.js";import"./index.166192542916026.js";import"./getStyleSheets.1661925429160.js";const ie={class:"app-container"},re=i(" \u641C\u7D22 "),de=i(" \u91CD\u7F6E "),pe={class:"card-header"},me=y("span",{class:"card-header-text"},"\u83DC\u5355\u5217\u8868",-1),ce=i(" \u65B0\u589E "),_e=i(" \u4FEE\u6539 "),ye=i(" \u65B0\u589E "),fe=i(" \u5220\u9664 "),xe=z({__name:"index",setup(he){const{proxy:r}=Z(),D=G(),a=J({loading:!0,menuList:[],menuOptions:[],title:"",open:!1,isHideOptions:[],statusOptions:[],menuTypeOptions:[],queryParams:{menuName:void 0,status:void 0}}),{loading:M,menuList:T,menuOptions:Ce,title:N,open:be,isHideOptions:De,statusOptions:V,menuTypeOptions:ge,queryParams:f}=W(a),g=()=>{a.loading=!0,oe(a.queryParams).then(t=>{a.menuList=t.data,a.loading=!1})},C=()=>{g()},A=()=>{a.queryParams.menuName="",a.queryParams.status="",a.queryParams.menuType="",C()},F=t=>{a.title="\u6DFB\u52A0\u83DC\u5355";let c=t.menuId;t=[],t.parentId=c,D.value.openDialog(t)},L=t=>{a.title="\u4FEE\u6539\u83DC\u5355",D.value.openDialog(t)},P=t=>{ue({message:'\u662F\u5426\u786E\u8BA4\u5220\u9664\u540D\u79F0\u4E3A"'+t.menuName+'"\u7684\u6570\u636E\u9879?',title:"\u8B66\u544A",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(function(){return le(t.menuId).then(()=>{g(),ae.success("\u5220\u9664\u6210\u529F")})})},I=t=>t.menuType=="F"?"":r.selectDictLabel(a.isHideOptions,t.isHide),q=t=>t.menuType=="F"?"":r.selectDictLabel(a.statusOptions,t.status),H=t=>r.selectDictLabel(a.menuTypeOptions,t.menuType);return X(()=>{g(),r.getDicts("sys_show_hide").then(t=>{a.isHideOptions=t.data}),r.getDicts("sys_menu_type").then(t=>{a.menuTypeOptions=t.data}),r.getDicts("sys_normal_disable").then(t=>{a.statusOptions=t.data}),r.mittBus.on("onEditMenuModule",t=>{C()})}),Y(()=>{r.mittBus.off("onEditDeptModule")}),(t,c)=>{const S=o("el-input"),w=o("el-form-item"),R=o("el-option"),K=o("el-select"),d=o("SvgIcon"),m=o("el-button"),U=o("el-form"),B=o("el-card"),l=o("el-table-column"),v=o("el-tag"),$=o("el-popover"),Q=o("el-table"),b=O("auth"),j=O("loading");return p(),k("div",ie,[e(B,{shadow:"always"},{default:n(()=>[e(U,{model:s(f),ref:"queryForm",inline:!0,"label-width":"68px"},{default:n(()=>[e(w,{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName"},{default:n(()=>[e(S,{placeholder:"\u83DC\u5355\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2",clearable:"",onKeyup:ee(C,["enter"]),style:{width:"240px"},modelValue:s(f).menuName,"onUpdate:modelValue":c[0]||(c[0]=u=>s(f).menuName=u)},null,8,["onKeyup","modelValue"])]),_:1}),e(w,{label:"\u72B6\u6001",prop:"status"},{default:n(()=>[e(K,{modelValue:s(f).status,"onUpdate:modelValue":c[1]||(c[1]=u=>s(f).status=u),placeholder:"\u83DC\u5355\u72B6\u6001",clearable:"",style:{width:"240px"}},{default:n(()=>[(p(!0),k(te,null,ne(s(V),u=>(p(),_(R,{key:u.dictValue,label:u.dictLabel,value:u.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(w,null,{default:n(()=>[e(m,{type:"primary",plain:"",onClick:C},{default:n(()=>[e(d,{name:"elementSearch"}),re]),_:1}),e(m,{onClick:A},{default:n(()=>[e(d,{name:"elementRefresh"}),de]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(B,{class:"box-card"},{header:n(()=>[y("div",pe,[me,y("div",null,[h((p(),_(m,{type:"primary",plain:"",onClick:F},{default:n(()=>[e(d,{name:"elementPlus"}),ce]),_:1})),[[b,"system:dept:add"]])])])]),default:n(()=>[h((p(),_(Q,{data:s(T),"row-key":"menuId",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:n(()=>[e(l,{prop:"menuName",label:"\u83DC\u5355\u540D\u79F0","show-overflow-tooltip":!0,width:"150"}),e(l,{prop:"icon",label:"\u56FE\u6807",align:"center",width:"100"},{default:n(u=>[e(d,{name:u.row.icon},null,8,["name"])]),_:1}),e(l,{prop:"sort",label:"\u6392\u5E8F",width:"60"}),e(l,{prop:"icon",label:"\u5206\u7C7B",align:"center",width:"100"},{default:n(u=>[e(v,{type:u.row.menuType==="M"?"danger":u.row.menuType==="C"?"success":"warning","disable-transitions":""},{default:n(()=>[i(E(H(u.row)||"-- --"),1)]),_:2},1032,["type"])]),_:1}),e(l,{prop:"permission",label:"\u6743\u9650\u6807\u8BC6","show-overflow-tooltip":!0}),e(l,{prop:"component",label:"\u7EC4\u4EF6\u8DEF\u5F84","show-overflow-tooltip":!0}),e(l,{prop:"status",label:"\u72B6\u6001",width:"100"},{default:n(u=>[e(v,{type:u.row.status==="1"?"danger":"success","disable-transitions":""},{default:n(()=>[i(E(q(u.row)||"-- --"),1)]),_:2},1032,["type"])]),_:1}),e(l,{prop:"status",label:"\u663E\u793A\u9690\u85CF",width:"100"},{default:n(u=>[e(v,{type:u.row.status==="1"?"danger":"success","disable-transitions":""},{default:n(()=>[i(E(I(u.row)||"-- --"),1)]),_:2},1032,["type"])]),_:1}),e(l,{label:"\u64CD\u4F5C",align:"center"},{default:n(u=>[e($,{placement:"left"},{reference:n(()=>[e(m,{type:"primary",circle:""},{default:n(()=>[e(d,{name:"elementStar"})]),_:1})]),default:n(()=>[y("div",null,[h((p(),_(m,{text:"",type:"primary",onClick:x=>L(u.row)},{default:n(()=>[e(d,{name:"elementEdit"}),_e]),_:2},1032,["onClick"])),[[b,"system:menu:edit"]])]),y("div",null,[h((p(),_(m,{text:"",type:"primary",onClick:x=>F(u.row)},{default:n(()=>[e(d,{name:"elementPlus"}),ye]),_:2},1032,["onClick"])),[[b,"system:menu:edit"]])]),y("div",null,[h((p(),_(m,{text:"",type:"primary",onClick:x=>P(u.row)},{default:n(()=>[e(d,{name:"elementDelete"}),fe]),_:2},1032,["onClick"])),[[b,"system:menu:delete"]])])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[j,s(M)]])]),_:1}),e(se,{ref_key:"editMenuRef",ref:D,title:s(N)},null,8,["title"])])}}});export{xe as default};