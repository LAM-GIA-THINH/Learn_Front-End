const welcomeEl = document.getElementById("welcome-el")
// Thêm khả năng chọn emoji
function greetUser(greeting, name, emoji) {
    // Viết lại đoạn code theo cách khác
    // welcomeEl.textContent = greeting + ", " + name + " 👋"
    welcomeEl.textContent = `${greeting}, ${name}, ${emoji}`
}
// greetUser("Howdy", "Elliot")
greetUser("Howdy", "Elliot", "👋")