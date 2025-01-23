const usersArray = [
    {
        userName: 'Tom',
        password: '123456'
    }
]

const userObj = usersArray[0]

userObj.userName = 'Wayne'

console.log(usersArray)
console.log(userObj)

// Dù là bản userObj là copy nhưng lúc in ra userArray lại là Wayne vì nó là shallow copy chia cùng 1 memory