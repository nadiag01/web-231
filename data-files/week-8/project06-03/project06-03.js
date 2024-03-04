
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Nadia Gainer
      Date: 03/03/24 

      Filename: project06-03.js
*/


//useShip variable to reference with id “useShip”//
let useShip=document.getElementById("useShip");
//adding addEventListener to useShip for calling copyShippingToBilling() function//
useShip.addEventListener("click",copyShippingToBilling);


//copy values from shipping to billing//
function copyShippingToBilling() {
//If box is checked copy info from shipping address to billing address//
if(useShip.checked==true){
  document.getElementById("firstnameBill").value=document.getElementById("firstnameShip").value; 
  document.getElementById("lastnameBill").value=document.getElementById("lastnameShip").value;
  document.getElementById("address1Bill").value=document.getElementById("address1Ship").value;
  document.getElementById("address2Bill").value=document.getElementById("address2Ship").value;
  document.getElementById("cityBill").value=document.getElementById("cityShip").value;
  document.getElementById("countryBill").value=document.getElementById("countryShip").value;
  document.getElementById("codeBill").value=document.getElementById("codeShip").value;
  document.getElementById("stateBill").value=document.getElementById("stateShip").value;

  }
}

//Declare formElements variable//
let formElements=document.querySelectorAll("input[type='text']");

//Declaring fieldCount for length of formElements//
let fieldCount=formElements.length;

//Declaring errorBox with id "errorBox"//
let errorBox=document.getElementById("errorBox");

//forloop that iterates through each element in the formElements node list,Apply eventlistener//
for (let i = 0; i < fieldCount; i++) {
    formElements[i].addEventListener('click',showValidationError)     
}

//Show validation error using errorBox//
function showValidationError(evt) {
  evt.preventDefault()
  errorBox.textContent="Complete all highlighted fields"
}