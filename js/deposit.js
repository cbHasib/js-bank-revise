/* 
Step-1: Add event listener to the deposit button
Step-2: Get the amount from the deposit input field
Step-2.5: Convert string to number (deposit amount)
Step-3: Clear the field after getting the value
Step-4: Get the previous deposit total amount
Step-5: Calculate new deposit total and set the value to the deposit
Step-6: Get current balance total
Step-7: Calculate the new balance and set it to balance total
 
*/

document.getElementById('btn-deposit').addEventListener('click', function(){

    // Step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // Step-3
    depositField.value = '';

    // Step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // Step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // Step-7 
    const newBalanceAmount = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceAmount;





})