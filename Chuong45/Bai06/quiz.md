1. useEffect sử dụng những tham số nào?:
- Callback function (bắt buộc)
- Dependency array (tùy chọn)

2. Hàm useEffect chạy khi nào
- Sau mỗi lần render component
- Khi các dependency thay đổi (nếu có dependency array)
- Render lần đầu tiên của component

3. Giá trị trả về của hàm useEffect là gì?
- Không có giá trị trả về
- Có thể trả về một cleanup function (optional)

Ví dụ:
```javascript
useEffect(() => {
  // Side effect code
  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```