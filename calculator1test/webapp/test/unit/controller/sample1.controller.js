/*global QUnit*/

sap.ui.define([
	"comapplexus/calculator1test/controller/sample1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sample1 Controller");

	QUnit.test("I should test the sample1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
