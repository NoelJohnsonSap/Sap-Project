sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.simpleform.controller.SimpleForm", {
            onInit: function () {
                this.model = models.createEmployeeModel();
                this.getView().setModel(this.model);
                console.log(this.model);

            }
        });
    });
