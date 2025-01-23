/*
Thử thách:
1. Tạo một hàm khởi tạo (constructor function) có tên là 'Character'.
2. Cung cấp cho nó các thuộc tính 'name' và 'collectedItemsArr'. 
    - 'name' sẽ chứa tên của nhân vật.
    - 'collectedItemsArr' sẽ chứa một mảng các vật phẩm. 
       Khởi tạo mảng này dưới dạng rỗng.
3. Tạo một phương thức 'addItem' nhận vào một vật phẩm làm tham số 
   và thêm nó vào 'collectedItemsArr'.
4. Phương thức addItem cần in ra một câu như 
   `Merlin hiện có: wand, map, potion`.
5. Kiểm tra tính năng bằng cách tạo một số đối tượng từ 
   Character và thêm vật phẩm vào mảng của chúng.
*/

function Character(name){
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function(item){
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const wizard = new Character('Merlin')
const witch = new Character('Hermione')
wizard.addItem('wand')
wizard.addItem('map')
wizard.addItem('potion')
witch.addItem('sword')
witch.addItem('cloak of invisibility')
