"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[2454],{"./node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>LayoutGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");const DeprecatedLayoutGroupContext=(0,react.createContext)(null);var use_force_update=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-force-update.mjs");const notify=node=>!node.isLayoutDirty&&node.willUpdate(!1);function nodeGroup(){const nodes=new Set,subscriptions=new WeakMap,dirtyAll=()=>nodes.forEach(notify);return{add:node=>{nodes.add(node),subscriptions.set(node,node.addEventListener("willUpdate",dirtyAll))},remove:node=>{nodes.delete(node);const unsubscribe=subscriptions.get(node);unsubscribe&&(unsubscribe(),subscriptions.delete(node)),dirtyAll()},dirty:dirtyAll}}const shouldInheritGroup=inherit=>!0===inherit,LayoutGroup=({children,id,inherit=!0})=>{const layoutGroupContext=(0,react.useContext)(LayoutGroupContext.p),deprecatedLayoutGroupContext=(0,react.useContext)(DeprecatedLayoutGroupContext),[forceRender,key]=(0,use_force_update.N)(),context=(0,react.useRef)(null),upstreamId=layoutGroupContext.id||deprecatedLayoutGroupContext;null===context.current&&((inherit=>shouldInheritGroup(!0===inherit)||"id"===inherit)(inherit)&&upstreamId&&(id=id?upstreamId+"-"+id:upstreamId),context.current={id,group:shouldInheritGroup(inherit)&&layoutGroupContext.group||nodeGroup()});const memoizedContext=(0,react.useMemo)((()=>({...context.current,forceRender})),[key]);return(0,jsx_runtime.jsx)(LayoutGroupContext.p.Provider,{value:memoizedContext,children})}},"./node_modules/framer-motion/dist/es/utils/use-force-update.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useForceUpdate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs"),_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/frameloop/frame.mjs");function useForceUpdate(){const isMounted=(0,_use_is_mounted_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(),[forcedRenderCount,setForcedRenderCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),forceRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.Wi.postRender(forceRender)),[forceRender]),forcedRenderCount]}},"./node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useIsMounted});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs");function useIsMounted(){const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_1__.L)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),isMounted}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/6MDCAUOE.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Radio,x:()=>useRadio});var _S6GWHPQZ_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/S6GWHPQZ.js"),_UN4MKOLN_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/UN4MKOLN.js"),_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/YIF72NQG.js"),_DTNGDFNU_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DTNGDFNU.js"),_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OPTPHWV7.js"),_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/22HHDS5F.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");var useRadio=(0,_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((function useRadio2(_a){var _b=_a,{store,name,value,checked}=_b,props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store","name","value","checked"]);const context=(0,_S6GWHPQZ_js__WEBPACK_IMPORTED_MODULE_3__.Wh)();store=store||context;const id=(0,_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_4__.Me)(props.id),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),isChecked=(0,_DTNGDFNU_js__WEBPACK_IMPORTED_MODULE_5__.Kw)(store,(state=>null!=checked?checked:function getIsChecked(value,storeValue){if(void 0!==storeValue)return null!=value&&null!=storeValue?storeValue===value:!!storeValue}(value,null==state?void 0:state.value)));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!id)return;if(!isChecked)return;(null==store?void 0:store.getState().activeId)===id||null==store||store.setActiveId(id)}),[store,isChecked,id]);const onChangeProp=props.onChange,nativeRadio=function isNativeRadio(tagName,type){return"input"===tagName&&(!type||"radio"===type)}((0,_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_4__.O)(ref,"input"),props.type),disabled=(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.EE)(props),[propertyUpdated,schedulePropertyUpdate]=(0,_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_4__.NW)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;element&&(nativeRadio||(void 0!==isChecked&&(element.checked=isChecked),void 0!==name&&(element.name=name),void 0!==value&&(element.value=`${value}`)))}),[propertyUpdated,nativeRadio,isChecked,name,value]);const onChange=(0,_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(disabled)return event.preventDefault(),void event.stopPropagation();nativeRadio||(event.currentTarget.checked=!0,schedulePropertyUpdate()),null==onChangeProp||onChangeProp(event),event.defaultPrevented||null==store||store.setValue(value)})),onClickProp=props.onClick,onClick=(0,_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{null==onClickProp||onClickProp(event),event.defaultPrevented||nativeRadio||onChange(event)})),onFocusProp=props.onFocus,onFocus=(0,_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_4__.zX)((event=>{if(null==onFocusProp||onFocusProp(event),event.defaultPrevented)return;if(!nativeRadio)return;if(!store)return;const{moves,activeId}=store.getState();moves&&(id&&activeId!==id||onChange(event))}));return props=(0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({id,role:nativeRadio?void 0:"radio",type:nativeRadio?"radio":void 0,"aria-checked":isChecked},props),{ref:(0,_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_4__.qq)(ref,props.ref),onChange,onClick,onFocus}),props=(0,_UN4MKOLN_js__WEBPACK_IMPORTED_MODULE_7__.E)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store,clickOnEnter:!nativeRadio},props)),(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_6__.Nq)((0,_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({name:nativeRadio?name:void 0,value:nativeRadio?value:void 0,checked:isChecked},props))})),Radio=(0,_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.X$)((0,_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.Gp)((function Radio2(props){const htmlProps=useRadio(props);return(0,_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.az)("input",htmlProps)})))},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/CLDRDBYI.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useRadioStore});var WH6Q5C3D=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/WH6Q5C3D.js"),DTNGDFNU=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/DTNGDFNU.js"),VH2P7HEP=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/VH2P7HEP.js"),KLPDXTDE=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/KLPDXTDE.js"),_22HHDS5F=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/22HHDS5F.js"),_4R3V3JGP=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/4R3V3JGP.js");function createRadioStore(_a={}){var _a2,props=(0,_4R3V3JGP.S0)(_a,[]);const syncState=null==(_a2=props.store)?void 0:_a2.getState(),composite=(0,VH2P7HEP.t)((0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)({},props),{focusLoop:(0,_22HHDS5F.LS)(props.focusLoop,null==syncState?void 0:syncState.focusLoop,!0)})),initialState=(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)({},composite.getState()),{value:(0,_22HHDS5F.LS)(props.value,null==syncState?void 0:syncState.value,props.defaultValue,null)}),radio=(0,KLPDXTDE.MT)(initialState,composite,props.store);return(0,_4R3V3JGP.EZ)((0,_4R3V3JGP.ih)((0,_4R3V3JGP.ih)({},composite),radio),{setValue:value=>radio.setState("value",value)})}function useRadioStore(props={}){const[store,update]=(0,DTNGDFNU.oR)(createRadioStore,props);return function useRadioStoreProps(store,update,props){return store=(0,WH6Q5C3D.b)(store,update,props),(0,DTNGDFNU.XS)(store,props,"value","setValue"),store}(store,update,props)}},"./packages/components/node_modules/@ariakit/react-core/esm/__chunks/S6GWHPQZ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hz:()=>useRadioProviderContext,Wh:()=>useRadioContext,o:()=>RadioScopedContextProvider});var _53KINMNA_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/53KINMNA.js"),ctx=(0,__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/YIF72NQG.js").re)([_53KINMNA_js__WEBPACK_IMPORTED_MODULE_1__.Lq],[_53KINMNA_js__WEBPACK_IMPORTED_MODULE_1__.al]),useRadioContext=ctx.useContext,useRadioProviderContext=(ctx.useScopedContext,ctx.useProviderContext),RadioScopedContextProvider=(ctx.ContextProvider,ctx.ScopedContextProvider)},"./packages/components/node_modules/@ariakit/react-core/esm/radio/radio-group.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>RadioGroup});var _chunks_S6GWHPQZ_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/S6GWHPQZ.js"),_chunks_QMBMAMY2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/QMBMAMY2.js"),_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/YIF72NQG.js"),_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/OPTPHWV7.js"),_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/@ariakit/react-core/esm/__chunks/4R3V3JGP.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/node_modules/@ariakit/core/esm/__chunks/22HHDS5F.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),useRadioGroup=(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.Bi)((function useRadioGroup2(_a){var _b=_a,{store}=_b,props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["store"]);const context=(0,_chunks_S6GWHPQZ_js__WEBPACK_IMPORTED_MODULE_3__.Hz)();return store=store||context,(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_4__.kG)(store,!1),props=(0,_chunks_OPTPHWV7_js__WEBPACK_IMPORTED_MODULE_5__.OJ)(props,(element=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunks_S6GWHPQZ_js__WEBPACK_IMPORTED_MODULE_3__.o,{value:store,children:element})),[store]),props=(0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({role:"radiogroup"},props),props=(0,_chunks_QMBMAMY2_js__WEBPACK_IMPORTED_MODULE_6__.Q)((0,_chunks_4R3V3JGP_js__WEBPACK_IMPORTED_MODULE_2__.ih)({store},props))})),RadioGroup=(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.Gp)((function RadioGroup2(props){const htmlProps=useRadioGroup(props);return(0,_chunks_YIF72NQG_js__WEBPACK_IMPORTED_MODULE_1__.az)("div",htmlProps)}))},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YF:()=>useFloating,x7:()=>arrow});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element,padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}}}]);