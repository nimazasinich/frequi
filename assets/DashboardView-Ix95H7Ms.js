import{a as W,b as H,_ as K}from"./TradesLogChart-BhSQjqmP.js";import{a as Q}from"./TradeList-J5Q7mqlc.js";import{b as X,c as Y}from"./InfoBox.vue_vue_type_script_setup_true_lang-w0cQBQHA.js";import{g as j,u as A,l as d,o as p,x as T,w as s,h as e,v,e as D,z as w,y as Z,c as P,a as O,n as ee,m as te,a5 as oe,k as ae,I as se,r as re,J as k,aT as B,q as le,L as z,b as r,M as L}from"./index-rL1m5GE4.js";import{_ as ne,a as ie}from"./TimePeriodChart-MrxaBlF4.js";import"./installCanvasRenderer-s7oDw8fy.js";import"./install-5MsFQs7u.js";const de={class:"d-flex flex-row"},ce={key:2},ue={key:0},_e=["title"],pe={class:"text-small"},fe={key:0},me={class:"text-profit"},ye={class:"text-loss"},he=j({__name:"BotComparisonList",setup(E){const t=A(),f=d({get:()=>Object.values(t.botStores).every(c=>c.isSelected),set:c=>{for(const n in t.botStores)t.botStores[n].isSelected=c}}),V=[{key:"botName",label:"Bot"},{key:"trades",label:"Trades"},{key:"profitOpen",label:"Open Profit"},{key:"profitClosed",label:"Closed Profit"},{key:"balance",label:"Balance"},{key:"winVsLoss",label:"W/L"}],$=d(()=>{const c=[],n={botId:void 0,botName:"Summary",profitClosed:0,profitClosedRatio:void 0,profitOpen:0,profitOpenRatio:void 0,stakeCurrency:"USDT",wins:0,losses:0};return Object.entries(t.allProfit).forEach(([a,i])=>{var _,y,h,b,R,g,N;const m=t.allOpenTrades[a].reduce((C,l)=>C+l.stake_amount,0),o=t.allOpenTrades[a].reduce((C,l)=>C+(l.total_profit_ratio??l.profit_ratio)*l.stake_amount,0)/m,u=t.allOpenTrades[a].reduce((C,l)=>C+(l.total_profit_abs??l.profit_abs??0),0);c.push({botId:a,botName:t.availableBots[a].botName||t.availableBots[a].botId,trades:`${t.allOpenTradeCount[a]} / ${((_=t.allBotState[a])==null?void 0:_.max_open_trades)||"N/A"}`,profitClosed:i.profit_closed_coin,profitClosedRatio:i.profit_closed_ratio||0,stakeCurrency:((y=t.allBotState[a])==null?void 0:y.stake_currency)||"",profitOpenRatio:o,profitOpen:u,wins:i.winning_trades,losses:i.losing_trades,balance:((h=t.allBalance[a])==null?void 0:h.total_bot)??((b=t.allBalance[a])==null?void 0:b.total),stakeCurrencyDecimals:((R=t.allBotState[a])==null?void 0:R.stake_currency_decimals)||3,isDryRun:(g=t.allBotState[a])==null?void 0:g.dry_run}),i.profit_closed_coin!==void 0&&t.botStores[a].isSelected&&(n.profitClosed+=i.profit_closed_coin,n.profitOpen+=u,n.wins+=i.winning_trades,n.losses+=i.losing_trades,n.stakeCurrency=((N=t.allBotState[a])==null?void 0:N.stake_currency)||n.stakeCurrency)}),c.push(n),c});return(c,n)=>{const a=oe,i=X,m=ae;return p(),T(m,{ref:"tradesTable",small:"",hover:"","show-empty":"","primary-key":"botId",items:e($),fields:V},{"cell(botName)":s(({item:o,value:u})=>[O("div",de,[o.botId&&e(t).botCount>1?(p(),T(a,{key:0,modelValue:e(t).botStores[o.botId??""].isSelected,"onUpdate:modelValue":_=>e(t).botStores[o.botId??""].isSelected=_,title:"Show this bot in Dashboard"},{default:s(()=>[D(v(u),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])):w("",!0),!o.botId&&e(t).botCount>1?(p(),T(a,{key:1,modelValue:e(f),"onUpdate:modelValue":n[0]||(n[0]=_=>Z(f)?f.value=_:null),title:"Toggle all bots"},{default:s(()=>[D(v(u),1)]),_:2},1032,["modelValue"])):w("",!0),e(t).botCount<=1?(p(),P("span",ce,v(u),1)):w("",!0)])]),"cell(profitOpen)":s(({item:o})=>[o.profitOpen&&o.botId!="Summary"?(p(),T(i,{key:0,"profit-ratio":o.profitOpenRatio,"profit-abs":o.profitOpen,"profit-desc":`Total Profit (Open and realized) ${e(ee)(o.profitOpenRatio??0)}`,"stake-currency":o.stakeCurrency},null,8,["profit-ratio","profit-abs","profit-desc","stake-currency"])):w("",!0)]),"cell(profitClosed)":s(({item:o})=>[o.profitClosed&&o.botId!="Summary"?(p(),T(i,{key:0,"profit-ratio":o.profitClosedRatio,"profit-abs":o.profitClosed,"stake-currency":o.stakeCurrency},null,8,["profit-ratio","profit-abs","stake-currency"])):w("",!0)]),"cell(balance)":s(({item:o})=>[o.balance?(p(),P("div",ue,[O("span",{title:o.stakeCurrency},v(e(te)(o.balance??0,o.stakeCurrencyDecimals)),9,_e),O("span",pe,v(` ${o.stakeCurrency}${o.isDryRun?" (dry)":""}`),1)])):w("",!0)]),"cell(winVsLoss)":s(({item:o})=>[o.losses!==void 0?(p(),P("div",fe,[O("span",me,v(o.wins),1),D(" / "),O("span",ye,v(o.losses),1)])):w("",!0)]),_:1},8,["items"])}}}),be={class:"d-flex justify-content-center"},ge={class:"d-flex justify-content-center"},Le=j({__name:"DashboardView",setup(E){const t=A(),f=se(),V=re(""),$=g=>{V.value=g},c=d(()=>["","sm","md","lg","xl"].includes(V.value)),n=d(()=>f.layoutLocked||!c.value),a=d(()=>c.value?f.dashboardLayout:[...f.getDashboardLayoutSm]),i=g=>{c.value&&(console.log("newlayout",g),console.log("saving dashboard"),f.dashboardLayout=g)},m=d(()=>k(a.value,B.dailyChart)),o=d(()=>k(a.value,B.botComparison)),u=d(()=>k(a.value,B.allOpenTrades)),_=d(()=>k(a.value,B.allClosedTrades)),y=d(()=>k(a.value,B.cumChartChart)),h=d(()=>k(a.value,B.profitDistributionChart)),b=d(()=>k(a.value,B.tradesLogChart)),R=d(()=>({sm:f.getDashboardLayoutSm}));return le(async()=>{t.allGetDaily({timescale:30}),t.activeBot.getOpenTrades(),t.activeBot.getProfit()}),(g,N)=>{const C=ne,l=ie,x=z("grid-item"),G=he,I=Y,U=Q,M=W,q=H,F=K,J=z("grid-layout");return p(),T(J,{class:"h-100 w-100","row-height":50,layout:e(a),"vertical-compact":!1,margin:[5,5],"responsive-layouts":e(R),"is-resizable":!e(n),"is-draggable":!e(n),responsive:!0,"prevent-collision":!0,cols:{lg:12,md:12,sm:12,xs:4,xxs:2},"col-num":12,onLayoutUpdated:i,"onUpdate:breakpoint":$},{default:s(({gridItemProps:S})=>[r(x,L(S,{i:e(m).i,x:e(m).x,y:e(m).y,w:e(m).w,h:e(m).h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:s(()=>[r(l,{header:`Daily Profit ${e(t).botCount>1?"combined":""}`},{default:s(()=>[e(t).allDailyStatsSelectedBots?(p(),T(C,{key:0,"daily-stats":e(t).allDailyStatsSelectedBots,"show-title":!1},null,8,["daily-stats"])):w("",!0)]),_:1},8,["header"])]),_:2},1040,["i","x","y","w","h"]),r(x,L(S,{i:e(o).i,x:e(o).x,y:e(o).y,w:e(o).w,h:e(o).h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:s(()=>[r(l,{header:"Bot comparison"},{default:s(()=>[r(G)]),_:1})]),_:2},1040,["i","x","y","w","h"]),r(x,L(S,{i:e(u).i,x:e(u).x,y:e(u).y,w:e(u).w,h:e(u).h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:s(()=>[r(l,null,{header:s(()=>[O("div",be,[D(" Open Trades "),r(I,{class:"ms-2",hint:"Open trades of all selected bots. Click on a trade to go to the trade page for that trade/bot."})])]),default:s(()=>[r(U,{"active-trades":"",trades:e(t).allOpenTradesSelectedBots,"multi-bot-view":""},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"]),r(x,L(S,{i:e(y).i,x:e(y).x,y:e(y).y,w:e(y).w,h:e(y).h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:s(()=>[r(l,{header:"Cumulative Profit"},{default:s(()=>[r(M,{trades:e(t).allTradesSelectedBots,"open-trades":e(t).allOpenTradesSelectedBots,"show-title":!1},null,8,["trades","open-trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"]),r(x,L(S,{i:e(_).i,x:e(_).x,y:e(_).y,w:e(_).w,h:e(_).h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:s(()=>[r(l,null,{header:s(()=>[O("div",ge,[D(" Closed Trades "),r(I,{class:"ms-2",hint:"Closed trades for all selected bots. Click on a trade to go to the trade page for that trade/bot."})])]),default:s(()=>[r(U,{"active-trades":!1,"show-filter":"",trades:e(t).allClosedTradesSelectedBots,"multi-bot-view":""},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"]),r(x,L(S,{i:e(h).i,x:e(h).x,y:e(h).y,w:e(h).w,h:e(h).h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:s(()=>[r(l,{header:"Profit Distribution"},{default:s(()=>[r(q,{trades:e(t).allTradesSelectedBots,"show-title":!1},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"]),r(x,L(S,{i:e(b).i,x:e(b).x,y:e(b).y,w:e(b).w,h:e(b).h,"min-w":3,"min-h":4,"drag-allow-from":".drag-header"}),{default:s(()=>[r(l,{header:"Trades Log"},{default:s(()=>[r(F,{trades:e(t).allTradesSelectedBots,"show-title":!1},null,8,["trades"])]),_:1})]),_:2},1040,["i","x","y","w","h"])]),_:1},8,["layout","responsive-layouts","is-resizable","is-draggable"])}}});export{Le as default};
//# sourceMappingURL=DashboardView-Ix95H7Ms.js.map