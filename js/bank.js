
// deposite 

document.getElementById('diposite-button').addEventListener('click', function () {
    const dipositeInput = document.getElementById('deposite-input');
    const newdipositeAmmount = dipositeInput.value;
    console.log(newdipositeAmmount);

    const dipositeTotal = document.getElementById('diposite-total');

    const previusDipositeAmmount = dipositeTotal.innerText
    const newDepositeTotal = parseFloat(previusDipositeAmmount) + parseFloat(newdipositeAmmount);

    dipositeTotal.innerText = newDepositeTotal;
    dipositeInput.value = '';

    // update account balance 
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText) +
        parseFloat(newdipositeAmmount);
    balanceTotal.innerText = newBalanceTotal;
})

// withdrow 
document.getElementById('withdrow-button').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const newWithdrowAmmount = withdrowInput.value;
    console.log(newWithdrowAmmount);
    withdrowInput.value = "";
    const withdrowTotal = document.getElementById('withdrow-total');

    const previusWithdrowAmmount = withdrowTotal.innerText;
    const newWithdrowTotal = parseFloat(previusWithdrowAmmount) + parseFloat(newWithdrowAmmount);
    withdrowTotal.innerText = newWithdrowTotal;
    //  update account balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceTotalText) - parseFloat(newWithdrowAmmount);
    balanceTotal.innerText = newBalanceTotal;

})