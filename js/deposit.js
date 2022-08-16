// step 1 : add event listener to the deposit btn
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   step 2 : get the deposit amount from the deposit input field
  //   for input field use .value to the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const depositAmount = depositField.value;
  //   step 3 : get the previous deposit total
  //   for non input(element other than input, textarea), use innerText to get the text inside the element
  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = depositTotalElement.innerText;
  /* these 2 lines are same, but not working
  //   depositTotalElement.innerText = depositAmount;
  depositTotal = depositAmount; */
  depositTotalElement.innerText = depositAmount;
});
