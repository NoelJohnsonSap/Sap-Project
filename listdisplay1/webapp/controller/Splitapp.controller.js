sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/core/Fragment',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment,Filter, FilterOperator) {
        "use strict";
        var oRouter;
       

        return Controller.extend("com.applexus.listdisplay1.controller.Splitapp", {
            onInit: function () {

                var button;
                oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("SplitAPP").attachPatternMatched(this.onRouteMatched, this);
            },
            onRouteMatched: function (oEvent) {
                var oArgs = oEvent.getParameter("arguments");
                var myParamValue = oArgs.myParam;
                var sPath = "/fruit/" + myParamValue;
                console.log(sPath);
                var simple_form = this.getView().byId("SimpleFormDisplay354");
                simple_form.bindElement({ path: sPath })

            },
            onListItemPress: function () {
                debugger;
                var list = this.byId("_IDGenList1");
                var listnav = list.getItemNavigation().getFocusedIndex();
                debugger;
                console.log(listnav);
                oRouter.navTo("SplitAPP", {
                    myParam: listnav
                });
            },
            handleValueHelp: function (oEvent) {
                debugger;
                var that = this;
                if (!this.oSupplyPop) {
                    Fragment.load({
                        name: "com.applexus.listdisplay1.Fragments.citySearchHelp",
                        id: "supply",
                        type: "XML",
                        controller: this
                    }).then(function (oPopup) {
                        // oMyButton is now usable
                        that.oSupplyPop = oPopup;
                        that.oSupplyPop.setTitle("Select Supplier");
                        that.getView().addDependent(that.oSupplyPop);
                        that.oSupplyPop.bindAggregation("items", {
                            path: '/city',
                            template: new sap.m.DisplayListItem({
                                label: "{cityName}",
                                value: "{cityName}"
                            })
                        })
                        that.oSupplyPop.open();
                    });
                }
                else {

                    this.oSupplyPop.open();
                }

            },
            handleSearch: function (oEvent) {
                var sValue = oEvent.getParameter("value");
                var oFilter = new Filter("name", FilterOperator.Contains, sValue);
                var oBinding = oEvent.getSource().getBinding("items");
                oBinding.filter([oFilter]);
            },
            handleValueHelpClose: function (oEvent) {
                debugger;
                console.log(oEvent);
                var aContexts = oEvent.getParameter("selectedContexts");
                // var oSelectedItem = oEvent.getParameter("selectedItem"),
                //     oInput = this.byId("productInput");

                // if (oSelectedItem) {
                //     this.byId("productInput").setValue(oSelectedItem.getTitle());
                // }

                // if (!oSelectedItem) {
                //     oInput.resetProperty("value");
                // }
            },	handleClose: function(oEvent) {
                debugger;
                var aContexts = oEvent.getParameter("selectedContexts");
                console.log(aContexts);
                if (aContexts && aContexts.length) {
                    alert("You have chosen " + aContexts.map(function(oContext) { return oContext.getObject().Name; }).join(", "));
                } else {
                    alert("No new item was selected.");
                }
                this.byId("productInput").setValue(aContexts.getTitle());
                oEvent.getSource().getBinding("items").filter([]);
            }
        });
    });
