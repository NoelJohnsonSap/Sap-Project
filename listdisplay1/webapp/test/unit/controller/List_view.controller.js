/*global QUnit*/

sap.ui.define([
	"comapplexus/listdisplay1/controller/List_view.controller"
], function (Controller) {
	"use strict";

	QUnit.module("List_view Controller");

	QUnit.test("I should test the List_view controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
