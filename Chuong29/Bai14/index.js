/**
 * Đã đến lúc tò mò!
 * 
 * Điều gì sẽ xảy ra nếu bạn không trả về `res.json()` 
 * từ khối .then đầu tiên?
 * 
 * Điều gì sẽ xảy ra nếu callback của .then() tiếp theo nhận được 
 * một tham số hoàn toàn khác?
 */

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(function(res) {
//         return "Hello"
//     })
//     .then(function(whatever) {
//         console.log(whatever)
//     })


/**
 * Thử thách:
 * 
 * Truyền chuỗi "World" xuống một khối .then thứ 3
 * và ghi nó ra console bên trong thân của khối .then mới này
 */

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(function(res) {
        return "Hello"
    })
    .then(function(whatever) {
        console.log(whatever)
        return "World"
    })
    .then(function(another) {
        console.log(another)
    })