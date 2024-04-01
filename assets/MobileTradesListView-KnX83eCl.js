import{_ as S}from"./TradeDetail-QEWVdpay.js";import{o as s,c as l,a as n,g as h,v,b as c,_ as b,u as C,r as T,l as g,w as k,z as i,x as _,h as t,y as w,Y as I,aZ as q,H as z,C as F,Q as j,W as E,B as O,e as U}from"./index-rL1m5GE4.js";import{a as H,_ as M}from"./InfoBox.vue_vue_type_script_setup_true_lang-w0cQBQHA.js";const P={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Z=n("path",{fill:"currentColor",d:"M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"},null,-1),A=[Z];function Q(a,e){return s(),l("svg",P,[...A])}const R={name:"mdi-arrow-left",render:Q},W={class:"d-flex"},Y={class:"px-1 d-flex flex-row flex-fill text-start justify-content-between align-items-center"},G={class:"me-1 fw-bold"},J={class:"text-secondary"},K=h({__name:"CustomTradeListEntry",props:{trade:{type:Object,required:!0},stakeCurrencyDecimals:{type:Number,required:!0},showDetails:{type:Boolean,default:!1}},setup(a){return(e,p)=>{const o=M;return s(),l("div",W,[n("div",Y,[n("span",null,[n("span",G,v(a.trade.pair),1),n("small",J,"(#"+v(a.trade.trade_id)+")",1)]),n("small",null,[c(o,{date:a.trade.open_timestamp,"date-only":!0},null,8,["date"])])]),c(H,{class:"col-5",trade:a.trade},null,8,["trade"])])}}}),X=b(K,[["__scopeId","data-v-d80c3341"]]),ee={class:"h-100 overflow-auto p-1"},te={key:0,class:"mt-5"},ae={class:"w-100 d-flex justify-content-between mt-1"},se=h({__name:"CustomTradeList",props:{trades:{required:!0,type:Array},title:{default:"Trades",type:String},stakeCurrency:{required:!1,default:"",type:String},activeTrades:{default:!1,type:Boolean},showFilter:{default:!1,type:Boolean},multiBotView:{default:!1,type:Boolean},emptyText:{default:"No Trades to show.",type:String},stakeCurrencyDecimals:{default:3,type:Number}},setup(a){const e=a,p=C(),o=T(1),d=T(""),u=e.activeTrades?200:25,y=g(()=>e.trades.length),f=g(()=>e.trades.slice((o.value-1)*u,o.value*u)),x=B=>{p.activeBot.setDetailTrade(B)};return(B,m)=>{const $=X,D=E,V=I,L=q,N=z;return s(),l("div",ee,[c(V,{id:"tradeList"},{default:k(()=>[(s(!0),l(F,null,j(t(f),r=>(s(),_(D,{key:r.trade_id,class:"border border-secondary rounded my-05 px-1",onClick:ne=>x(r)},{default:k(()=>[c($,{trade:r,"stake-currency-decimals":a.stakeCurrencyDecimals},null,8,["trade","stake-currency-decimals"])]),_:2},1032,["onClick"]))),128))]),_:1}),a.trades.length==0?(s(),l("span",te,v(a.emptyText),1)):i("",!0),n("div",ae,[a.activeTrades?i("",!0):(s(),_(L,{key:0,modelValue:t(o),"onUpdate:modelValue":m[0]||(m[0]=r=>w(o)?o.value=r:null),"total-rows":t(y),"per-page":t(u),"aria-controls":"tradeList"},null,8,["modelValue","total-rows","per-page"])),a.showFilter?(s(),_(N,{key:1,modelValue:t(d),"onUpdate:modelValue":m[1]||(m[1]=r=>w(d)?d.value=r:null),type:"text",placeholder:"Filter",size:"sm",style:{width:"unset"}},null,8,["modelValue"])):i("",!0)])])}}}),oe=b(se,[["__scopeId","data-v-b42a4b4f"]]),re={key:2,class:"d-flex flex-column"},ie=h({__name:"MobileTradesListView",props:{history:{default:!1,type:Boolean}},setup(a){const e=C();return(p,o)=>{const d=oe,u=R,y=O,f=S;return s(),l("div",null,[!a.history&&!t(e).activeBot.detailTradeId?(s(),_(d,{key:0,trades:t(e).activeBot.openTrades,title:"Open trades","active-trades":!0,"stake-currency-decimals":t(e).activeBot.stakeCurrencyDecimals,"empty-text":"No open Trades."},null,8,["trades","stake-currency-decimals"])):i("",!0),a.history&&!t(e).activeBot.detailTradeId?(s(),_(d,{key:1,trades:t(e).activeBot.closedTrades,title:"Trade history","stake-currency-decimals":t(e).activeBot.stakeCurrencyDecimals,"empty-text":"No closed trades so far."},null,8,["trades","stake-currency-decimals"])):i("",!0),t(e).activeBot.detailTradeId&&t(e).activeBot.tradeDetail?(s(),l("div",re,[c(y,{size:"sm",class:"align-self-start my-1 ms-1",onClick:o[0]||(o[0]=x=>t(e).activeBot.setDetailTrade(null))},{default:k(()=>[c(u),U(" Back")]),_:1}),c(f,{trade:t(e).activeBot.tradeDetail,"stake-currency":t(e).activeBot.stakeCurrency},null,8,["trade","stake-currency"])])):i("",!0)])}}});export{ie as default};
//# sourceMappingURL=MobileTradesListView-KnX83eCl.js.map
