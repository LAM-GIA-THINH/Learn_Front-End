const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

/*
Thử thách
1. Sử dụng phương thức .reduce() để tính tổng điểm của tất cả học sinh.
2. Thực hiện một phép toán đơn giản để in ra điểm trung bình của cả lớp.
*/


const totalGrades = grades.reduce(function(total, currentGrade){
    return total + currentGrade
})


console.log(`The class average is ${totalGrades/grades.length}`)