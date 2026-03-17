import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as m}from"./index-DH0nvKif.js";import"./index-yBjzXJbu.js";import"./index-Dx_1l3Sb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function s({to:o,title:i,description:p,icon:c,className:d=""}){return e.jsxs(m,{className:`card ${d}`.trim(),to:o,children:[e.jsx("div",{className:"card__icon",children:c}),e.jsxs("div",{className:"card__content",children:[e.jsx("h2",{className:"card__title",children:i}),e.jsx("p",{className:"card__description",children:p})]})]})}s.__docgenInfo={description:`Card component for navigation items on the overview page

@param {Object} props
@param {string} props.to - The route path to navigate to
@param {string} props.title - The card title
@param {string} props.description - The card description
@param {React.ReactNode} props.icon - The SVG icon to display
@param {string} [props.className] - Additional CSS classes`,methods:[],displayName:"Card",props:{to:{required:!1,tsType:{name:"unknown"},description:""},title:{required:!1,tsType:{name:"unknown"},description:""},description:{required:!1,tsType:{name:"unknown"},description:""},icon:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["HTMLAttributes"]};const x={title:"UI/Card",component:s},r={render:()=>e.jsx(s,{})};var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Card />
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,x as default};
