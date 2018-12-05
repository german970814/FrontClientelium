(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/loader.62677451.svg"},39:function(e,t,a){e.exports=a(64)},44:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(14),c=a.n(s),o=(a(44),a(3)),i=a(4),l=a(6),m=a(5),u=a(7),p=a(68),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-default"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar bar1"}),r.a.createElement("span",{className:"icon-bar bar2"}),r.a.createElement("span",{className:"icon-bar bar3"})),r.a.createElement("a",{className:"navbar-brand",href:"#"})),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/german970814/Clientelium"},r.a.createElement("i",{className:"ti-github"}),r.a.createElement("p",null,"Repositorio")))))))}}]),t}(n.Component),d=a(65),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"isActive",value:function(e){return window.location.pathname.indexOf(e)+1}},{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar","data-background-color":"white","data-active-color":"danger"},r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement(d.a,{to:"/",className:"simple-text"},"CLIENTELIUM")),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"".concat(this.isActive("/customers")?"active":"")},r.a.createElement(d.a,{to:{pathname:"/customers"}},r.a.createElement("i",{className:"ti-user"}),r.a.createElement("p",null,"Clientes"))),r.a.createElement("li",{className:"".concat(this.isActive("/charts")?"active":"")},r.a.createElement(d.a,{to:{pathname:"/charts"}},r.a.createElement("i",{className:"ti-pie-chart"}),r.a.createElement("p",null,"Gr\xe1ficos"))))))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&-1===this.props.location.pathname.indexOf("/page=")&&window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),b=a(70),E=a(66),g=a(67),N=a(29),C=a(69),y=a(17),j=a(38),O=[{value:"",label:"---"},{value:"PA",label:"Pasaporte"},{value:"CC",label:"C\xe9dula de ciudadan\xeda"},{value:"CE",label:"C\xe9dula de extranjer\xeda"},{value:"TI",label:"Tarjeta de identidad"}],w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onChange=a.onChange.bind(Object(y.a)(Object(y.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.props.onChangeField&&this.props.onChangeField(e)}},{key:"onChangeSelect",value:function(e){var t={target:{name:"identification_type",value:e.value}};this.props.onChangeField&&this.props.onChangeField(t)}},{key:"getValueForSelect",value:function(e){return O.find(function(t){return t.value===e})}},{key:"validateForm",value:function(){var e=this;Object.keys(this.props.customer).forEach(function(t){e.props.customer[t]&&e.props.customer[t].toString().trim()})}},{key:"onSubmit",value:function(){this.props.onSubmit&&this.props.onSubmit()}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"header"},r.a.createElement("h4",{className:"title"},this.props.customer.id?"Editar ":"Crear "," Cliente")),r.a.createElement("div",{className:"content"},r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("div",{className:"form-group ".concat("name"in this.props.errors?"has-error":"")},r.a.createElement("label",null,"Nombres"),r.a.createElement("input",{onChange:this.onChange,name:"name",type:"text",className:"form-control border-input",placeholder:"Nombres",value:this.props.customer.name}),r.a.createElement("div",null,this.props.errors.name&&this.props.errors.name.map(function(e,t){return r.a.createElement("span",{key:t},e)})))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"form-group ".concat("last_name"in this.props.errors?"has-error":"")},r.a.createElement("label",null,"Apellidos"),r.a.createElement("input",{onChange:this.onChange,name:"last_name",type:"text",className:"form-control border-input",placeholder:"Apellidos",value:this.props.customer.last_name}),r.a.createElement("div",null,this.props.errors.last_name&&this.props.errors.last_name.map(function(e,t){return r.a.createElement("span",{key:t},e)})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"form-group ".concat("address"in this.props.errors?"has-error":"")},r.a.createElement("label",null,"Direcci\xf3n"),r.a.createElement("input",{onChange:this.onChange,name:"address",type:"text",className:"form-control border-input",placeholder:"Direcci\xf3n",value:this.props.customer.address}),r.a.createElement("div",null,this.props.errors.address&&this.props.errors.address.map(function(e,t){return r.a.createElement("span",{key:t},e)}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group ".concat("phone"in this.props.errors?"has-error":"")},r.a.createElement("label",null,"Tel\xe9fono (opcional)"),r.a.createElement("input",{onChange:this.onChange,name:"phone",type:"text",className:"form-control border-input",placeholder:"Tel\xe9fono",value:this.props.customer.phone||""}),r.a.createElement("div",null,this.props.errors.phone&&this.props.errors.phone.map(function(e,t){return r.a.createElement("span",{key:t},e)})))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group ".concat("cellphone"in this.props.errors?"has-error":"")},r.a.createElement("label",null,"Celular (opcional)"),r.a.createElement("input",{onChange:this.onChange,name:"cellphone",type:"text",className:"form-control border-input",placeholder:"Celular",value:this.props.customer.cellphone||""}),r.a.createElement("div",null,this.props.errors.cellphone&&this.props.errors.cellphone.map(function(e,t){return r.a.createElement("span",{key:t},e)}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"form-group ".concat("identification_type"in this.props.errors?"has-error":"")},r.a.createElement("label",null,"Tipo de identificaci\xf3n"),r.a.createElement(j.a,{className:"react-select",name:"identification_type",onChange:this.onChangeSelect.bind(this),value:this.getValueForSelect(this.props.customer.identification_type),options:O}),r.a.createElement("div",null,this.props.errors.identification_type&&this.props.errors.identification_type.map(function(e,t){return r.a.createElement("span",{key:t},e)})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"form-group ".concat("identification_number"in this.props.errors?"has-error":"")},r.a.createElement("label",null,"N. de identificaci\xf3n"),r.a.createElement("input",{onChange:this.onChange,name:"identification_number",type:"text",className:"form-control border-input",placeholder:"Identificaci\xf3n",value:this.props.customer.identification_number}),r.a.createElement("div",null,this.props.errors.identification_number&&this.props.errors.identification_number.map(function(e,t){return r.a.createElement("span",{key:t},e)})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"form-group ".concat("birthday_date"in this.props.errors?"has-error":"")},r.a.createElement("label",null,"Fecha de nacimiento"),r.a.createElement("input",{onChange:this.onChange,name:"birthday_date",type:"date",className:"form-control border-input",placeholder:"Fecha de Nacimiento",value:this.props.customer.birthday_date.replace(" 00:00:00","")}),r.a.createElement("div",null,this.props.errors.birthday_date&&this.props.errors.birthday_date.map(function(e,t){return r.a.createElement("span",{key:t},e)}))))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{onClick:this.onSubmit.bind(this),type:"button",className:"btn btn-info btn-fill btn-wd"},this.props.customer.id?"Actualizar":"Crear")),r.a.createElement("div",{className:"clearfix"}))))}}]),t}(n.Component),k=Object(C.a)(w),x=(a(58),a(34)),_=a.n(x),T=a(9),S=a.n(T),B=a(12),P="http://45.33.79.73",D=window.fetch.bind(window);function A(e){return Object.keys(e).reduce(function(t,a){return t.push(a+"="+encodeURIComponent(e[a])),t},[]).join("&")}var F={createCustomer:function(){var e=Object(B.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Headers).append("Content-Type","application/json"),e.next=4,D("".concat(P,"/json/customers"),{method:"POST",body:JSON.stringify(t),headers:a}).then(function(e){return e.json()});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateCustomer:function(){var e=Object(B.a)(S.a.mark(function e(t,a){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new Headers).append("Content-Type","application/json"),e.next=4,D("".concat(P,"/json/customers/").concat(a),{method:"POST",body:JSON.stringify(t),headers:n}).then(function(e){return e.json()});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),getCustomers:function(){var e=Object(B.a)(S.a.mark(function e(){var t,a,n=arguments;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},(a=new Headers).append("Content-Type","application/json"),e.next=5,D("".concat(P,"/json/customers?").concat(A(t)),{method:"GET",headers:a}).then(function(e){return e.json()});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getCustomer:function(){var e=Object(B.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Headers).append("Content-Type","application/json"),e.next=4,D("".concat(P,"/json/customers/").concat(t),{method:"GET",headers:a}).then(function(e){return e.json()});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),deleteCustomer:function(){var e=Object(B.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Headers).append("Content-Type","application/json"),e.next=4,D("".concat(P,"/json/customers/").concat(t,"/delete"),{method:"POST",headers:a}).then(function(e){return e.json()});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getActiveCustomersChart:function(){var e=Object(B.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json"),e.next=4,D("".concat(P,"/json/charts/active-users"),{method:"GET",headers:t}).then(function(e){return e.json()});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getBornYearsChart:function(){var e=Object(B.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json"),e.next=4,D("".concat(P,"/json/charts/born-years"),{method:"GET",headers:t}).then(function(e){return e.json()});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getIdentificationTypeChart:function(){var e=Object(B.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Headers).append("Content-Type","application/json"),e.next=4,D("".concat(P,"/json/charts/identification-type"),{method:"GET",headers:t}).then(function(e){return e.json()});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={search:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.state.search.toString().trim()&&this.state.search.length>=2?this.props.filterCustomers&&this.props.filterCustomers(this.state.search):t.search===this.state.search||this.state.search||this.props.filterCustomers&&this.props.filterCustomers("")}},{key:"newCustomer",value:function(){this.props.onUserClickNewCustomerButton&&this.props.onUserClickNewCustomerButton()}},{key:"onChange",value:function(e){this.setState({search:e.target.value})}},{key:"onUserClickDeleteCustomer",value:function(e){var t=this;_()({title:"Atenci\xf3n",text:"\xbfSeguro que quieres eliminar este cliente?",type:"error",confirmButtonText:"Eliminar",showCancelButton:!0,cancelButtonText:"Cancelar"}).then(function(a){a.value&&F.deleteCustomer(e.id).then(function(e){200===e.code?(window.$.notify({message:"Se ha eliminado el cliente"},{type:"warning",timer:4e3}),t.props.onDeleted&&t.props.onDeleted()):window.$.notify({message:"Ha ocurrido un error al intentar eliminar el cliente"},{type:"danger",timer:4e3})})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"header"},r.a.createElement("h4",{className:"title"},"Clientes")),r.a.createElement("ol",{className:"breadcrumb"},r.a.createElement("li",null,r.a.createElement("button",{onClick:this.newCustomer.bind(this),className:"btn btn-sm"},"Nuevo cliente"))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:this.onChange.bind(this),name:"q",type:"text",className:"form-control border-input",placeholder:"Buscar",value:this.state.search})))),r.a.createElement("ul",{className:"list-unstyled team-members"},!Boolean(this.props.customers.length)&&r.a.createElement("li",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 text-left"},"No hay clientes para mostrar"))),Boolean(this.props.customers.length)&&this.props.customers.map(function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-5 text-left"},"".concat(t.name," ").concat(t.last_name)),r.a.createElement("div",{className:"col-xs-7 text-right"},r.a.createElement(d.a,{to:"/customers/".concat(t.id,"/edit/page=").concat(e.props.paginator.currentPage),className:"btn btn-sm btn-success btn-icon"},r.a.createElement("i",{className:"fa fa-pencil"})),r.a.createElement("button",{onClick:function(){e.onUserClickDeleteCustomer(t)},className:"btn btn-sm btn-danger btn-icon"},r.a.createElement("i",{className:"fa fa-trash"})))))})),this.props.paginator&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 text-center"},r.a.createElement("div",{className:"paginator"},this.props.paginator.showPrevButton&&r.a.createElement("button",{onClick:this.props.onPrevButtonPress,className:"btn btn-info btn-sm btn-icon"},r.a.createElement("i",{className:"ti-arrow-left"})),this.props.paginator.showNextButton&&r.a.createElement("button",{onClick:this.props.onNextButtonPress,className:"btn btn-info btn-sm btn-icon"},r.a.createElement("i",{className:"ti-arrow-right"})))))))}}]),t}(n.Component),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={pagination:{},customers:[],errors:[],customer:{name:"",phone:"",status:"",address:"",cellphone:"",last_name:"",birthday_date:"",identification_type:"",identification_number:""}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.page?this.props.match.params.page:1;this.props.match.params.id&&this.getCustomer(),this.fetchCustomers("",e)}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.props.match.params.id&&this.getCustomer(),e.match.params.page!==this.props.match.params.page&&this.fetchCustomers("",this.props.match.params.page)}},{key:"getCustomer",value:function(){var e=this;F.getCustomer(this.props.match.params.id).then(function(t){200===t.code?e.setState({customer:t.data}):t.code})}},{key:"fetchCustomers",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=t?{q:t,page:a}:{page:a};F.getCustomers(n).then(function(t){200===t.code&&e.setState({customers:t.data.data,pagination:Object.assign({},t.data,{data:null})})})}},{key:"resetCustomer",value:function(){this.setState({errors:[],customer:{name:"",phone:"",status:"",address:"",cellphone:"",last_name:"",birthday_date:"",identification_type:"",identification_number:""}})}},{key:"onUserClickNewCustomerButton",value:function(){this.resetCustomer(),this.props.match.params.id&&this.props.history.push({pathname:"/customers/"})}},{key:"onChangeField",value:function(e){this.setState({customer:Object.assign({},this.state.customer,Object(N.a)({},e.target.name,e.target.value))})}},{key:"validateCustomer",value:function(){var e=this;Object.keys(this.state.customer).forEach(function(t){e.state.customer[t]&&e.state.customer[t].toString().trim()})}},{key:"onDeleted",value:function(){this.fetchCustomers()}},{key:"filterCustomers",value:function(e){this.fetchCustomers(e)}},{key:"onNextButtonPress",value:function(){if(this.state.pagination.next_page_url){var e=this.state.pagination.current_page+1;this.props.match.params.page?this.props.history.push({pathname:this.props.location.pathname.replace(/page=\d+/g,"page=".concat(e))}):this.props.history.push({pathname:"".concat(this.props.location.pathname,"/page=").concat(e)})}}},{key:"onPrevButtonPress",value:function(){if(this.state.pagination.prev_page_url){var e=this.state.pagination.current_page-1;this.props.match.params.page?this.props.history.push({pathname:this.props.location.pathname.replace(/page=\d+/g,"page=".concat(e))}):this.props.history.push({pathname:"".concat(this.props.location.pathname,"/page=").concat(e)})}}},{key:"onSubmit",value:function(){var e=this;if(!this.validateCustomer()){var t=this.state.customer.id?"updateCustomer":"createCustomer";F[t](this.state.customer,this.props.match.params.id).then(function(t){400===t.code?(e.setState({errors:t.data.errors}),window.$.notify({message:"Hay un error en el formulario"},{type:"danger",timer:4e3})):200===t.code&&(window.$.notify({message:e.state.customer.id?"Cliente actualizado exitosamente":"Cliente creado exitosamente"},{type:"success",timer:4e3}),e.state.customer.id||e.resetCustomer(),e.fetchCustomers())})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12"},r.a.createElement("div",{className:"col-md-5 col-xs-12"},r.a.createElement(U,{customers:this.state.customers,onDeleted:this.onDeleted.bind(this),filterCustomers:this.filterCustomers.bind(this),onNextButtonPress:this.onNextButtonPress.bind(this),onPrevButtonPress:this.onPrevButtonPress.bind(this),paginator:{showPrevButton:this.state.pagination&&this.state.pagination.prev_page_url,showNextButton:this.state.pagination&&this.state.pagination.next_page_url,currentPage:this.state.pagination?this.state.pagination.current_page:1},onUserClickNewCustomerButton:this.onUserClickNewCustomerButton.bind(this)})),r.a.createElement("div",{className:"col-md-7 col-xs-12"},r.a.createElement(k,{customer:this.state.customer,errors:this.state.errors,onSubmit:this.onSubmit.bind(this),onChangeField:this.onChangeField.bind(this)}))))))}}]),t}(n.Component),I=Object(C.a)(H),G=a(21),z=a(15),M=a(36),$=a.n(M),q=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{width:90,height:90,src:$.a}))}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.getIdentificationTypeChart().then(function(t){200===t.code&&e.setState({data:t.data.data})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement(z.a,{width:"100%",height:"300px",chartType:"Bar",loader:r.a.createElement(q,null),data:[["Tipo de identificaci\xf3n","N\xfamero de clientes"]].concat(Object(G.a)(Object.keys(this.state.data).map(function(t){return[t,e.state.data[t]]}))),options:{chart:{title:"",subtitle:""}}}))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.getBornYearsChart().then(function(t){200===t.code&&e.setState({data:t.data.data})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"content"},r.a.createElement(z.a,{width:"100%",height:300,chartType:"Line",loader:r.a.createElement(q,null),data:[["A\xf1o","N\xfamero de clientes nacidos"]].concat(Object(G.a)(Object.keys(this.state.data).map(function(t){return[t,e.state.data[t]]}))),options:{chart:{title:"",subtitle:""}}}))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={activeCustomers:0,deletedCustomers:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.getActiveCustomersChart().then(function(t){200===t.code&&e.setState({activeCustomers:t.data.active,deletedCustomers:t.data.deleted})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement(z.a,{width:"100%",height:300,chartType:"PieChart",loader:r.a.createElement(q,null),data:[["Clientes Activos","Popularity"],["Activos",this.state.activeCustomers],["Inactivos",this.state.deletedCustomers]],options:{title:"",sliceVisibilityThreshold:.2}}))}}]),t}(n.Component),V=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"col-md-6 col-xs-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"header"},r.a.createElement("h4",{className:"title"},"Porcentaje de clientes activos/inactivos")),r.a.createElement("div",{className:"content"},r.a.createElement(R,null)))),r.a.createElement("div",{className:"col-md-6 col-xs-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"header"},r.a.createElement("h4",{className:"title"},"N\xfamero de clientes nacidos por a\xf1o")),r.a.createElement("div",{className:"content"},r.a.createElement(L,null)))),r.a.createElement("div",{className:"col-md-6 col-xs-12"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"header"},r.a.createElement("h4",{className:"title"},"N\xfamero de clientes por tipo de identificaci\xf3n")),r.a.createElement("div",{className:"content"},r.a.createElement(J,null))))))))}}]),t}(n.Component),Y=function(){return r.a.createElement(v,null,r.a.createElement(b.a,null,r.a.createElement(E.a,{exact:!0,path:"/customers",component:I}),r.a.createElement(E.a,{exact:!0,path:"/customers/page=:page",component:I}),r.a.createElement(E.a,{exact:!0,path:"/customers/:id/edit",component:I}),r.a.createElement(E.a,{exact:!0,path:"/customers/:id/edit/page=:page",component:I}),r.a.createElement(E.a,{exact:!0,path:"/charts",component:V}),r.a.createElement(g.a,{to:{pathname:"/customers/"}})))},W=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",{className:"pull-left"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://es.stackoverflow.com/users/15252/german-alzate"},"Germ\xe1n Alzate")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/german970814/Clientelium"},"Repositorio")))),r.a.createElement("div",{className:"copyright pull-right"},"\xa9 ",(new Date).getFullYear(),", Creado con ",r.a.createElement("i",{className:"fa fa-heart heart"})," por ",r.a.createElement("a",{href:"https://es.stackoverflow.com/users/15252/german-alzate"},"Germ\xe1n Alzate"))))}}]),t}(n.Component),K=(a(62),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(f,null),r.a.createElement("div",{className:"main-panel"},r.a.createElement(h,null),r.a.createElement(Y,null),r.a.createElement(W,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.e3f8d2bb.chunk.js.map