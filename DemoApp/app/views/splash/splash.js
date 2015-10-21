var frameModule = require("ui/frame");

exports.onLoaded = function (args) {
	var topmost = frameModule.topmost();
	console.log("splash screen loaded")
	
	setTimeout(function() {
		var navigationEntry = {
			moduleName: "views/main/main",
			clearHistory: true
		};
		topmost.navigate(navigationEntry);
	}, 2500);
};