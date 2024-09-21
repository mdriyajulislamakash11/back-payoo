

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()

    const addMoneyInput = document.getElementById('add-mone-input').value;
    const inputPin = document.getElementById('input-pin').value;
    console.log(addMoneyInput , inputPin)

    if(inputPin === '1234'){
        console.log('added money')
        const balance = document.getElementById('acount-balance').innerText;
        console.log(balance)

        const addMoneyNumber = parseFloat(addMoneyInput);
        const addBalanceNumber = parseFloat(balance);
        const newAddMoney = addMoneyNumber + addBalanceNumber;
        console.log(newAddMoney)

        document.getElementById('acount-balance').innerText = newAddMoney;
    }else{
        alert('play try Again')
    }
  

});