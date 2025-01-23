const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline-btn')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
}) 

/*   
Thử thách: 
1. Kiểm soát nút "Từ chối". (Bạn cần làm gì để 
   có thể thực hiện điều đó?)
2. Thiết lập một eventListener được kích hoạt 
   khi con trỏ chuột của người dùng di chuyển 
   qua nút "Từ chối". (Tìm kiếm sự kiện này để 
   lắng nghe nó!)
3. Hiện tại, chỉ cần hiển thị "hovered" trong 
   console khi điều đó xảy ra.
*/ 


declineBtn.addEventListener('mouseenter', function(){
    console.log('hovered')
})


consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')
    
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Making the sale...`
    }, 1500)
    
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `
    modalCloseBtn.disabled = false
    }, 3000)
  
}) 
