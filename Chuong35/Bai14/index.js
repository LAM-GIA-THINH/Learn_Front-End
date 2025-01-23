/*
Thử thách 1:
Cho một mảng các số, trả về một mảng chứa bình phương của mỗi số
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Mã của bạn ở đây
const squares = nums.map(function(num) {
    return num * num
})

console.log(squares)



/*
Thử thách 2:
Cho một mảng các chuỗi, trả về một mảng mà
chữ cái đầu tiên của mỗi chuỗi được viết hoa
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Mã của bạn ở đây
const capitalized = names.map(name => (
    name[0].toUpperCase() + name.slice(1))
)
console.log(capitalized)



/*
Thử thách 3:
Cho một mảng các chuỗi, trả về một mảng các chuỗi, trong đó
mỗi chuỗi gốc được bọc trong thẻ HTML-like <p></p>.

Ví dụ: cho: ["Bulbasaur", "Charmander", "Squirtle"]
trả về: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Mã của bạn ở đây

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

console.log(paragraphs)
