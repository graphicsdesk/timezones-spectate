parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dE0N":[function(require,module,exports) {
module.exports="https://spectator-static-assets.s3.amazonaws.com/timezones-spectate/sl.9e35a8b0.csv";
},{}],"jUy7":[function(require,module,exports) {
var t=d3.select("#scrolly-side"),e=t.select("figure"),i=t.select("article"),n=i.selectAll(".step");function r(t,i){d3.csv(require("./sl.csv"),function(t){d3.map(t,function(t){return t.npbysem}).keys();var r=d3.scaleLinear().domain([0,24]).range([0,width]),a=d3.axisBottom(r);a.ticks(25),a.tickSize(0),a.tickPadding(8);var o=["00:00","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24:00 GMT+9"];a.tickFormat(function(t,e){return o[e]});var l=i.append("g").call(a).attr("transform","translate(0,"+height+")");l.selectAll(".tick text").attr("fill","#D2D2D2").attr("font-size","13").attr("font-family","Roboto"),l.select(".tick:nth-child(26)").selectAll("text").attr("dx","25");var s=d3.scaleLinear().range([height,0]),d=d3.axisLeft(s);d.tickSize(-width),d.tickPadding(8);var c=i.append("g");c.selectAll(".domain").remove();var h=scrollama();function g(){var t=Math.floor(.2*window.innerHeight);n.style("height",t+"px");var i=window.innerHeight/1.25,r=(window.innerHeight-i)/2;e.style("height",i+"px").style("top",r+"px"),h.resize()}function f(e){!function(e){var n=t.filter(function(t){if(+t.npbysem==e)return t.hour}),a=d3.histogram().value(function(t){return t.hour}).domain(r.domain()).thresholds(r.ticks(24))(n);if(3==e){s.domain([0,50]);var o=["0","5","10","15","20","25","30","35","40","45","50 classes"];d.tickFormat(function(t,e){return o[e]})}else if(4==e){s.domain([0,450]);var l=["0","50","100","150","200","250","300","350","400","450 classes"];d.tickFormat(function(t,e){return l[e]})}else{s.domain([0,45]);var h=["0","5","10","15","20","25","30","35","40","45 classes"];d.tickFormat(function(t,e){return h[e]})}c.transition().duration(1e3).call(d),c.selectAll("g path").attr("opacity","0"),c.selectAll(".tick text").attr("fill","#D2D2D2").attr("font-size","13"),c.selectAll(".tick line").attr("stroke","#D2D2D2");var g=i.selectAll("rect").data(a);g.enter().append("rect").merge(g).transition().duration(1e3).attr("x",1).attr("transform",function(t){return"translate("+r(t.x0)+","+s(t.length)+")"}).attr("width",function(t){return r(t.x1)-r(t.x0)}).attr("height",function(t){return height-s(t.length)}).style("fill","#5168A6").attr("opacity","90%")}(e.index),e.element.classList.add("is-active")}g(),h.setup({step:"#scrolly-side article .step",offset:.67,debug:!1}).onStepEnter(f),window.addEventListener("resize",g)})}document.addEventListener("DOMContentLoaded",function(){var t,e;$(window).on("resize",function(){$(window).width()<500||(t={top:30,right:80,bottom:30,left:80},width=1*window.innerWidth-t.left-t.right,height=.95*window.innerHeight-t.top-t.bottom,d3.select("#my_dataviz").select("svg").remove(),e=d3.select("#my_dataviz").append("svg").attr("width",width+t.left+t.right).attr("height",height+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")"),d3.selectAll("svg").style("background-color","#201c38")),r(t,e)}),$(window).width()<500?(height=window.innerWidth/1.5,width=window.innerHeight/1.5,e=d3.select("#my_dataviz").append("svg").attr("width","80vh").attr("height","100vw").append("g").attr("style","transform:translate(0,0)")):(t={top:30,right:80,bottom:30,left:80},width=1*document.body.clientWidth-t.left-t.right,height=.95*window.innerHeight-t.top-t.bottom,e=d3.select("#my_dataviz").append("svg").attr("width",width+t.left+t.right).attr("height",height+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")"),d3.selectAll("svg").style("background-color","#201c38")),r(t,e),$(window).width()<500&&(d3.selectAll("svg").attr("transform","rotate(90)"),d3.selectAll("g.tick").attr("transform","rotate(-90)"))});
},{"./sl.csv":"dE0N"}]},{},["jUy7"], "script")
//# sourceMappingURL=https://spectator-static-assets.s3.amazonaws.com/timezones-spectate/scriptsl.98fd0df2.js.map