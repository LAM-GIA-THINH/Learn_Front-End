import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
  
const cars = [
    {
    brand: 'Nissan',
    model: 'Leaf',
    price: 3000,
    uuid: '4fb2b6b7-c7ee-4c80-8de1-390e89f43d7f'
    }, 
    {
    brand: 'Toyota',
    model: 'Prius',
    price: 6000,
    uuid: '82a13f62-d239-46a2-a94f-020189338e1a'
    }, 
] 

cars.push({
    brand: 'Tesla',
    model: 'Model S',
    price: '🤦‍♂️',
    uuid: uuidv4()
})

console.log(cars)

// UUID là gì?

// Một chuỗi 36 ký tự: UUID được biểu diễn bằng một chuỗi gồm 36 ký tự, 
// thường là các chữ số và chữ cái.

// Thường được sử dụng để định danh các phần dữ liệu: UUID được dùng để 
// gán một mã định danh duy nhất cho từng phần dữ liệu, giúp phân biệt và quản lý chúng một cách hiệu quả.

// Rất có khả năng duy nhất trên toàn cầu: UUID được thiết kế sao cho 
// khả năng trùng lặp giữa các UUID khác nhau là cực kỳ thấp, đảm bảo tính duy nhất của mỗi mã định danh.

// Bài hiện tại đang dùng uuid ver cũ, thường thì nên dùng ver mới