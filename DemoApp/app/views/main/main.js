var applicationSettingsModule = require("application-settings");

var page;

function loaded(args) {
    page = args.object;
    
    // example of storing applciation settings
    applicationSettingsModule.setString("Name", "Mike Branstein");
    console.log(applicationSettingsModule.getString("Name")); // prints Mike Branstein
    console.log(applicationSettingsModule.hasKey("Name")); // prints true
    applicationSettingsModule.remove("Name"); // removes the "Name" key
    console.log(applicationSettingsModule.hasKey("Name")); // prints false
}
exports.loaded = loaded;
