(this.webpackJsonpplayer=this.webpackJsonpplayer||[]).push([[0],{18:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var i=t(1),r=t(0),o=t.n(r),a=t(9),u=t.n(a),d=(t(18),t(4)),c=[{_id:"112fsdf",author:"Author",name:"Believer",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},{_id:"asgfs4212",author:"Another Song",name:"Believer",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},{_id:"3sdgg234",author:"Author3",name:"test",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"},{_id:"sad1234",author:"Author4",name:"test",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"},{_id:"5dsag423",author:"Author5",name:"test",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"},{_id:"6asfsa421",author:"Author6",name:"Song",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"},{_id:"7dsgds423",author:"Author7",name:"Song",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},{_id:"8312fdsgds",author:"Author8",name:"Song",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"},{_id:"21412412gds9",author:"Author9",name:"Song",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"},{_id:"121312dsf0",author:"Author10",name:"Song",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"},{_id:"121412saf1",author:"Author11",name:"Song",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"},{_id:"1324dsf122",author:"Author12",name:"Song",show:!0,link:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"}],s=t.p+"static/media/pause-icon.70806fd1.svg",l=t.p+"static/media/play-icon.1b4fe477.svg",m=t.p+"static/media/play-next-icon.52de6310.svg",h=t.p+"static/media/play-previous-icon.b6f7d5c4.svg",p=t(2),f=t(3);function b(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n"]);return b=function(){return e},e}function g(){var e=Object(p.a)(["\n  cursor: pointer;\n  &::-webkit-slider-runnable-track {\n    height: 0.2rem;\n    width: 100%;\n    background: #b1b1b1;\n  }\n  &::-webkit-slider-thumb {\n    background-color: #434343;\n    color: #434343;\n    margin-top: -0.35rem;\n    width: 0.3rem;\n    height: 0.3rem;\n    border-radius: 50%;\n  }\n"]);return g=function(){return e},e}function j(){var e=Object(p.a)(["\n  display: block;\n  padding: 0rem 1rem;\n"]);return j=function(){return e},e}function x(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: transparent;\n  border: none;\n  padding: 0.3rem;\n  cursor: pointer;\n  outline: none;\n  img {\n    width: 1.35rem;\n  }\n"]);return x=function(){return e},e}function v(){var e=Object(p.a)(["\n  height: 2rem;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: #f2f2f2;\n  width: 100%;\n  border: none;\n  padding: 0.3rem;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 0.6rem;\n  z-index: 2;\n  img {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n"]);return v=function(){return e},e}var w=f.a.div(v()),O=f.a.button(x()),A=f.a.span(j()),S=f.a.input(g()),y=f.a.div(b()),k=function(e,n){var t=Object(r.useState)(.5),i=Object(d.a)(t,2),o=i[0],a=i[1],u=Object(r.useState)(0),c=Object(d.a)(u,2),s=c[0],l=c[1],m=Object(r.useState)(0),h=Object(d.a)(m,2),p=h[0],f=h[1],b=Object(r.useState)(null),g=Object(d.a)(b,2),j=g[0],x=g[1];return Object(r.useEffect)((function(){if(!n)return!1;j&&(n.currentTime=j,f(j),x(null));var e=function(){l(n.duration),f(n.currentTime)},t=function(){f(n.currentTime)};return n.addEventListener("loadedmetadata",e),n.addEventListener("timeupdate",t),function(){n.removeEventListener("loadedmetadata",e),n.removeEventListener("timeupdate",t)}}),[n,e,j]),{duration:s,currentTime:p,volume:o,setSelectedTime:x,setCurrentTime:f,setVolume:a}},L=function(e){return[e/3600,e%3600/60,e%60].map((function(e){return"0".concat(Math.floor(e)).slice(-2)})).join(":")},_=function(e){var n=e.audioList,t=e.activeAudioId,o=e.updateActiveAudioId,a=e.pauseOrPlayAudio,u=e.playAudio,d=e.audioRef,c=e.audioNode,p=k(t,c),f=p.duration,b=p.currentTime,g=p.volume,j=p.setSelectedTime,x=p.setVolume,v=n.findIndex((function(e){return e._id===t})),_=-1!==v?n[v].link:null,C=n.filter((function(e){return!0===e.show})),E=C.indexOf(n[v]),I=Object(r.useCallback)((function(){if(0===C.length)return!1;o(0===E?C[C.length-1]._id:C[E-1]._id)}),[o,E,C]),F=Object(r.useCallback)((function(){if(0===C.length)return!1;E===C.length-1?o(C[0]._id):o(C[E+1]._id)}),[o,E,C]);Object(r.useEffect)((function(){return!!c&&(c.addEventListener("ended",F),function(){c.removeEventListener("ended",F)})}),[c,t,F]);var H=c?c.paused?l:s:null;return Object(i.jsxs)(w,{children:[Object(i.jsxs)(y,{children:[Object(i.jsx)(O,{onClick:I,children:Object(i.jsx)("img",{src:h,alt:"Next Song"})}),Object(i.jsx)(O,{onClick:function(){a(),null===t&&C.length?(o(C[0]._id),u()):b===f&&b>0&&F()},children:Object(i.jsx)("img",{src:H,alt:"Play / Pause Song"})}),Object(i.jsx)(O,{onClick:F,children:Object(i.jsx)("img",{src:m,alt:"Next Song"})})]}),Object(i.jsxs)(y,{children:[Object(i.jsxs)(y,{children:[Object(i.jsx)(A,{children:L(b)}),Object(i.jsx)(S,{type:"range",min:"0",step:f/100,max:f,value:b,onChange:function(e){j(e.target.value)}}),Object(i.jsx)(A,{children:L(f)})]}),Object(i.jsxs)(y,{children:[Object(i.jsx)(A,{children:"Volume"}),Object(i.jsx)(S,{type:"range",step:"0.01",min:"0",max:"1",value:g,onChange:function(e){c.volume=e.target.value,x(e.target.value)}}),Object(i.jsx)("audio",{src:_,id:"audio",ref:d,preload:"metadata"})]})]})]})};function C(){var e=Object(p.a)(["\n  display: block;\n  font-size: 0.9rem;\n  margin-left: ",";\n  color: ",";\n  &:nth-child(1) {\n    margin-right: 0.3rem;\n  }\n"]);return C=function(){return e},e}function E(){var e=Object(p.a)(["\n  cursor: pointer;\n  border-radius: 0.25rem;\n  padding: 1rem;\n  background-color: ",";\n  color: ",";\n  margin-bottom: 0.6rem;\n  display: flex;\n  position: relative;\n  z-index: 1;\n  &:last-child {\n    margin-bottom: 0rem;\n  }\n  li {\n    color: ",";\n  }\n"]);return E=function(){return e},e}var I=f.a.li(E(),(function(e){return e.active?"#d7cbcb":"#FFF"}),(function(e){return e.active?"#FFF":"#000"}),(function(e){return e.active?"#FFF !important":"inherit"})),F=f.a.span(C(),(function(e){return"duration"===e.styling?"auto":"0rem"}),(function(e){return"author"===e.styling?"#574d4d":"name"===e.styling?"#897b7b":"#4f3125"})),H=function(e){var n=e.audio,t=e.activeAudioId,o=e.updateActiveAudioId,a=e.pauseOrPlayAudio,u=e.playAudio,c=Object(r.useState)(0),s=Object(d.a)(c,2),l=s[0],m=s[1];if(Object(r.useEffect)((function(){var e=document.createElement("audio");return e.src=n.link,e.addEventListener("loadedmetadata",(function(){return m(e.duration)})),function(){e.addEventListener("loadedmetadata",(function(){return m(e.duration)}))}}),[n.link]),!n.show)return null;return Object(i.jsxs)(I,{active:t===n._id,onClick:function(){o(n._id),n._id===t?a():u()},children:[Object(i.jsxs)(F,{styling:"author",children:[n.author," -"]}),Object(i.jsx)(F,{styling:"name",children:n.name}),Object(i.jsx)(F,{styling:"duration",children:L(l)})]})};function P(){var e=Object(p.a)(["\n  overflow-y: scroll;\n  height: calc(100vh - 9.5rem);\n  max-width: 28rem;\n  list-style: none;\n  padding: 0.6rem;\n  margin: 0.6rem;\n  background-color: #3a2828;\n  ::-webkit-scrollbar {\n    width: 0.3rem;\n    border-radius: 0.6rem;\n    margin-right: 0.2rem;\n    border-radius: 0.6rem;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #444444;\n    height: 3rem;\n    border-radius: 0.6rem;\n  }\n"]);return P=function(){return e},e}var T=f.a.ul(P()),z=function(e){var n=e.audioList,t=e.activeAudioId,r=e.updateActiveAudioId,o=e.pauseOrPlayAudio,a=e.playAudio;return Object(i.jsx)(T,{children:n.map((function(e){return Object(i.jsx)(H,{updateActiveAudioId:r,pauseOrPlayAudio:o,activeAudioId:t,playAudio:a,audio:e},e._id)}))})};function N(){var e=Object(p.a)(["\n  padding: 0.6rem 0.8rem;\n  border: solid 1px #e2e2e2;\n  border-radius: 0.2rem;\n  outline: none !important;\n  font-size: 0.9rem;\n"]);return N=function(){return e},e}var B=f.a.input(N()),M=function(e){var n=e.audioList,t=e.updateAudioList;return Object(i.jsx)(B,{type:"text",placeholder:"Search Music Here",onChange:function(e){if(e.target.value.length>=3){var i=n.map((function(n){return-1!==n.name.toLowerCase().indexOf(e.target.value.toLowerCase())||-1!==n.author.toLowerCase().indexOf(e.target.value.toLowerCase())?n.show=!0:n.show=!1,n}));t(i)}else{var r=n.map((function(e){return e.show=!0,e}));t(r)}}})};function R(){var e=Object(p.a)(["\n  width: 100%;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  height: 3.7rem;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding-left: 0.6rem;\n"]);return R=function(){return e},e}var V=f.a.header(R()),J=function(e){var n=e.audioList,t=e.updateAudioList;return Object(i.jsx)(V,{children:Object(i.jsx)(M,{audioList:n,updateAudioList:t})})},D=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],o=n[1],a=Object(r.useState)(null),u=Object(d.a)(a,2),s=u[0],l=u[1],m=Object(r.useRef)(null),h=m.current;Object(r.useEffect)((function(){Array.isArray(c)&&o(c)}),[]);var p=function(e){l(e)},f=function(){h.paused?h.play():h.pause()},b=function(){h.addEventListener("loadedmetadata",(function(){h.play()}))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(J,{audioList:t,updateAudioList:function(e){o(e)}}),Object(i.jsx)(z,{audioList:t,activeAudioId:s,updateActiveAudioId:p,pauseOrPlayAudio:f,playAudio:b,audioNode:h}),Object(i.jsx)(_,{audioList:t,activeAudioId:s,updateActiveAudioId:p,pauseOrPlayAudio:f,playAudio:b,audioRef:m,audioNode:h})]})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),i(e),r(e),o(e),a(e)}))};u.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(D,{})}),document.getElementById("root")),q()}},[[21,1,2]]]);
//# sourceMappingURL=main.2358c954.chunk.js.map