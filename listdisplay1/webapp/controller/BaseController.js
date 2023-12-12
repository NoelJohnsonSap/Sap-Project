sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {
      "use strict";
  
      return Controller.extend("com.applexus.listdisplay1.controller.BaseController", {
        onInit() {
           
            },
            Display : ()=>{
                alert("Display Function");
        },
      });
    }
  );