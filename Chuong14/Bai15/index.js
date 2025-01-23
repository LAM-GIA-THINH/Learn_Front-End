function sendMessage() {
    // Lấy button
    const button = document.getElementById('submitButton');
    
    // Thay button với paragraph
    button.outerHTML = '<p id="submitMessage" class="submit-message" aria-live="polite">Message sent! ✅</p>';
    
    // Lấy home link và thêm focus 
    document.getElementById('homeLink').focus();
}

// Thách thức của bạn: 
// 1. Cập nhật code để khi nhấn nút gửi (submit), thông báo mới xuất hiện được 'thông báo lịch sự' (polite) thông qua thuộc tính ARIA.
// 2. Thêm tiêu điểm (focus) vào liên kết về trang chủ khi người dùng gửi tin nhắn 
//bằng cách chọn đúng phần tử và thêm ".focus()" vào nó.





