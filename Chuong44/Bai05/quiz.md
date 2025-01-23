Câu hỏi:  
/* Totally Not Another FizzBuzz  

Giám đốc điều hàn, muốn bạn viết một chương trình để cấp thưởng đặc biệt cho tất cả nhân viên của ông ấy dựa trên số ID nhân viên của họ!

Có 100 nhân viên và số ID nhân viên của họ dao động từ 1 đến 100. Nếu số ID của nhân viên là:  

- Chia hết cho 3 - Nghỉ phép!  
- Chia hết cho 5 - Thưởng 100,000 đô la!  
- Chia hết cho cả 3 và 5 - JACKPOT! 1 triệu và một chiếc du thuyền!  
- Không chia hết cho 3 hoặc 5 - :(  

Viết một chương trình để lặp qua tất cả số ID và in phần thưởng của chúng.  
Đầu ra của hàm của bạn sẽ trông giống như sau:  

1 - :(  
2 - :(  
3 - Nghỉ phép!  
4 - :(  
5 - Thưởng 100,000 đô la!  
*/

Đáp án:

```javascript
function awardBonuses() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + " - JACKPOT! 1 Million and a Yacht!");
        } else if (i % 3 === 0) {
            console.log(i + " - Vacation!");
        } else if (i % 5 === 0) {
            console.log(i + " - $100,000 bonus!");
        } else {
            console.log(i + " - :(");
        }
    }
}

awardBonuses();
```

Giải thích:  
- Duyệt qua các số từ 1 đến 100.
- Kiểm tra nếu số chia hết cho cả 3 và 5, in ra "JACKPOT! 1 Million and a Yacht!".
- Nếu chỉ chia hết cho 3, in ra "Vacation!".
- Nếu chỉ chia hết cho 5, in ra "$100,000 bonus!".
- Nếu không chia hết cho 3 hoặc 5, in ra ":(".