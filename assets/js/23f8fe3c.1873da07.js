"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[757],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:3,sidebar_label:"\ud83e\udd16\ud83d\udd04 State Machine"},i="\ud83e\udd16\ud83d\udd04 State Machine",c={unversionedId:"tutorial/StateMachine",id:"tutorial/StateMachine",title:"\ud83e\udd16\ud83d\udd04 State Machine",description:"Now that we have 1 state we can already make our state machine! Don't worry, we will be covering transitions and making our red state next! Now in a server or local script create a state machine with the following code...",source:"@site/docs/tutorial/StateMachine.md",sourceDirName:"tutorial",slug:"/tutorial/StateMachine",permalink:"/RobloxStateMachine/docs/tutorial/StateMachine",draft:!1,editUrl:"https://github.com/prooheckcp/RobloxStateMachine/edit/master/docs/tutorial/StateMachine.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\ud83e\udd16\ud83d\udd04 State Machine"},sidebar:"defaultSidebar",previous:{title:"\ud83d\udd35  States",permalink:"/RobloxStateMachine/docs/tutorial/States"},next:{title:"\ud83d\udcc2 Sending Data",permalink:"/RobloxStateMachine/docs/tutorial/ChangeData"}},l={},s=[],u={toc:s},p="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-state-machine"},"\ud83e\udd16\ud83d\udd04 State Machine"),(0,n.kt)("p",null,"Now that we have 1 state we can already make our state machine! Don't worry, we will be covering transitions and making our red state next! Now in a server or local script create a state machine with the following code..."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local ReplicatedStorage = game:GetService("ReplicatedStorage")\n\nlocal RobloxStateMachine = require(ReplicatedStorage.RobloxStateMachine)\n\nlocal states = ReplicatedStorage.States -- Reference to our states folder\n\nlocal stateMachine = RobloxStateMachine.new("Blue", -- This is the initial state of our machine\n    {\n        require(states.Blue) -- This is an array of our states\n    },\n    {\n        part = workspace.myPart -- This is the data that our transitions and states will have access to\n    }\n)\n')),(0,n.kt)("p",null,'Running the game will now turn out part blue as it will be entering the blue state! If you see we are giving the StateMachine the information about what "part" is. It allows us to access the workspace part from our states and transitions!\n',(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/670023265455964198/1105806395330269287/Screenshot_2023-05-10_at_11.39.31.png",alt:null})))}h.isMDXComponent=!0}}]);