let sentence = ["Hello ", "my ", "name ", "is ", "Elliot"] 
let greetingEl = document.getElementById("greeting-el")

// Dùng vòng lặp và textContent để in ra

for(i=0; i< sentence.length; i++){
    greetingEl.textContent += sentence[i];
}