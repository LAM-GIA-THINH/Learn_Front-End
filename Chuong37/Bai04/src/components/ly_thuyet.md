### **Controlled và Uncontrolled Component trong React**

#### **Uncontrolled Component**
- Là các phần tử form (ví dụ: `input`, `textarea`) không do React kiểm soát.  
- **Quản lý giá trị**: Giá trị của chúng được trình duyệt quản lý nội bộ.  
- **Hoạt động**: Khi bạn nhập liệu vào một `input` không được React kiểm soát, trình duyệt tự lưu trữ và hiển thị giá trị đó mà không thông qua state của React.

#### **Controlled Component**
- Là các phần tử form mà **React hoàn toàn kiểm soát**.
- **Đặc điểm:**
  1. **Giá trị hiển thị**: Giá trị của `input` được thiết lập và đồng bộ với state của React.  
  2. **Cập nhật state**: Khi người dùng thay đổi giá trị trong `input`, React cập nhật state tương ứng thông qua event handler (ví dụ: `onChange`).

#### **Tại sao dùng Controlled Component?**
- React duy trì **state là nguồn sự thật duy nhất** (single source of truth).  
- Sử dụng uncontrolled component dẫn đến nhiều nguồn sự thật khác nhau, gây khó khăn trong quản lý và đồng bộ hóa dữ liệu.  
- Controlled component đảm bảo tính nhất quán và dễ kiểm soát dữ liệu hơn.

### **Cách tạo Controlled Component**
1. **Cập nhật state**:  
   - Thêm một event handler, ví dụ `onChange`, để cập nhật state khi giá trị trong `input` thay đổi.  

2. **Thiết lập giá trị**:  
   - Gán giá trị của `input` bằng state hiện tại, ví dụ: `value={state.value}`.


### **Ứng dụng thực tế:**
- Trong dự án **Meme Generator**, các input box như "top text" và "bottom text" được thiết kế thành controlled component.  
- **Lợi ích:** React kiểm soát toàn bộ giá trị của chúng và đồng bộ hóa với state của ứng dụng.

#### **Sử dụng `name` Property để đơn giản hóa:**
- Thay vì tạo nhiều event handler cho từng input, bạn có thể sử dụng thuộc tính `name` để xác định state nào cần cập nhật.


### **Tóm lại:**
- **Controlled Component**:
  - Đồng bộ hóa dữ liệu giữa form và state của React.  
  - Dễ quản lý và đảm bảo tính nhất quán.  
- **Uncontrolled Component**:
  - Dữ liệu do trình duyệt quản lý.  
  - Ít kiểm soát hơn, không phản ánh trực tiếp state của React.

Controlled component là cách tiếp cận quan trọng để xây dựng các form phức tạp và đảm bảo tính nhất quán dữ liệu trong ứng dụng React.