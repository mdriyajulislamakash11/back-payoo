
// step - 1 set event handler
document.getElementById("button-login").addEventListener("click", function (event) {
    
 // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();

     // step-3: get the phone number and the pin number
 const phoneNumber = document.getElementById("phone-number").value;
 const pinNumber = document.getElementById("pin-number").value;
//  console.log(phoneNumber, pinNumber);

 if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are logged in');
    window.location.href = '/home.html';
}
else{
    alert('Wrong phone number or pin.')
}

});

