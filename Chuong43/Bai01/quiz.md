**Q: Các giá trị "falsy" trong JavaScript là gì?**

**A:** Giá trị "falsy" trong JavaScript là những giá trị được coi là **false** khi chuyển đổi sang kiểu Boolean. Bao gồm:

if(null) {
    console.log('null')
}

if(undefined) {
    console.log('undefined')
}

const arr = [];

if(arr.length > 0) {
    console.log('0')
}

const word = '';

if(word.length > 0) {
    console.log('empty')
}

if(false) {
    console.log('false')
}
