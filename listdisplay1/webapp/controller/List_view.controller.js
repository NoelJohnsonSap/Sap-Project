sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/Filter',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter) {
        "use strict";
        var router;
        return Controller.extend("com.applexus.listdisplay1.controller.List_view", {
            
            onInit: function () {
                router = this.getOwnerComponent().getRouter();
                
            },
            onSearch: function (oEvt) {
                // add filter for search
                var aFilters = [];
                var sQuery = oEvt.getSource().getValue();
                if (sQuery && sQuery.length > 0) {

                    var filter1 = new Filter("name", sap.ui.model.FilterOperator.Contains, sQuery);
                    var filter2 = new Filter("taste", sap.ui.model.FilterOperator.Contains, sQuery);
                    var filter3 = new Filter("price", sap.ui.model.FilterOperator.Contains, sQuery);
                    aFilters.push(filter1);
                    aFilters.push(filter2);
                    aFilters.push(filter3);
                    var masterfilter = new Filter({

                        filters: aFilters,
                        and: false
                    })
                } else {

                }

                // update list binding
                var list = this.byId("_IDGenList1");
                var binding = list.getBinding("items");
                binding.filter(masterfilter);
            },
            onDeletePress: function (Event) {
                debugger;
                var list = this.byId("_IDGenList1");
                var selecteditems = list.getSelectedItems();
                debugger;
                // var binding = list.getBinding("items");
                // binding.filter(selecteditems12);
                // for (let i = 0; i < cars.length; i++) 
                for (let i = 0; i < selecteditems.length; i++) {
                    list.removeItem(selecteditems[i]);
                }
                debugger;
            },
            onListItemPress:function (){
                var list = this.byId("_IDGenList1");
                var listnav = list.getItemNavigation().getFocusedIndex();
                debugger;
                console.log(listnav);
                router.navTo("SplitAPP",{
                    myParam : listnav
                  });
            }
        });
    });
