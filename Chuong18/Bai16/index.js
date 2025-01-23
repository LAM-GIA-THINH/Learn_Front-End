const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`
/*
Thử thách:
1. Kiểm soát phần tử "modal-text".
2. Làm sao để khi người dùng nhấn nút chấp nhận, 
   chuỗi HTML dưới đây được chèn vào phần tử div "modal-text".

<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Đang tải dữ liệu của bạn lên web tối...
    </p>
</div>
*/ 
})
 

