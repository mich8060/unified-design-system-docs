import{j as b}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const l={variants:{weight:{default:"regular"},leading:{default:"regular"}}},x={regular:"ds-text--weight-regular",medium:"ds-text--weight-medium",semibold:"ds-text--weight-semibold",bold:"ds-text--weight-bold"},w={tight:"ds-text--leading-tight",regular:"ds-text--leading-regular",loose:"ds-text--leading-loose"};function d({as:u,variant:p,weight:g=l.variants.weight.default,leading:m=l.variants.leading.default,className:c="",children:y,...h}){const v=u??"p";return b.jsx(v,{className:["ds-text",`ds-text--${p}`,x[g],w[m],c].filter(Boolean).join(" "),...h,children:y})}d.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"T"},description:""},variant:{required:!0,tsType:{name:"union",raw:`| "display-128"
| "display-96"
| "display-72"
| "display-60"
| "display-48"
| "display-36"
| "heading-32"
| "heading-28"
| "heading-24"
| "body-20"
| "body-16"
| "body-14"
| "body-12"`,elements:[{name:"literal",value:'"display-128"'},{name:"literal",value:'"display-96"'},{name:"literal",value:'"display-72"'},{name:"literal",value:'"display-60"'},{name:"literal",value:'"display-48"'},{name:"literal",value:'"display-36"'},{name:"literal",value:'"heading-32"'},{name:"literal",value:'"heading-28"'},{name:"literal",value:'"heading-24"'},{name:"literal",value:'"body-20"'},{name:"literal",value:'"body-16"'},{name:"literal",value:'"body-14"'},{name:"literal",value:'"body-12"'}]},description:""},weight:{required:!1,tsType:{name:"union",raw:'"regular" | "medium" | "semibold" | "bold"',elements:[{name:"literal",value:'"regular"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"semibold"'},{name:"literal",value:'"bold"'}]},description:"",defaultValue:{value:'"regular"',computed:!1}},leading:{required:!1,tsType:{name:"union",raw:'"tight" | "regular" | "loose"',elements:[{name:"literal",value:'"tight"'},{name:"literal",value:'"regular"'},{name:"literal",value:'"loose"'}]},description:"",defaultValue:{value:'"regular"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const q={title:"UI/Text",component:d,argTypes:{as:{control:"text"},variant:{control:"select",options:["display-128","display-96","display-72","display-60","display-48","display-36","heading-32","heading-28","heading-24","body-20","body-16","body-14","body-12"]},weight:{control:"select",options:["regular","medium","semibold","bold"]},leading:{control:"select",options:["tight","regular","loose"]}}},e={args:{as:"h2",variant:"display-48",weight:"bold",leading:"regular",children:"The quick brown fox jumps over the lazy dog"}},a={args:{as:"p",variant:"body-16",weight:"regular",leading:"loose",children:"This example shows a body paragraph with loose leading. Resize the viewport to see responsive token overrides."}};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    as: "h2",
    variant: "display-48",
    weight: "bold",
    leading: "regular",
    children: "The quick brown fox jumps over the lazy dog"
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var s,n,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    as: "p",
    variant: "body-16",
    weight: "regular",
    leading: "loose",
    children: "This example shows a body paragraph with loose leading. Resize the viewport to see responsive token overrides."
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const R=["Playground","BodyExample"];export{a as BodyExample,e as Playground,R as __namedExportsOrder,q as default};
