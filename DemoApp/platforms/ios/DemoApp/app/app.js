var application = require("application");
application.mainModule = "views/main/main";

// launch event reaised when the application launches
// if this command is not placed before the application.start(), then it won't execute
application.on(application.launchEvent, function (args) {
	console.log("App launching...");
	
	if (args.android) {
		console.log("Launched Android app with intent: " + args.android + ".");
	} else if (args.ios !== undefined) {
		console.log("Launched iOS app with options: " + args.ios);
	}
});

application.start();

