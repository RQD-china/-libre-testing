import{T as E}from"./TestPanel.3494ab89.js";import{d as B,o as m,P as c,M as o,b as u,a as t}from"./@vue.e5e98381.js";import{X as a}from"./zrender.faac55b3.js";import"./index.99689682.js";import"./vue-router.c36f078c.js";import"./@vicons.78035dc4.js";import"./naive-ui.297118b1.js";import"./seemly.09647d42.js";import"./vooks.92a4234c.js";import"./evtd.5b1ed12a.js";import"./vueuc.1dde09b0.js";import"./@css-render.58f09b3e.js";import"./vdirs.03f40802.js";import"./resize-observer-polyfill.8deb1e21.js";import"./css-render.d5050412.js";import"./@emotion.6322e2ae.js";import"./treemate.5ece188c.js";import"./lodash-es.c3935780.js";import"./date-fns.86f52672.js";import"./highlight.js.52c8718b.js";import"./papaparse.6ad9f997.js";import"./echarts.c7290b77.js";import"./tslib.60310f1a.js";const C=u(" Question 02. \u4E07\u5E74\u5386\u95EE\u9898 "),d=u(" \u7B97\u6CD5\u601D\u60F3 "),D=u(" \u672C\u95EE\u9898\u8F93\u5165\u53D8\u91CF\u4E3A\u5E74\u4EFD\u3001\u6708\u4EFD\u3001\u65E5\u671F\u4E09\u4E2A\uFF0C\u9996\u5148\u9700\u8981\u5BF9\u8F93\u5165\u7684\u65E5\u671F\u8FDB\u884C\u5408\u6CD5\u6027\u5224\u65AD\uFF0C\u786E\u5B9A\u8F93\u5165\u65E5\u671F\u7B26\u5408\u89C4\u8303\u540E\u518D\u8FDB\u884C\u8BA1\u7B97\u4E0B\u4E00\u5929\u7684\u65E5\u671F\u3002 "),y=t("br",null,null,-1),p=u("\u2460 \u9996\u5148\u5224\u65AD\u5E74\u4EFD\u662F\u5426\u7B26\u5408\u53D6\u503C\u8303\u56F4\uFF081900\u2264year\u22642100\uFF09\uFF1B "),f=t("br",null,null,-1),b=u("\u2461 \u518D\u5224\u65AD\u6708\u4EFD\u662F\u5426\u7B26\u5408\u53D6\u503C\u8303\u56F4\uFF081\u2264month\u226412\uFF09\uFF1B "),A=t("br",null,null,-1),v=u("\u2462 \u8BA1\u7B97\u8BE5\u5E74\u4EFD\u4E0B\u8BE5\u6708\u7684\u5929\u6570maxDays\uFF0C\u7136\u540E\u5224\u65AD\u8F93\u5165\u65E5\u671F\u662F\u5426\u7B26\u5408\u53D6\u503C\u8303\u56F4\uFF081\u2264day\u2264maxDays\uFF09\uFF1B "),h=t("br",null,null,-1),_=u("\u2463 \u8BA1\u7B97\u4E0B\u4E00\u5929\u7684\u65E5\u671F\uFF0C\u5C24\u5176\u662F\u5F53\u51FA\u73B0\u8DE8\u6708\u4EFD\u3001\u8DE8\u5E74\u65F6\u9700\u8981\u7ED9\u51FA\u6B63\u786E\u7684\u65E5\u671F\u3002 "),Y=B({setup(x){const r="calendarProblem",l=[{label:"\u8FB9\u754C\u503C",value:"boundary-value",children:[{label:"\u57FA\u672C\u8FB9\u754C\u503C",value:"basic-boundary"},{label:"\u5065\u58EE\u8FB9\u754C\u503C",value:"robustness-boundary"}]},{label:"\u7B49\u4EF7\u7C7B",value:"equivalence",children:[{label:"\u5F31\u4E00\u822C\u7B49\u4EF7\u7C7B",value:"weak-general-equivalent"},{label:"\u5F3A\u4E00\u822C\u7B49\u4EF7\u7C7B",value:"strong-general-equivalent"},{label:"\u5F31\u5065\u58EE\u7B49\u4EF7\u7C7B",value:"weak-robustness-equivalent"},{label:"\u5F3A\u5065\u58EE\u7B49\u4EF7\u7C7B",value:"strong-robustness-equivalent"}]},{label:"\u51B3\u7B56\u8868",value:"decision",children:[{label:"\u51B3\u7B56\u8868",value:"decision-table"}]}],s=`function calendarProblem(year: number, month: number, day: number): string {
    if (year < 1900 || year > 2100) {
        return "\u5E74\u4EFD\u6570\u503C\u8D8A\u754C"
    }
    if (month <= 0 || month > 12) {
        return "\u6708\u4EFD\u6570\u503C\u8D8A\u754C"
    }

    let monthDays: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let isLeap: number = 0
    if (year % 400 == 0) {
        isLeap = 1
    } else if (year % 100 != 0 && year % 4 == 0) {
        isLeap = 1;
    }

    monthDays[1] += isLeap
    let maxDays: number = monthDays[month - 1]
    if (day <= 0 || day > maxDays) {
        return "\u65E5\u671F\u6570\u503C\u8D8A\u754C"
    }

    let result: number[] = [year, month, day + 1]

    if (day == maxDays) {
        result[2] = 1
        result[1]++
    }
    if (result[1] > 12) {
        result[1] = 1
        result[0]++
    }
    return result[0] + "/" + result[1] + "/" + result[2]
}`,n=[{label:"0.0.0",value:"0.0.0"},{label:"0.1.0",value:"0.1.0"},{label:"0.2.0",value:"0.2.0"}],F={xAxis:{type:"category",data:["0.0.0\u7248\u672C","0.1.0\u7248\u672C","0.2.0\u7248\u672C"]},yAxis:[{type:"value",name:"\u6D4B\u8BD5\u7528\u4F8B\u901A\u8FC7\u7387",alignTicks:!0,position:"left",axisLabel:{formatter:"{value} %"}},{type:"value",name:"\u6D4B\u8BD5\u7528\u4F8B\u901A\u8FC7\u6570",position:"right"}],tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},series:[{data:[{value:81.5,itemStyle:{color:new a(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.8,color:"#188df0"},{offset:1,color:"#188df0"}])}},{value:99.4,itemStyle:{color:new a(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.8,color:"#188df0"},{offset:1,color:"#188df0"}])}},{value:100,itemStyle:{color:new a(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.8,color:"#188df0"},{offset:1,color:"#188df0"}])}}],type:"bar",yAxisIndex:0,name:"\u6D4B\u8BD5\u7528\u4F8B\u901A\u8FC7\u7387",tooltip:{valueFormatter:e=>e+" %"}},{data:[{value:137,itemStyle:{color:"green"}},{value:167,itemStyle:{color:"green"}},{value:168,itemStyle:{color:"green"}}],type:"line",yAxisIndex:1,markPoint:{data:[{type:"max",name:"Max"}]},name:"\u6D4B\u8BD5\u7528\u4F8B\u901A\u8FC7\u6570",tooltip:{valueFormatter:e=>e+" \u4E2A"}}]},i={columns:[{title:"\u7248\u672C\u53F7",key:"version"},{title:"\u6D4B\u8BD5\u6570\u636E\u96C6",key:"dataset"},{title:"\u6D4B\u8BD5\u60C5\u51B5",key:"result"},{title:"\u7F3A\u9677\u63CF\u8FF0",key:"bug"}],data:[{key:"0",version:"0.0.0",dataset:"\u5F3A\u5065\u58EE\u7B49\u4EF7\u7C7B",result:"\u901A\u8FC7137/167",bug:"\u5F53\u5904\u4E8E\u5F53\u6708\u6700\u540E\u4E00\u5929\u3001\u5F53\u6708\u4E3A12\u6708\u65F6\u7684\u5E74\u6708\u8BA1\u7B97\u903B\u8F91\u6709\u8BEF"},{key:"1",version:"0.1.0",dataset:"\u5F3A\u5065\u58EE\u7B49\u4EF7\u7C7B",result:"\u901A\u8FC7167/168",bug:"\u95F0\u5E74\u5224\u65AD\u903B\u8F91\u6709\u8BEF\uFF0C\u6574\u767E\u5E74\u7684\u7279\u6B8A\u60C5\u51B5\u8BEF\u5224"},{key:"2",version:"0.2.0",dataset:"\u5F3A\u5065\u58EE\u7B49\u4EF7\u7C7B",result:"\u901A\u8FC7168/168",bug:"\u6D4B\u8BD5\u5168\u90E8\u901A\u8FC7"}]};return(e,g)=>(m(),c(E,{context:r,options:l,code:s,versions:n,"ec-option":F,iteration:i},{header:o(()=>[C]),"sub-title":o(()=>[d]),detail:o(()=>[D,y,p,f,b,A,v,h,_]),_:1}))}});export{Y as default};
