let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
});

// 1. Tạo một biến, listItems, để chứa tất cả HTML cho các mục trong danh sách
// Gán cho nó một chuỗi rỗng ban đầu
let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
    // 2. Thêm mục vào biến listItems thay vì sử dụng ulEl.innerHTML
    listItems += "<li>" + myLeads[i] + "</li>";
}
// 3. Hiển thị listItems vào bên trong danh sách không có thứ tự bằng cách sử dụng ulEl.innerHTML
ulEl.innerHTML = listItems;
