import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
//đổi rule database thành true
const firebaseConfig = {
    databaseURL: import.meta.env.VITE_DATABASE_URL,
}
//Thử thách: Tạo một hằng số có tên là 'referenceInDB' và sử dụng hàm ref 
//để tạo một tham chiếu có tên là 'leads' trong cơ sở dữ liệu.
const referenceInDB = ref(database, "leads")
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {

})

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value.trim();
    if (!inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
        inputValue = `https://${inputValue}`;
    }
    // Thử thách: Nhập (import) hàm push và sửa đổi dòng mã phía trên để đẩy (push) inputEl.value 
    // vào referenceInDB trong cơ sở dữ liệu.
    push(referenceInDB, inputEl.value)
    inputEl.value = ""

})