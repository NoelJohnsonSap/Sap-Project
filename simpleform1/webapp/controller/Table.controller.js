sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";

        return Controller.extend("com.applexus.simpleform1.controller.Table", {
            onInit: function () {
                let sample = models.createemployeedetails();
                this.getView().setModel(sample);
            }
        });
    });
