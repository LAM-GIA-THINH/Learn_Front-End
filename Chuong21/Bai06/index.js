import { playlistArr } from './playlist.js'

/*
Thử thách
1. Sử dụng phương thức .join() để loại bỏ
   những dấu phẩy khó chịu đó!
⚠️ Bạn sẽ cần kết hợp hai phương thức
   với nhau để hoàn thành thử thách.
*/

const playlistHtml = playlistArr.map(function(track){
    return `
    <section class="card">
        <div class="card-start">
            <img src="./images/${track.albumArt}">
        </div>
            <div class="card-mid">
                <h4 class="card-title">${track.title}</h4>
                <p class="card-artist">${track.artist}</p>
            </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>
    `
}).join('')

document.getElementById('container').innerHTML = playlistHtml
