import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as B}from"./index-Dx_1l3Sb.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const N=new Set(["0","2","4","8","12","16","24","32"]);function D(a){return a===!0?"wrap":a===!1||a==null?"nowrap":a}function u(a){return a.replace(/\s+/g,"-")}const r=B.forwardRef(function({as:q="div",direction:_="row",justifyContent:p,alignItems:m,wrap:E=!1,gap:d,fullWidth:v=!1,inline:L=!1,className:$,style:n,children:A,...H},O){const k=D(E),z=["ds-flex",`ds-flex--direction-${_}`,p&&`ds-flex--justify-${u(p)}`,m&&`ds-flex--align-${u(m)}`,`ds-flex--wrap-${u(k)}`,L&&"ds-flex--inline",v&&"ds-flex--full-width",$].filter(Boolean).join(" "),c={};if(d!=null&&(n==null?void 0:n.gap)==null){const f=String(d);c.gap=N.has(f)?`var(--uds-spacing-${f})`:d}return v&&(n==null?void 0:n.width)==null&&(c.width="100%"),e.jsx(q,{ref:O,className:z,style:{...c,...n},...H,children:A})});r.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:'"div"',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"row" | "column"',elements:[{name:"literal",value:'"row"'},{name:"literal",value:'"column"'}]},description:"",defaultValue:{value:'"row"',computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:`| "flex-start"
| "center"
| "flex-end"
| "space-between"
| "space-around"
| "space-evenly"`,elements:[{name:"literal",value:'"flex-start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"flex-end"'},{name:"literal",value:'"space-between"'},{name:"literal",value:'"space-around"'},{name:"literal",value:'"space-evenly"'}]},description:""},alignItems:{required:!1,tsType:{name:"union",raw:'"stretch" | "flex-start" | "center" | "flex-end" | "baseline"',elements:[{name:"literal",value:'"stretch"'},{name:"literal",value:'"flex-start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"flex-end"'},{name:"literal",value:'"baseline"'}]},description:""},wrap:{required:!1,tsType:{name:"union",raw:"boolean | FlexWrap",elements:[{name:"boolean"},{name:"union",raw:'"nowrap" | "wrap" | "wrap-reverse"',elements:[{name:"literal",value:'"nowrap"'},{name:"literal",value:'"wrap"'},{name:"literal",value:'"wrap-reverse"'}]}]},description:"",defaultValue:{value:"false",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"FlexGapToken | string",elements:[{name:"union",raw:'"0" | "2" | "4" | "8" | "12" | "16" | "24" | "32"',elements:[{name:"literal",value:'"0"'},{name:"literal",value:'"2"'},{name:"literal",value:'"4"'},{name:"literal",value:'"8"'},{name:"literal",value:'"12"'},{name:"literal",value:'"16"'},{name:"literal",value:'"24"'},{name:"literal",value:'"32"'}]},{name:"string"}]},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},inline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const J={title:"UI/Flex",component:r,argTypes:{direction:{control:"select",options:["row","column"]},justifyContent:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},alignItems:{control:"select",options:["stretch","flex-start","center","flex-end","baseline"]},wrap:{control:"select",options:[!1,!0,"nowrap","wrap","wrap-reverse"]},gap:{control:"text"},fullWidth:{control:"boolean"},inline:{control:"boolean"}}},l={args:{children:"Flex",gap:"8"}},t={render:()=>e.jsxs(r,{gap:"8",children:[e.jsx("div",{children:"Item A"}),e.jsx("div",{children:"Item B"}),e.jsx("div",{children:"Item C"})]})},s={render:()=>e.jsxs(r,{direction:"column",gap:"12",children:[e.jsx("div",{children:"Header"}),e.jsx("div",{children:"Content"}),e.jsx("div",{children:"Footer"})]})},i={render:()=>e.jsxs(r,{justifyContent:"center",alignItems:"center",wrap:!0,gap:"16",style:{maxWidth:320},children:[e.jsx("div",{children:"One"}),e.jsx("div",{children:"Two"}),e.jsx("div",{children:"Three"}),e.jsx("div",{children:"Four"}),e.jsx("div",{children:"Five"})]})},o={render:()=>e.jsxs(r,{fullWidth:!0,justifyContent:"space-between",style:{border:"1px dashed var(--uds-border-primary)",padding:12},children:[e.jsx("span",{children:"Left"}),e.jsx("span",{children:"Right"})]})};var x,w,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Flex",
    gap: "8"
  }
}`,...(h=(w=l.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var g,j,F;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Flex gap="8">
      <div>Item A</div>
      <div>Item B</div>
      <div>Item C</div>
    </Flex>
}`,...(F=(j=t.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var y,b,T;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="12">
      <div>Header</div>
      <div>Content</div>
      <div>Footer</div>
    </Flex>
}`,...(T=(b=s.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var C,S,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex justifyContent="center" alignItems="center" wrap gap="16" style={{
    maxWidth: 320
  }}>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </Flex>
}`,...(I=(S=i.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var W,R,V;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Flex fullWidth justifyContent="space-between" style={{
    border: "1px dashed var(--uds-border-primary)",
    padding: 12
  }}>
      <span>Left</span>
      <span>Right</span>
    </Flex>
}`,...(V=(R=o.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const M=["Default","HorizontalStack","VerticalLayout","CenteredWrapRow","FullWidthContainer"];export{i as CenteredWrapRow,l as Default,o as FullWidthContainer,t as HorizontalStack,s as VerticalLayout,M as __namedExportsOrder,J as default};
