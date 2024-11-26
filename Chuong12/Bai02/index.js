let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Tạo một hàm nhận một tham số duy nhất, là một mảng,
// và in ra tất cả các phần tử của mảng đó lên console.
// Gọi hàm và truyền vào myCourses làm đối số

function logItems(arr){
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

}

logItems(myCourses)