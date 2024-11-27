//Tạo project mới trên firebase
//Copy các dòng code import, firebaseconfig (ko copy nội dung bên trong) và const app
//Tạo realtime database
//copy url database
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    // databaseURL: "https://leads-tracker-app-2c92b-default-rtdb.asia-southeast1.firebasedatabase.app/"
    databaseURL: import.meta.env.VITE_DATABASE_URL,
}
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
//console.log(app)
// console.log(database)
console.log(firebaseConfig.databaseURL)
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)        
    })
})

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
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value.trim();
    // Đảm bảo link chứa 'http://' or 'https://'
    if (!inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
        inputValue = `https://${inputValue}`;
    }
    myLeads.push(inputValue)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})