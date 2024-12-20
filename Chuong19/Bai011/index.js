// const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []
    
addItemBtn.addEventListener('click', function(){
/*
Thách thức:
1. Thêm một câu lệnh if else vào trong hàm xử lý sự kiện.
2. Chỉ thêm một mục vào mảng shoppingList nếu nó 
   chưa có trong mảng shoppingList.
3. Nếu mục là bản sao, hãy xóa trường nhập liệu
   và ghi ra "không có mục trùng lặp".
*/

        if(shoppingList.includes(itemInput.value)){
            console.log('no duplicates')
        }
        else{
            shoppingList.push(itemInput.value)
            render()        
        }
        itemInput.value = '' 
})

function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()

