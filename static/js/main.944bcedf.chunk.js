(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{17:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(22),C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(21),C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),jquery__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(20),jquery__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),react_bootstrap__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(35),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__),_templateObject,Parent=styled_components__WEBPACK_IMPORTED_MODULE_8__.a.div(_templateObject||(_templateObject=Object(C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.a)(["\n  max-width: 450px;\n  overflow: hidden;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%);\n\n  .screen {\n    width: 100%;\n    height: 90px;\n    font-weight: bolder;\n    outline: none;\n    margin-bottom: 1.5rem;\n    border-radius: 10px;\n    font-size: 3em;\n    padding: 0 0.5em 0 0.5em;\n    user-select: none;\n    text-align: end;\n    background-color: #181f32;\n    color: #fff;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n\n    div {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      width: 100%;\n    }\n  }\n\n  .btns {\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(4, minmax(55px, 1fr));\n    gap: 20px;\n    background-color: #252d44;\n    border-radius: 10px;\n    font-size: 2em;\n    padding: 0.7em;\n\n    button {\n      border-radius: 7px;\n      border: none;\n      outline: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-weight: bold;\n      box-shadow: 0 4px 0 #b2a195;\n      background-color: #eae3db;\n      color: #454d5e;\n      transition: 0.05s;\n\n      &:active {\n        transform: translateY(4px);\n        box-shadow: none;\n      }\n    }\n\n    .reset-btn {\n      grid-column: 1/3;\n      font-size: 0.7em;\n      font-weight: bold;\n      padding: 0.45em 0;\n      background-color: #647299;\n      box-shadow: 0 4px 0 #424e74;\n      color: #fff;\n    }\n\n    .equal-btn {\n      grid-column: 3/5;\n      font-size: 0.7em;\n      font-weight: bold;\n      background-color: #d13f30;\n      box-shadow: 0 4px 0 #912517;\n      color: #fff;\n    }\n\n    .del-btn {\n      background-color: #647299;\n      box-shadow: 0 4px 0 #424e74;\n      color: #fff;\n    }\n\n    .del-btn,\n    .division-btn,\n    .multiplication-btn {\n      font-size: 0.7em;\n    }\n  }\n\n  @media screen and (max-width: 426px) {\n    .btns {\n      grid-template-columns: repeat(4, minmax(40px, 1fr));\n      gap: 15px;\n    }\n  }\n"]))),CalcBody=function(_React$Component){Object(C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(CalcBody,_React$Component);var _super=Object(C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(CalcBody);function CalcBody(){var _this;Object(C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalcBody);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={result:""},_this.handleCalculations=function(e){_this.state.result.length<14&&"Math Error :("!==_this.state.result&&_this.setState({result:_this.state.result+=e.target.innerText})},_this.handleEqualBtn=function(){try{if(""===_this.state.result)throw Object(jquery__WEBPACK_IMPORTED_MODULE_5__.error)("error");_this.setState({result:String(eval(_this.state.result))})}catch(err){_this.setState({result:"Math Error :("});for(var calcScreen=document.querySelector(".screen"),screenText=document.querySelector(".screen div"),themeOptions=document.querySelectorAll("label"),optionsArray=[themeOptions[0],themeOptions[1],themeOptions[2]],_i=0,_optionsArray=optionsArray;_i<_optionsArray.length;_i++){var label=_optionsArray[_i];label===optionsArray[0]&&label.hasAttribute("value")?(calcScreen.style.backgroundColor="#321818ad",screenText.style.color="red",screenText.style.fontSize="0.5em",screenText.style.fontFamily="monospace"):label===optionsArray[1]&&label.hasAttribute("value")?(calcScreen.style.backgroundColor="#d13f3087",screenText.style.color="#722020",screenText.style.fontSize="0.5em",screenText.style.fontFamily="monospace"):label===optionsArray[2]&&label.hasAttribute("value")?(calcScreen.style.backgroundColor="#ff18001a",screenText.style.color="#df0101",screenText.style.fontSize="0.5em",screenText.style.fontFamily="monospace"):label!==optionsArray[1]||label.hasAttribute("value")||(calcScreen.style.backgroundColor="#321818ad",screenText.style.color="red",screenText.style.fontSize="0.5em",screenText.style.fontFamily="monospace")}}},_this.handleDelBtn=function(){"Math Error :("!==_this.state.result&&_this.setState({result:_this.state.result.slice(0,_this.state.result.length-1)})},_this.resetHandler=function(){_this.setState({result:""});for(var e=document.querySelector(".screen"),t=document.querySelector(".screen div"),n=document.querySelectorAll("label"),o=[n[0],n[1],n[2]],_=0,r=o;_<r.length;_++){var l=r[_];l===o[0]&&"Math Error :("===t.textContent?(e.style.backgroundColor="#181f32",t.style.fontSize="1em",t.style.fontWeight="bold",t.style.color="#fffffd",t.style.fontFamily="Spartan"):l===o[1]&&l.hasAttribute("value")&&"Math Error :("===t.textContent?(e.style.backgroundColor="#eeeeee",t.style.fontSize="1em",t.style.fontWeight="bold",t.style.color="#36362e",t.style.fontFamily="Spartan"):l===o[2]&&l.hasAttribute("value")&&"Math Error :("===t.textContent&&(e.style.backgroundColor="#1e0836",t.style.fontSize="1em",t.style.fontWeight="bold",t.style.color="#ffe53c",t.style.fontFamily="Spartan")}},_this}return Object(C_Users_DELL_Documents_Challenges_App_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalcBody,[{key:"render",value:function(){var e=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(Parent,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"screen",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{children:this.state.result})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"btns",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleDelBtn,className:"del-btn",children:"DEL"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,className:"plus-btn",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,className:"minus-btn",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleCalculations,children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:function(){"Math Error :("!==e.state.result&&e.setState({result:e.state.result+="/"})},className:"division-btn",style:{fontSize:30},children:"\xf7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:function(){"Math Error :("!==e.state.result&&e.setState({result:e.state.result+="*"})},className:"multiplication-btn",children:"x"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.resetHandler,className:"reset-btn",children:"RESET"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button",{onClick:this.handleEqualBtn,className:"equal-btn",children:"="})]})]})})}}]),CalcBody}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);__webpack_exports__.a=CalcBody},29:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o,_=n(2),r=n(1),l=n.n(r),s=n(12),a=n.n(s),c=(n(28),n(29),n(30),n(3)),i=n(4),u=n(35),d=n(0),b=i.a.div(o||(o=Object(c.a)(['\n  max-width: 450px;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%);\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem;\n\n  .logo {\n    font-size: 2em;\n    font-weight: bold;\n    color: #fff;\n    letter-spacing: 3px;\n  }\n\n  .themes-btns {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    gap: 10px;\n\n    span {\n      color: #fff;\n      font-weight: 400;\n      letter-spacing: 3px;\n      font-size: 0.8em;\n    }\n\n    .choices {\n      display: flex;\n      gap: 5px;\n      background-color: #252d44;\n      justify-content: center;\n      align-items: center;\n      border-radius: 30px;\n      padding: 0.3rem;\n      position: relative;\n\n      .o {\n        position: absolute;\n        top: -20px;\n        left: 5px;\n        font-size: 0.7rem;\n        font-weight: bold;\n      }\n\n      .w {\n        position: absolute;\n        top: -20px;\n        left: 50%;\n        transform: translateX(-50%);\n        font-size: 0.7rem;\n        font-weight: bold;\n      }\n\n      .t {\n        position: absolute;\n        top: -20px;\n        right: 5px;\n        font-size: 0.7rem;\n        font-weight: bold;\n      }\n\n      input[type="radio"] {\n        display: none;\n        height: 0;\n        width: 0;\n      }\n\n      label {\n        display: flex;\n        flex: auto;\n        vertical-align: middle;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        cursor: pointer;\n        background-color: #252d44;\n        width: 13px;\n        height: 13px;\n        border-radius: 50%;\n        user-select: none;\n      }\n\n      input[type="radio"]:checked + label {\n        background-color: #d43c37;\n      }\n    }\n  }\n']))),p=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)(b,{children:[Object(d.jsx)("span",{className:"logo",children:"clac"}),Object(d.jsxs)("div",{className:"themes-btns",children:[Object(d.jsx)("span",{children:"THEME"}),Object(d.jsxs)("div",{className:"choices",children:[Object(d.jsx)("span",{className:"o",children:"1"}),Object(d.jsx)("span",{className:"w",children:"2"}),Object(d.jsx)("span",{className:"t",children:"3"}),Object(d.jsx)("input",{type:"radio",name:"size",id:"one",value:"one",defaultChecked:!0}),Object(d.jsx)("label",{htmlFor:"one",active:"on"}),Object(d.jsx)("input",{type:"radio",name:"size",id:"two"}),Object(d.jsx)("label",{htmlFor:"two"}),Object(d.jsx)("input",{type:"radio",name:"size",id:"three"}),Object(d.jsx)("label",{htmlFor:"three",className:"three"})]})]})]})})},f=n(17);var h=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{}),Object(d.jsx)(f.a,{})]})};a.a.render(Object(d.jsxs)(l.a.StrictMode,{children:[Object(d.jsx)("div",{className:"bg"}),Object(d.jsx)(h,{})]}),document.getElementById("root"));var m=document.querySelectorAll("label"),y=[m[0],m[1],m[2]],E=document.body,x=document.querySelector(".bg"),C=document.querySelector(".screen"),O=document.querySelector(".screen div"),j=document.querySelector(".btns"),g=document.querySelectorAll(".btns button"),D=document.querySelector(".reset-btn"),M=document.querySelector(".equal-btn"),k=document.querySelector(".del-btn"),P=document.querySelector(".logo"),A=document.querySelector(".themes-btns > span"),v=document.querySelector(".choices"),L=document.querySelectorAll(".choices span"),T=document.querySelector('meta[name="theme-color"]');m[0].onclick=function(){var e=this;setTimeout((function(){var t,n=y.filter((function(t){return t!==e})),o=Object(_.a)(L);try{for(o.s();!(t=o.n()).done;){t.value.style.color="#fff"}}catch(i){o.e(i)}finally{o.f()}var r,l=Object(_.a)(n);try{for(l.s();!(r=l.n()).done;){r.value.style.backgroundColor="#252d44"}}catch(i){l.e(i)}finally{l.f()}var s,a=Object(_.a)(g);try{for(a.s();!(s=a.n()).done;){var c=s.value;c.style.color="#424653",c.style.backgroundColor="#eae3db",c.style.boxShadow="0 4px #b3a59a"}}catch(i){a.e(i)}finally{a.f()}"Math Error :("!==O.textContent?(C.style.backgroundColor="#181f32",O.style.color="#fffffd"):(C.style.backgroundColor="#321818ad",O.style.color="red"),y[1].removeAttribute("value"),y[2].removeAttribute("value"),e.setAttribute("value","one"),T.setAttribute("content","#3b4664"),v.style.backgroundColor="#252d44",e.style.backgroundColor="#d43c37",E.style.backgroundColor="#3b4664",x.style.backgroundColor="#3b4664",P.style.color="#fffffd",A.style.color="#fffffd",j.style.backgroundColor="#252d44",D.style.backgroundColor="#647299",D.style.color="#fff",D.style.boxShadow="0 4px #424e73",k.style.backgroundColor="#647299",k.style.color="#fff",k.style.boxShadow="0 4px #424e73",M.style.backgroundColor="#d13f30",M.style.boxShadow="0 4px #912418",M.style.color="#fff"}),200)},m[1].onclick=function(){var e=this;setTimeout((function(){var t,n=y.filter((function(t){return t!==e})),o=Object(_.a)(L);try{for(o.s();!(t=o.n()).done;){t.value.style.color="#36362e"}}catch(i){o.e(i)}finally{o.f()}var r,l=Object(_.a)(n);try{for(l.s();!(r=l.n()).done;){r.value.style.backgroundColor="#d3cdce"}}catch(i){l.e(i)}finally{l.f()}var s,a=Object(_.a)(g);try{for(a.s();!(s=a.n()).done;){var c=s.value;c.style.color="#36362e",c.style.backgroundColor="#e5e4e0",c.style.boxShadow="0 4px #a59d94"}}catch(i){a.e(i)}finally{a.f()}"Math Error :("!==O.textContent?(C.style.backgroundColor="#eeeeee",O.style.color="#36362e"):(C.style.backgroundColor="#d13f3087",O.style.color="#722020"),y[0].removeAttribute("value"),y[2].removeAttribute("value"),e.setAttribute("value","two"),T.setAttribute("content","#e6e6e6"),v.style.backgroundColor="#d3cdcd",e.style.backgroundColor="#c55406",E.style.backgroundColor="#e6e6e6",x.style.backgroundColor="#e6e6e6",P.style.color="#36362e",A.style.color="#36362e",j.style.backgroundColor="#d3cdcd",D.style.backgroundColor="#388187",D.style.color="#e8fcfd",D.style.boxShadow="0 4px #1b5f66",k.style.backgroundColor="#388187",k.style.color="#e8fcfd",k.style.boxShadow="0 4px #1b5f66",M.style.backgroundColor="#c85401",M.style.boxShadow="0 4px #843904",M.style.color="#fff9ea"}),200)},m[2].onclick=function(){var e=this;setTimeout((function(){var t,n=y.filter((function(t){return t!==e})),o=Object(_.a)(L);try{for(o.s();!(t=o.n()).done;){t.value.style.color="#ffe53c"}}catch(i){o.e(i)}finally{o.f()}var r,l=Object(_.a)(n);try{for(l.s();!(r=l.n()).done;){r.value.style.backgroundColor="#1e0836"}}catch(i){l.e(i)}finally{l.f()}var s,a=Object(_.a)(g);try{for(a.s();!(s=a.n()).done;){var c=s.value;c.style.color="#ffe53c",c.style.backgroundColor="#331b4d",c.style.boxShadow="0 4px #861c9e"}}catch(i){a.e(i)}finally{a.f()}"Math Error :("!==O.textContent?(C.style.backgroundColor="#1e0836",O.style.color="#ffe53c"):(C.style.backgroundColor="#ff18001a",O.style.color="#df0101"),y[0].removeAttribute("value"),y[1].removeAttribute("value"),e.setAttribute("value","three"),T.setAttribute("content","#17062a"),v.style.backgroundColor="#1e0836",e.style.backgroundColor="#00dad2",E.style.backgroundColor="#17062a",x.style.backgroundColor="#17062a",P.style.color="#ffe53c",A.style.color="#ffe53c",j.style.backgroundColor="#1e0836",D.style.backgroundColor="#56077c",D.style.color="#fff",D.style.boxShadow="0 4px #bf16f5",k.style.backgroundColor="#56077c",k.style.color="#fff",k.style.boxShadow="0 4px #bf16f5",M.style.backgroundColor="#00decf",M.style.boxShadow="0 4px #76f4ef",M.style.color="#00383a"}),200)}}},[[34,1,2]]]);
//# sourceMappingURL=main.944bcedf.chunk.js.map