sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.mysampleapp.controller.Homepage", {
            onInit: function () {

            },

            onPress:function(){
                alert("HELLO")
                 this.getview().byId("Input1").setValue("1")
                 this.getview().byId("Input2").setValue("2")
                 this.getview().byId("Input3").setValue("3")
                 this.getview().byId("Input4").setValue("4")
                 var v1 = this.getView().byId("Input1").setValue("1");
            }
        });
    });