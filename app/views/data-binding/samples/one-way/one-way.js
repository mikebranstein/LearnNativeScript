var observableModule = require("data/observable");
var source = new observableModule.Observable({
	textSource: 0
});
var page;
var intervalTimer;

exports.onLoaded = function (args) {
	page = args.object;

	var bindingOptions = {
		sourceProperty: "textSource",
		targetProperty: "text",
		twoWay: false	
	};
	var textField = page.getViewById("text-field");
	textField.bind(bindingOptions, source);
	source.set("textSource", 0);

	intervalTimer = setInterval(function() {
		source.set("textSource", source.get("textSource") + 1);
	}, 1000);

	console.log("one-way data binding page loaded");
}

exports.onNavigatingFrom = function (args) {
	if (intervalTimer) clearInterval(intervalTimer);
}