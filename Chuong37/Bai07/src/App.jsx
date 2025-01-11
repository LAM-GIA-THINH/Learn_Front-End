import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)
    
  /**
   * Thử thách:
   * Thay vì ghi dữ liệu vào console, lưu nó vào state
   * và hiển thị nó lên trang. (Chỉ cần thay thế đối tượng mã
   * cứng bên trong phần tử `<pre>` bằng dữ liệu)
   */
    
    console.log("Rendered!")
    //Vì sao lỗi console vô tận ?
    // Lỗi "console.log vô tận" trong mã của bạn xuất phát từ cách mà fetch được gọi trong component. 
    // Cụ thể, mỗi khi component được render, đoạn mã fetch sẽ được thực thi lại, gây ra một vòng lặp vô tận. 
    // Điều này xảy ra vì bạn đang gọi fetch trực tiếp trong phần body của component, không có bất kỳ cơ chế kiểm soát
    // nào để ngừng gọi fetch khi dữ liệu đã được tải.

    // Để giải quyết vấn đề này, bạn cần sử dụng useEffect, một hook trong React 
    // để thực hiện hành động như fetch chỉ một lần khi component lần đầu được render 
    // (hoặc khi có sự thay đổi vào một giá trị cụ thể). 
    // Điều này sẽ giúp tránh việc gọi fetch mỗi khi component render lại.   
    fetch("https://swapi.py4e.com/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    
        return (
          <div>
              <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
          </div>
      )
}