var viewModule = require("ui/core/view");

exports.loaded = function (args) {
	var page = args.object;
	var navigationContext = page.navigationContext;
	
	var label = viewModule.getViewById(page, "contextLabel");
	label.text = "Navigation Context: " + navigationContext.data;
	
	console.log("Loaded navigation with more control page.");
};