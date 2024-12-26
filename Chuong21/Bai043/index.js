/*
Thử thách:
Xây dựng lại hàm khởi tạo này dưới dạng một lớp (class).
*/


// function Character(name) {
//     this.name = name
//     this.collectedItemsArr = []
//     this.addItem = function (item) {
//         this.collectedItemsArr.push(item)
//         console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
//     }
// }

class Character {
    constructor(name) {
        this.name = name
        this.collectedItemsArr = []
    }
    
    addItem(item){
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)    
    }
}

const wizard = new Character('Merlin')
const witch = new Character('Hermione')
wizard.addItem('a wand')
wizard.addItem('a map')
wizard.addItem('a rope')
witch.addItem('a map')
witch.addItem('a rope')
