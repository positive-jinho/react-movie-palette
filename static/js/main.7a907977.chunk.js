(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(7),o=n.n(i),c=n(4),u=n.n(c),l=n(5),s=n(8),p=n(9),f=n(11),d=n(10),m=n(12),h=n(2),v=n(40),g=n.n(v),b=n(1),x=n(41),y=n.n(x);function w(){var t=Object(h.a)(['\n    @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR");\n\n    ',';\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family: "Noto Sans KR", sans-serif;\n        font-size:12px;\n        text-align:center;\n        background-color:rgba(0,0,0,0.02);\n    }\n']);return w=function(){return t},t}var j=Object(b.createGlobalStyle)(w(),y.a);function E(){var t=Object(h.a)(["\n  color: #811b21;\n  padding: 20px 0px;\n  font-size: 30px;\n  font-weight: 600;\n"]);return E=function(){return t},t}function O(){var t=Object(h.a)([""]);return O=function(){return t},t}var k=b.default.header(O()),L=b.default.h1(E()),_=function(){return a.a.createElement(k,null,a.a.createElement(L,null,"Movie Palette"))};function S(){var t=Object(h.a)(["\n  width: 100%;\n  height: 120px;\n  padding-top: 50px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 24px;\n"]);return S=function(){return t},t}var C=b.default.div(S()),z=function(){return a.a.createElement(C,null,"Loading...")};function N(){var t=Object(h.a)(["\n  background-color: #aaa;\n  color: white;\n  padding: 20px 0px;\n"]);return N=function(){return t},t}var M=b.default.footer(N()),T=function(){return a.a.createElement(M,null,"\xa9 Movie Palette")},q=n(44),K=n.n(q),R=n(45),A=n.n(R);n(39);function B(){var t=Object(h.a)(["\n  width: 100%;\n  height: 60px;\n  cursor: pointer;\n  transition: transform 0.15s ease-in-out;\n\n  &:hover {\n    transform: scale(1.6);\n  }\n"]);return B=function(){return t},t}function D(){var t=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n"]);return D=function(){return t},t}var H=b.default.div(D()),J=b.default.div(B()),P=function(t){function e(){var t,n;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={loading:!0,paletteList:[]},n.rgbToHex=function(t,e,n){return"#"+((1<<24)+(t<<16)+(e<<8)+n).toString(16).slice(1)},n.copy=function(t){var e=document.createElement("input");e.value=t,document.querySelector("body").append(e),e.select(),document.execCommand("copy"),e.remove();var n=document.querySelector(".layer");document.querySelector(".layer__hex").textContent=t,n.style.backgroundColor=t,n.style.top=window.scrollY+"px",n.classList.add("show"),setTimeout(function(){n.classList.remove("show")},1200)},n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark(function t(){var e,n,r=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.paletteList,t.prev=1,t.t0=K.a,t.next=5,A()(this.props.src);case 5:t.t1=t.sent,n=(0,t.t0)(t.t1,11),n.colors.forEach(function(t){return e.push(r.rgbToHex(t[0],t[1],t[2]))}),t.next=14;break;case 11:t.prev=11,t.t2=t.catch(1),console.log(t.t2);case 14:return t.prev=14,this.state=this.setState({loading:!1,paletteList:e}),t.finish(14);case 17:case"end":return t.stop()}},t,this,[[1,11,14,17]])}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state,n=e.loading,r=e.paletteList;return n?a.a.createElement(z,null):a.a.createElement(H,null,r.map(function(e){return a.a.createElement(J,{key:e,style:{backgroundColor:e},onClick:function(n){return t.copy(e)}})}))}}]),e}(r.Component);function U(){var t=Object(h.a)(["\n  width: 100%;\n"]);return U=function(){return t},t}function F(){var t=Object(h.a)([""]);return F=function(){return t},t}function G(){var t=Object(h.a)(["\n  font-weight: 600;\n"]);return G=function(){return t},t}function I(){var t=Object(h.a)(["\n  white-space: pre-wrap;\n  margin: 15px 0px;\n  font-size: 14px;\n  line-height: 28px;\n"]);return I=function(){return t},t}function Y(){var t=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  margin-bottom: 30px;\n  border: 1px solid #ddd;\n  box-shadow: 0px 0px 15px 3px #ddd;\n\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]);return Y=function(){return t},t}var Q=b.default.div(Y()),V=b.default.div(I()),W=b.default.div(G()),X=b.default.span(F()),Z=b.default.img(U()),$=function(t){var e=t.original_title,n=t.title,r=t.src;return a.a.createElement(Q,null,a.a.createElement(Z,{src:r}),a.a.createElement(P,{src:r}),a.a.createElement(V,null,a.a.createElement(W,null,e),a.a.createElement(X,null,n)))};function tt(){var t=Object(h.a)(["\n  font-weight: 600;\n  font-size: 14px;\n  padding: 20px 0px;\n"]);return tt=function(){return t},t}var et=b.default.p(tt()),nt=function(t){var e=t.description;return a.a.createElement(et,null,e)};function rt(){var t=Object(h.a)(["\n  margin-top: 1.5em;\n  font-size: 32px;\n"]);return rt=function(){return t},t}function at(){var t=Object(h.a)(["\n  font-size: 64px;\n"]);return at=function(){return t},t}function it(){var t=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  visibility: hidden;\n  top: 0px;\n  left: 0px;\n  font-weight: bold;\n  color: white;\n"]);return it=function(){return t},t}var ot=b.default.div(it()),ct=b.default.div(at()),ut=b.default.div(rt()),lt=function(){return a.a.createElement(ot,{className:"layer"},a.a.createElement(ct,{className:"layer__text"},"Copied!"),a.a.createElement(ut,{className:"layer__hex"}))},st=n(46);function pt(){var t=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return pt=function(){return t},t}var ft=b.default.div(pt()),dt=function(t){function e(){var t,n;Object(s.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={loading:!0,imageList:[],page:1},n}return Object(m.a)(e,t),Object(p.a)(e,[{key:"api",value:function(){var t=Object(l.a)(u.a.mark(function t(){var e,n,r,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state,n=e.imageList,r=e.page,t.prev=1,t.next=4,g.a.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"dbfc56cf620be872eccb06fc5c5b8e53",language:"ko",region:"KR",page:r}});case 4:a=t.sent,a.data.results.forEach(function(t){n.push({original_title:t.original_title,title:t.title,src:"https://image.tmdb.org/t/p/w500"+t.backdrop_path})}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:return t.prev=12,this.setState({loading:!1,imageList:n,page:r}),t.finish(12);case 15:case"end":return t.stop()}},t,this,[[1,9,12,15]])}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"pageUpdate",value:function(){var t=Object(l.a)(u.a.mark(function t(){var e,n,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state,n=e.imageList,r=e.page,this.setState({loading:!0,imageList:n,page:r+1}),t.next=4,this.api();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.loading,n=t.imageList;return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null),a.a.createElement(_,null),a.a.createElement(nt,{description:"\ud83c\udfa8 Click the palette to copy !"}),a.a.createElement(ft,null,n?n.map(function(t){return a.a.createElement($,{original_title:t.original_title,title:t.title,src:t.src,key:t.src})}):null),e?a.a.createElement(z,null):null,a.a.createElement(nt,{description:"\u2764\ufe0f\ufe0f\ufe0f\ufe0f\ufe0f\ufe0f Thank you \u2764\ufe0f"}),a.a.createElement(T,null),a.a.createElement(st.a,{offset:900,onBottom:this.pageUpdate.bind(this)}),a.a.createElement(lt,null))}}]),e}(r.Component);o.a.render(a.a.createElement(dt,null),document.getElementById("root"))},39:function(t,e,n){},48:function(t,e,n){t.exports=n(126)}},[[48,1,2]]]);
//# sourceMappingURL=main.7a907977.chunk.js.map