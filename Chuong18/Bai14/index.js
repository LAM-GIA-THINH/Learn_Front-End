const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})


consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('form submitted')
})

/*
Thử thách:
1. Kiểm soát phần tử biểu mẫu (form).
2. Thêm một eventListener vào biểu mẫu để lắng nghe sự kiện 
   "submit".
3. Khi người dùng nhấn "Chấp nhận", ngăn chặn hành vi mặc định 
   gây ra việc tải lại trang.
4. Hiển thị log "form submitted" trong console.
*/  

