/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Nadia Gainer
      Date: 01/20/24  

      Filename: project02-02.js
 */
  
  function verifyForm () {
    document.getElementId("name").value = value;
    document.getElementId("email").value = value;
    document.getElementId("phone").value = value;
   (name && email && phone) ? window.alert ("Thankyou!"):
    window.alert ("Please fill in all fields");
      }
  document.getElementId("submit")window.addEventListener("click", verifyForm);