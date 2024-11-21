// Lấy phần tử có id "welcome-el" và lưu vào biến welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Tạo hai biến (name & greeting) chứa tên và lời chào
let name = "Elliot"; // Thay "YourName" bằng tên của bạn
let greeting = "Hi, my name is ";

// Kết hợp lời chào và tên và gán vào welcomeEl.innerText
welcomeEl.innerText = greeting + name;
console.log(welcomeEl.innerText);