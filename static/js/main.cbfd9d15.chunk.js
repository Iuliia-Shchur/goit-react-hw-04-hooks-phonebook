(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={formWrapper:"ContactForm_formWrapper__h94Ek",form:"ContactForm_form__3pzd9",label:"ContactForm_label__2jpJQ",input:"ContactForm_input__2IHlm",button:"ContactForm_button__4TtLE"}},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(20),n(14)),i=n(11),l=n(12),u=n(15),m=n(13),b=n(6),d=n.n(b),p=n(9),j=n(2),h=n.n(j),f=n(24),O=n(0);var _=function(t){var e=Object(a.useState)(""),n=Object(p.a)(e,2),c=n[0],r=n[1],o=Object(a.useState)(""),s=Object(p.a)(o,2),i=s[0],l=s[1],u=Object(f.a)(),m=Object(f.a)(),b=function(t){switch(t.target.name){case"name":r(t.target.value);break;case"number":l(t.target.value);break;default:return}},d=function(){r(""),l("")};return Object(O.jsx)("div",{className:h.a.formWrapper,children:Object(O.jsxs)("form",{className:h.a.form,onSubmit:function(e){e.preventDefault();var n={id:Object(f.a)(),name:c,number:i};t(n),d()},children:[Object(O.jsxs)("label",{className:h.a.label,htmlFor:u,children:["Name",Object(O.jsx)("input",{id:u,className:h.a.input,value:c,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:b})]}),Object(O.jsxs)("label",{className:h.a.label,htmlFor:m,children:["Number",Object(O.jsx)("input",{id:m,className:h.a.input,type:"tel",value:i,name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:b})]}),Object(O.jsx)("button",{className:h.a.button,children:"Add contact"})]})})},x=n(3),C=n.n(x);var v=function(t){var e=t.getContacts,n=t.deleteContact;return Object(O.jsx)("div",{className:C.a.listWrapper,children:Object(O.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(O.jsxs)("li",{className:C.a.item,children:[Object(O.jsxs)("p",{className:C.a.text,children:[e,":"]}),Object(O.jsx)("p",{className:C.a.text,children:a}),Object(O.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})})},N=n(8),g=n.n(N);var S=function(t){var e=t.filter,n=t.onFilterChange;return Object(O.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(O.jsx)("input",{className:g.a.input,type:"text",name:"name",value:e,onChange:n})]})},k=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmit=function(e){if(t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert("This contact has already been added to the list");t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(s.a)(n))}}))},t.handleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.filterChange=function(e){t.setState({filter:e.target.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.deleteContact,e=this.formSubmit,n=this.filterChange,a=this.state.filter,c=this.handleContacts();return Object(O.jsxs)("div",{className:d.a.App,children:[Object(O.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(O.jsx)(_,{formSubmit:e}),Object(O.jsx)("h2",{className:d.a.title,children:"Contacts"}),Object(O.jsx)(S,{filter:a,onFilterChange:n}),Object(O.jsx)(v,{getContacts:c,deleteContact:t})]})}}]),n}(a.Component),y=k;o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={item:"ContactList_item__d-puu",text:"ContactList_text__2-3AO",button:"ContactList_button__34i5V"}},6:function(t,e,n){t.exports={App:"App_App__3qAo8",title:"App_title__7Q9-i"}},8:function(t,e,n){t.exports={label:"Filter_label__1LSck",input:"Filter_input__2iayq"}}},[[22,1,2]]]);
//# sourceMappingURL=main.cbfd9d15.chunk.js.map