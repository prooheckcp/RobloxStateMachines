"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3,sidebar_label:"\ud83d\uded1 Stop State Transition"},i="\ud83d\uded1 Stop State Transition",s={unversionedId:"AdvancedConcepts/stopStateTransition",id:"AdvancedConcepts/stopStateTransition",title:"\ud83d\uded1 Stop State Transition",description:'There\'s specific situations where we might want to "stuck" a state machine on a specific state.',source:"@site/docs/AdvancedConcepts/stopStateTransition.md",sourceDirName:"AdvancedConcepts",slug:"/AdvancedConcepts/stopStateTransition",permalink:"/RobloxStateMachine/docs/AdvancedConcepts/stopStateTransition",draft:!1,editUrl:"https://github.com/prooheckcp/RobloxStateMachine/edit/master/docs/AdvancedConcepts/stopStateTransition.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\ud83d\uded1 Stop State Transition"},sidebar:"defaultSidebar",previous:{title:"\ud83d\ude80 Extend States/Transitions",permalink:"/RobloxStateMachine/docs/AdvancedConcepts/extendStates"},next:{title:"\ud83d\udd0d Access internals",permalink:"/RobloxStateMachine/docs/AdvancedConcepts/accesInternals"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-stop-state-transition"},"\ud83d\uded1 Stop State Transition"),(0,a.kt)("p",null,"There's specific situations where we might want to \"stuck\" a state machine on a specific state.\nFor this purpose there's a virtual method specifically for this!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'--Blue.lua\nlocal GoToRed = require(script.Parent.Parent.Transitions.GoToRed)\nlocal ChangeColorState = require(script.Parent.ChangeColorState)\n\nlocal Blue = ChangeColorState:Extend("Blue")\nBlue.Transitions = {GoToRed}\n\nfunction Blue:OnInit()\n    self.Color = Color3.fromRGB(0, 0, 255)\nend\n\nfunction Blue:CanChangeState(newState: string)\n    return newState == "Red"\nend\n\nreturn Blue\n')),(0,a.kt)("p",null,"By doing this we ensure that the state blue can only be changed to the new state ",(0,a.kt)("strong",{parentName:"p"},"IF"),' the new state is equal to "Red".'),(0,a.kt)("p",null,"We could also block the player into this state entirely by simply returning false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"function Blue:CanChangeState(newState: string)\n    return false\nend\n")),(0,a.kt)("p",null,"This can be specially useful to per e.g to stuck an NPC into the dead state since we don't want him to magically revive!"),(0,a.kt)("p",null,"In case you're wondering what would happen if didn't declare this method. :CanChangeState returns ",(0,a.kt)("strong",{parentName:"p"},"true")," by default"))}d.isMDXComponent=!0}}]);