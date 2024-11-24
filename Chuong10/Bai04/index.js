let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// Bạn cần giúp tôi sửa mảng largeCountries sao cho 
// China và Pakistan được thêm lại vào đúng vị trí của chúng

// Sử dụng các phương thức push() & pop() và các phương thức tương ứng unshift() & shift()
// Hãy tra Google cách sử dụng unshift() và shift()

// Xóa phần tử không đúng ở đầu và cuối mảng
largeCountries.shift(); // Xóa "Tuvalu"
largeCountries.pop();   // Xóa "Monaco"

// Thêm "China" vào đầu mảng và "Pakistan" vào cuối mảng
largeCountries.unshift("China");
largeCountries.push("Pakistan");

console.log(largeCountries);
// Kết quả: ["China", "India", "USA", "Indonesia", "Pakistan"]