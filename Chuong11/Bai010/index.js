let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function() {
    // Thêm giá trị từ inputEl vào mảng myLeads 
    // thay vì giá trị cố định "www.awesomelead.com"
    // Google -> "lấy giá trị từ trường nhập liệu trong javascript"
    myLeads.push(inputEl.value)
    console.log(myLeads);
});
