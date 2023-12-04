let calculateBtn =document.querySelector("#calculate-btn")
let weightInp = document.querySelector('#weight')
let heightInp = document.querySelector('#height')
let showBmi = document.querySelector('.calculated-bmi')

function feetToMeter(height){
    let feet = 0.3048;
    let toMeter = height * feet;
    let meter = Number(toMeter.toFixed(4));
    return  meter;
}

function calculateBmi(weight , height){
    let bmi = weight / (height * height);
    return bmi;
}

calculateBtn.addEventListener('click', ()=>{
    if(weightInp.value !== "" && heightInp.value !== ""){
        showBmi.style.display = "inline-block";
        let weight = weightInp.value;
        let height = heightInp.value;
        let meter = feetToMeter(height);
        let bmi = calculateBmi(weight , meter);
        showBmi.innerHTML =`BMI <span>(kg/m2)</span> = ${bmi.toFixed(2)}`;
    } else{
        alert(`Weight and Height input's are blank`);
    }
})
