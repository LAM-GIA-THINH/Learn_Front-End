function checkInputs() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postcode = document.getElementById('postcode').value;
    const email = document.getElementById('email').value;
    const yesRadio = document.getElementById('yes').checked;
    const noRadio = document.getElementById('no').checked;

    // Kiểm tra xem tất cả các trường đã được điền (truthy) và ít nhất một nút radio được chọn
    const allFilled = name && address && city && postcode && email && (yesRadio || noRadio);
    
    if (allFilled) {
        popoverMessage.style.opacity = '0';
    }
    
    document.getElementById('submitButton').disabled = !allFilled;
    return allFilled
}

// Các sự kiện lắng nghe cho mỗi trường đầu vào
document.getElementById('name').addEventListener('input', checkInputs);
document.getElementById('address').addEventListener('input', checkInputs);
document.getElementById('city').addEventListener('change', checkInputs);
document.getElementById('postcode').addEventListener('input', checkInputs);
document.getElementById('email').addEventListener('input', checkInputs);
document.getElementById('yes').addEventListener('change', checkInputs);
document.getElementById('no').addEventListener('change', checkInputs);

// Các sự kiện click thường tương thích với người dùng chuột, bàn phím, và màn hình cảm ứng. 
// Tương tự, focus và blur có thể thay thế hiệu quả mouseover và mouseout

// Đối với người dùng màn hình cảm ứng, các sự kiện như touchstart có thể được sử dụng