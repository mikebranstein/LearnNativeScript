var frameModule = require("ui/frame");
var topmost;

exports.loaded = function (args) {
	topmost = frameModule.topmost();
	console.log("Loaded navigation by page name page.");
};

exports.navigateBack = function (args) {
	console.log("Navigating back...");
	topmost.goBack();
};