function getpin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        // console.log('got 3 disit and calling again',pin);
        return getpin();
    }
}
function genaretepin(){
    const pin = getpin();
    document.getElementById('Display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(e){
    const number = e.target.innerText;
    const calc = document.getElementById('type-number');

    if(isNaN(number)){
       if(number == 'C'){
           calc.value = '';
       }
    }else{
     const previouscalc = calc.value;
     const newcalc = previouscalc+number;
     calc.value = newcalc;
    }
    
});

document.getElementById('submit').addEventListener('click',function(){
    const calc = document.getElementById('type-number');
    const random = document.getElementById('Display-pin');
    const valu = calc.value;
    const vali = random.value; 
    if(valu==vali){
        console.log(alert('login succesful'));
    }else{
        console.log(alert('invelid OTP'));
    }
    calc.value = '';
})
