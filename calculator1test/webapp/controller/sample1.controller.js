sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.applexus.calculator1test.controller.sample1", {
            onInit: function () {
                // Initialize your controller here if needed
            },

            onButtonPress: function (event) {
                // Get the clicked button element
                var button = event.getSource();
                console.log(event);
                console.log(button);
                // Get the current input field value using UI5's data binding
                var inputField = this.byId("productInput");
                var currentValue = inputField.getValue();

                // Get the text of the clicked button
                var buttonValue = button.getText();

                // Handle different button actions
                switch (buttonValue) {
                    case "C":
                        // Clear the input field
                        inputField.setValue("");
                        break;
                    case "=":
                        // Evaluate the expression in the input field
                        try {
                            var result = eval(currentValue);
                            inputField.setValue(result);
                        } catch (error) {
                            // Handle any errors (e.g., division by zero)
                            inputField.setValue("Error");
                        }
                        break;
                    case '+':
                      var num1 = currentValue;
                        alert(num1);
                        inputField.setValue("");
                        break;
                    default:
                        // Append the clicked button value to the input field
                        inputField.setValue(currentValue + buttonValue);
                        break;
                }
            }
        });
    });
