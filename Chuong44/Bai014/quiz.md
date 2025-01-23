Câu hỏi:  
/*  
Alex muốn biết có bao nhiêu sinh viên mới tham dự sự kiện Town Hall hàng tuần trong năm nay.  

Anh ấy có một mảng chứa số lượng sinh viên lần đầu tham dự mỗi tháng trong năm.  
Hãy giúp anh ấy tìm tổng số sinh viên tham dự! Hàm của bạn nên nhận vào một mảng và trả về một số đại diện cho tổng số sinh viên mới tham dự.  

Ví dụ đầu vào: [1, 2, 3]  
Ví dụ đầu ra: 6  
*/  

Đáp án:

```javascript
function sumArray(arr) {
    // Dùng phương thức reduce để tính tổng các phần tử trong mảng
    return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray(studentCount)); // In tổng số sinh viên mới tham dự
```

Giải thích:
- Phương thức `reduce()` giúp tính tổng các phần tử trong mảng. Tham số đầu tiên của `reduce()` là một hàm callback, trong đó `total` là tổng tạm thời và `num` là phần tử hiện tại. Giá trị ban đầu của `total` được đặt là 0 (thông qua tham số thứ hai của `reduce()`).
