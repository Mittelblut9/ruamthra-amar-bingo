"use strict";(self["webpackChunkrumathra_bingo"]=self["webpackChunkrumathra_bingo"]||[]).push([[37],{562:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var i=n(252);function l(e,t,n,l,r,o){const c=(0,i.up)("BingoComponent");return(0,i.wg)(),(0,i.j4)(c)}var r=n.p+"img/winning.0db4be34.gif";const o={class:"section-bingo"},c={class:"section-bingo--animation",id:"bingo-container"},a=(0,i._)("img",{src:r,alt:"bingo",style:{visibility:"hidden"}},null,-1),u=(0,i._)("h1",null,"BINGO!!",-1),s=(0,i._)("tr",{class:"user-select-none"},[(0,i._)("th",{"data-fixed":"true"},"B"),(0,i._)("th",{"data-fixed":"true"},"I"),(0,i._)("th",{"data-fixed":"true"},"N"),(0,i._)("th",{"data-fixed":"true"},"G"),(0,i._)("th",{"data-fixed":"true"},"O")],-1);function d(e,t,n,l,r,d){const m=(0,i.up)("BingoBoxAtom");return(0,i.wg)(),(0,i.iD)("section",o,[(0,i._)("div",c,[a,u,(0,i._)("table",null,[s,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.tableData,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e,id:"bingo-content"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e,(e=>((0,i.wg)(),(0,i.iD)("td",{key:e,onClick:t[0]||(t[0]=(...e)=>d.selectTarget&&d.selectTarget(...e)),onContextmenu:t[1]||(t[1]=e=>d.rightClickHandler(e))},[(0,i.Wm)(m,{selected:!1,text:e.text,multiSelectNumber:e.multiSelectNumber,multiSelectOptions:JSON.stringify(e?.multiSelectOptions)},null,8,["text","multiSelectNumber","multiSelectOptions"])],32)))),128))])))),128))])])])}var m=JSON.parse('{"Y":{"color0":"yellow","color1":"red","color2":"purple","color3":"blue","color4":"green"},"z":[[{"text":"30 Kill Runde"},{"text":"Healoff"},{"text":"Top5"},{"text":"Repaz Win"},{"text":"Ich mache einen Win"}],[{"text":"Länger gewartet als gezockt"},{"text":"Downtime länger als 20 min (für mich)"},{"text":"Ich mache einen Kill"},{"text":"Jemand bricht die Regeln"},{"text":"Regeländerung"}],[{"text":"Offspawn Dead"},{"text":"Jemand macht was Kaputt (Equipment)"},{"text":"10 Subs"},{"text":"Technischer Fehler"},{"text":"Preisgeld"}],[{"text":"Flitzer (Zuschauemist)"},{"text":"Unfaire Teams"},{"text":"jemand kommt zu spät"},{"text":"Jemand versteht die Regeln nicht"},{"text":"Eli Eier grabscher"}],[{"text":"Fürt Fortnite"},{"text":"Keinen Kill die Runde"},{"text":"Twitter Beef (Streamsnipe)"},{"text":"Pro holt mich"},{"text":"Chefstrobel regt sich auf"}]]}'),g=n(577);const h=["data-fixed","data-selected","data-color","data-multi-select-number","data-multi-select-options"],b={key:0,class:"bingo-box-multi pointer-events-none display-flex justify-content-space-between"},p=["data-multi-select-number"];function y(e,t,n,l,r,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("input",{hidden:"","data-fixed":n.fixed,"data-selected":n.selected,"data-color":n.color,"data-multi-select-number":n.multiSelectNumber,"data-multi-select-options":n.multiSelectOptions,"data-times-pressed":"0","data-times-rounds":"0"},null,8,h),(0,i._)("p",{class:(0,g.C_)([[n.fixed?"bold big":""],"center user-select-none pointer-events-none"])},(0,g.zw)(n.text),3),n.multiSelectNumber>0?((0,i.wg)(),(0,i.iD)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.multiSelectNumber,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"bingo-box-multi--item pointer-events-none",style:(0,g.j5)({backgroundColor:n.multiSelectOptions[`color${e}`]})},[(0,i._)("input",{hidden:"","data-multi-select-number":e},null,8,p)],4)))),128))])):(0,i.kq)("",!0)],64)}var S={name:"BingoBoxAtom",props:{fixed:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},text:{type:String,default:""},color:{type:String,default:""},multiSelectNumber:{type:Number,default:0},multiSelectOptions:{type:String,default:""}},data(){return{}}},f=n(744);const x=(0,f.Z)(S,[["render",y]]);var q=x,w={name:"BingoComponent",data(){return{tableData:m.z,bingoTriggered:!1}},components:{BingoBoxAtom:q},methods:{rightClickHandler(e){e.preventDefault();const t=e.target,n=t.firstElementChild;if("true"===n.dataset.fixed)return;n.dataset.selected=!1,n.dataset.timesPressed=0,n.dataset.timesRounds=0,t.style.backgroundColor="";const i=n.dataset.multiSelectNumber>0;i&&t.querySelectorAll(".bingo-box-multi--item").forEach((e=>{e.style.backgroundColor=""}))},selectTarget(e){const t=e.target,n=t.querySelector("input");let i;const l="true"===n.dataset.fixed;if(l)return;let r,o=parseInt(n.dataset.timesPressed),c=parseInt(n.dataset.timesRounds),a="true"===n.dataset.selected,u=!1,s=!1;const d=parseInt(n.dataset.multiSelectNumber),g=d>0,h=m.Y;if(g&&o>0?r=h[`color${c}`]:(r=h["color0"],a=!a),g){a=!1,i=t.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${o+1}"]`),i||(i=t.querySelector('.bingo-box-multi--item input[data-multi-select-number="1"]'),r=h[`color${c+1}`],n.dataset.timesRounds=c+1,o=0);const e=t.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${o+2}"]`);e||(a=!0),i=i.parentElement}else i=t;i.style.backgroundColor=a||g?r:"",n.dataset.selected=a,n.dataset.timesPressed=s?0:o+1,u&&(i.style.backgroundColor=""),this.checkIfBingo((e=>{if(e){if(this.bingoTriggered)return;this.bingoTriggered=!0,this.animateBingo()}}))},checkIfBingo(e){const t=document.querySelector(".section-bingo table"),n=t.querySelectorAll("#bingo-content"),i=t.querySelectorAll("td");let l=!1;n.forEach((t=>{if(l)return;const n=t.querySelectorAll("td"),i=n.length;let r=0;n.forEach((e=>{const t=e.querySelector("input"),n="true"===t.dataset.selected;n&&r++})),l=r===i,e(l)})),i.forEach((n=>{if(l)return;const i=t.querySelectorAll(`td:nth-child(${n.cellIndex+1})`),r=i.length;let o=0;i.forEach((e=>{const t=e.querySelector("input"),n="true"===t.dataset.selected;n&&o++})),l=o===r,e(l)}));const r=()=>{const e=t.querySelector("#bingo-content:nth-child(2) td:first-child"),n=t.querySelector("#bingo-content:nth-child(3) td:nth-child(2)"),i=t.querySelector("#bingo-content:nth-child(4) td:nth-child(3)"),l=t.querySelector("#bingo-content:nth-child(5) td:nth-child(4)"),r=t.querySelector("#bingo-content:nth-child(6) td:nth-child(5)"),o="true"===e.querySelector("input").dataset.selected,c="true"===n.querySelector("input").dataset.selected,a="true"===i.querySelector("input").dataset.selected,u="true"===l.querySelector("input").dataset.selected,s="true"===r.querySelector("input").dataset.selected;return o&&c&&a&&u&&s},o=()=>{const e=t.querySelector("#bingo-content:nth-child(2) td:nth-child(5)"),n=t.querySelector("#bingo-content:nth-child(3) td:nth-child(4)"),i=t.querySelector("#bingo-content:nth-child(4) td:nth-child(3)"),l=t.querySelector("#bingo-content:nth-child(5) td:nth-child(2)"),r=t.querySelector("#bingo-content:nth-child(6) td:nth-child(1)"),o="true"===e.querySelector("input").dataset.selected,c="true"===n.querySelector("input").dataset.selected,a="true"===i.querySelector("input").dataset.selected,u="true"===l.querySelector("input").dataset.selected,s="true"===r.querySelector("input").dataset.selected;return o&&c&&a&&u&&s};e(r()),e(o())},animateBingo(){const e=document.querySelector(".section-bingo--animation");e.classList.add("section-bingo--animation--active"),e.querySelector("h1").style.opacity=1,setTimeout((()=>{e.querySelector("h1").style.opacity=0,e.classList.remove("section-bingo--animation--active")}),5e3)}}};const k=(0,f.Z)(w,[["render",d]]);var v=k,B={name:"HomepageView",components:{BingoComponent:v}};const C=(0,f.Z)(B,[["render",l]]);var _=C}}]);
//# sourceMappingURL=Homepage.658e498c.js.map