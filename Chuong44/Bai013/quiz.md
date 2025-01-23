Câu hỏi:  
/*  
Pumpkin đã giành giải thưởng lớn tại một cuộc thi mèo quốc tế. Dưới đây là điểm số của Pumpkin từ các giám khảo, cũng như tất cả các giải thưởng mà nó đã giành được. Trong sự phấn khích của chiến thắng, tất cả chúng đã trở thành một đống lộn xộn của các mảng lồng nhau.  
Hãy giúp Pumpkin bằng cách sắp xếp lại chúng.  

Viết một hàm để làm phẳng các mảng lồng nhau của chuỗi hoặc số thành một mảng duy nhất. Có một phương thức để làm việc này, nhưng hãy luyện tập cả cách làm thủ công và sử dụng phương thức đó.  

Ví dụ đầu vào: [1, [4,5], [4,7,6,4], 3, 5]  
Ví dụ đầu ra: [1, 4, 5, 4, 7, 6, 4, 3, 5]  
*/  

Đáp án:

```javascript
function flatten(arr) {
    // Cách 1: Dùng phương thức flat() để làm phẳng mảng
    return arr.flat(Infinity); // Sử dụng Infinity để làm phẳng tất cả các cấp độ mảng

    // Cách 2: Làm thủ công (nếu không dùng flat())
    // return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

console.log(flatten(kittyPrizes)); // In kết quả mảng giải thưởng
console.log(flatten(kittyScores)); // In kết quả mảng điểm số
```

Giải thích:
- **Cách 1:** Dùng phương thức `flat()` với tham số `Infinity` để làm phẳng mảng ở mọi cấp độ.
- **Cách 2:** Sử dụng phương thức `reduce()` để duyệt qua từng phần tử trong mảng. Nếu phần tử là mảng (kiểm tra bằng `Array.isArray(val)`), gọi đệ quy `flatten(val)`, nếu không thì thêm phần tử đó vào kết quả.

Kết quả trả về là một mảng đã được làm phẳng các phần tử từ các mảng lồng nhau.