const modal = document.getElementById('modal')
 const closebutton = document.getElementById('modal-close-btn');
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)
closebutton.addEventListener('click', function(){
    modal.style.display = 'none'
})
