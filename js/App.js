
(function Calculator (){
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
let plus = document.querySelector('#plus');
let sub = document.querySelector('#sub');
let divide = document.querySelector('#divide');
let dot  = document.querySelector('#dot');
let multiply = document.querySelector('#multiple');
let display = '';
let calc  = document.querySelector('#calc');
let result = document.querySelector('#result');
let Clear = document.querySelector('#clear');
let Result = '';
one.addEventListener('click',()=>{
    display += '1';
    calc.innerText = display;
})

two.addEventListener('click',()=>{
    display += '2';
    calc.innerText = display;
})


three.addEventListener('click',()=>{
    display += '3';
    calc.innerText = display;
})

four.addEventListener('click',()=>{
    display += '4';
    calc.innerText = display;
})


five.addEventListener('click',()=>{
    display += '5';
    calc.innerText = display;
})

six.addEventListener('click',()=>{
    display += '6';
    calc.innerText = display;
})


seven.addEventListener('click',()=>{
    display += '7';
    calc.innerText = display;
})

eight.addEventListener('click',()=>{
    display += '8';
    calc.innerText = display;
})

nine.addEventListener('click',()=>{
    display += '9';
    calc.innerText = display;
})

zero.addEventListener('click',()=>{
    display += '0';
    calc.innerText = display;
})

dot.addEventListener('click',()=>{
    display += '.';
    calc.innerText = display;
})

plus.addEventListener('click',()=>{
    display += '+';
    calc.innerText = display;
})

sub.addEventListener('click',()=>{
    display += '-';
    calc.innerText = display;
})


multiply.addEventListener('click',()=>{
    display += '*';
    calc.innerText = display;
})


divide.addEventListener('click',()=>{
    display += '/';
    calc.innerText = display;
})

result.addEventListener('click',()=>{ 
    
    try{
         result = eval(display);
         display = result;
        calc.innerText = eval(display)
    }
    catch(err) {   
         calc.innerText = 'Error';
    }

});


Clear.addEventListener('click',()=> {
       display='';
    calc.innerText =  display;

});

//footer date 
let year = document.getElementById('year');
let date = new Date();

year.innerText = date.getFullYear();




})();