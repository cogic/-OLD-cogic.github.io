(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eecc"],{d846:function(e,t,o){"use strict";o.r(t);var n=o("0efa"),s=o("7a23");function a(e,t,o,a,i,c){var r=n["a"];return Object(s["openBlock"])(),Object(s["createBlock"])(r,{stageConfig:i.stageConfig},null,8,["stageConfig"])}var i={components:{StoreStage:n["a"]},data:function(){return{stageConfig:{type:"panel",title:"我的仪表板",tools:{build:{show:!0},copy:{show:!0},rename:{show:!0},delete:{show:!0},sort:{show:!0},view:{show:!0}},files:[],style:{title:{backgroundColor:"rgb(207, 157, 150)"}}}}},mounted:function(){var e=this;this.$API.getPanelList((function(t){t.success&&(e.stageConfig.files=t.info)}))}},c=o("6b0d"),r=o.n(c);const l=r()(i,[["render",a]]);t["default"]=l}}]);
//# sourceMappingURL=chunk-2d21eecc.21a2bd08.js.map