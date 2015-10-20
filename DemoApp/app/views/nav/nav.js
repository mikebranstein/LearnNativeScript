var frameModule = require("ui/frame");
var labelModule = require("ui/label");
var pageModule = require("ui/page");
var viewRoot = "views/nav/samples/";
var topmost;
var page;

exports.loaded = function (args) {
	page = args.object;	
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

	var newPage = new pageModule.Page();
	newPage.content = label;
	return newPage;
};

exports.navigateByFunction = function (args) {
	topmost.navigate(pageFactory);		
};

exports.navigateWithMoreControl = function (args) {
	var navigationEntry = {
		moduleName: viewRoot + "more-control/more-control",
		context: { data: "Hello NativeScripters!" }
	};
	topmost.navigate(navigationEntry);
};

exports.navigateWithNoAnimation = function (args) {
	var navigationEntry = {
		moduleName: viewRoot + "more-control/more-control",
		animated: false,
		context: { data: "Hello NativeScripters!" }
	};
	topmost.navigate(navigationEntry);
};

exports.navigateWithNoHistory = function (args) {
	var navigationEntry = {
		moduleName: viewRoot + "more-control/more-control",
		backstackVisible: false,
		clearHistory: true,
		context: { data: "Hello NativeScripters!" }
	};
	topmost.navigate(navigationEntry);
};

exports.openModal = function (args) {
	var modalPage = viewRoot + "modal/modal";
	var context = "data...";
	var fullscreen = false;
	
	page.showModal(modalPage, context, function closeCallback(callbackData) {
		console.log("Modal returned: " + callbackData);
	}, fullscreen);
}