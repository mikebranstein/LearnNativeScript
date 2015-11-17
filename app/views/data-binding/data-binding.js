var frameModule = require("ui/frame");
var viewRoot = "views/data-binding/samples/";
var topmost;

exports.onLoaded = function (args) {
	topmost = frameModule.topmost();
	
	console.log("loaded data-binding view");	
};

exports.seeOneWayExample = function (args) {
	topmost.navigate(viewRoot + "one-way/one-way");
}