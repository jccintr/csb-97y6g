(this["webpackJsonpdelivery-react"]=this["webpackJsonpdelivery-react"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(7),c=a.n(r),n=a(6),i=a(2),o=a(3),u=a.n(o),l=(a(13),a(14),a(4)),d=a.p+"static/media/paladar.677b6843.png",j=a(0);function b(){return Object(j.jsxs)("div",{className:"toolbar",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"imgLogo",src:d,alt:"Paladar Logo"})}),Object(j.jsxs)("div",{className:"container-titulo",children:[Object(j.jsx)("p",{className:"nome-estabelecimento",children:"Lanchonete Paladar"}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"telefone-estabelecimento",children:[Object(j.jsx)(l.b,{size:14})," 35-99912-2008"]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"status-estabelecimento",children:[Object(j.jsx)(l.a,{size:14})," Aberto"]})})]})]})}a(16),a(17);function p(e){var t=e.produto;return Object(j.jsxs)("div",{className:"card-item",children:[Object(j.jsx)("div",{className:"div-imagem",children:Object(j.jsx)("img",{className:"imagemProduto",alt:"imagem do produto",src:t.Imagem.url})}),Object(j.jsxs)("div",{className:"coluna",children:[Object(j.jsx)("div",{className:"produtoNome",children:t.Nome}),Object(j.jsx)("div",{className:"produtoIngredientes",children:t.Ingredientes}),Object(j.jsx)("div",{className:"linhaPreco",children:Object(j.jsxs)("div",{className:"preco",children:["R$ ",t.Preco]})})]})]},t.id)}var m=function(e){var t=e.Produtos,a=e.ProdutosBackup,r=e.Categorias,c=e.setProdutos,n=Object(s.useState)(null),o=Object(i.a)(n,2),u=o[0],l=o[1],d=Object(s.useState)(""),b=Object(i.a)(d,2),m=b[0],O=b[1];function h(e){var a=t.filter((function(t){return t.Categoria.id===e.categoria.id}));return a.length&&l(!0),a.length?Object(j.jsx)("h3",{className:"titulo-categoria",children:e.categoria.Nome},e.categoria.id):""}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"containerInput",children:Object(j.jsx)("input",{className:"inputPesquisa",placeholder:"Pesquisar por produto ou ingrediente",type:"search",onChange:function(e){O(e.target.value);var t=a.filter((function(t){return t.Nome.toUpperCase().includes(e.target.value.toUpperCase())||t.Ingredientes.toUpperCase().includes(e.target.value.toUpperCase())||t.Categoria.Nome.toUpperCase().includes(e.target.value.toUpperCase())}));t.length||l(null),c(t)},value:m})}),u?"":Object(j.jsx)("p",{className:"errMensagem",children:"Nenhum item encontrado"}),r.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{categoria:e},e.id),t.filter((function(t){return t.Categoria.id===e.id})).map((function(e){return Object(j.jsx)(p,{produto:e},e.id)}))]},e.id)})),u&&Object(j.jsx)("p",{className:"mensagem-imagens",children:"As imagens s\xe3o meramente ilustrativas"})]})},O=function(e){var t=e.Produtos,a=e.ProdutosBackup,s=e.Categorias,r=e.setProdutos;return Object(j.jsx)("main",{children:Object(j.jsx)(m,{Produtos:t,ProdutosBackup:a,Categorias:s,setProdutos:r})})},h=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)([]),o=Object(i.a)(c,2),l=o[0],d=o[1],p=Object(s.useState)([]),m=Object(i.a)(p,2),h=m[0],x=m[1],v=Object(s.useState)(!0),f=Object(i.a)(v,2),g=f[0],N=f[1],P=Object(s.useState)(null),k=Object(i.a)(P,2),C=k[0],S=k[1],w=Object(s.useState)(null),y=Object(i.a)(w,2),E=y[0],I=y[1],U=function(){var e=Object(n.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://x8ki-letl-twmt.n7.xano.io/api:p7GSSb0k/produtos");case 3:if((t=e.sent).ok){e.next=6;break}throw Error("Falha ao obter dados!");case 6:return e.next=8,t.json();case 8:a=e.sent,r(a),d(a),S(null),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),S(e.t0.message);case 17:return e.prev=17,N(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(n.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://x8ki-letl-twmt.n7.xano.io/api:xR9a0v67/categorias");case 3:if((t=e.sent).ok){e.next=6;break}throw Error("Falha ao obter dados!");case 6:return e.next=8,t.json();case 8:a=e.sent,x(a),I(null),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),I(e.t0.message);case 16:return e.prev=16,N(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){U()}),[]),Object(s.useEffect)((function(){B()}),[]),Object(s.useEffect)((function(){document.title="Lanchonete Paladar"}),[]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(b,{}),g?Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)("div",{className:"loader",children:" "})}):C||E?Object(j.jsx)("p",{className:"errMensagem",children:"Falha ao acessar dados."}):!(C||E)&&Object(j.jsx)(O,{Produtos:a,ProdutosBackup:l,Categorias:h,setProdutos:r})]})},x=document.getElementById("root");c.a.render(Object(j.jsx)(s.StrictMode,{children:Object(j.jsx)(h,{})}),x)}],[[18,1,2]]]);
//# sourceMappingURL=main.556a3042.chunk.js.map