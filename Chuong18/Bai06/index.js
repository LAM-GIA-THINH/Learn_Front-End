/*
Thách thức:
1. Kiểm soát nút đóng.
2. Sử dụng một event listener để thiết lập thuộc tính display 
   của modal thành 'none' khi nút đóng được nhấn.
*/

const modal = document.getElementById('modal')
 const closebutton = document.getElementById('modal-close-btn');
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)
closebutton.addEventListener('click', function(){
    modal.style.display = 'none'
})
