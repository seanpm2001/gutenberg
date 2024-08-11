"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[1514],{"./packages/compose/build-module/hooks/use-merge-refs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useMergeRefs});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttached=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChange=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefs.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChange.current&&!0===isAttached.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefs.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefs.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChange.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChange.current=!0,isAttached.current=null!==value;const refsToAssign=value?currentRefs.current:previousRefs.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./packages/components/src/button-group/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedButtonGroup(props,ref){const{className,...restProps}=props,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("components-button-group",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref,role:"group",className:classes,...restProps})}UnforwardedButtonGroup.displayName="UnforwardedButtonGroup";const ButtonGroup=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedButtonGroup),__WEBPACK_DEFAULT_EXPORT__=ButtonGroup;try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:'ButtonGroup can be used to group any related buttons together. To emphasize\nrelated buttons, a group should share a common container.\n\n```jsx\nimport { Button, ButtonGroup } from \'@wordpress/components\';\n\nconst MyButtonGroup = () => (\n  <ButtonGroup>\n    <Button variant="primary">Button 1</Button>\n    <Button variant="primary">Button 2</Button>\n  </ButtonGroup>\n);\n```',displayName:"ButtonGroup",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/button-group/index.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"packages/components/src/button-group/index.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}try{buttongroup.displayName="buttongroup",buttongroup.__docgenInfo={description:'ButtonGroup can be used to group any related buttons together. To emphasize\nrelated buttons, a group should share a common container.\n\n```jsx\nimport { Button, ButtonGroup } from \'@wordpress/components\';\n\nconst MyButtonGroup = () => (\n  <ButtonGroup>\n    <Button variant="primary">Button 1</Button>\n    <Button variant="primary">Button 2</Button>\n  </ButtonGroup>\n);\n```',displayName:"buttongroup",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/button-group/index.tsx#buttongroup"]={docgenInfo:buttongroup.__docgenInfo,name:"buttongroup",path:"packages/components/src/button-group/index.tsx#buttongroup"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/date-time/time/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>time});var startOfMinute=__webpack_require__("./node_modules/date-fns/startOfMinute.mjs"),format=__webpack_require__("./node_modules/date-fns/format.mjs"),set=__webpack_require__("./node_modules/date-fns/set.mjs"),setMonth=__webpack_require__("./node_modules/date-fns/setMonth.mjs"),react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),base_control=__webpack_require__("./packages/components/src/base-control/index.tsx"),component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),select_control=__webpack_require__("./packages/components/src/select-control/index.tsx"),date_build_module=__webpack_require__("./packages/date/build-module/index.js"),tooltip=__webpack_require__("./packages/components/src/tooltip/index.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),space=__webpack_require__("./packages/components/src/utils/space.ts"),input_control_styles=__webpack_require__("./packages/components/src/input-control/styles/input-control-styles.tsx"),number_control=__webpack_require__("./packages/components/src/number-control/index.tsx");const Wrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"evcr2319"})("box-sizing:border-box;font-size:",config_values.Z.fontSize,";"),Fieldset=(0,emotion_styled_base_browser_esm.Z)("fieldset",{target:"evcr2318"})("border:0;margin:0 0 ",(0,space.D)(4)," 0;padding:0;&:last-child{margin-bottom:0;}"),TimeWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"evcr2317"})({name:"pd0mhc",styles:"direction:ltr;display:flex"}),baseInput=(0,emotion_react_browser_esm.iv)("&&& ",input_control_styles.II,"{padding-left:",(0,space.D)(2),";padding-right:",(0,space.D)(2),";text-align:center;}",""),HoursInput=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"evcr2316"})(baseInput," width:",(0,space.D)(9),";&&& ",input_control_styles.II,"{padding-right:0;}&&& ",input_control_styles.Kg,"{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;}"),TimeSeparator=(0,emotion_styled_base_browser_esm.Z)("span",{target:"evcr2315"})("border-top:",config_values.Z.borderWidth," solid ",colors_values.D.gray[700],";border-bottom:",config_values.Z.borderWidth," solid ",colors_values.D.gray[700],";font-size:",config_values.Z.fontSize,";line-height:calc(\n\t\t",config_values.Z.controlHeight," - ",config_values.Z.borderWidth," * 2\n\t);display:inline-block;"),MinutesInput=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"evcr2314"})(baseInput," width:",(0,space.D)(9),";&&& ",input_control_styles.II,"{padding-left:0;}&&& ",input_control_styles.Kg,"{border-left:0;border-top-left-radius:0;border-bottom-left-radius:0;}"),MonthSelectWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"evcr2313"})({name:"1ff36h2",styles:"flex-grow:1"}),DayInput=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"evcr2312"})(baseInput," width:",(0,space.D)(9),";"),YearInput=(0,emotion_styled_base_browser_esm.Z)(number_control.Z,{target:"evcr2311"})(baseInput," width:",(0,space.D)(14),";"),TimeZone=(0,emotion_styled_base_browser_esm.Z)("div",{target:"evcr2310"})({name:"ebu3jh",styles:"text-decoration:underline dotted"});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const time_timezone=()=>{const{timezone}=(0,date_build_module.Gw)(),userTimezoneOffset=(new Date).getTimezoneOffset()/60*-1;if(Number(timezone.offset)===userTimezoneOffset)return null;const offsetSymbol=Number(timezone.offset)>=0?"+":"",zoneAbbr=""!==timezone.abbr&&isNaN(Number(timezone.abbr))?timezone.abbr:`UTC${offsetSymbol}${timezone.offsetFormatted}`,prettyTimezoneString=timezone.string.replace("_"," "),timezoneDetail="UTC"===timezone.string?(0,build_module.__)("Coordinated Universal Time"):`(${zoneAbbr}) ${prettyTimezoneString}`;return 0===prettyTimezoneString.trim().length?(0,jsx_runtime.jsx)(TimeZone,{className:"components-datetime__timezone",children:zoneAbbr}):(0,jsx_runtime.jsx)(tooltip.ZP,{placement:"top",text:timezoneDetail,children:(0,jsx_runtime.jsx)(TimeZone,{className:"components-datetime__timezone",children:zoneAbbr})})};try{timezone.displayName="timezone",timezone.__docgenInfo={description:"Displays timezone information when user timezone is different from site\ntimezone.",displayName:"timezone",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/time/timezone.tsx#timezone"]={docgenInfo:timezone.__docgenInfo,name:"timezone",path:"packages/components/src/date-time/time/timezone.tsx#timezone"})}catch(__react_docgen_typescript_loader_error){}var h_stack_component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),spacer_component=__webpack_require__("./packages/components/src/spacer/component.tsx"),utils=__webpack_require__("./packages/components/src/date-time/utils.ts"),constants=__webpack_require__("./packages/components/src/date-time/constants.ts"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),button_group=__webpack_require__("./packages/components/src/button-group/index.tsx"),use_controlled_value=__webpack_require__("./packages/components/src/utils/hooks/use-controlled-value.ts");function time_input_TimeInput({value:valueProp,defaultValue,is12Hour,label,minutesProps,onChange}){const[value={hours:(new Date).getHours(),minutes:(new Date).getMinutes()},setValue]=(0,use_controlled_value.O)({value:valueProp,onChange,defaultValue}),dayPeriod=function parseDayPeriod(_hours){return _hours<12?"AM":"PM"}(value.hours),hours12Format=(0,utils.FG)(value.hours),buildNumberControlChangeCallback=method=>(_value,{event})=>{if(!(0,utils.zY)(event))return;const numberValue=Number(_value);setValue({...value,[method]:"hours"===method&&is12Hour?(0,utils.x3)(numberValue,"PM"===dayPeriod):numberValue})},buildAmPmChangeCallback=_value=>()=>{dayPeriod!==_value&&setValue({...value,hours:(0,utils.x3)(hours12Format,"PM"===_value)})};const Wrapper=label?Fieldset:react.Fragment;return(0,jsx_runtime.jsxs)(Wrapper,{children:[label&&(0,jsx_runtime.jsx)(base_control.ZP.VisualLabel,{as:"legend",children:label}),(0,jsx_runtime.jsxs)(h_stack_component.Z,{alignment:"left",expanded:!1,children:[(0,jsx_runtime.jsxs)(TimeWrapper,{className:"components-datetime__time-field components-datetime__time-field-time",children:[(0,jsx_runtime.jsx)(HoursInput,{className:"components-datetime__time-field-hours-input",label:(0,build_module.__)("Hours"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:String(is12Hour?hours12Format:value.hours).padStart(2,"0"),step:1,min:is12Hour?1:0,max:is12Hour?12:23,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:buildNumberControlChangeCallback("hours"),__unstableStateReducer:(0,utils.T8)(2)}),(0,jsx_runtime.jsx)(TimeSeparator,{className:"components-datetime__time-separator","aria-hidden":"true",children:":"}),(0,jsx_runtime.jsx)(MinutesInput,{className:(0,clsx.Z)("components-datetime__time-field-minutes-input",minutesProps?.className),label:(0,build_module.__)("Minutes"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:String(value.minutes).padStart(2,"0"),step:1,min:0,max:59,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:(...args)=>{buildNumberControlChangeCallback("minutes")(...args),minutesProps?.onChange?.(...args)},__unstableStateReducer:(0,utils.T8)(2),...minutesProps})]}),is12Hour&&(0,jsx_runtime.jsxs)(button_group.Z,{className:"components-datetime__time-field components-datetime__time-field-am-pm",children:[(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-datetime__time-am-button",variant:"AM"===dayPeriod?"primary":"secondary",__next40pxDefaultSize:!0,onClick:buildAmPmChangeCallback("AM"),children:(0,build_module.__)("AM")}),(0,jsx_runtime.jsx)(src_button.ZP,{className:"components-datetime__time-pm-button",variant:"PM"===dayPeriod?"primary":"secondary",__next40pxDefaultSize:!0,onClick:buildAmPmChangeCallback("PM"),children:(0,build_module.__)("PM")})]})]})]})}time_input_TimeInput.displayName="TimeInput";try{time_input_TimeInput.displayName="TimeInput",time_input_TimeInput.__docgenInfo={description:"",displayName:"TimeInput",props:{is12Hour:{defaultValue:null,description:"Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed",name:"is12Hour",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The time input object with hours and minutes values.\n\n- hours: number (24-hour format)\n- minutes: number",name:"value",required:!1,type:{name:"TimeInputValue"}},defaultValue:{defaultValue:null,description:"An optional default value for the control when used in uncontrolled mode.\nIf left `undefined`, the current time will be used.",name:"defaultValue",required:!1,type:{name:"TimeInputValue"}},minutesProps:{defaultValue:null,description:"The props to pass down to the minutes input.",name:"minutesProps",required:!1,type:{name:'Omit<InputControlProps, "type" | "step" | "max" | "min" | "required" | "value" | "isDragEnabled"> & { hideHTMLArrows?: boolean; spinControls?: "none" | "custom" | "native"; ... 9 more ...; value?: string | number; } & Omit<...> & RefAttributes<...> & { ...; }'}},label:{defaultValue:null,description:"The label for the time input.",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The function is called when a new time has been selected.\nPassing hours and minutes as an object properties.",name:"onChange",required:!1,type:{name:"(time: TimeInputValue) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/time/time-input/index.tsx#TimeInput"]={docgenInfo:time_input_TimeInput.__docgenInfo,name:"TimeInput",path:"packages/components/src/date-time/time/time-input/index.tsx#TimeInput"})}catch(__react_docgen_typescript_loader_error){}const VALID_DATE_ORDERS=["dmy","mdy","ymd"];function TimePicker({is12Hour,currentTime,onChange,dateOrder:dateOrderProp,hideLabelFromVision=!1}){const[date,setDate]=(0,react.useState)((()=>currentTime?(0,startOfMinute.F)((0,utils.g7)(currentTime)):new Date));(0,react.useEffect)((()=>{setDate(currentTime?(0,startOfMinute.F)((0,utils.g7)(currentTime)):new Date)}),[currentTime]);const monthOptions=[{value:"01",label:(0,build_module.__)("January")},{value:"02",label:(0,build_module.__)("February")},{value:"03",label:(0,build_module.__)("March")},{value:"04",label:(0,build_module.__)("April")},{value:"05",label:(0,build_module.__)("May")},{value:"06",label:(0,build_module.__)("June")},{value:"07",label:(0,build_module.__)("July")},{value:"08",label:(0,build_module.__)("August")},{value:"09",label:(0,build_module.__)("September")},{value:"10",label:(0,build_module.__)("October")},{value:"11",label:(0,build_module.__)("November")},{value:"12",label:(0,build_module.__)("December")}],{day,month,year,minutes,hours}=(0,react.useMemo)((()=>({day:(0,format.WU)(date,"dd"),month:(0,format.WU)(date,"MM"),year:(0,format.WU)(date,"yyyy"),minutes:(0,format.WU)(date,"mm"),hours:(0,format.WU)(date,"HH"),am:(0,format.WU)(date,"a")})),[date]),buildNumberControlChangeCallback=method=>(value,{event})=>{if(!(0,utils.zY)(event))return;const numberValue=Number(value),newDate=(0,set.t)(date,{[method]:numberValue});setDate(newDate),onChange?.((0,format.WU)(newDate,constants.u))},dayField=(0,jsx_runtime.jsx)(DayInput,{className:"components-datetime__time-field components-datetime__time-field-day",label:(0,build_module.__)("Day"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:day,step:1,min:1,max:31,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:buildNumberControlChangeCallback("date")},"day"),monthField=(0,jsx_runtime.jsx)(MonthSelectWrapper,{children:(0,jsx_runtime.jsx)(select_control.Z,{className:"components-datetime__time-field components-datetime__time-field-month",label:(0,build_module.__)("Month"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0,value:month,options:monthOptions,onChange:value=>{const newDate=(0,setMonth.q)(date,Number(value)-1);setDate(newDate),onChange?.((0,format.WU)(newDate,constants.u))}})},"month"),yearField=(0,jsx_runtime.jsx)(YearInput,{className:"components-datetime__time-field components-datetime__time-field-year",label:(0,build_module.__)("Year"),hideLabelFromVision:!0,__next40pxDefaultSize:!0,value:year,step:1,min:1,max:9999,required:!0,spinControls:"none",isPressEnterToChange:!0,isDragEnabled:!1,isShiftStepEnabled:!1,onChange:buildNumberControlChangeCallback("year"),__unstableStateReducer:(0,utils.T8)(4)},"year"),defaultDateOrder=is12Hour?"mdy":"dmy",fields=(dateOrderProp&&VALID_DATE_ORDERS.includes(dateOrderProp)?dateOrderProp:defaultDateOrder).split("").map((field=>{switch(field){case"d":return dayField;case"m":return monthField;case"y":return yearField;default:return null}}));return(0,jsx_runtime.jsxs)(Wrapper,{className:"components-datetime__time",children:[(0,jsx_runtime.jsxs)(Fieldset,{children:[hideLabelFromVision?(0,jsx_runtime.jsx)(component.Z,{as:"legend",children:(0,build_module.__)("Time")}):(0,jsx_runtime.jsx)(base_control.ZP.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,build_module.__)("Time")}),(0,jsx_runtime.jsxs)(h_stack_component.Z,{className:"components-datetime__time-wrapper",children:[(0,jsx_runtime.jsx)(time_input_TimeInput,{value:{hours:Number(hours),minutes:Number(minutes)},is12Hour,onChange:({hours:newHours,minutes:newMinutes})=>{const newDate=(0,set.t)(date,{hours:newHours,minutes:newMinutes});setDate(newDate),onChange?.((0,format.WU)(newDate,constants.u))}}),(0,jsx_runtime.jsx)(spacer_component.Z,{}),(0,jsx_runtime.jsx)(time_timezone,{})]})]}),(0,jsx_runtime.jsxs)(Fieldset,{children:[hideLabelFromVision?(0,jsx_runtime.jsx)(component.Z,{as:"legend",children:(0,build_module.__)("Date")}):(0,jsx_runtime.jsx)(base_control.ZP.VisualLabel,{as:"legend",className:"components-datetime__time-legend",children:(0,build_module.__)("Date")}),(0,jsx_runtime.jsx)(h_stack_component.Z,{className:"components-datetime__time-wrapper",children:fields})]})]})}TimePicker.displayName="TimePicker",TimePicker.TimeInput=time_input_TimeInput,Object.assign(TimePicker.TimeInput,{displayName:"TimePicker.TimeInput"});const time=TimePicker;try{TimePicker.displayName="TimePicker",TimePicker.__docgenInfo={description:"TimePicker is a React component that renders a clock for time selection.\n\n```jsx\nimport { TimePicker } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyTimePicker = () => {\n  const [ time, setTime ] = useState( new Date() );\n\n  return (\n    <TimePicker\n      currentTime={ date }\n      onChange={ ( newTime ) => setTime( newTime ) }\n      is12Hour\n    />\n  );\n};\n```",displayName:"TimePicker",props:{currentTime:{defaultValue:null,description:"The initial current time the time picker should render.",name:"currentTime",required:!1,type:{name:"string | number | Date"}},is12Hour:{defaultValue:null,description:"Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed and the time format is assumed to be `MM-DD-YYYY` (as opposed\nto the default format `DD-MM-YYYY`).",name:"is12Hour",required:!1,type:{name:"boolean"}},dateOrder:{defaultValue:{value:"'dmy'"},description:"The order of day, month, and year. This prop overrides the time format\ndetermined by `is12Hour` prop.",name:"dateOrder",required:!1,type:{name:"enum",value:[{value:'"dmy"'},{value:'"mdy"'},{value:'"ymd"'}]}},onChange:{defaultValue:null,description:"The function called when a new time has been selected. It is passed the\ntime as an argument.",name:"onChange",required:!1,type:{name:"(time: string) => void"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/time/index.tsx#TimePicker"]={docgenInfo:TimePicker.__docgenInfo,name:"TimePicker",path:"packages/components/src/date-time/time/index.tsx#TimePicker"})}catch(__react_docgen_typescript_loader_error){}try{TimeInput.displayName="TimePicker.TimeInput",TimeInput.__docgenInfo={description:"",displayName:"TimePicker.TimeInput",props:{is12Hour:{defaultValue:null,description:"Whether we use a 12-hour clock. With a 12-hour clock, an AM/PM widget is\ndisplayed",name:"is12Hour",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The time input object with hours and minutes values.\n\n- hours: number (24-hour format)\n- minutes: number",name:"value",required:!1,type:{name:"TimeInputValue"}},defaultValue:{defaultValue:null,description:"An optional default value for the control when used in uncontrolled mode.\nIf left `undefined`, the current time will be used.",name:"defaultValue",required:!1,type:{name:"TimeInputValue"}},minutesProps:{defaultValue:null,description:"The props to pass down to the minutes input.",name:"minutesProps",required:!1,type:{name:'Omit<InputControlProps, "type" | "step" | "max" | "min" | "required" | "value" | "isDragEnabled"> & { hideHTMLArrows?: boolean; spinControls?: "none" | "custom" | "native"; ... 9 more ...; value?: string | number; } & Omit<...> & RefAttributes<...> & { ...; }'}},label:{defaultValue:null,description:"The label for the time input.",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"The function is called when a new time has been selected.\nPassing hours and minutes as an object properties.",name:"onChange",required:!1,type:{name:"(time: TimeInputValue) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/date-time/time/index.tsx#TimePicker.TimeInput"]={docgenInfo:TimePicker.TimeInput.__docgenInfo,name:"TimePicker.TimeInput",path:"packages/components/src/date-time/time/index.tsx#TimePicker.TimeInput"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/select-control/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>SelectControl,Z:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/base-control/index.tsx"),_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/select-control/styles/select-control-styles.ts"),_chevron_down__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/select-control/chevron-down.tsx"),_utils_use_deprecated_props__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/utils/use-deprecated-props.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function SelectOptions({options}){return options.map((({id,label,value,...optionProps},index)=>{const key=id||`${label}-${value}-${index}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value,...optionProps,children:label},key)}))}function UnforwardedSelectControl(props,ref){const{className,disabled=!1,help,hideLabelFromVision,id:idProp,label,multiple=!1,onChange,options=[],size="default",value:valueProp,labelPosition="top",children,prefix,suffix,variant="default",__next40pxDefaultSize=!1,__nextHasNoMarginBottom=!1,...restProps}=(0,_utils_use_deprecated_props__WEBPACK_IMPORTED_MODULE_2__.s)(props),id=function useUniqueId(idProp){const instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.Z)(SelectControl);return idProp||`inspector-select-control-${instanceId}`}(idProp),helpId=help?`${id}__help`:void 0;if(!options?.length&&!children)return null;const classes=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)("components-select-control",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_4__.ZP,{help,id,__nextHasNoMarginBottom,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_5__.el,{className:classes,disabled,hideLabelFromVision,id,isBorderless:"minimal"===variant,label,size,suffix:suffix||!multiple&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chevron_down__WEBPACK_IMPORTED_MODULE_6__.Z,{}),prefix,labelPosition,__unstableInputWidth:"minimal"===variant?"auto":void 0,variant,__next40pxDefaultSize,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_5__.Ph,{...restProps,__next40pxDefaultSize,"aria-describedby":helpId,className:"components-select-control__input",disabled,id,multiple,onChange:event=>{if(props.multiple){const newValues=Array.from(event.target.options).filter((({selected})=>selected)).map((({value})=>value));props.onChange?.(newValues,{event})}else props.onChange?.(event.target.value,{event})},ref,selectSize:size,value:valueProp,variant,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectOptions,{options})})})})}UnforwardedSelectControl.displayName="UnforwardedSelectControl";const SelectControl=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.forwardRef)(UnforwardedSelectControl),__WEBPACK_DEFAULT_EXPORT__=SelectControl;try{SelectControl.displayName="SelectControl",SelectControl.__docgenInfo={description:"`SelectControl` allows users to select from a single or multiple option menu.\nIt functions as a wrapper around the browser's native `<select>` element.\n\n```jsx\nimport { SelectControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MySelectControl = () => {\n  const [ size, setSize ] = useState( '50%' );\n\n  return (\n    <SelectControl\n      __nextHasNoMarginBottom\n      label=\"Size\"\n      value={ size }\n      options={ [\n        { label: 'Big', value: '100%' },\n        { label: 'Medium', value: '50%' },\n        { label: 'Small', value: '25%' },\n      ] }\n      onChange={ setSize }\n    />\n  );\n};\n```",displayName:"SelectControl",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},prefix:{defaultValue:null,description:"Renders an element on the left side of the input.\n\nBy default, the prefix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlPrefixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlPrefixWrapper as InputControlPrefixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  prefix={<InputControlPrefixWrapper>@</InputControlPrefixWrapper>}\n/>",name:"prefix",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the `input` will be disabled.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'default'"},description:"Adjusts the size of the input.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'},{value:'"compact"'},{value:'"__unstable-large"'}]}},suffix:{defaultValue:null,description:"Renders an element on the right side of the input.\n\nBy default, the suffix is aligned with the edge of the input border, with no padding.\nIf you want to apply standard padding in accordance with the size variant, wrap the element in\nthe provided `<InputControlSuffixWrapper>` component.\n@example import {\n  __experimentalInputControl as InputControl,\n  __experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,\n} from '@wordpress/components';\n\n<InputControl\n  suffix={<InputControlSuffixWrapper>%</InputControlSuffixWrapper>}\n/>",name:"suffix",required:!1,type:{name:"ReactNode"}},__next36pxDefaultSize:{defaultValue:{value:"false"},description:"Deprecated. Use `__next40pxDefaultSize` instead.\n@deprecated",name:"__next36pxDefaultSize",required:!1,type:{name:"boolean"}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"'top'"},description:"The position of the label.",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"edge"'},{value:'"side"'}]}},help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"An array of option property objects to be rendered,\neach with a `label` and `value` property, as well as any other\n`<option>` attributes.",name:"options",required:!1,type:{name:'readonly ({ label: string; value: V; } & Omit<OptionHTMLAttributes<HTMLOptionElement>, "label" | "value">)[]'}},children:{defaultValue:null,description:"As an alternative to the `options` prop, `optgroup`s and `options` can be\npassed in as `children` for more customizability.",name:"children",required:!1,type:{name:"ReactNode"}},variant:{defaultValue:{value:"'default'"},description:"The style variant of the control.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"minimal"'}]}},multiple:{defaultValue:{value:"false\nfalse"},description:"If this property is added, multiple values can be selected. The `value` passed should be an array.\n\nIn most cases, it is preferable to use the `FormTokenField` or `CheckboxControl` components instead.",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"The value of the selected option.\n\nIf `multiple` is true, the `value` should be an array with the values of the selected options.",name:"value",required:!1,type:{name:"string | NoInfer<V>[]"}},onChange:{defaultValue:null,description:"A function that receives the value of the new option that is being selected as input.\n\nIf `multiple` is `true`, the value received is an array of the selected value.\nOtherwise, the value received is a single value with the new selected value.",name:"onChange",required:!1,type:{name:"((value: NoInfer<V>, extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void) | ((value: NoInfer<V>[], extra?: { event?: ChangeEvent<HTMLSelectElement>; }) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSelectElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/select-control/index.tsx#SelectControl"]={docgenInfo:SelectControl.__docgenInfo,name:"SelectControl",path:"packages/components/src/select-control/index.tsx#SelectControl"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/hooks/use-controlled-value.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useControlledValue});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useControlledValue({defaultValue,onChange,value:valueProp}){const hasValue=void 0!==valueProp,initialValue=hasValue?valueProp:defaultValue,[state,setState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);let setValue;return setValue=hasValue&&"function"==typeof onChange?onChange:hasValue||"function"!=typeof onChange?setState:nextValue=>{onChange(nextValue),setState(nextValue)},[hasValue?valueProp:state,setValue]}},"./node_modules/date-fns/set.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>set});var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/constructFrom.mjs"),_setMonth_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/setMonth.mjs"),_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/toDate.mjs");function set(date,values){let _date=(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(date);return isNaN(+_date)?(0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.L)(date,NaN):(null!=values.year&&_date.setFullYear(values.year),null!=values.month&&(_date=(0,_setMonth_mjs__WEBPACK_IMPORTED_MODULE_2__.q)(_date,values.month)),null!=values.date&&_date.setDate(values.date),null!=values.hours&&_date.setHours(values.hours),null!=values.minutes&&_date.setMinutes(values.minutes),null!=values.seconds&&_date.setSeconds(values.seconds),null!=values.milliseconds&&_date.setMilliseconds(values.milliseconds),_date)}},"./node_modules/date-fns/setMonth.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>setMonth});var constructFrom=__webpack_require__("./node_modules/date-fns/constructFrom.mjs"),toDate=__webpack_require__("./node_modules/date-fns/toDate.mjs");function getDaysInMonth(date){const _date=(0,toDate.Q)(date),year=_date.getFullYear(),monthIndex=_date.getMonth(),lastDayOfMonth=(0,constructFrom.L)(date,0);return lastDayOfMonth.setFullYear(year,monthIndex+1,0),lastDayOfMonth.setHours(0,0,0,0),lastDayOfMonth.getDate()}function setMonth(date,month){const _date=(0,toDate.Q)(date),year=_date.getFullYear(),day=_date.getDate(),dateWithDesiredMonth=(0,constructFrom.L)(date,0);dateWithDesiredMonth.setFullYear(year,month,15),dateWithDesiredMonth.setHours(0,0,0,0);const daysInMonth=getDaysInMonth(dateWithDesiredMonth);return _date.setMonth(month,Math.min(day,daysInMonth)),_date}},"./node_modules/date-fns/startOfMinute.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>startOfMinute});var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/toDate.mjs");function startOfMinute(date){const _date=(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.Q)(date);return _date.setSeconds(0,0),_date}}}]);