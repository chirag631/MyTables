(this.webpackJsonpmy_table_app=this.webpackJsonpmy_table_app||[]).push([[0],{55:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},75:function(e,a,t){e.exports=t(90)},80:function(e,a,t){},81:function(e,a,t){},83:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c);t(80),t(55),t(81);var i=t(23),o=t(47),s=(t(82),t(3)),d=t(140),u=t(10),m=t(147),g=t(148),h=t(139),p=t(146),b=t(134),f=t(152),E=t(138),v=t(156),y=t(141),k=t(92),w=t(145),O=t(154),S=t(91),C=t(157),P=t(149),j=t(150),x=t(61),N=t.n(x),B=t(153);t(83);function D(e,a,t,n,r){return{name:e,calories:a,fat:t,carbs:n,protein:r}}D("Cupcake",305,3.7,67,4.3),D("Donut",452,25,51,4.9),D("Eclair",262,16,24,6),D("Frozen yoghurt",159,6,24,4),D("Gingerbread",356,16,49,3.9),D("Honeycomb",408,3.2,87,6.5),D("Ice cream sandwich",237,9,37,4.3),D("Jelly Bean",375,0,94,0),D("KitKat",518,26,65,7),D("Lollipop",392,.2,98,0),D("Marshmallow",318,0,81,2),D("Nougat",360,19,9,37),D("Oreo",437,18,63,4);function H(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var I=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}];function M(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,c=e.orderBy,l=e.numSelected,i=e.rowCount,o=e.onRequestSort;return r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{padding:"checkbox"},r.a.createElement(O.a,{indeterminate:l>0&&l<i,checked:i>0&&l===i,onChange:t,inputProps:{"aria-label":"select all desserts"}})),I.map((function(e){return r.a.createElement(h.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:c===e.id&&n},r.a.createElement(v.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(t=e.id,function(e){o(e,t)})},e.label,c===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))}var J=Object(d.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(u.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),K=function(e){var a=J(),t=e.numSelected;return r.a.createElement(y.a,{className:Object(s.a)(a.root,Object(o.a)({},a.highlight,t>0))},t>0?r.a.createElement(k.a,{className:a.title,color:"inherit",variant:"subtitle1",component:"div"},t," selected"):r.a.createElement(k.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},"Nutrition"),t>0?r.a.createElement(C.a,{title:"Delete"},r.a.createElement(S.a,{"aria-label":"delete"},r.a.createElement(N.a,null))):r.a.createElement(C.a,null,r.a.createElement(B.a,{className:"ma-4 pa-4",id:"outlined-search",label:"Search field",type:"search",variant:"outlined"})))},R=Object(d.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},container:{maxHeight:440},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function _(){var e=R(),a=r.a.useState("asc"),t=Object(i.a)(a,2),n=t[0],c=t[1],l=r.a.useState("calories"),s=Object(i.a)(l,2),d=s[0],u=s[1],b=r.a.useState([]),v=Object(i.a)(b,2),y=v[0],k=v[1],S=r.a.useState(0),C=Object(i.a)(S,2),x=C[0],N=C[1],B=r.a.useState(!1),I=Object(i.a)(B,2),J=I[0],_=I[1],q=r.a.useState(10),z=Object(i.a)(q,2),F=z[0],L=z[1],T=r.a.useState({data:[D("Cupcake",305,3.7,67,4.3),D("Donut",452,25,51,4.9),D("Eclair",262,16,24,6),D("Frozen yoghurt",159,6,24,4),D("Gingerbread",356,16,49,3.9),D("Honeycomb",408,3.2,87,6.5),D("Ice cream sandwich",237,9,37,4.3),D("Jelly Bean",375,0,94,0),D("KitKat",518,26,65,7),D("Lollipop",392,.2,98,0),D("Marshmallow",318,0,81,2),D("Nougat",360,19,9,37),D("Oreo",437,18,63,4)],query:[]}),W=Object(i.a)(T,2),A=W[0],G=(W[1],F-Math.min(F,A.length-x*F));return r.a.createElement("div",{className:e.root,class:"mainpage "},r.a.createElement("div",null,r.a.createElement("h1",null,"My Table"),r.a.createElement("br",null)),r.a.createElement(w.a,{className:e.paper},r.a.createElement(K,{numSelected:y.length}),r.a.createElement(p.a,{className:e.container},r.a.createElement(m.a,Object(o.a)({stickyHeader:!0,"aria-label":"sticky table",className:e.table,"aria-labelledby":"tableTitle",size:J?"small":"medium"},"aria-label","enhanced table"),r.a.createElement(M,{classes:e,numSelected:y.length,order:n,orderBy:d,onSelectAllClick:function(e){if(e.target.checked){var a=A.map((function(e){return e.name}));k(a)}else k([])},onRequestSort:function(e,a){c(d===a&&"asc"===n?"desc":"asc"),u(a)},rowCount:A.length}),r.a.createElement(g.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(A.data,function(e,a){return"desc"===e?function(e,t){return H(e,t,a)}:function(e,t){return-H(e,t,a)}}(n,d)).slice(x*F,x*F+F).map((function(e,a){var t,n=(t=e.name,-1!==y.indexOf(t)),c="enhanced-table-checkbox-".concat(a);return r.a.createElement(E.a,{hover:!0,onClick:function(a){return function(e,a){var t=y.indexOf(a),n=[];-1===t?n=n.concat(y,a):0===t?n=n.concat(y.slice(1)):t===y.length-1?n=n.concat(y.slice(0,-1)):t>0&&(n=n.concat(y.slice(0,t),y.slice(t+1))),k(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},r.a.createElement(h.a,{padding:"checkbox"},r.a.createElement(O.a,{checked:n,inputProps:{"aria-labelledby":c}})),r.a.createElement(h.a,{component:"th",id:c,scope:"row",padding:"none"},e.name),r.a.createElement(h.a,{align:"right"},e.calories),r.a.createElement(h.a,{align:"right"},e.fat),r.a.createElement(h.a,{align:"right"},e.carbs),r.a.createElement(h.a,{align:"right"},e.protein))})),G>0&&r.a.createElement(E.a,{style:{height:(J?33:53)*G}},r.a.createElement(h.a,{colSpan:6}))))),r.a.createElement(f.a,{rowsPerPageOptions:[10,25,100],component:"div",count:A.length,rowsPerPage:F,page:x,onChangePage:function(e,a){N(a)},onChangeRowsPerPage:function(e){L(parseInt(e.target.value,10)),N(0)}})),r.a.createElement(P.a,{control:r.a.createElement(j.a,{checked:J,onChange:function(e){_(e.target.checked)}}),label:"Dense padding"}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.f92001d4.chunk.js.map