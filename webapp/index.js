sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function (JSONModel, XMLView, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
        var oModel = new JSONModel({
            firstName: "Harry",
            lastName: "Hawk",
            enabled: true,
            address: {
                street: "Dietmar-Hopp-Allee 16",
                city: "Walfdorf",
                zip: "69190",
                country: "Germany"
            },
        });

        sap.ui.getCore().setModel(oModel);

	var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n"
	});
	
	sap.ui.getCore().setModel(oResourceModel, "i18n");

        new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        }).placeAt("content");
    });
});
