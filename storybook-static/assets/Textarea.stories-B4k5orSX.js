import{j as p}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const e="uds-textarea",o={compact:"compact",default:"default"},i={default:"default",focused:"focused",error:"error",disabled:"disabled"};function r({value:c,onChange:m,placeholder:f,size:s="default",state:x="default",resize:h=!0,disabled:n=!1,id:g,className:T="",...b}){const t=n?"disabled":x,v=[e,o[s]&&`${e}--${o[s]}`,i[t]&&`${e}--${i[t]}`,!h&&`${e}--no-resize`,T].filter(Boolean).join(" ");return p.jsx("textarea",{id:g,className:v,value:c,onChange:m,placeholder:f,disabled:n||t==="disabled",...b})}r.__docgenInfo={description:`Textarea component for multi-line text input

@param {string} value - The value of the textarea
@param {function} onChange - Callback function when value changes
@param {string} placeholder - Placeholder text
@param {string} size - Size variant: 'compact' (80px min-height) or 'default' (120px min-height)
@param {string} state - State variant: 'default', 'focused', 'error', or 'disabled'
@param {boolean} resize - Whether the textarea can be resized (default: true)
@param {boolean} disabled - Whether the textarea is disabled (overrides state)
@param {string} id - Unique identifier for the textarea
@param {string} className - Additional CSS classes
@param {object} props - Additional props to pass to the textarea element`,methods:[],displayName:"Textarea",props:{value:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: unknown[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},name:"args",rest:!0}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"unknown"},description:""},size:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"default"',computed:!1}},state:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"default"',computed:!1}},resize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"unknown"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["TextareaHTMLAttributes"]};const w={title:"UI/Textarea",component:r},a={render:()=>p.jsx(r,{})};var l,d,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Textarea />
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,w as default};
