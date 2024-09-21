document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoneyInput = document.getElementById('add-mone-input').value;
    const inputPin = document.getElementById('input-pin').value;
    // console.log(addMoneyInput , inputPin);

    if(inputPin === '1234'){
        console.log('you are sucessfully add money done');
        const balance = document.getElementById('acount-balance').innerText
        console.log(balance)

        const addBalanceNumber = parseFloat(balance);
        const addMoneyNumber = parseFloat(addMoneyInput);
        const totalAddMoney = addBalanceNumber + addMoneyNumber;
        console.log(totalAddMoney);
        
        document.getElementById('acount-balance').innerText = totalAddMoney;
    }else{
        alert('you write wrong input');
    }
});