let btnC = document.getElementById("btn")
const inputN = document.getElementById("inp")
let p1 = document.getElementById("length")
let p2 = document.getElementById("volume")
let p3 = document.getElementById("mass")
btnC = document.addEventListener("click", function(){
    
    convert(inputN.value)
})

function convert(inputn){
    
    const feet = inputn*3.28084;
    const meters = inputn*0.3048;
    const gallons = inputn*0.264172;
    const liters = inputn*3.78541;
    const pounds = inputn*2.20462;
    const kilograms= inputn*0.453592;
    p1.innerHTML = `${inputN.value} meters = ${feet.toFixed(3)} feet | ${inputN.value} feet = ${meters.toFixed(3)} meters`
    p2.innerHTML = `${inputN.value} liters = ${gallons.toFixed(3)} gallons | ${inputN.value} gallons = ${liters.toFixed(3)} liters`
    p3.innerHTML = `${inputN.value} kilos = ${pounds.toFixed(3)} pounds | ${inputN.value} pounds = ${kilograms.toFixed(3)} kilos`
}