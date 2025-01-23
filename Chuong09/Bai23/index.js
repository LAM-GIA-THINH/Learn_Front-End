let cards = [7, 4]
cards.push(6)
//console.log(cards) // Đoạn mã này thêm phần tử 6 vào cuối mảng 'cards'

// Đưa newMessage vào mảng messages và sau đó in ra mảng

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage) // Thêm 'newMessage' vào cuối mảng 'messages'
console.log(messages) // In ra mảng 'messages' sau khi đã thêm newMessage

//Loại bỏ phần tử cuối
messages.pop()
console.log(messages)
