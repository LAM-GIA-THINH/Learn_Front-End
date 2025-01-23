let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// 1. Lưu một cặp key-value trong localStorage
// 2. Refresh trang. Lấy dữ liệu ra và in ra console
// 3. Dọn localStorage

// Gợi ý:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: cả key và giá trị đều là chuỗi

localStorage.setItem("myName", "Elliot Alderson")

let name = localStorage.getItem("myName")
console.log(name)

localStorage.clear()

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
