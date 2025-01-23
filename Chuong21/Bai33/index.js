// const jobHunter = {
//     // name: 'Tom Chant',
//     username: 'TChant44',
//     workLocation: 'Europe',
//     }
    
/*
Thách thức:
1. Làm sao để nếu đối tượng jobHunter không có thuộc tính name, 
   thì thuộc tính username sẽ được sử dụng thay thế.
*/
    
// Hoàn thành dòng code này 👇
//const jobHunterName = 
// const jobHunterName = jobHunter.name || jobHunter.username

// console.log(`Hey ${jobHunterName}!`)

const jobHunter = {
    name: 'Tom Chant',
    username: 'TChant44',
    workLocation: 'Europe',
    }

console.log(`Hey ${jobHunter.name || jobHunter.username}!`)