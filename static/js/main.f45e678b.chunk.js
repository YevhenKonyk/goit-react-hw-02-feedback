(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),s=a(2),i=a(1),o=a(5),m=a(6),u=a(8),b=a(7),d=a(9),E=function(e){var t=e.title,a=e.children;return l.a.createElement("section",{className:"feedback"},l.a.createElement("h2",{className:"title"},t),a)},v=function(e){var t=e.options,a=e.onLeaveFeedback;return l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement("button",{key:e,className:"btn",type:"button",onClick:a,name:e},e)})))},f=function(e){var t=e.label,a=e.value;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"text"},t," ",a))},p=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.positivePercentage;return l.a.createElement(l.a.Fragment,null,c>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{title:"Statistics"},l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"listItem"},l.a.createElement(f,{label:"Good:",value:t})),l.a.createElement("li",{className:"listItem"},l.a.createElement(f,{label:"Neutral:",value:a})),l.a.createElement("li",{className:"listItem"},l.a.createElement(f,{label:"Bad:",value:n})),l.a.createElement("li",{className:"listItem"},l.a.createElement(f,{label:"Total:",value:c})),l.a.createElement("li",{className:"listItem"},l.a.createElement(f,{label:"Positive feedback:",value:"".concat(r||0,"%")}))))),c<=0&&l.a.createElement("p",{className:"text"},"No feedback given"))},g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={good:0,neutral:0,bad:0},a.handleLeaveFeedback=function(e){var t=e.target.name;a.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=Object.values(Object(s.a)({},this.state)).reduce((function(e,t){return e+t}),0),r=parseFloat(t/c*100).toFixed();return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{title:"Please Leave feedback"},l.a.createElement(v,{options:Object.keys(Object(s.a)({},this.state)),onLeaveFeedback:this.handleLeaveFeedback}),l.a.createElement(p,{good:t,neutral:a,bad:n,total:c,positivePercentage:r})))}}]),t}(n.Component);r.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.f45e678b.chunk.js.map