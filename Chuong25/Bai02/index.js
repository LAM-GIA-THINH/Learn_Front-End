/* Thử thách: Review code dưới dạng văn bản.
Đưa ra phản hồi bằng cách sử dụng các chú thích trong mã. */

/* Hãy chú ý hơn đến việc thụt dòng và tính nhất quán của dấu chấm phẩy */

/* Tên hàm sẽ dễ đọc hơn nếu viết theo camelCase: getDiscount */
function getdiscount(code) {
    /* Chuyển giá trị của code thành chữ in hoa trước khi
    tìm một mã khuyến mãi phù hợp */
    
    /* Khai báo promo với const để tránh việc gán lại giá trị */
    let promo = promos.find(promo => promo.code === code)
    console.log(promo) // Không đưa vào mã sản xuất
    
    /* Làm cho điều kiện này gọn hơn mà không cần so sánh !==;
    chỉ kiểm tra nếu promo có giá trị và đang hoạt động: promo && promo.isActive */
    if (promo !== undefined && promo.isActive) {
      // Cân nhắc loại bỏ trong mã sản xuất
      console.log(`Bạn được giảm giá ${promo.amount}%!`)
      return promo.amount / 100;
  }
  return 0;
  }
  
  /* Tên hàm sẽ dễ đọc hơn nếu viết theo camelCase: calculateFinalPrice */
  function calculatefinalprice(basePrice, userCode) {
    /* Tương tự như getDiscount, cân nhắc bỏ khối else và
    trả về basePrice nếu điều kiện sai */
    if (userCode) {
      const discount = getdiscount(userCode)
      const finalPrice = basePrice - basePrice * discount
      return finalPrice;
    } else {
      return basePrice;
    }
  }
  
  /* Di chuyển mảng này lên đầu file
  để tổ chức mã tốt hơn */
  const promos = [
    { code: 'TOTALLY10', amount: 10, isActive: true },
    { code: 'PLENTY20', amount: 20, isActive: false },
    { code: 'NIFTY50', amount: 50, isActive: true },
    { code: 'WHOPPING75', amount: 75, isActive: true },
    { code: 'YOLOFREE', amount: 100, isActive: false },
  ]
  
  console.log(calculatefinalprice(500.10, 'TOTALLY10'))
  