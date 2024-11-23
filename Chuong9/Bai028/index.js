let messages = [
    "Chào, bạn khỏe không?",        
    "Tôi ổn, cảm ơn bạn! Còn bạn thì sao?",
    "Mọi thứ đều ổn. Gần đây tôi đã làm lại portfolio.",
    "Tương tự vậy!",
    "Tuyệt vời khi nghe điều đó",
    "🙌"
]

// DRY - Don't Repeat Yourself - Đừng lặp lại chính mình
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}
