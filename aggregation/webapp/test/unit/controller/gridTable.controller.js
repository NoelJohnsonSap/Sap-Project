/*global QUnit*/

sap.ui.define([
	"comapplexus/aggregation/controller/gridTable.controller"
], function (Controller) {
	"use strict";

	QUnit.module("gridTable Controller");

	QUnit.test("I should test the gridTable controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
