const continueBtn = document.getElementById('continue-btn')
const acceptTerms = document.getElementById('accept-terms')
const acceptMail = document.getElementById('accept-mail')

continueBtn.addEventListener('click', function(){
    
/*
Thử thách:
1. Thêm một checkbox thứ hai để xem người dùng
   có muốn được thêm vào danh sách gửi thư không.
2. Nếu họ đồng ý, hiển thị "Mail accepted" khi 
   nhấn nút tiếp tục. Nếu họ không đồng ý, hiển thị 
   "Mail not accepted."
*/
    if (acceptTerms.checked){
        console.log("Terms accepted!")    
    }
    else{
        console.log("Terms refused!")         
    }
    
    if (acceptMail.checked){
        console.log("Mail accepted")
    }
    else{
        console.log("Mail refused")
    }
    
})