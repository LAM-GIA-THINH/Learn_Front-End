let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Tạo một hàm để đặt táo lên giá táo và cam lên giá cam.
// Sử dụng vòng lặp for, câu lệnh điều kiện và thuộc tính textContent.
for(i=0;i<fruit.length;i++){
    if(fruit[i] === "🍎"){
        appleShelf.textContent += fruit[i]
    }else{
        orangeShelf.textContent += fruit[i]
    }
}
