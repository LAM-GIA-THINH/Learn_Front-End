const welcomeEl = document.getElementById("welcome-el")

// Hãy thêm một tham số cho hàm, tên là `greeting`, để thay thế chuỗi "Welcome back".
function greetUser(greeting) {
    welcomeEl.textContent = greeting + ", Elliot Alderson 👋"    
}

greetUser("Howdy")