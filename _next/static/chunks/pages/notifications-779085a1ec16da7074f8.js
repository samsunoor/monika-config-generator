_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"20a2":function(e,t,n){e.exports=n("nOHt")},"BD/H":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("rePB"),a=n("q1tI");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){var t=e.initialValues,n=Object(a.useState)(t),i=n[0],o=n[1];return{values:i,setFieldValue:function(e,t){o((function(n){return l(l({},n),{},Object(r.a)({},e,t))}))}}}},E34x:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notifications",function(){return n("pHDb")}])},pHDb:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n("nKUr"),a=n("KQm4"),i=n("q1tI"),l=n("20a2"),o=n("7Cbv"),c=n("IP2g"),s=n("wHSu"),d=n("m/eG"),u=n("BD/H"),p=n("ukxq");function m(){var e=Object(l.useRouter)(),t=Object(u.a)({initialValues:{notificationChannel:"email",recipients:[{id:Object(o.a)(),email:""}]}}),n=Object(i.useContext)(p.a).handleSetNotifications,a=t.values,c=t.setFieldValue,s=a.notificationChannel;return Object(r.jsx)(d.g,{children:Object(r.jsxs)("div",{className:"lg:py-20 xl:py-32 xl:px-80",children:[Object(r.jsx)(d.d.Item,{label:"How do you want to be notified when your website is down?",name:"notification-channel",children:Object(r.jsx)(d.i,{id:"notification-channel",value:s,onChange:function(e){return c("notificationChannel",e.target.value)},children:[{type:"email",label:"Email"},{type:"webhook",label:"Webhook"},{type:"slack",label:"Slack"},{type:"telegram",label:"Telegram"},{type:"whatsapp",label:"WhatsApp"},{type:"teams",label:"Microsoft Teams"},{type:"discord",label:"Discord"}].map((function(e){return Object(r.jsx)(d.j,{value:e.type,children:e.label},e.type)}))})}),"email"===s&&Object(r.jsx)(j,{formHelper:t}),("webhook"===s||"slack"===s||"teams"===s||"discord"===s)&&Object(r.jsx)(b,{formHelper:t}),"telegram"===s&&Object(r.jsx)(v,{formHelper:t}),"whatsapp"===s&&Object(r.jsx)(h,{formHelper:t}),Object(r.jsxs)("div",{className:"mt-12 py-3",children:[Object(r.jsx)(d.a,{onClick:function(){e.back()},outline:!0,className:"mr-7",children:"Back"}),Object(r.jsx)(d.a,{onClick:function(){var t=function(e){var t=Object(o.a)(),n=e.notificationChannel;switch(n){case"email":return function(e,t){switch(null===t||void 0===t?void 0:t.emailService){case"smtp":return{id:e,type:null===t||void 0===t?void 0:t.emailService,data:{recipients:null===t||void 0===t?void 0:t.recipients,hostname:null===t||void 0===t?void 0:t.hostname,port:null===t||void 0===t?void 0:t.port,username:null===t||void 0===t?void 0:t.username,password:null===t||void 0===t?void 0:t.password}};case"mailgun":return{id:e,type:null===t||void 0===t?void 0:t.emailService,data:{recipients:null===t||void 0===t?void 0:t.recipients,apiKey:null===t||void 0===t?void 0:t.apiKey,domain:null===t||void 0===t?void 0:t.domain}};case"sendgrid":return{id:e,type:null===t||void 0===t?void 0:t.emailService,data:{recipients:null===t||void 0===t?void 0:t.recipients,apiKey:null===t||void 0===t?void 0:t.apiKey}}}}(t,e);case"webhook":case"slack":case"teams":case"discord":return{id:t,type:n,data:{url:null===e||void 0===e?void 0:e.url}};case"telegram":return{id:t,type:n,data:{group_id:null===e||void 0===e?void 0:e.group_id,bot_token:null===e||void 0===e?void 0:e.bot_token}};case"whatsapp":return{id:t,type:n,data:{recipients:null===e||void 0===e?void 0:e.recipients,url:null===e||void 0===e?void 0:e.url,username:null===e||void 0===e?void 0:e.username,password:null===e||void 0===e?void 0:e.password}}}}(a);n(t?[t]:[]),e.push("/download")},children:"Next"})]})]})})}function j(e){var t=e.formHelper,n=t.values,i=t.setFieldValue,l=n.emailService,u=n.recipients,p=(null===u||void 0===u?void 0:u.length)>1;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(d.d.Item,{label:"What is the e-mail address to receive the notification?",name:"recipients",children:[null===u||void 0===u?void 0:u.map((function(e){return Object(r.jsxs)("div",{className:"flex mb-2",children:[Object(r.jsx)(d.l,{placeholder:"monika@example.com",value:e.email,type:"email",onChange:function(t){return n=e.id,r=t.target.value,void i("recipients",u.map((function(e){return e.id===n?{id:e.id,email:r}:e})));var n,r},className:p?"w-11/12":"w-full"}),p&&Object(r.jsx)(d.a,{className:"items-center px-5",variant:"text",children:Object(r.jsx)(c.a,{size:"lg",icon:s.d,onClick:function(){return t=e.id,void i("recipients",u.filter((function(e){return e.id!==t})));var t}})})]},e.id)})),Object(r.jsx)(d.a,{variant:"text",onClick:function(){i("recipients",u?[].concat(Object(a.a)(u),[{id:Object(o.a)(),email:""}]):[{id:Object(o.a)(),email:""}])},children:"Add another e-mail address"})]}),Object(r.jsxs)(d.d.Item,{label:"How to send the e-mail?",name:"type",children:[Object(r.jsx)(d.i,{id:"type",value:l,onChange:function(e){return i("emailService",e.target.value)},children:[{type:"",label:"Select a method..."},{type:"smtp",label:"SMTP"},{type:"mailgun",label:"Mailgun"},{type:"sendgrid",label:"Sendgrid"}].map((function(e){return Object(r.jsx)(d.j,{value:e.type,children:e.label},e.type)}))}),"smtp"===l&&Object(r.jsx)(x,{formHelper:t}),"mailgun"===l&&Object(r.jsx)(f,{formHelper:t}),"sendgrid"===l&&Object(r.jsx)(O,{formHelper:t})]})]})}function b(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.url;return Object(r.jsx)(d.d.Item,{label:"Webhook URL",name:"url",children:Object(r.jsx)(d.l,{id:"url",value:i,type:"url",onChange:function(e){return a("url",e.target.value)}})})}function v(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.group_id,l=n.bot_token;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.d.Item,{label:"Group ID",name:"group_id",children:Object(r.jsx)(d.l,{id:"group_id",value:i,onChange:function(e){return a("group_id",e.target.value)},placeholder:"-123456"})}),Object(r.jsx)(d.d.Item,{label:"Bot Token",name:"bot_token",children:Object(r.jsx)(d.l,{id:"bot_token",value:l,onChange:function(e){return a("bot_token",e.target.value)},placeholder:"abcdefg:hijklmnopqrstuvwxyz"})})]})}function h(e){var t=e.formHelper,n=t.values,i=t.setFieldValue,l=n.recipients,u=n.url,p=n.username,m=n.password,j=(null===l||void 0===l?void 0:l.length)>1;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(d.d.Item,{label:"Recipient Number",name:"recipients",children:[null===l||void 0===l?void 0:l.map((function(e){return Object(r.jsxs)("div",{className:"flex mb-2",children:[Object(r.jsx)(d.l,{value:e.number,type:"tel",onChange:function(t){return n=e.id,r=t.target.value,void i("recipients",l.map((function(e){return e.id===n?{id:e.id,number:r}:e})));var n,r},className:j?"w-11/12":"w-full"}),j&&Object(r.jsx)(d.a,{className:"items-center px-5",variant:"text",children:Object(r.jsx)(c.a,{size:"lg",icon:s.d,onClick:function(){return t=e.id,void i("recipients",l.filter((function(e){return e.id!==t})));var t}})})]},e.id)})),Object(r.jsx)(d.a,{variant:"text",onClick:function(){i("recipients",l?[].concat(Object(a.a)(l),[{id:Object(o.a)(),number:""}]):[{id:Object(o.a)(),number:""}])},children:"Add another Recipient Number"})]}),Object(r.jsx)(d.d.Item,{label:"URL",name:"url",children:Object(r.jsx)(d.l,{id:"url",value:u,type:"url",onChange:function(e){return i("url",e.target.value)}})}),Object(r.jsx)(d.d.Item,{label:"Username",name:"username",children:Object(r.jsx)(d.l,{id:"username",value:p,onChange:function(e){return i("username",e.target.value)}})}),Object(r.jsx)(d.d.Item,{label:"Password",name:"password",children:Object(r.jsx)(d.l,{id:"password",value:m,type:"password",onChange:function(e){return i("password",e.target.value)}})})]})}function x(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.hostname,l=n.port,o=n.username,c=n.password;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.d.Item,{children:Object(r.jsxs)("p",{className:"text-lg",children:["Provide your SMTP server configuration.",Object(r.jsx)("br",{}),"Check out our docs to see an"," ",Object(r.jsx)("a",{className:"underline",href:"https://hyperjumptech.github.io/monika/guides/notifications#example-using-gmail-smtp",target:"_blank",rel:"noreferrer noopenner",children:"example of using Gmail SMTP server"}),"."]})}),Object(r.jsx)(d.d.Item,{label:"SMTP Hostname",name:"hostname",children:Object(r.jsx)(d.l,{id:"hostname",value:i,onChange:function(e){return a("hostname",e.target.value)},placeholder:"smtp.example.com"})}),Object(r.jsx)(d.d.Item,{label:"SMTP Port",name:"port",children:Object(r.jsx)(d.l,{id:"port",value:l,type:"number",onChange:function(e){return a("port",e.target.value)},placeholder:"587"})}),Object(r.jsx)(d.d.Item,{label:"SMTP Username",name:"username",children:Object(r.jsx)(d.l,{id:"username",value:o,onChange:function(e){return a("username",e.target.value)},placeholder:"email@example.com"})}),Object(r.jsx)(d.d.Item,{label:"SMTP Password",name:"password",children:Object(r.jsx)(d.l,{id:"password",value:c,onChange:function(e){return a("password",e.target.value)},type:"password",placeholder:"super-secret-password"})})]})}function f(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.apiKey,l=n.domain;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.d.Item,{children:Object(r.jsxs)("p",{className:"text-lg",children:["Provide your Mailgun configuration.",Object(r.jsx)("br",{}),"You can get the API key and the domain from"," ",Object(r.jsx)("a",{href:"https://www.mailgun.com/",target:"_blank",rel:"noreferrer noopener",className:"underline",children:"Mailgun website"}),"."]})}),Object(r.jsx)(d.d.Item,{label:"API Key",name:"apiKey",children:Object(r.jsx)(d.l,{id:"apiKey",value:i,onChange:function(e){return a("apiKey",e.target.value)},type:"text",placeholder:"key-xxxx"})}),Object(r.jsx)(d.d.Item,{label:"Domain",name:"domain",children:Object(r.jsx)(d.l,{id:"domain",value:l,onChange:function(e){return a("domain",e.target.value)},type:"text",placeholder:"mailgun.com"})})]})}function O(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.apiKey;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.d.Item,{children:Object(r.jsxs)("p",{className:"text-lg",children:["Provide your Sendgrid configuration.",Object(r.jsx)("br",{}),"You can get the API key from"," ",Object(r.jsx)("a",{href:"https://sendgrid.com/",target:"_blank",rel:"noreferrer noopener",className:"underline",children:"Sendgrid website"}),"."]})}),Object(r.jsx)(d.d.Item,{label:"API Key",name:"apiKey",children:Object(r.jsx)(d.l,{id:"apiKey",value:i,onChange:function(e){return a("apiKey",e.target.value)},type:"apiKey",placeholder:"key-xxxx"})})]})}}},[["E34x",0,2,6,5,1,3,4]]]);