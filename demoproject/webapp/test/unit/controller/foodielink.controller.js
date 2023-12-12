/*global QUnit*/

sap.ui.define([
	"comapplexus/demoproject/controller/foodielink.controller"
], function (Controller) {
	"use strict";

	QUnit.module("foodielink Controller");

	QUnit.test("I should test the foodielink controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
