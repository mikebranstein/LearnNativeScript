var frameModule = require("ui/frame");
var labelModule = require("ui/label");
var pageModule = require("ui/page");
var viewRoot = "views/nav/samples/";
var topmost;

exports.loaded = function (args) {
	topmost = frameModule.topmost();

	console.log("Loaded nav page.");
};

exports.navigateByPageName = function (args) {
	topmost.navigate(viewRoot + "by-page-name/by-page-name");	
};

var pageFactory = function () {
	var label = new labelModule.Label();
	label.text = "This page was navigated to by using a function.";
	label.cssClass = "text";
	label.textWrap = true;

	var page = new pageModule.Page();
	page.content = label;
	return page;
};

exports.navigateByFunction = function (args) {
	topmost.navigate(pageFactory);		
};