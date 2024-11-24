let age = 67;

// Nhỏ hơn 6 tuổi       -> miễn phí
// Từ 6 đến 17 tuổi     -> giảm giá trẻ em
// Từ 18 đến 26 tuổi    -> giảm giá sinh viên
// Từ 27 đến 66 tuổi    -> giá đầy đủ
// Trên 66 tuổi         -> giảm giá người cao tuổi

// Tạo một câu lệnh điều kiện (if/else/else if) để xuất ra loại giảm giá
// mà hành khách sẽ nhận được dựa trên giá trị của biến age

// if(age<6){
//     console.log("Miễn Phí");
// }else if(age < 18){
//     console.log("Giảm giá trẻ em");
// } else if(age < 27){
//     console.log("Giảm giá sinh viên");
// }else if(aage < 67){
//     console.log("Giá gốc");
// } else{
//     console.log("Giảm giá người cao tuổi");
// }

let result = (age<6) ? console.log("Miễn Phí") : (age < 18) ? console.log("Giảm giá trẻ em") : (age < 27)
         ?console.log("Giảm giá sinh viên"): (aage < 67) ? console.log("Giá gốc") : console.log("Giảm giá người cao tuổi")