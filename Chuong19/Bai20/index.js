// Chúng ta có thể dễ dàng hơn trong việc nhắm mục tiêu các pseudo elements như :checked
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', function(){
    const checkedRadio = document.querySelector('input[type="radio"]:checked')
    console.log(checkedRadio.value)
})

/*
Thử thách:
1. Bài tập rèn luyện trí nhớ: hiển thị 
   giá trị của tùy chọn radio được chọn 
   trong console.
*/
