var frameModule = require("ui/frame");
var viewRoot = "views/nav/samples/"
var topmost;

exports.loaded = function (args) {
	topmost = frameModule.topmost();

	console.log("Loaded nav page.");
};

exports.navigateByPageName = function (args) {
	topmost.navigate(viewRoot + "by-page-name/by-page-name");	
}