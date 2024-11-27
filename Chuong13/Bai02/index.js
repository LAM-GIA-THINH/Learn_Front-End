import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    // databaseURL: "https://leads-tracker-app-2c92b-default-rtdb.asia-southeast1.firebasedatabase.app/"
    databaseURL: import.meta.env.VITE_DATABASE_URL,
}
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
//Xóa các dòng code liên quan đến nút tab và localstorage, myLeads

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

    inputEl.value = ""

})