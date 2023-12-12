sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        var that = this;
        return Controller.extend("com.applexus.calculator.controller.Calculator", {
            onInit: function () {

            },
            onButtonPress : function(event) {
                that.getView().byId("input1").setValue("1");
                // console.log(event)
                // var oButton = event.getSource();
                // var sButtonId = oButton.getId();
                //  alert(sButtonId);
                //  console.log(sButtonId);
                // if(sButtonId == "container-com.applexus.calculator---Calculator--num1")
                //         this.getView().byId("input1")

                }



        });
    });
