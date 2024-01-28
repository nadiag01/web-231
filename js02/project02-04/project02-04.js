/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Nadia Gainer
      Date: 01/28/24

      Filename: project02-04.js
 */

//Constants with thier values//
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;


// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

//Event handlers//
  document.getElementByID("chicken").addEventListener("click", calcTotal);
  document.getElementByID("halibut").addEventListener("click", calcTotal);
  document.getElementByID("burger").addEventListener("click", calcTotal);
  document.getElementByID("salmon").addEventListener("click", calcTotal);
  document.getElementByID("salad").addEventListener("click", calcTotal);

//calctotal function//
function calcTotal() {
  let cost = 0;
  let buyChicken = document.getElementByID("chicken").checked;
  let buyHalibut = document.getElementByID("halibut").checked;
  let buyBurger = document.getElementByID("burger").checked;
  let buySalmon = document.getElementByID("salmon").checked;
  let buySalad = document.getElementByID("salad").checked;

//comparison operator//
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

// innerHTML//
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  let tax = cost * SALES_TAX;
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  let totalCost = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
  }


