let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Thêm giá trị "www.awesomelead.com" vào myLeads khi nút nhập liệu được nhấn

inputBtn.addEventListener("click", function() {
    myLeads.push("www.awesomelead.com")
    console.log("Button clicked!");
});
