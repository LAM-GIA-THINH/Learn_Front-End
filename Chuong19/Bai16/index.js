document.addEventListener('click', function(e){
    /*
    Thử thách:
    1. Xóa lớp "unread" khỏi phần tử cha của phần tử được nhấp.
    */
        document.getElementById(e.target.id).parentElement.classList.add('read')
        document.getElementById(e.target.id).parentElement.classList.remove('unread')
    })
    