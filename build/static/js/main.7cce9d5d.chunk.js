(this["webpackJsonpvaccine-finder"]=this["webpackJsonpvaccine-finder"]||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(6),r=a.n(c),i=(a(11),a(0)),l=function(){return Object(i.jsx)("div",{className:"navbar",children:Object(i.jsx)("span",{onClick:function(){window.location.reload()},children:"Vaccine finder"})})},d=function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("p",{children:["For registration of vaccine go to",Object(i.jsx)("a",{href:"https://www.cowin.gov.in/home",className:"cowin-href",target:"_blank",children:"Cowin app"})]})})},o=a(2),j=a.n(o),u=a(4),h=a(3),b=[{state_id:0,state_name:"None"},{state_id:1,state_name:"Andaman and Nicobar Islands"},{state_id:2,state_name:"Andhra Pradesh"},{state_id:3,state_name:"Arunachal Pradesh"},{state_id:4,state_name:"Assam"},{state_id:5,state_name:"Bihar"},{state_id:6,state_name:"Chandigarh"},{state_id:7,state_name:"Chhattisgarh"},{state_id:8,state_name:"Dadra and Nagar Haveli"},{state_id:37,state_name:"Daman and Diu"},{state_id:9,state_name:"Delhi"},{state_id:10,state_name:"Goa"},{state_id:11,state_name:"Gujarat"},{state_id:12,state_name:"Haryana"},{state_id:13,state_name:"Himachal Pradesh"},{state_id:14,state_name:"Jammu and Kashmir"},{state_id:15,state_name:"Jharkhand"},{state_id:16,state_name:"Karnataka"},{state_id:17,state_name:"Kerala"},{state_id:18,state_name:"Ladakh"},{state_id:19,state_name:"Lakshadweep"},{state_id:20,state_name:"Madhya Pradesh"},{state_id:21,state_name:"Maharashtra"},{state_id:22,state_name:"Manipur"},{state_id:23,state_name:"Meghalaya"},{state_id:24,state_name:"Mizoram"},{state_id:25,state_name:"Nagaland"},{state_id:26,state_name:"Odisha"},{state_id:27,state_name:"Puducherry"},{state_id:28,state_name:"Punjab"},{state_id:29,state_name:"Rajasthan"},{state_id:30,state_name:"Sikkim"},{state_id:31,state_name:"Tamil Nadu"},{state_id:32,state_name:"Telangana"},{state_id:33,state_name:"Tripura"},{state_id:34,state_name:"Uttar Pradesh"},{state_id:35,state_name:"Uttarakhand"},{state_id:36,state_name:"West Bengal"}],m=a.p+"static/media/slotsNotFound.f7b699cf.jpg",p=function(e){var t=e.Error,a=e.response;try{a.length}catch(l){t=!0}var n=new Date,s="".concat(n.getDate(),"-").concat(n.getMonth(),"-").concat(n.getFullYear()),c=function(e){var t=new Date;return t.setDate(t.getDate()+e),"".concat(t.getDate(),"-").concat(t.getMonth(),"-").concat(t.getFullYear())},r=function(e,t){var a=new Date;a.setDate(a.getDate()+e);var n="".concat(a.getDate(),"-").concat(a.getMonth()>9?a.getMonth():"0"+a.getMonth(),"-").concat(a.getFullYear()),s=t.find((function(e){return e.date===n}));return"undefined"===typeof s?Object(i.jsx)("p",{className:"no-slot",children:"NA"}):Object(i.jsxs)("div",{className:"slot-details",children:[Object(i.jsx)("p",{className:"slot-capacity",children:s.available_capacity}),Object(i.jsxs)("p",{className:"age-limit",children:[s.min_age_limit,"+"]}),Object(i.jsx)("p",{className:"vaccine-type",children:s.vaccine})]})};return Object(i.jsx)(i.Fragment,{children:t?Object(i.jsxs)("section",{className:"response-error-section",children:[Object(i.jsx)("h3",{children:"Something went wrong...."}),Object(i.jsx)("p",{children:"Please try again later."})]}):Object(i.jsx)("section",{className:"response-section",children:0==a.length?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{children:"No slots available"}),Object(i.jsx)("div",{className:"slots-not-found-img-container",children:Object(i.jsx)("img",{src:m,alt:"slots not available",className:"slots-not-found-img"})})]}):Object(i.jsx)("article",{className:"response",children:Object(i.jsxs)("div",{className:"response-table",children:[Object(i.jsxs)("div",{className:"table-headings",children:[Object(i.jsx)("div",{className:"table-heading",children:"Center Name and details"}),Object(i.jsx)("div",{className:"table-heading",children:s}),Object(i.jsx)("div",{className:"table-heading",children:c(1)}),Object(i.jsx)("div",{className:"table-heading",children:c(2)}),Object(i.jsx)("div",{className:"table-heading",children:c(3)}),Object(i.jsx)("div",{className:"table-heading",children:c(4)}),Object(i.jsx)("div",{className:"table-heading",children:c(5)}),Object(i.jsx)("div",{className:"table-heading",children:c(6)})]}),a.map((function(e){return Object(i.jsxs)("div",{className:"table-row",children:[Object(i.jsx)("div",{className:"table-col",children:Object(i.jsxs)("div",{className:"hospital-name-cost-container",children:[Object(i.jsxs)("p",{className:"hospital-name",children:[e.name," "]}),Object(i.jsx)("p",{className:"cost",children:e.fee_type})]})}),Object(i.jsx)("div",{className:"table-col",children:r(0,e.sessions)}),Object(i.jsx)("div",{className:"table-col",children:r(1,e.sessions)}),Object(i.jsx)("div",{className:"table-col",children:r(2,e.sessions)}),Object(i.jsx)("div",{className:"table-col",children:r(3,e.sessions)}),Object(i.jsx)("div",{className:"table-col",children:r(4,e.sessions)}),Object(i.jsx)("div",{className:"table-col",children:r(5,e.sessions)}),Object(i.jsx)("div",{className:"table-col",children:r(6,e.sessions)})]})}))]})})})})},x=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),r=Object(h.a)(c,2),l=r[0],d=r[1],o=Object(n.useState)(!1),m=Object(h.a)(o,2),x=m[0],O=m[1],v=Object(n.useState)(""),_=Object(h.a)(v,2),f=_[0],g=_[1],N=Object(n.useState)(""),w=Object(h.a)(N,2),k=w[0],y=w[1],D=Object(n.useState)(!1),S=Object(h.a)(D,2),M=S[0],F=S[1],P=Object(n.useState)([]),C=Object(h.a)(P,2),A=C[0],B=C[1],I=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.find((function(e){return t.target.value===e.state_name})),console.log(a),e.next=4,Y(a);case 4:n=e.sent,d(n.districts);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(t.state_id));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0!=l.length){e.next=3;break}return e.abrupt("return");case 3:if(""!==k){e.next=5;break}return e.abrupt("return");case 5:return a=l.find((function(e){return e.district_name===k})).district_id,e.prev=6,e.next=9,J(a);case 9:n=e.sent,B(n.centers),console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),F(!0);case 17:O(!0);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,n,s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,n="".concat(a.getDate(),"-").concat(a.getMonth(),"-").concat(a.getFullYear()),e.next=4,fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=".concat(t,"&date=").concat(n));case 4:return s=e.sent,e.next=7,s.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,K();case 4:a=e.sent,B(a.centers),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),F(!0);case 11:O(!0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Date,a="".concat(t.getDate(),"-").concat(t.getMonth(),"-").concat(t.getFullYear()),e.next=4,fetch("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=".concat(f,"&date=").concat(a));case 4:return n=e.sent,e.next=7,n.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"vaccine-centers-container",children:[Object(i.jsxs)("section",{className:"vaccine-centers",children:[Object(i.jsx)("h2",{children:"search centers by"}),Object(i.jsxs)("div",{className:"vaccine-centers-btn-container",children:[Object(i.jsx)("button",{className:"vaccine-centers-btn ".concat(a?"vaccine-centers-btn-clicked":""," "),onClick:function(e){s(!a)},children:"Pin"}),Object(i.jsx)("button",{className:"vaccine-centers-btn ".concat(a?"":"vaccine-centers-btn-clicked"," "),onClick:function(e){s(!a)},children:"District"})]}),a?Object(i.jsx)("div",{className:"pin-search",children:Object(i.jsxs)("form",{className:"pin-search-form",onSubmit:H,children:[Object(i.jsx)("input",{type:"text",value:f,placeholder:"Enter your pin",className:"pin-search-input",onInput:function(e){return g(e.target.value)}}),Object(i.jsx)("div",{className:"pin-search-btn-container",children:Object(i.jsx)("button",{className:"search-btn",type:"submit",children:"Search"})})]})}):Object(i.jsx)("div",{className:"district-search",children:Object(i.jsxs)("form",{className:"district-search-form",onSubmit:E,children:[Object(i.jsxs)("div",{className:"select-state-container",children:[Object(i.jsx)("label",{children:"Select State"}),Object(i.jsx)("select",{name:"states",onInput:function(e){I(e)},children:b.map((function(e){return Object(i.jsx)("option",{value:e.state_name,children:e.state_name})}))})]}),Object(i.jsxs)("div",{className:"select-district-container",children:[Object(i.jsx)("label",{children:"district"}),Object(i.jsx)("select",{name:"districts",onInput:function(e){return y(e.target.value)},children:l.map((function(e){return Object(i.jsx)("option",{value:e.district_name,children:e.district_name})}))})]}),Object(i.jsx)("div",{className:"district-search-btn-container",children:Object(i.jsx)("button",{className:"search-btn district-search-btn",type:"submit",children:"Search"})})]})})]}),x?Object(i.jsx)(p,{Error:M,response:A}):Object(i.jsx)(i.Fragment,{})]})};var O=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(x,{}),Object(i.jsx)(d,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7cce9d5d.chunk.js.map