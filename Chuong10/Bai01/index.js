// Tạo một đối tượng person với ba thuộc tính: name, age và country.
// Sử dụng bản thân làm ví dụ để gán giá trị cho name, age và country.

// Tạo một hàm logData(), hàm này sẽ sử dụng đối tượng person
// để tạo ra một chuỗi theo định dạng sau:
// "Elliot năm nay 22 tuổi và sống ở Mỹ"

// Gọi hàm logData() để kiểm tra xem nó hoạt động đúng không
let person = {name: "Elliot",
    age: 22,
    country: "Hoa Kỳ"
}

function logData(){
    console.log(`${person.name} năm nay ${person.age} tuổi và sống ở ${person.country}`);
}

logData()