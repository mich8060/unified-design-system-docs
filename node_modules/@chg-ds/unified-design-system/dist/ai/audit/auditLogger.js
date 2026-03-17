async function o(e,i={type:"console"}){if(i.type==="console"){console.info("[UDS AI Audit]",e);return}if(i.type==="file"){try{await i.append(`${JSON.stringify(e)}
`,i.filePath)}catch(n){console.warn("[UDS AI Audit] Failed writing audit event to file transport.",n)}return}await i.handler(e)}export{o as logAIGeneration};
