Câu hỏi:  
/* toTitleCase  
Viết một hàm sẽ viết hoa chữ cái đầu của mỗi từ trong một câu.  

Ví dụ đầu vào: "everything, everywhere, all at once"  
Ví dụ đầu ra: "Everything, Everywhere, All At Once"  
*/

/*  
Đầu tiên, viết một hàm nhận vào một từ và  
viết hoa chữ cái đầu tiên của từ đó.

Ví dụ đầu vào: "scrimba"  
Ví dụ đầu ra: "Scrimba"

Gợi ý: Hãy thử sử dụng slice() và .toUpperCase()
*/

function capitalizeWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/*  
Bây giờ, viết một hàm viết hoa mỗi từ trong câu.  
Làm thế nào bạn có thể tái sử dụng hàm mà bạn vừa viết?  
*/ 

function toTitleCase(str){
    return str.split(' ').map(capitalizeWord).join(' ');
}

// Kiểm tra các hàm
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
```

Giải thích:
- `capitalizeWord`: Hàm này nhận một từ, viết hoa chữ cái đầu tiên và viết thường phần còn lại.
- `toTitleCase`: Hàm này chia câu thành các từ, gọi hàm `capitalizeWord` cho từng từ, rồi nối lại chúng thành một câu hoàn chỉnh.

Kết quả kiểm tra:
- `capitalizeWord("pumpkin")` sẽ trả về "Pumpkin".
- `toTitleCase("pumpkin pranced purposefully across the pond")` sẽ trả về "Pumpkin Pranced Purposefully Across The Pond".