var context;
var closeCallback;

exports.loaded = function (args) {
	console.log("Modal page opened.");
};

exports.onShownModally = function (args) {
	context = args.context;	
	closeCallback = args.closeCallback;

	

	console.log("Modal shown.");
};

exports.closeModal = function (args) {
	if (closeCallback) {
		closeCallback("data from the modal...");
	}
		
};
