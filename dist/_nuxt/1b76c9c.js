(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{275:function(e,t,n){var map={"./1.png":276,"./2.png":277,"./3.png":278,"./4.png":279,"./5.png":280,"./6.png":281,"./7.png":282,"./8.png":283,"./9.png":284,"./Laxmi.png":285,"./Nima.png":286,"./Sangita.png":287,"./Sanjay2.png":288,"./Sharmila.png":289,"./abhinav.png":290,"./adrian.png":291,"./agnese.png":292,"./aman.png":293,"./amit.png":294,"./bhakti.png":295,"./bhumpa.png":296,"./dhruv.png":297,"./gabry.png":298,"./ganesh.png":299,"./garwang.png":300,"./hanna.png":301,"./jana.png":302,"./jayanta.png":303,"./luka.png":304,"./maie.png":305,"./manoj.png":306,"./mukta.png":307,"./nina.png":308,"./nitesh.png":309,"./nitesh1.png":310,"./people_modal.png":311,"./person.png":312,"./pinaki.png":313,"./praveen.png":314,"./rahul.png":315,"./ravi.png":316,"./rohit.png":317,"./sample.png":318,"./sanjay.png":319,"./shivangi.png":320,"./shreeram.png":321,"./sid.png":322,"./soma.png":323,"./vikas.png":324};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=275},390:function(e,t,n){"use strict";n.r(t);n(43),n(60),n(83);var o,r=n(30),l=(n(32),n(6)),c=(o={asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,t.next=3,n("api/people").fetch();case 3:return o=t.sent,t.abrupt("return",{people:o});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{empdata:{Email:"maie.smolkova@veenwaters.com",Job_Title:"",Name:"Maie Smolkova",Location:"",Profileimg:""},query:{aor:"",bu:"",loc:""},category:{aor:["Logistics","Quality Control","Production","Marketing","Sales","Management","Investor Relations","Admin","Zero Percent Partnerships","Finance","IT","Quality Control","PR"],bu:["VEEN Waters Finland","Third Culture Group","Zero Percent Finland","Third Culture Group","Zero Percent Germany","Zero Percent UAE","Zero Percent Latvia","VEEN Waters India","VEEN Waters Bhutan","Zero Percent"],loc:["Ylitornio, Finland","Tutzing, Germany","Dubai, UAE","Riga, Latvia","Mumbai, India","New Delhi, India","Chennai, India","Goa, India","Kolkata, India","Dehradun, India","Jaipur, India","Bengaluru, India","Samtse, Bhutan","Hamburg, Germany","Munich, Germany","Rovniemi, Finland","Helsinki, Finland"]}}},watch:{},head:{link:[{rel:"stylesheet",href:"/assets/css/page/people.css"}]},methods:{empinfo:function(e,t,n,o,r,l){this.empdata.Name=e,this.empdata.Job_Title=t,this.empdata.Email=n,this.empdata.Profileimg=o,this.empdata.Location=r,this.empdata.Show=l,console.log(this.empdata)}},computed:{peoplelist:function(){var e=this;return this.query.bu||this.query.aor||this.query.loc?this.people[0].body.filter((function(t){return e.query.aor&&e.query.bu&&e.query.loc?(console.log("a"),t.Area_of_Responsibility.includes(e.query.aor)&&t.Business_Unit.includes(e.query.bu)&&t.Location.includes(e.query.loc)):e.query.aor&&e.query.bu?(console.log("b"),t.Area_of_Responsibility.includes(e.query.aor)&&t.Business_Unit.includes(e.query.bu)):e.query.bu&&e.query.loc?(console.log("b"),t.Location.includes(e.query.loc)&&t.Business_Unit.includes(e.query.bu)):e.query.loc&&e.query.aor?(console.log("b"),t.Location.includes(e.query.loc)&&t.Area_of_Responsibility.includes(e.query.aor)):e.query.aor?(console.log("c"),t.Area_of_Responsibility.includes(e.query.aor)):e.query.bu?(console.log("d"),t.Business_Unit.includes(e.query.bu)):e.query.loc?(console.log("e"),t.Location.includes(e.query.loc)):void console.log("f")})):(console.log("g"),this.people[0].body)}}},Object(r.a)(o,"watch",{query:{deep:!0,immediate:!0,handler:function(){var e=this;console.log(this.people[0].body.filter((function(t){return t.Business_Unit.includes(e.query.bu)}))),console.log(this.query.bu)}}}),Object(r.a)(o,"mounted",(function(){})),o),d=n(23),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("modalComp",{attrs:{Name:e.empdata.Name,Email:e.empdata.Email,Job_Title:e.empdata.Job_Title,Profileimg:e.empdata.Profileimg,Location:e.empdata.Location,Show:e.empdata.Show}}),e._v(" "),o("bannerComp",{attrs:{img:"people_test.png",title:"Third Culture People"}}),e._v(" "),o("div",{staticClass:"layoutx"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4 filter"},[o("p",{staticClass:"p18",attrs:{id:"filter"}},[e._v("FILTER BY")]),e._v(" "),o("div",{staticClass:"category"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.query.aor,expression:"query.aor"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.query,"aor",t.target.multiple?n:n[0])}}},[o("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Area of Responsibility")]),e._v(" "),e._l(e.category.aor,(function(t){return o("option",[e._v(e._s(t))])})),e._v(" "),o("option",{attrs:{value:"",selected:""}},[e._v("All")])],2)]),e._v(" "),o("div",{staticClass:"location"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.query.bu,expression:"query.bu"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.query,"bu",t.target.multiple?n:n[0])}}},[o("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Business Unit")]),e._v(" "),e._l(e.category.bu,(function(t){return o("option",[e._v(e._s(t))])})),e._v(" "),o("option",{attrs:{value:"",selected:""}},[e._v("All")])],2)]),e._v(" "),o("div",{staticClass:"aor location"},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.query.loc,expression:"query.loc"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.query,"loc",t.target.multiple?n:n[0])}}},[o("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Location")]),e._v(" "),e._l(e.category.loc,(function(t){return o("option",[e._v(e._s(t))])})),e._v(" "),o("option",{attrs:{value:"",selected:""}},[e._v("All")])],2)])]),e._v(" "),o("div",{staticClass:"col-md-8 showcase"},[o("hr"),e._v(" "),o("div",{staticClass:"d-flex flex-warp  justify-content-around",attrs:{id:"identity"}},[o("div",{staticClass:"row"},e._l(e.peoplelist,(function(t){return o("div",{staticClass:"col-4 profile"},[o("img",{staticClass:"img-fluid ",attrs:{srcset:n(275)("./"+t.Profileimg).srcSet,alt:""}}),e._v(" "),o("div",{staticClass:"info"},[o("p",{attrs:{id:""}},[e._v(e._s(t.Name))]),e._v(" "),o("p",[e._v(e._s(t.Job_Title))]),e._v(" "),o("div",{staticClass:"d-flex plus"},[o("a",{staticClass:"d-flex text-decoration-none",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"},on:{click:function(n){return e.empinfo(t.Name,t.Job_Title,t.Email,t.Profileimg,t.Location,!0)}}},[o("img",{staticClass:"img-fluid",attrs:{src:"/assets/img/plus.svg","data-v-3b8704c8":""}}),o("p",{attrs:{"data-v-3b8704c8":""}},[e._v("MORE INFORMATION")])])])])])})),0)])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);