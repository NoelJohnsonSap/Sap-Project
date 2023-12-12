sap.ui.define([
    "com/applexus/listdisplay1/controller/BaseController",
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.listdisplay1.controller.Homepage", {
            onInit: function () {
                // this.router = this.getOwnerComponent().getRouter();


            }
            ,
            onPress: function(){
                debugger;
                 var router = this.getOwnerComponent().getRouter();
                 this.Display();
                router.navTo("Nav2");
                // this.getOwnerComponent().getTargets().display("TargetList_view");
                
            }

        });
    });
