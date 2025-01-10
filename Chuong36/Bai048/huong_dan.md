Tạo tài khoản Claude AI và lấy key API
Tạo tài khoảng hugging face và làm tương tự 

Để chèn API key của Claude vào dự án React một cách an toàn, tôi khuyến nghị các bước sau:

1. Đầu tiên, tạo file `.env` trong thư mục gốc của dự án (cùng cấp với package.json). Tôi thấy bạn đang sử dụng Vite nên cần đặt tên biến môi trường bắt đầu bằng `VITE_`:
VITE_ANTHROPIC_API_KEY= key của bạn
VITE_HF_ACCESS_TOKEN= key của bạn

2. Đảm bảo `.env` đã được thêm vào `.gitignore` để không push API key lên git. Tôi thấy bạn đã có file `.gitignore`, hãy thêm dòng này vào:

4. Cài đặt SDK:
npm install @anthropic-ai/sdk
npm install @huggingface/inference
5. Setup .env


Một số lưu ý quan trọng:
- Nhớ thêm `.env` vào `.gitignore`
- Không bao giờ commit API key lên repository
- Nếu làm việc trong team, tạo file `.env.example` với các biến môi trường mẫu (không có giá trị thật)
- Chỉ những biến bắt đầu bằng `VITE_` mới có thể truy cập được từ code frontend trong Vite
- CẦN TRẢ $5 ĐỂ DÙNG DC API CỦA CLAUDE