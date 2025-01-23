// template strings/literals

const recipient = "Elliot"
// Tạo biến sender (người gửi) dùng tên của bạn làm giá trị
let sender = "Mr. Robot"
// Dùng biến sender thay cho mặc định
// const email = `Hey Elliot + ${recipient} + How is it going? Cheers Mr. Robot`
const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

console.log(email)