const generatePasswordBtn = document.querySelector('.generate-passwords-btn')
const displayPasswords = document.querySelector('.display-passwords-container')
const displayPassword = document.querySelectorAll('.pw-display')
const changePasswordLength = document.querySelector('.change-password-length')

// Kiểm tra giá trị của changePasswordLength.min để đảm bảo hợp lệ
// Cần kiểm tra giá trị của changePasswordLength.min để tránh trường hợp không phải là một số hợp lệ
let num = changePasswordLength.min  // Lỗi có thể xảy ra nếu min không phải là số hợp lệ

const characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
]
    
function generatePassword(num=8){
  const pwArr =[]
      
    for(let j=1; j <=4; j++){
           let resultStr=""
      for(let i=1; i <= num; i++){
    const randomIndex = Math.floor(Math.random() * characters.length) 
    resultStr += characters[randomIndex]
   }
         pwArr.push(resultStr) 
      }
       return pwArr
     }

   let num = changePasswordLength.min 
   changePasswordLength.value = num
   changePasswordLength.addEventListener('input' , () =>  num = changePasswordLength.value)
   
// Tên hàm generatePassword có thể đổi thành generatePasswords vì nó tạo ra nhiều mật khẩu
// Cần kiểm tra và đổi tên hàm thành generatePasswords để chính xác hơn
function renderPassword(){
    let passwords =  generatePassword(num)
   //console.log(passwords)  // Có thể bỏ qua dòng này khi không cần thiết nữa
   //console.log(displayPassword)  // Cũng xóa nếu không sử dụng
    for(let i=0; i < displayPassword.length; i++){
   // Sử dụng vòng lặp for với i bắt đầu từ 0 thay vì từ 1 vì mảng bắt đầu từ chỉ mục 0
   // Tên biến pwArr có thể đổi thành passwords để rõ nghĩa hơn
   displayPassword[i].textContent = passwords[i]
   }
}

generatePasswordBtn.addEventListener('click' , renderPassword)
