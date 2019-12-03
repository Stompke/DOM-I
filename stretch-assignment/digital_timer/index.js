let ones = document.querySelector('#secondOnes');
let onesValue = 1;

let tens = document.querySelector('#secondTens');
let tensValue = 1;

let msHundreds = document.querySelector('#msHundreds');
let msHundredsValue = 1;

let msTens = document.querySelector('#msTens');
let msTensValue = 1;

window.setInterval(seconds, 1000, 'Parameter 1', 'Parameter 2');
window.setInterval(msHunTimer, 100, 'Parameter 1', 'Parameter 2');
window.setInterval(msTenTimer, 10, 'Parameter 1', 'Parameter 2');
window.setInterval(tensTimer, 10000, 'Parameter 1', 'Parameter 2');


function msTenTimer(a, b)
{
    // Your code here
    // Parameters are purely optional.

    if(msTensValue == 9) {
        msTens.textContent = msTensValue++;
        msTensValue = 0;
    } else {
        msTens.textContent = msTensValue++;
    }
    console.log('msTens'); 


}


function msHunTimer(a, b)
{
 // Your code here
 // Parameters are purely optional.

 if(msHundredsValue == 9) {
    msHundreds.textContent = msHundredsValue++;
    msHundredsValue = 0;
 } else {
     msHundreds.textContent = msHundredsValue++;
     console.log('msHundreds'); 
 }

}

function seconds(a, b)
{
 // Your code here
 // Parameters are purely optional.

 if(onesValue == 9) {
    ones.textContent = onesValue++;
    onesValue = 0;
 } else {
     ones.textContent = onesValue++;
     console.log('seconds'); 
 }


}

function tensTimer(a, b)
{
 // Your code here
 // Parameters are purely optional.
 if(tensValue == 9) {
    tens.textContent = tensValue++;
    onesValue = -1;
 } else {
     tens.textContent = tensValue++;
     console.log('seconds'); 
 }
}