/*
Thách thức:
1. Kiểm soát div 'modal' bằng JavaScript.
2. Thay thế câu lệnh console.log bằng một dòng mã
   để thay đổi thuộc tính CSS 'display' của modal thành 'inline'.
*/

const modal = document.getElementById('modal')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)