1. **Route/URL parameter là gì?**
Một phần trong đường dẫn (path) của route, là vị trí chờ đợi để chứa giá trị thực tế sẽ xuất hiện trong URL của trang.

------------
2. **Thêm một tham số route có tên là `productId` vào đường dẫn Route dưới đây:**

```jsx
<Route path="/products/:productId" element={<ProductDetail />} />
```

------------
3. **Thêm những gì cần thiết để hiển thị tham số route trong thẻ <h1> như sau:**

```jsx
import { useParams } from "react-router-dom"

function ProductDetail() {
    const { productId } = useParams()
    return <h1>Product id is {productId}</h1>
}
```