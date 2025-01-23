let myLeads = `["www.awesomelead.com"]`

// 1. Chuyển chuỗi myLeads thành một mảng
myLeads = JSON.parse(myLeads)
// 2. Thêm một giá trị mới vào mảng
myLeads.push("www.lead2.com")
// 3. Chuyển mảng thành chuỗi lại
myLeads = JSON.stringify(myLeads)
// 4. Console.log chuỗi và sử dụng typeof để kiểm tra kiểu dữ liệu là chuỗi
console.log(typeof myLeads)


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

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
