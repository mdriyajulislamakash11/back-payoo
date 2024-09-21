document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault()
    
    const inputCashOut = document.getElementById('cash-out-input').value;
    const inputCashOutPin = document.getElementById('cash-out-pin').value;
    

    if(inputCashOutPin === '1234'){
        console.log('you are sucsessfully cash out')
        const balance = document.getElementById('acount-balance').innerText;
        
        const inputCashOutNumber = parseFloat(inputCashOut);
        const inputCashOutBalanceNumber = parseFloat(balance);
        const cashOutAmount = inputCashOutBalanceNumber - inputCashOutNumber;

        document.getElementById('acount-balance').innerText = cashOutAmount;
        
    }else{
        alert('incurrect the valide input')
    }
})