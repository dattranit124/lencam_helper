export default function(context, inject) {
	inject("T", {
	  Tran
	});
	 function Tran(text) {
	  const CONFIG_LANG =  context.store.getters["lang/Language"];
	  let file;
	  if (CONFIG_LANG == undefined) file = require("@/lang/en-US.js");
	  else file = require(`@/lang/${CONFIG_LANG}.js`);
	  return file.default[text];
	}
  }
  