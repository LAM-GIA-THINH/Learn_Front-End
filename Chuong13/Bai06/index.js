import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase,
    ref,
    push,
    onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
const firebaseConfig = {
    databaseURL: import.meta.env.VITE_DATABASE_URL,
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")
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
// Thử thách: Xuất một Snapshot cơ sở dữ liệu của bạn khi một giá trị mới được thêm vào nó
onValue(referenceInDB, function(snapshot) {
    console.log(snapshot.val())
})
deleteBtn.addEventListener("dblclick", function() {

})

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value.trim();
    if (!inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
        inputValue = `https://${inputValue}`;
    }
    push(referenceInDB, inputEl.value)
    inputEl.value = ""

})