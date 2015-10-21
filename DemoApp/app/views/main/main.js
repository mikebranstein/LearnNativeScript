var applicationSettingsModule = require("application-settings");
var observableModule = require("data/observable");
var frameModule = require("ui/frame");

var viewModel = {
    listItems: [ 
        { title: "Page Management", view: "page-management" }, 
        { title: "Navigation", view: "nav" }, 
        { title: "Data Binding", view: "data-binding" } 
    ]  
};
var page;

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = viewModel;
    
    // example of storing applciation settings
    applicationSettingsModule.setString("Name", "Mike Branstein");
    console.log(applicationSettingsModule.getString("Name")); // prints Mike Branstein
    console.log(applicationSettingsModule.hasKey("Name")); // prints true
    applicationSettingsModule.remove("Name"); // removes the "Name" key
    console.log(applicationSettingsModule.hasKey("Name")); // prints false
};

exports.onItemTap = function (args) {
    var item = args.view.bindingContext;
    var index = args.index;
      
    console.log("Index of tapped ListItem: " + index);
    console.log("Value of tapped ListItem: " + item.view);

    frameModule.topmost().navigate("views/" + item.view + "/" + item.view);
};