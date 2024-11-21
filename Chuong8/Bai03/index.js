let myPoints = 3
// Tạo hai hàm add3Points() và delete1Point()
// thêm/xóa điểm vào/khỏi biến myPoints
function add3Points(){
    myPoints += 3;
}
function delete1Point(){
    myPoints -= 1;
}
// Gọi các hàm để dòng bên dưới in ra 10
add3Points()
add3Points()
add3Points()
delete1Point()
delete1Point()
console.log(myPoints);