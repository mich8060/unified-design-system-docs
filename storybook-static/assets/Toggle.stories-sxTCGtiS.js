import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as I}from"./index-Dx_1l3Sb.js";import{T as k}from"./Toggle-dmgyufw-.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const O={title:"UI/Toggle",component:k,argTypes:{checked:{control:"boolean",description:"Whether the toggle is checked"},state:{control:"select",options:["off","on","indeterminate"],description:"Toggle state (overrides checked if provided)"},size:{control:"radio",options:["large","small"],description:"Toggle size"},bordered:{control:"boolean",description:"Whether to show a border"},disabled:{control:"boolean",description:"Whether the toggle is disabled"}}},z=e=>{const[T,x]=I.useState(e.checked??!1);return t.jsx(k,{...e,checked:T,onChange:x})},r={args:{checked:!1,state:"off",size:"large",bordered:!1,disabled:!1},render:e=>t.jsx(z,{...e})},s={args:{checked:!0,state:"on",size:"large",bordered:!1,disabled:!1},render:e=>t.jsx(z,{...e})},a={args:{checked:!1,state:"indeterminate",size:"large",bordered:!1,disabled:!1}},o={args:{checked:!1,state:"off",size:"large",bordered:!1,disabled:!0}};var n,d,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: false,
    state: "off",
    size: "large",
    bordered: false,
    disabled: false
  },
  render: args => <InteractiveToggle {...args} />
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,i,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    checked: true,
    state: "on",
    size: "large",
    bordered: false,
    disabled: false
  },
  render: args => <InteractiveToggle {...args} />
}`,...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var f,p,m;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: false,
    state: "indeterminate",
    size: "large",
    bordered: false,
    disabled: false
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,h,u;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: false,
    state: "off",
    size: "large",
    bordered: false,
    disabled: true
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const W=["Default","On","Indeterminate","Disabled"];export{r as Default,o as Disabled,a as Indeterminate,s as On,W as __namedExportsOrder,O as default};
