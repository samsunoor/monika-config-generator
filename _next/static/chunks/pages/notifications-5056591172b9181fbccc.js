_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{E34x:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notifications",function(){return n("pHDb")}])},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},pHDb:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n("nKUr"),a=n("KQm4"),i=n("7Cbv"),l=n("IP2g"),c=n("wHSu"),o=n("m/eG"),s=n("rePB"),u=n("q1tI");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(){var e=function(e){var t=e.initialValues,n=Object(u.useState)(t),r=n[0],a=n[1];return{values:r,setFieldValue:function(e,t){a((function(n){return m(m({},n),{},Object(s.a)({},e,t))}))}}}({initialValues:{notificationChannel:"email",recipients:[{id:Object(i.a)(),email:""}]}}),t=e.values,n=e.setFieldValue,a=t.notificationChannel;return Object(r.jsx)(o.f,{children:Object(r.jsxs)("div",{className:"lg:py-20 xl:py-32 xl:px-80",children:[Object(r.jsx)(o.c.Item,{label:"How do you want to be notified when your website is down?",name:"notification-channel",children:Object(r.jsx)(o.h,{id:"notification-channel",value:a,onChange:function(e){return n("notificationChannel",e.target.value)},children:[{type:"email",label:"Email"},{type:"webhook",label:"Webhook"},{type:"slack",label:"Slack"},{type:"telegram",label:"Telegram"},{type:"whatsapp",label:"WhatsApp"},{type:"teams",label:"Microsoft Teams"},{type:"discord",label:"Discord"}].map((function(e){return Object(r.jsx)(o.i,{value:e.type,children:e.label},e.type)}))})}),"email"===a&&Object(r.jsx)(j,{formHelper:e}),("webhook"===a||"slack"===a||"teams"===a||"discord"===a)&&Object(r.jsx)(p,{formHelper:e}),"telegram"===a&&Object(r.jsx)(h,{formHelper:e}),"whatsapp"===a&&Object(r.jsx)(f,{formHelper:e}),Object(r.jsxs)("div",{className:"mt-12 py-3",children:[Object(r.jsx)(o.a,{onClick:function(){console.log("Click back")},outline:!0,className:"mr-7",children:"Back"}),Object(r.jsx)(o.a,{onClick:function(){console.log("Click next"),console.log(JSON.stringify(t,null,2))},children:"Next"})]})]})})}function j(e){var t=e.formHelper,n=t.values,s=t.setFieldValue,u=n.emailService,d=n.recipients,m=(null===d||void 0===d?void 0:d.length)>1;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.c.Item,{label:"What is the e-mail address to receive the notification?",name:"recipients",children:[null===d||void 0===d?void 0:d.map((function(e){return Object(r.jsxs)("div",{className:"flex mb-2",children:[Object(r.jsx)(o.k,{placeholder:"monika@example.com",value:e.email,type:"email",onChange:function(t){return n=e.id,r=t.target.value,void s("recipients",d.map((function(e){return e.id===n?{id:e.id,email:r}:e})));var n,r},className:m?"w-11/12":"w-full"}),m&&Object(r.jsx)(o.a,{className:"items-center px-5",variant:"text",children:Object(r.jsx)(l.a,{size:"lg",icon:c.b,onClick:function(){return t=e.id,void s("recipients",d.filter((function(e){return e.id!==t})));var t}})})]},e.id)})),Object(r.jsx)(o.a,{variant:"text",onClick:function(){s("recipients",d?[].concat(Object(a.a)(d),[{id:Object(i.a)(),email:""}]):[{id:Object(i.a)(),email:""}])},children:"Add another e-mail address"})]}),Object(r.jsxs)(o.c.Item,{label:"How to send the e-mail?",name:"type",children:[Object(r.jsx)(o.h,{id:"type",value:u,onChange:function(e){return s("emailService",e.target.value)},children:[{type:"",label:"Select a method..."},{type:"smtp",label:"SMTP"},{type:"mailgun",label:"Mailgun"},{type:"sendgrid",label:"Sendgrid"}].map((function(e){return Object(r.jsx)(o.i,{value:e.type,children:e.label},e.type)}))}),"smtp"===u&&Object(r.jsx)(x,{formHelper:t}),"mailgun"===u&&Object(r.jsx)(O,{formHelper:t}),"sendgrid"===u&&Object(r.jsx)(g,{formHelper:t})]})]})}function p(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.url;return Object(r.jsx)(o.c.Item,{label:"Webhook URL",name:"url",children:Object(r.jsx)(o.k,{id:"url",value:i,type:"url",onChange:function(e){return a("url",e.target.value)}})})}function h(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.group_id,l=n.bot_token;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.c.Item,{label:"Group ID",name:"group_id",children:Object(r.jsx)(o.k,{id:"group_id",value:i,onChange:function(e){return a("group_id",e.target.value)},placeholder:"-123456"})}),Object(r.jsx)(o.c.Item,{label:"Bot Token",name:"bot_token",children:Object(r.jsx)(o.k,{id:"bot_token",value:l,onChange:function(e){return a("bot_token",e.target.value)},placeholder:"abcdefg:hijklmnopqrstuvwxyz"})})]})}function f(e){var t=e.formHelper,n=t.values,s=t.setFieldValue,u=n.recipients,d=n.url,m=n.username,b=n.password,j=(null===u||void 0===u?void 0:u.length)>1;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.c.Item,{label:"Recipient Number",name:"recipients",children:[null===u||void 0===u?void 0:u.map((function(e){return Object(r.jsxs)("div",{className:"flex mb-2",children:[Object(r.jsx)(o.k,{value:e.number,type:"tel",onChange:function(t){return n=e.id,r=t.target.value,void s("recipients",u.map((function(e){return e.id===n?{id:e.id,number:r}:e})));var n,r},className:j?"w-11/12":"w-full"}),j&&Object(r.jsx)(o.a,{className:"items-center px-5",variant:"text",children:Object(r.jsx)(l.a,{size:"lg",icon:c.b,onClick:function(){return t=e.id,void s("recipients",u.filter((function(e){return e.id!==t})));var t}})})]},e.id)})),Object(r.jsx)(o.a,{variant:"text",onClick:function(){s("recipients",u?[].concat(Object(a.a)(u),[{id:Object(i.a)(),number:""}]):[{id:Object(i.a)(),number:""}])},children:"Add another Recipient Number"})]}),Object(r.jsx)(o.c.Item,{label:"URL",name:"url",children:Object(r.jsx)(o.k,{id:"url",value:d,type:"url",onChange:function(e){return s("url",e.target.value)}})}),Object(r.jsx)(o.c.Item,{label:"Username",name:"username",children:Object(r.jsx)(o.k,{id:"username",value:m,onChange:function(e){return s("username",e.target.value)}})}),Object(r.jsx)(o.c.Item,{label:"Password",name:"password",children:Object(r.jsx)(o.k,{id:"password",value:b,type:"password",onChange:function(e){return s("password",e.target.value)}})})]})}function x(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.hostname,l=n.port,c=n.username,s=n.password;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.c.Item,{children:Object(r.jsxs)("p",{className:"text-lg",children:["Provide your SMTP server configuration.",Object(r.jsx)("br",{}),"Check out our docs to see an"," ",Object(r.jsx)("a",{className:"underline",href:"https://hyperjumptech.github.io/monika/guides/notifications#example-using-gmail-smtp",target:"_blank",rel:"noreferrer noopenner",children:"example of using Gmail SMTP server"}),"."]})}),Object(r.jsx)(o.c.Item,{label:"SMTP Hostname",name:"hostname",children:Object(r.jsx)(o.k,{id:"hostname",value:i,onChange:function(e){return a("hostname",e.target.value)},placeholder:"smtp.example.com"})}),Object(r.jsx)(o.c.Item,{label:"SMTP Port",name:"port",children:Object(r.jsx)(o.k,{id:"port",value:l,type:"number",onChange:function(e){return a("port",e.target.value)},placeholder:"587"})}),Object(r.jsx)(o.c.Item,{label:"SMTP Username",name:"username",children:Object(r.jsx)(o.k,{id:"username",value:c,onChange:function(e){return a("username",e.target.value)},placeholder:"email@example.com"})}),Object(r.jsx)(o.c.Item,{label:"SMTP Password",name:"password",children:Object(r.jsx)(o.k,{id:"password",value:s,onChange:function(e){return a("password",e.target.value)},type:"password",placeholder:"super-secret-password"})})]})}function O(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.apiKey,l=n.domain;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.c.Item,{children:Object(r.jsxs)("p",{className:"text-lg",children:["Provide your Mailgun configuration.",Object(r.jsx)("br",{}),"You can get the API key and the domain from"," ",Object(r.jsx)("a",{href:"https://www.mailgun.com/",target:"_blank",rel:"noreferrer noopener",className:"underline",children:"Mailgun website"}),"."]})}),Object(r.jsx)(o.c.Item,{label:"API Key",name:"apiKey",children:Object(r.jsx)(o.k,{id:"apiKey",value:i,onChange:function(e){return a("apiKey",e.target.value)},type:"text",placeholder:"key-xxxx"})}),Object(r.jsx)(o.c.Item,{label:"Domain",name:"domain",children:Object(r.jsx)(o.k,{id:"domain",value:l,onChange:function(e){return a("domain",e.target.value)},type:"text",placeholder:"mailgun.com"})})]})}function g(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,i=n.apiKey;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.c.Item,{children:Object(r.jsxs)("p",{className:"text-lg",children:["Provide your Sendgrid configuration.",Object(r.jsx)("br",{}),"You can get the API key from"," ",Object(r.jsx)("a",{href:"https://sendgrid.com/",target:"_blank",rel:"noreferrer noopener",className:"underline",children:"Sendgrid website"}),"."]})}),Object(r.jsx)(o.c.Item,{label:"API Key",name:"apiKey",children:Object(r.jsx)(o.k,{id:"apiKey",value:i,onChange:function(e){return a("apiKey",e.target.value)},type:"apiKey",placeholder:"key-xxxx"})})]})}}},[["E34x",0,2,5,4,1,3]]]);