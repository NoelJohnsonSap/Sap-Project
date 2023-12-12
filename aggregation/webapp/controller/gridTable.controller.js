sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "../model/models"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Controller, models) {
        "use strict";

        return Controller.extend("com.applexus.aggregation.controller.gridTable", {
            onInit: function() {
                let omodel = models.listView();
                this.getView().setModel(omodel);
                // debugger;
                // console.log(omodel);
            },
            onSelect: function(oevent) {
                // let source = oevent.getParameter();
                debugger;
                let Spath = oevent.getParameter("rowContext").getPath();
                var form = this.byId("_IDGenVBox1");
                form.bindElement({path: Spath});
                console.log(oevent);
                // debugger;

            }
        });
    });