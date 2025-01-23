// các element được gọi
const form = document.getElementById('form');
const numOneInput = document.getElementById('num1');
const numTwoInput = document.getElementById('num2');
const resultText = document.getElementById('result');

// lắng nghe hành động
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // đổi chuổi thành số nhờ hàm Number()
    const numOneVal = Number(numOneInput.value); 
    const numTwoVal = Number(numTwoInput.value);
    
    console.log(`numOneVal is of type: ${typeof numOneVal}, with a value of ${numOneVal}`);
    console.log(`numTwoVal is of type: ${typeof numTwoVal}, with a value of ${numTwoVal}`);
    // cộng bình thường
    resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`;
})
