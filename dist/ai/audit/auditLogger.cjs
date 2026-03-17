"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});async function n(i,e={type:"console"}){if(e.type==="console"){console.info("[UDS AI Audit]",i);return}if(e.type==="file"){try{await e.append(`${JSON.stringify(i)}
`,e.filePath)}catch(t){console.warn("[UDS AI Audit] Failed writing audit event to file transport.",t)}return}await e.handler(i)}exports.logAIGeneration=n;
