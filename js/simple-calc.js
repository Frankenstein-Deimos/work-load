"use strict";

var calcContainer = $("#simple-calc-container");

// ===== SET INITIAL CLASSES =====
// Makes all div's centered EXCEPT first div
calcContainer.children("div").not(":first").addClass("center-button");
// Turns all div's into circle's EXCEPT the first div and zero div
calcContainer.children("div").not(":first, #zero-button").addClass("circle");
// Change background-color of operator div's
calcContainer.children("div").slice(4, 9).addClass("operators");
// Change background-color of data-operator div's
calcContainer.children("div").slice(1, 4).addClass("data-operators");
// Change background-color of number div's
calcContainer.children("div").slice(9).addClass("number-operators");
// Change text color for all div's EXCEPT data-operators
calcContainer.children("div").not("#percent-button, #pos-neg-button, #clear-button").addClass("white");
// Add margin to left side
calcContainer.children(".clear-button, .seven-button, .four-button, .one-button, .zero-button, .calc-display").addClass("m-left");
// Add margin to right side
calcContainer.children(".division-button, .multiplication-button, .subtraction-button, .addition-button, .equal-button, .calc-display").addClass("m-right");
// Add margin to bottom
calcContainer.children(".zero-button, .dot-button, .equal-button").addClass("m-bottom");
// Add margin to top
calcContainer.children(".calc-display").addClass("m-top");