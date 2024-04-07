import{g as R,u as N,r as x,l as j,o as v,c as L,b as l,w as c,D as ce,v as C,a as V,h as i,y as E,H as W,V as Z,a3 as me,R as X,x as w,e as T,z as B,B as Y,aW as G,j as fe,aX as pe,aY as _e,aA as ve,q as be,m as U,n as xe,U as ye,k as ge,aZ as $e,_ as ke}from"./index-rL1m5GE4.js";import{a as Te,_ as Ve}from"./InfoBox.vue_vue_type_script_setup_true_lang-w0cQBQHA.js";const he=V("br",null,null,-1),Ce=R({__name:"ForceExitForm",props:{trade:{type:Object,required:!0},modelValue:{required:!0,default:!1,type:Boolean}},emits:["update:modelValue"],setup(t,{emit:n}){const a=t,p=n,b=N(),y=x(),m=x(void 0),f=x("limit"),r=()=>{var d;return(d=y.value)==null?void 0:d.checkValidity()},s=j({get(){return a.modelValue},set(_){p("update:modelValue",_)}});function O(){if(!r())return;const _={tradeid:String(a.trade.trade_id)};f.value&&(_.ordertype=f.value),m.value&&(_.amount=m.value),b.activeBot.forceexit(_),s.value=!1}function h(){var _,d,S,F;m.value=a.trade.amount,f.value=((d=(_=b.activeBot.botState)==null?void 0:_.order_types)==null?void 0:d.force_exit)||((F=(S=b.activeBot.botState)==null?void 0:S.order_types)==null?void 0:F.exit)||"limit"}function g(){O()}return(_,d)=>{const S=W,F=Z,P=me,D=X;return v(),L("div",null,[l(D,{id:"forceexit-modal",modelValue:i(s),"onUpdate:modelValue":d[3]||(d[3]=$=>E(s)?s.value=$:null),title:"Force exiting a trade",onShow:h,onHidden:h,onOk:g},{default:c(()=>[V("form",{ref_key:"form",ref:y,onSubmit:ce(O,["stop","prevent"])},[V("p",null,[V("span",null,"Exiting Trade #"+C(t.trade.trade_id)+" "+C(t.trade.pair)+".",1),he,V("span",null,"Currently owning "+C(t.trade.amount)+" "+C(t.trade.base_currency),1)]),l(F,{label:`*Amount in ${t.trade.base_currency} [optional]`,"label-for":"stake-input","invalid-feedback":"Amount must be empty or a positive number",state:i(m)!==void 0&&i(m)>0},{default:c(()=>[l(S,{id:"stake-input",modelValue:i(m),"onUpdate:modelValue":d[0]||(d[0]=$=>E(m)?m.value=$:null),type:"number",step:"0.000001"},null,8,["modelValue"]),l(S,{id:"stake-input",modelValue:i(m),"onUpdate:modelValue":d[1]||(d[1]=$=>E(m)?m.value=$:null),type:"range",step:"0.000001",min:"0",max:t.trade.amount},null,8,["modelValue","max"])]),_:1},8,["label","state"]),l(F,{label:"*OrderType","label-for":"ordertype-input","invalid-feedback":"OrderType",state:i(f)!==void 0},{default:c(()=>[l(P,{modelValue:i(f),"onUpdate:modelValue":d[2]||(d[2]=$=>E(f)?f.value=$:null),class:"ms-2",options:["market","limit"],style:{"min-width":"7em"},size:"sm"},null,8,["modelValue"])]),_:1},8,["state"])],544)]),_:1},8,["modelValue"])])}}}),we={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Be=V("path",{fill:"currentColor",d:"M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zm1-4a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46v-1.22c.61-.55 1-1.35 1-2.24a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .89.39 1.69 1 2.24v1.22C7.8 11.77 7 10.5 7 9a4 4 0 0 1 4-4"},null,-1),Oe=[Be];function Ee(t,n){return v(),L("svg",we,[...Oe])}const Le={name:"mdi-gesture-tap",render:Ee},Se={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Fe=V("path",{fill:"currentColor",d:"M2 12c0 5 4 9 9 9c2.4 0 4.7-.9 6.4-2.6l-1.5-1.5c-1.3 1.4-3 2.1-4.9 2.1c-6.2 0-9.4-7.5-4.9-11.9S18 5.8 18 12h-3l4 4h.1l3.9-4h-3c0-5-4-9-9-9s-9 4-9 9m8 3h2v2h-2zm0-8h2v6h-2z"},null,-1),Ie=[Fe];function Ae(t,n){return v(),L("svg",Se,[...Ie])}const Pe={name:"mdi-reload-alert",render:Ae},ze={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Re=V("path",{fill:"currentColor",d:"M4 20h14v2H4a2 2 0 0 1-2-2V6h2zM20.22 2H7.78C6.8 2 6 2.8 6 3.78v12.44C6 17.2 6.8 18 7.78 18h12.44c.98 0 1.78-.8 1.78-1.78V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6l3.6-3.6L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10z"},null,-1),De=[Re];function He(t,n){return v(),L("svg",ze,[...De])}const Me={name:"mdi-close-box-multiple",render:He},Ue={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},qe=V("path",{fill:"currentColor",d:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.4 14L12 13.4L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4L13.4 12l3.6 3.6z"},null,-1),Ne=[qe];function je(t,n){return v(),L("svg",Ue,[...Ne])}const We={name:"mdi-close-box",render:je},Ze={class:"d-flex flex-column"},Xe=R({__name:"TradeActions",props:{botApiVersion:{type:Number,default:1},trade:{type:Object,required:!0}},emits:["forceExit","forceExitPartial","cancelOpenOrder","reloadTrade","deleteTrade"],setup(t){return(n,a)=>{const p=We,b=Y,y=Me,m=G,f=Pe,r=fe;return v(),L("div",Ze,[t.botApiVersion<=1.1?(v(),w(b,{key:0,class:"btn-xs text-start",size:"sm",title:"Forceexit",onClick:a[0]||(a[0]=s=>n.$emit("forceExit",t.trade))},{default:c(()=>[l(p,{class:"me-1"}),T("Forceexit ")]),_:1})):B("",!0),t.botApiVersion>1.1?(v(),w(b,{key:1,class:"btn-xs text-start",size:"sm",title:"Forceexit limit",onClick:a[1]||(a[1]=s=>n.$emit("forceExit",t.trade,"limit"))},{default:c(()=>[l(p,{class:"me-1"}),T("Forceexit limit ")]),_:1})):B("",!0),t.botApiVersion>1.1?(v(),w(b,{key:2,class:"btn-xs text-start mt-1",size:"sm",title:"Forceexit market",onClick:a[2]||(a[2]=s=>n.$emit("forceExit",t.trade,"market"))},{default:c(()=>[l(p,{class:"me-1"}),T("Forceexit market ")]),_:1})):B("",!0),t.botApiVersion>2.16?(v(),w(b,{key:3,class:"btn-xs text-start mt-1",size:"sm",title:"Forceexit partial",onClick:a[3]||(a[3]=s=>n.$emit("forceExitPartial",t.trade))},{default:c(()=>[l(y,{class:"me-1"}),T("Forceexit partial ")]),_:1})):B("",!0),t.botApiVersion>=2.24&&(t.trade.open_order_id||t.trade.has_open_orders)?(v(),w(b,{key:4,class:"btn-xs text-start mt-1",size:"sm",title:"Cancel open orders",onClick:a[4]||(a[4]=s=>n.$emit("cancelOpenOrder",t.trade))},{default:c(()=>[l(m,{class:"me-1"}),T("Cancel open order ")]),_:1})):B("",!0),t.botApiVersion>=2.28?(v(),w(b,{key:5,class:"btn-xs text-start mt-1",size:"sm",title:"Reload",onClick:a[5]||(a[5]=s=>n.$emit("reloadTrade",t.trade))},{default:c(()=>[l(f,{class:"me-1"}),T("Reload Trade ")]),_:1})):B("",!0),l(b,{class:"btn-xs text-start mt-1",size:"sm",title:"Delete trade",onClick:a[6]||(a[6]=s=>n.$emit("deleteTrade",t.trade))},{default:c(()=>[l(r,{class:"me-1"}),T(" Delete ")]),_:1})])}}}),Ye=R({__name:"TradeActionsPopover",props:{trade:{type:Object,required:!0},id:{type:Number,required:!0},botApiVersion:{type:Number,required:!0}},emits:["forceExit","forceExitPartial","cancelOpenOrder","reloadTrade","deleteTrade"],setup(t,{emit:n}){const a=n,p=x(!1);function b(r,s=void 0){p.value=!1,a("forceExit",r,s)}function y(r){p.value=!1,a("forceExitPartial",r)}function m(r){p.value=!1,a("cancelOpenOrder",r)}function f(r){p.value=!1,a("reloadTrade",r)}return(r,s)=>{const O=Le,h=Y,g=G,_=pe;return v(),L("div",null,[l(h,{id:`btn-actions-${t.id}`,class:"btn-xs",size:"sm",title:"Actions",onClick:s[0]||(s[0]=d=>p.value=!i(p))},{default:c(()=>[l(O)]),_:1},8,["id"]),l(_,{container:"body",target:`btn-actions-${t.id}`,title:`Actions for ${t.trade.pair}`,triggers:"manual",show:i(p),placement:"left"},{default:c(()=>[l(Xe,{trade:t.trade,"bot-api-version":t.botApiVersion,onForceExit:b,onForceExitPartial:y,onDeleteTrade:s[1]||(s[1]=d=>{p.value=!1,r.$emit("deleteTrade",t.trade)}),onCancelOpenOrder:m,onReloadTrade:f},null,8,["trade","bot-api-version"]),l(h,{class:"mt-1 w-100 text-start",size:"sm",onClick:s[2]||(s[2]=d=>p.value=!1)},{default:c(()=>[l(g,{class:"me-1"}),T("Close Actions menu ")]),_:1})]),_:1},8,["target","title","show"])])}}}),Ge={class:"h-100 overflow-auto w-100"},Je={class:"w-100 d-flex justify-content-between"},Ke=R({__name:"TradeList",props:{trades:{required:!0,type:Array},title:{default:"Trades",type:String},stakeCurrency:{required:!1,default:"",type:String},activeTrades:{default:!1,type:Boolean},showFilter:{default:!1,type:Boolean},multiBotView:{default:!1,type:Boolean},emptyText:{default:"No Trades to show.",type:String}},setup(t){const n=t,a=N(),p=_e(),b=ve(),y=x(1),m=x(),f=x(""),r=x({}),s=n.activeTrades?200:15,O=x(),h=x(!1),g=x(!1),_=x(""),d=x(null),S=[{key:"actions"}],F=[{key:"close_timestamp",label:"Close date"},{key:"exit_reason",label:"Close Reason"}];function P(e){return U(e,a.activeBot.stakeCurrencyDecimals)}const D=j(()=>n.trades.length),$=x([]);be(()=>{$.value=[{key:"trade_id",label:"ID"},{key:"pair",label:"Pair"},{key:"amount",label:"Amount"},{key:"stake_amount",label:"Stake amount"},{key:"open_rate",label:"Open rate",formatter:e=>U(e)},{key:n.activeTrades?"current_rate":"close_rate",label:n.activeTrades?"Current rate":"Close rate",formatter:e=>U(e)},{key:"profit",label:n.activeTrades?"Current profit %":"Profit %",formatter:(e,u,k)=>{if(!k)return"";const I=k;return`${xe(I.profit_ratio,2)} ${`(${P(I.profit_abs)})`}`}},{key:"open_timestamp",label:"Open date"},...n.activeTrades?S:F],n.multiBotView&&$.value.unshift({key:"botName",label:"Bot"})});const z=x(void 0);function J(e,u=void 0){r.value=e,d.value=1,_.value=`Really exit trade ${e.trade_id} (Pair ${e.pair}) using ${u} Order?`,z.value=u,b.confirmDialog===!0?g.value=!0:q()}function q(){if(d.value===0){const e={tradeid:String(r.value.trade_id),botId:r.value.botId};a.deleteTradeMulti(e).catch(u=>console.log(u.response))}if(d.value===1){const e={tradeid:String(r.value.trade_id),botId:r.value.botId};z.value&&(e.ordertype=z.value),a.forceSellMulti(e).then(u=>console.log(u)).catch(u=>console.log(u.response))}if(d.value===3){const e={tradeid:String(r.value.trade_id),botId:r.value.botId};a.cancelOpenOrderMulti(e)}z.value=void 0,g.value=!1}function K(e){_.value=`Really delete trade ${e.trade_id} (Pair ${e.pair})?`,d.value=0,r.value=e,g.value=!0}function Q(e){r.value=e,h.value=!0}function ee(e){_.value=`Cancel open order for trade ${e.trade_id} (Pair ${e.pair})?`,r.value=e,d.value=3,g.value=!0}function te(e){a.reloadTradeMulti({tradeid:String(e.trade_id),botId:e.botId})}function ae(e,u,k){n.activeTrades&&(k.preventDefault(),console.log(e))}const oe=e=>{n.multiBotView&&a.selectedBot!==e.botId&&a.selectBot(e.botId),e&&e.trade_id!==a.activeBot.detailTradeId?(a.activeBot.setDetailTrade(e),n.multiBotView&&p.push({name:"Freqtrade Trading"})):a.activeBot.setDetailTrade(null)},ne=()=>{var e;if(a.activeBot.detailTradeId){const u=n.trades.findIndex(k=>k.trade_id===a.activeBot.detailTradeId);u>=0?(e=O.value)==null||e.selectRow(u):(console.log(`Unsetting item for tradeid ${m.value}`),m.value=void 0)}};return ye(()=>a.activeBot.detailTradeId,e=>{var k;n.trades.findIndex(I=>I.trade_id===e)<0&&((k=O.value)==null||k.clearSelected())}),(e,u)=>{const k=Ye,I=Te,H=Ve,le=ge,re=$e,ie=W,de=Z,se=Ce,ue=X;return v(),L("div",Ge,[l(le,{ref_key:"tradesTable",ref:O,small:"",hover:"",stacked:"md",items:t.trades.filter(o=>{var A,M;return o.pair.toLowerCase().includes(i(f).toLowerCase())||((A=o.exit_reason)==null?void 0:A.toLowerCase().includes(i(f).toLowerCase()))||((M=o.enter_tag)==null?void 0:M.toLowerCase().includes(i(f).toLowerCase()))}),fields:i($),"show-empty":"","empty-text":t.emptyText,"per-page":i(s),"current-page":i(y),"primary-key":"botTradeId",selectable:"","select-head":!1,"select-mode":"single",onRowContextmenu:ae,onRowClicked:oe,onRowSelected:ne},{"cell(actions)":c(({index:o,item:A})=>[l(k,{id:o,trade:A,"bot-api-version":i(a).activeBot.botApiVersion,onDeleteTrade:M=>K(A),onForceExit:J,onForceExitPartial:Q,onCancelOpenOrder:ee,onReloadTrade:te},null,8,["id","trade","bot-api-version","onDeleteTrade"])]),"cell(pair)":c(o=>[V("span",null,C(`${o.item.pair}${o.item.open_order_id||o.item.has_open_orders?"*":""}`),1)]),"cell(trade_id)":c(o=>[T(C(o.item.trade_id)+" "+C(i(a).activeBot.botApiVersion>2&&o.item.trading_mode!=="spot"?"| "+(o.item.is_short?"Short":"Long"):""),1)]),"cell(stake_amount)":c(o=>[T(C(P(o.item.stake_amount))+" "+C(o.item.trading_mode!=="spot"?`(${o.item.leverage}x)`:""),1)]),"cell(profit)":c(o=>[l(I,{trade:o.item},null,8,["trade"])]),"cell(open_timestamp)":c(o=>[l(H,{date:o.item.open_timestamp},null,8,["date"])]),"cell(close_timestamp)":c(o=>[l(H,{date:o.item.close_timestamp??0},null,8,["date"])]),_:1},8,["items","fields","empty-text","per-page","current-page"]),V("div",Je,[t.activeTrades?B("",!0):(v(),w(re,{key:0,modelValue:i(y),"onUpdate:modelValue":u[0]||(u[0]=o=>E(y)?y.value=o:null),"total-rows":i(D),"per-page":i(s),"aria-controls":"my-table"},null,8,["modelValue","total-rows","per-page"])),t.showFilter?(v(),w(de,{key:1,"label-for":"trade-filter"},{default:c(()=>[l(ie,{id:"trade-filter",modelValue:i(f),"onUpdate:modelValue":u[1]||(u[1]=o=>E(f)?f.value=o:null),type:"text",placeholder:"Filter"},null,8,["modelValue"])]),_:1})):B("",!0)]),t.activeTrades?(v(),w(se,{key:0,modelValue:i(h),"onUpdate:modelValue":u[2]||(u[2]=o=>E(h)?h.value=o:null),trade:i(r)},null,8,["modelValue","trade"])):B("",!0),l(ue,{modelValue:i(g),"onUpdate:modelValue":u[3]||(u[3]=o=>E(g)?g.value=o:null),title:"Exit trade",onOk:q},{default:c(()=>[T(C(i(_)),1)]),_:1},8,["modelValue"])])}}}),tt=ke(Ke,[["__scopeId","data-v-b71a7941"]]);export{Me as _,tt as a};
//# sourceMappingURL=TradeList-J5Q7mqlc.js.map