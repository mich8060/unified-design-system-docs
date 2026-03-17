import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";const a="uds-key",s={light:"light",dark:"dark"};function n({label:t,appearance:e="light",className:r="",...o}){const i=[a,s[e]&&`${a}--${s[e]}`,r].filter(Boolean).join(" ");return l.jsx("kbd",{className:i,...o,children:t})}n.__docgenInfo={description:`Key component for displaying keyboard key representations
@param {string} label - The text or symbol to display on the key (e.g., "Esc", "⌘", "Ctrl")
@param {string} appearance - Visual style variant: 'light' or 'dark'
@param {string} className - Additional CSS classes
@param {object} props - Additional props to pass to the key element`,methods:[],displayName:"Key",props:{label:{required:!1,tsType:{name:"unknown"},description:""},appearance:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'light'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}},composes:["HTMLAttributes"]};export{n as K};
