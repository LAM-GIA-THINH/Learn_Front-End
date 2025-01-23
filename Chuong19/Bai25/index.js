const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adults = ages.filter(function(age){
/*
Thử thách:
1. Loại bỏ câu lệnh if và giảm thiểu logic trong hàm này xuống chỉ còn một dòng mã.
    if (age >= 18){
        return true
    }
*/

    return age >= 18
})

console.log(adults)

/*
Thử thách:
1. Sử dụng phương thức .filter để tạo một mảng 
   gọi là "children" chứa tất cả các độ tuổi 
   dưới 18.
*/


const children = ages.filter(function(age){
    return age < 18 
})

console.log(children)