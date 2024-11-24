const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function copyText(button) {
    const textToCopy = button.textContent;

    navigator.clipboard.writeText(textToCopy) 
        .then(() => {
            button.style.backgroundColor = "#47e182"; 
            button.style.transform = "scale(0.9)"; 
            button.style.transition = "all 0.1s ease";  
            setTimeout(() => {
                button.style.backgroundColor = "#263548";  
                button.style.transform = "scale(1)";  
            }, 200); // Reset after 0.2 second
        })
        .catch(err => {
            console.error("Error copying text: ", err);
        });
}

function generatePasswords() {
    let password1 = generatePassword();
    let password2 = generatePassword();
    document.getElementById("btn-1").textContent = password1;
    document.getElementById("btn-2").textContent = password2;
    
}

function generatePassword() {
    let password = ""
    for(i=0;i<16;i++){
        const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
        password += randomCharacter
    }
    return password
}