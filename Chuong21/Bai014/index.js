// const distanceTraveledMiles = [267, 345, 234, 190, 299]

// const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
//     return Math.round(distance * 1.6)
// })

// console.log(distanceTraveledKm)

/*
Thử thách
1. Chỉnh sửa lại phương thức .map này sao cho hàm nội tuyến trở thành một hàm mũi tên.
2. Viết mã ngắn gọn nhất có thể.
*/

const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map( distance => Math.round(distance * 1.6 ))

console.log(distanceTraveledKm)