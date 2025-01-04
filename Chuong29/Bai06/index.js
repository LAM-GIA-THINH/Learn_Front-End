function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

// function callback() {
//     console.log("I finally ran!")
// }

// setTimeout(callback, 2000)

/**  
 * Thử thách:  
 *  
 * Phần 1: Dựa trên mảng các đối tượng dưới đây, tạo một mảng mới với phương thức mảng `.filter()`, chỉ chứa các đối tượng có "hasPet" là true.  
 *  
 * Phần 2: Chuyển hàm ẩn danh nội tuyến thành một hàm riêng, có tên.  
 */

const people = [
    { name: "Jack", hasPet: true, age: 12 },
    { name: "Jill", hasPet: false, age: 18 },
    { name: "Alice", hasPet: true, age: 22 },
    { name: "Bob", hasPet: false, age: 32 },
]

function gimmeThePets(person) {
    return person.hasPet && person.age >= 18;
}

const peopleWithPets = people.filter(gimmeThePets)
console.log(peopleWithPets)

// https://www.javascripttutorial.net/javascript-array-filter

/**  
 * Thử thách thêm để luyện tập array.filter:  
 *  
 * Sử dụng .filter, tạo một mảng mới chứa những người từ 18 tuổi trở lên  
 * (nên là Jill, Alice và Bob).  
 */