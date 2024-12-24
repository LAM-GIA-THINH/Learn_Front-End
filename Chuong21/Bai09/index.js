const filmInput = document.getElementById('film-input')
const addBtn = document.getElementById('add-btn')
const filmList = document.getElementById('film-list')

addBtn.addEventListener('click', function() {
    const newFilm = document.createElement('div')
    newFilm.classList.add('film-item')
    newFilm.textContent = filmInput.value
    filmList.appendChild(newFilm)
    filmInput.value = ''
}) 
/*
Thử thách:
1. Tìm cách thêm một bộ phim được nhập vào danh sách 
mà không cho phép mã JavaScript độc hại được thực thi.
2. Thực hiện điều đó.
*/