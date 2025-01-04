function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

// Hàm callback() {
//     console.log("Cuối cùng tôi cũng chạy!")
// }

// setTimeout(callback, 2000)

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// function gimmeThePets(number) {
//     return person.hasPet
// }

// const peopleWithPets = people.filter(gimmeThePets)
// console.log(peopleWithPets)


/**
 * Thử thách:
 * 
 * Viết hàm `filter` riêng của bạn! Đừng lo lắng về việc thêm nó vào prototype của mảng hay bất cứ điều gì.
 * Hàm này nên nhận 2 tham số:
 * 1. Mảng mà bạn muốn lọc,
 * 2. Hàm callback
 * 
 * Các bước logic cho hàm filterArray:
 * 1. Khởi tạo một mảng mới, rỗng, sẽ được trả về sau khi thực hiện các thao tác của `filterArray` (Hoàn thành ✅)
 * 2. Lặp qua mảng được truyền vào làm tham số thứ nhất
 * 3. Bên trong vòng lặp, gọi hàm callback, truyền vào phần tử hiện tại đang lặp qua làm đối số cho hàm callback
 * 4. Nếu hàm callback trả về `true`, thêm phần tử hiện tại vào mảng mới. Nếu trả về `false`, không thêm vào mảng.
 * 5. Khi vòng lặp kết thúc, trả về mảng mới
 */

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function filterArray(array, callback) {
    const resultingArray = []
    // Viết logic lọc của bạn ở đây
    for (let item of array) {
        const shouldBeIncluded = callback(item)
        if (shouldBeIncluded) {
            resultingArray.push(item)
        }
    }
    return resultingArray
}

// Chúng ta sẽ làm điều này sau
// const peopleWithPets = filterArray(people, /*???*/)
