var observableModule = require("data/observable");
var dialogsModule = require("ui/dialogs");
var source = new observableModule.Observable({
	textSource: ""
});
var page;

exports.onLoaded = function(args) {
	page = args.object;
	
	var bindingOptions = {
		sourceProperty: "textSource",
		targetProperty: "text",
		twoWay: true
	};
	var textField = page.getViewById("text-field");
	textField.bind(bindingOptions, source);
	
	console.log("two-way data binding page loaded");
};

exports.showDataBoundValue = function(args) {
	dialogsModule.alert("Data bound value is '" + source.get("textSource") + "'");
};

exports.resetDataBoundValue = function(args) {
	source.set("textSource", "");	
};