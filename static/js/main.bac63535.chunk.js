(this.webpackJsonpgamer=this.webpackJsonpgamer||[]).push([[0],{74:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(0),c=t.n(r),i=t(22),o=t.n(i),s=t(5),d=t(13),u=t(14),b=t.n(u),l=t(21),g=t(17),m=t.n(g),p="https://api.rawg.io/api/",j=(new Date).getFullYear(),h=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),f=function(){var e=(new Date).getDate();return e<10?"0".concat(e):e}(),O="".concat(j,"-").concat(h,"-").concat(f),A="".concat(j-1,"-").concat(h,"-").concat(f),x="".concat(j+1,"-").concat(h,"-").concat(f),v="games?dates=".concat(A,",").concat(O,"&ordering=-ratin&page_size=10"),w="games?dates=".concat(O,",").concat(x,"&ordering=-added&page_size=10"),y="games?dates=".concat(A,",").concat(O,"&ordering=-released&page_size=10"),E=function(e){return"".concat(p,"games/").concat(e)},I=function(e){return"".concat(p,"games/").concat(e,"/screenshots")},k=function(e){return"".concat(p,"games?search=").concat(e,"&page_size=9")},C=t(6),S=t(3),D=t(18),L=t.p+"static/media/playstation.18cc4b9c.svg",N=t.p+"static/media/gamepad.c9269ef5.svg",R=t.p+"static/media/xbox.3e7db735.svg",G=t.p+"static/media/steam.d7b8819f.svg",U=t.p+"static/media/nintendo.f579be04.svg",B=t.p+"static/media/apple.5757c37e.svg",T=function(e,n){return null!==e?e.match(/media\/screenshots/)?e.replace("/media/screenshots","/media/resize/".concat(n,"/-/screenshots")):e.replace("/media/games","/media/resize/".concat(n,"/-/games/")):e},z=function(e){switch(e){case"PlayStation 4":return L;case"Xbox One":return R;case"PC":return G;case"Nintendo Switch":return U;case"IOS":return B;default:return N}},H=function(e){for(var n=[],t=Math.floor(e),r=1;r<=5;r++)r<=t?n.push(Object(a.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGLSURBVHgBtZbbbcIwFIZ/o4pnNqiZAEbICO0EpRM0ErcHHkgfIaCGDWCStiN0A0bgmUDc4yQkAYziEyWfZCW2bH858RWogHLdDpi0wESNxwO02x9gwhZBiDmUcsGEJYqjASTJOmoyeeO05UWko8nxwMBalEWTIzlR2Ud0Hc0F67GyEhmiudBXw6EDC0RZBTWdSppl3w9EVEH9IAxfRRAcUCZKO+uj1eoginp6VsX5pHPbxalF+ywJoZ9/+l0sFnuhRqM5CTw0SRR5SURNyrRktfrMxqgRWSrRr1eToVZZQXInqk12IzGKUplLsi9U4XweiPV6d1tsXLD0NQE9AvAJTJKHohQJLnr9PaBeUbLI2aI++CIJjog2Ub5Eow/E2ezZWkQNJMzs6asdSu9I9rR7wtAxFT/BTO8mf6DOPeH7mzT/S2kbHx/JOSULdfXfsJve1NjJBLT4cDx2C5K8mu9vxXLZjevkEUpTl+aIokgPrIfTaVN2zsRC2gXorrdLr2EvsKXKBbHQVprK/wF34p3gYzo6rAAAAABJRU5ErkJggg=="},r)):n.push(Object(a.jsx)("img",{alt:"star",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/SURBVHgBtZZLbsIwEIYnD7HODWpOAEIsukJZdtkbNEWAkFi0NwCW3ZUdAkTDEXoEdtmA1BvkCHQXiVdnaFK5wQFPRH7Jsj3E83lsjzFADnme5wBTJjDVbrc927ZfgCk2yDCMPpZXYIoFomiOx6PAptPpdJ44Y1kgikbqDoAhbZAUzUnU5kSlDUpFk8C090oLlI5GUrXVarmgIevaB91uV2D1gSUrd0Sj0fgMgiC65MdInG232yrO2sEcqVBNsyUnFwBpbbCEODY0TfNUY/lCf+F4PA4N3NA+GgZQoMi/tVqtlvV6nfouFCCCzGaz4WmPioIlEGr/HYZbw2TIP9AtYWnIGSiB1Wq1b0zQB8ghHOdNp9NR2q7Mo/V6HWBkdKzvgQd5n0wmb6rfLt0MApiK8w9YoIwr5xqoygbB783AEi6dAA4IL1E2JJbT6/XutEGHw0GAWiEWd7/fP8ftM0VR5KrstsqIS1CR+7j2G7QNpGO7xOI3m03Psiz6nxLJt9in1VikfZoZIDcBUPLtdruyKjfm87mP9jJNAuIIs1ZDGVEMIcDI9/0NXBHmzhDfeotSqUTPsEfQVZ4HojRWqOw/3aTMvdEfx5AAAAAASUVORK5CYII="},r));return n},F={hidden:{opacity:0},show:{opacity:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}},M={hidden:{opacity:0,scale:.5},show:{opacity:1,scale:1,transition:{duration:.75},exit:{opacity:0,transition:{duration:.75}}}};function Z(){var e=Object(s.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n  overflow-y: hidden; // shows rounded edge at the bottom of images\n  img {\n    width: 100%;\n    min-height: 40vh;\n    object-fit: cover;\n  }\n"]);return Z=function(){return e},e}var _=Object(C.b)(S.c.div)(Z()),J=function(e){var n=e.gameId,t=e.gameName,r=e.released,c=e.image,i=n.toString(),o=Object(d.b)(),s=function(){var e;document.body.style.overflow="hidden",o((e=n,function(){var n=Object(l.a)(b.a.mark((function n(t){var a,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"DETAIL_LOADING"}),n.next=3,m.a.get(E(e));case 3:return a=n.sent,n.next=6,m.a.get(I(e));case 6:r=n.sent,t({type:"GET_DETAIL",payload:{game:a.data,screen:r.data}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))};return Object(a.jsx)(_,{onClick:function(){s()},layoutId:i,variants:M,initial:"hidden",animate:"show",children:Object(a.jsxs)(D.b,{to:"/game/".concat(n),children:[Object(a.jsx)(S.c.h3,{layoutId:"title ".concat(i),children:t}),Object(a.jsx)("p",{children:r}),Object(a.jsx)(S.c.img,{layout:"image ".concat(i),src:T(c,640),alt:t})]})})},P=t(4);function V(){var e=Object(s.a)(["\n  margin: 2rem 0rem;\n"]);return V=function(){return e},e}function W(){var e=Object(s.a)(["\n  margin: 5rem 0rem;\n  text-align: justify;\n"]);return W=function(){return e},e}function X(){var e=Object(s.a)(["\n  margin-top: 5rem;\n  img {\n    width: 100%;\n  }\n"]);return X=function(){return e},e}function Q(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  img {\n    margin-left: 3rem;\n  }\n"]);return Q=function(){return e},e}function Y(){var e=Object(s.a)(["\n  text-align: center;\n"]);return Y=function(){return e},e}function K(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  img {\n    width: 2rem;\n    height: 2rem;\n    display: inline;\n  }\n"]);return K=function(){return e},e}function q(){var e=Object(s.a)(["\n  width: 80%;\n  border-radius: 1rem;\n  padding: 2rem 5rem;\n  background: white;\n  position: absolute;\n  z-index: 10;\n  left: 10%;\n  color: black;\n  img {\n    width: 100%;\n  }\n"]);return q=function(){return e},e}function $(){var e=Object(s.a)(["\n  // shadow transparent background\n  width: 100%;\n  min-height: 100vh;\n  overflow-y: scroll;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #ff7676;\n  }\n  &::-webkit-scrollbar-track {\n    background: white;\n  }\n"]);return $=function(){return e},e}var ee=Object(C.b)(S.c.div)($()),ne={open:{opacity:1,scale:[1,2,2,1,1],rotate:[0,0,270,270,0],borderRadius:["20%","20%","50%","50%","20%"]},closed:{opacity:0}},te=Object(C.b)(S.c.div)(q()),ae=Object(C.b)(S.c.div)(K()),re=Object(C.b)(S.c.div)(Y()),ce=Object(C.b)(S.c.div)(Q()),ie=Object(C.b)(S.c.div)(X()),oe=Object(C.b)(S.c.div)(W()),se=Object(C.b)(S.c.div)(V()),de=function(e){var n=e.pathId,t=Object(P.e)(),r=Object(d.c)((function(e){return e.gameDetail})),c=r.game,i=r.screen,o=r.isLoading;return Object(a.jsx)(a.Fragment,{children:!o&&Object(a.jsx)(ee,{className:"cardshadow",onClick:function(e){e.target.classList.contains("cardshadow")&&(document.body.style.overflow="auto",t.push("/"))},children:Object(a.jsxs)(te,{layoutId:n,children:[Object(a.jsxs)(ae,{children:[Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)(S.c.h3,{layoutId:"title ".concat(n),children:c.name}),Object(a.jsxs)("p",{children:["Rating: ",c.rating]}),H(c.rating)]}),Object(a.jsxs)(re,{children:[Object(a.jsx)("h3",{children:"Platforms"}),Object(a.jsx)(ce,{children:c.platforms.map((function(e){return Object(a.jsx)(S.c.img,{animate:o?"closed":"open",variants:ne,src:z(e.platform.name),alt:e.platform.name},e.platform.id)}))})]})]}),Object(a.jsx)(ie,{children:Object(a.jsx)(S.c.img,{layoutId:"image ".concat(n),src:T(c.background_image,1280),alt:c.background_image})}),Object(a.jsx)(oe,{children:c.description_raw}),Object(a.jsx)(se,{children:i.results.map((function(e){return Object(a.jsx)("img",{src:T(e.image,640),alt:"game"},e.id)}))})]})})})},ue=t.p+"static/media/loading_gif_png.e80fa95c.gif";function be(){var e=Object(s.a)(["\n  min-height: 100vh;\n  position: fixed;\n  right: 0;\n  left: 0;\n"]);return be=function(){return e},e}var le=Object(C.b)(S.c.div)(be()),ge=function(){return Object(a.jsx)(le,{children:Object(a.jsx)("img",{className:"loading",src:ue,alt:"loading",style:{}})})};function me(){var e=Object(s.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 2rem;\n"]);return me=function(){return e},e}function pe(){var e=Object(s.a)(["\n  padding: 0rem 5rem;\n  h2 {\n    padding: 5rem 0rem;\n  }\n"]);return pe=function(){return e},e}var je=Object(C.b)(S.c.div)(pe()),he=Object(C.b)(S.c.div)(me()),fe=function(){var e=Object(P.f)().pathname.split("/")[2],n=Object(d.b)();Object(r.useEffect)((function(){n(function(){var e=Object(l.a)(b.a.mark((function e(n){var t,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"HOME_LOADING"}),e.next=3,m.a.get("".concat(p).concat(v));case 3:return t=e.sent,e.next=6,m.a.get("".concat(p).concat(w));case 6:return a=e.sent,e.next=9,m.a.get("".concat(p).concat(y));case 9:r=e.sent,n({type:"FETCH_GAMES",payload:{popular:t.data.results,upComing:a.data.results,newGames:r.data.results}});case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[n]);var t=Object(d.c)((function(e){return e.games})),c=t.popular,i=t.newGames,o=t.upComing,s=t.searched,u=t.isLoading;return Object(a.jsx)(a.Fragment,{children:u?Object(a.jsx)(ge,{}):Object(a.jsx)(je,{children:Object(a.jsxs)(S.b,{type:"crossfade",children:[Object(a.jsx)(S.a,{children:e&&Object(a.jsx)(de,{pathId:e})}),s.length?Object(a.jsxs)("div",{className:"searchGames",children:[Object(a.jsx)("h3",{children:" Search Results"}),Object(a.jsx)(he,{children:s.map((function(e){return Object(a.jsx)(J,{gameName:e.name,released:e.released,gameId:e.id,image:e.background_image},e.id)}))})]}):"",Object(a.jsx)("h3",{children:" Upcoming Games"}),Object(a.jsx)(he,{children:o.map((function(e){return Object(a.jsx)(J,{gameName:e.name,released:e.released,gameId:e.id,image:e.background_image},e.id)}))}),Object(a.jsx)("h3",{children:" Popular Games"}),Object(a.jsx)(he,{children:c.map((function(e){return Object(a.jsx)(J,{gameName:e.name,released:e.released,gameId:e.id,image:e.background_image},e.id)}))}),Object(a.jsx)("h3",{children:" New Games"}),Object(a.jsx)(he,{children:i.map((function(e){return Object(a.jsx)(J,{gameName:e.name,released:e.released,gameId:e.id,image:e.background_image},e.id)}))})]})})})};function Oe(){var e=Object(s.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    html {\n        &::-webkit-scrollbar{\n            width: 0.5rem;\n        }\n        &::--webkit-scrollbar{\n            background-color: darkgray;\n        }\n    }\n    body {\n        font-family: 'Montserrat', sans-serif;\n        width: 100%;\n        //background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));\n    }\n    h2 {\n        font-size: 3rem;\n        font-family: 'Abril Fatface', cursive;\n        font-weight: lighter;\n        color: #333;\n    }\n    h3{\n        font-size: 1.3rem;\n        color: #333;\n        padding: 1.3rem 0rem;\n\n    }\n    p {\n        font-size: 1.2rem;\n        line-height: 200%;\n        color: #696969;\n    }\n    a{\n        text-decoration: none;\n        color: #333;\n    }\n    img {\n        display: block; // hide white space down the imagaes\n    }\n    .loading {\n        margin-top: 5rem;\n        margin-left: auto;\n        margin-right: auto;\n        display: block;\n        \n    }\n\n"]);return Oe=function(){return e},e}var Ae=Object(C.a)(Oe()),xe=t(45),ve=t.p+"static/media/GamerLogo.86eca165.png";function we(){var e=Object(s.a)(["\n  img {\n    width: 5rem;\n  }\n  justify-content: center;\n  display: flex;\n  padding: 1rem;\n  cursor: pointer;\n"]);return we=function(){return e},e}function ye(){var e=Object(s.a)(["\n  padding: 2rem 5rem;\n  text-align: center;\n  input {\n    width: 30%;\n    font-size: 1.5rem;\n    border: none;\n    margin-top: 1rem;\n    padding: 0.5rem;\n    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);\n    outline-color: #ff7676;\n    border-radius: 15px 0px 0px 15px;\n  }\n  button {\n    font-size: 1.5rem;\n    border: none;\n    padding: 0.5rem 0.2rem;\n    cursor: pointer;\n    background-color: #ff7676;\n    color: white;\n    box-shadow: 5px 0px 20px 0px rgb(0 0 0 / 30%);\n    outline-color: #ff7676;\n    border-radius: 0px 15px 15px 0px;\n  }\n"]);return ye=function(){return e},e}var Ee=Object(C.b)(S.c.nav)(ye()),Ie=Object(C.b)(S.c.div)(we()),ke=function(){var e=Object(r.useState)(),n=Object(xe.a)(e,2),t=n[0],c=n[1],i=Object(d.b)();return Object(a.jsxs)(Ee,{variants:F,initial:"hidden",animate:"show",children:[Object(a.jsxs)(Ie,{onClick:function(){i(function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"CLEAR_SEARCH"});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("h2",{children:"GamerApp"}),Object(a.jsx)("img",{alt:"logo",src:ve})]}),Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)("input",{type:"text",value:t,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){var e;c(""),i((e=t,function(){var n=Object(l.a)(b.a.mark((function n(t){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.get(k(e));case 2:a=n.sent,t({type:"FETCH_SEARCHED",payload:{searched:a.data.results}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))},children:"Search"})]})]})};var Ce=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(Ae,{}),Object(a.jsx)(ke,{}),Object(a.jsx)(P.a,{path:["/game/:id","/"],children:Object(a.jsx)(fe,{})})]})},Se=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,75)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))},De=t(15),Le=t(7),Ne={popular:[],newGames:[],upComing:[],searched:[],isLoading:!0},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_GAMES":return Object(Le.a)(Object(Le.a)({},e),{},{popular:n.payload.popular,newGames:n.payload.newGames,upComing:n.payload.upComing,isLoading:!1});case"HOME_LOADING":return Object(Le.a)(Object(Le.a)({},e),{},{isLoading:!0});case"FETCH_SEARCHED":return Object(Le.a)(Object(Le.a)({},e),{},{searched:n.payload.searched});case"CLEAR_SEARCH":return Object(Le.a)(Object(Le.a)({},e),{},{searched:[]});default:return Object(Le.a)({},e)}},Ge={game:{platforms:[]},screen:{results:[]},isLoading:!0},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_DETAIL":return Object(Le.a)(Object(Le.a)({},e),{},{game:n.payload.game,screen:n.payload.screen,isLoading:!1});case"DETAIL_LOADING":return Object(Le.a)(Object(Le.a)({},e),{},{isLoading:!0});default:return Object(Le.a)({},e)}},Be=Object(De.combineReducers)({games:Re,gameDetail:Ue}),Te=t(43),ze=[t(44).a],He=Object(De.createStore)(Be,Object(Te.composeWithDevTools)(De.applyMiddleware.apply(void 0,ze)));o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(d.a,{store:He,children:Object(a.jsx)(D.a,{children:Object(a.jsx)(Ce,{})})})}),document.getElementById("root")),Se()}},[[74,1,2]]]);
//# sourceMappingURL=main.bac63535.chunk.js.map