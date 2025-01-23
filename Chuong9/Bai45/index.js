// Tạo hai biến boolean, likesDocumentaries và likesStartups
// Sử dụng câu lệnh OR (||) để gọi recommendMovie() nếu một trong hai biến đó là true

let likesDocumentaries = true;
let likesStartups = false;

function recommendMovie() {
    console.log("Này, hãy xem bộ phim mới này mà chúng tôi nghĩ bạn sẽ thích!");
}

if (likesDocumentaries || likesStartups) {
    recommendMovie();
}
