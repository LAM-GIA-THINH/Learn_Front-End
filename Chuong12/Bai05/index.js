// Hàm generateSentence(desc, arr) nhận hai tham số: một mô tả và một mảng.
// Hàm này sẽ trả về một chuỗi dựa trên mô tả và mảng.

// Ví dụ 1: Nếu bạn truyền vào "largest countries" và ["China", "India", "USA"],
// hàm sẽ trả về chuỗi: "The 3 largest countries are China, India, USA"

// Ví dụ 2: Nếu bạn truyền vào "best fruits" và ["Apples", "Bananas"], hàm sẽ trả về:
// "The 2 best fruits are Apples, Bananas"

// Sử dụng cả vòng lặp for và template string để giải quyết bài toán
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "   
        }
    }
    return baseString
}
let sentence = generateSentence("largest countries", ["China", "India", "USA"])
console.log(sentence)