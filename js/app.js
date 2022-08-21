function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin set 3 digit found', pin);
        return getPin();
    }
}



function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    console.log(pin);
    // display pin 
    const displayPinFeild = document.getElementById('display-pin');
    displayPinFeild.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDisits = digits.join('');
            typedNumberField.value = remainingDisits;
        }
    }
    else {
        // const typedNumberField = document.getElementById('typed-numbers');
        // const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})
document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinFeild = document.getElementById('display-pin');
    const currentPin = displayPinFeild.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');

    const pinFailureMessage = document.getElementById('pin-failure');

    if(typedNumber === currentPin){
        // const pinSuccessMessage = document.getElementById('pin-success');
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        // const pinFailureMessage = document.getElementById('pin-failure');
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})
