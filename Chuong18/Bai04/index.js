const revealBtn = document.getElementById('reveal-btn')
const answer = document.getElementById('answer')
const question = document.getElementById('question')

revealBtn.addEventListener('click', function(){
    answer.style.display = 'block'
    question.style.color = '#1434A4'
    question.style.backgroundColor = '#68e1fd'
    revealBtn.style.display = 'none'
})
/*
Thách thức:
1. Khi nút được nhấn và câu trả lời được hiển thị, 
   thay đổi màu nền thành #68e1fd và màu chữ 
   thành #1434A4 chỉ trong div "question".
   ⚠️ Bạn sẽ gặp phải một vấn đề với màu nền. Hãy thử tìm 
   giải pháp bằng cách tìm kiếm trên Google.
2. Khi câu trả lời được hiển thị, làm cho nút biến mất.
*/
