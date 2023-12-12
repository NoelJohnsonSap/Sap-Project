sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";

        return Controller.extend("com.applexus.simpleform1.controller.SimpleForm1", {
            onInit: function () {
                let omodel = models.createemployeedetails();
                this.getView().setModel(omodel);
                this.getView().byId("empNoInput").bindValue('/employee/0/EmployeeNo');
                this.getView().byId("empNameInput").bindValue('/employee/0/EmployeeName');
                this.getView().byId("salaryInput").bindValue('/employee/0/Salary');
                this.getView().byId("currencyInput").bindValue('/employee/0/Currency');
            },
            onPress: function (evt) {
                if (evt.getSource().getPressed()) {
                    this.getView().byId("empNoInput").bindValue('/employee/1/EmployeeNo');
                    this.getView().byId("empNameInput").bindValue('/employee/1/EmployeeName');
                    this.getView().byId("salaryInput").bindValue('/employee/1/Salary');
                    this.getView().byId("currencyInput").bindValue('/employee/1/Currency');
                } else {
                    this.getView().byId("empNoInput").bindValue('/employee/0/EmployeeNo');
                    this.getView().byId("empNameInput").bindValue('/employee/0/EmployeeName');
                    this.getView().byId("salaryInput").bindValue('/employee/0/Salary');
                    this.getView().byId("currencyInput").bindValue('/employee/0/Currency');
                }
            }
        });
    });
