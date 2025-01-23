const ageInput = document.getElementById('age')
const resultDisplay = document.getElementById('result-display')
const checkButton = document.getElementById('btn-check')

// đặt độ tuổi tối thiểu để uống rượu và lái xe cho một khu vực pháp lý
const minDrinkAge = 16
const minDriveAge = 18

// Sự kiện lắng nghe nút bấm "check"
checkButton.addEventListener('click', function () {
    let message = ''
    const age = ageInput.value
        // Tuổi dưới minDrinkAge và minDriveAge
        if (age < minDrinkAge && age < minDriveAge) {
            message = `I'm sorry, you cannot drink or drive ⛔`
        // Áp dụng cho các quốc gia nơi minDrinkAge nhỏ hơn minDriveAge
        } else if (age >= minDrinkAge && age < minDriveAge) {
            message = "You can drink 🍺 but you cannot drive"
        // Áp dụng cho các quốc gia nơi minDriveAge nhỏ hơn minDrinkAge
        } else if (age >= minDriveAge && age < minDrinkAge) {
            message = "You can drive 🚗 but you cannot drink"
        // Tuổi trên minDrinkAge và minDriveAge
        } else {
            message = "You can drink 🍺 and drive 🚗 (not at the same time though!)"
        } 
        renderMessage(message)
})

function renderMessage(message) {
    resultDisplay.innerText = message
}


