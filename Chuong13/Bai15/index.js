import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase,
    ref,
    push,
    onValue,
    remove } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
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
onValue(referenceInDB, function(snapshot) {
    //Chỉ chạy code nếu snapshots tồn tại
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const chores = Object.values(snapshotValues)
        render(chores)
    }     
})
deleteBtn.addEventListener("dblclick", function() {
// Thử thách: Import 'remove' và gọi nó vào đây để xóa leads
    remove(referenceInDB)
// Thử thách: Xóa tất cả leads từ ulEl
    ulEl.innerHTML=""
})

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value.trim();
    if (!inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
        inputValue = `https://${inputValue}`;
    }
    push(referenceInDB, inputEl.value)
    inputEl.value = ""

})