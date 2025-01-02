function getdiscount(code) {
    let promo = promos.find(promo => promo.code === code)
    
    // console.log(promo) là không cần thiết trong môi trường sản xuất. Nên xóa hoặc chỉ sử dụng khi debug.
    console.log(promo)
    
    if (promo !== undefined && promo.isActive) {
      console.log(`You get a ${promo.amount}% discount!`)
      return promo.amount / 100;
    }
    return 0;
  }
  
  function calculatefinalprice(basePrice, userCode) {
    if (userCode) {
      const discount = getdiscount(userCode)
      const finalPrice = basePrice - basePrice * discount
      return finalPrice;
    } else {
      return basePrice;
    }
  }
  
  // Nếu mã khuyến mãi quá dài hoặc phức tạp, bạn có thể cân nhắc tách các đối tượng này ra một file riêng hoặc dùng API.
  const promos = [
    { code: 'TOTALLY10', amount: 10, isActive: true },
    { code: 'PLENTY20', amount: 20, isActive: false },
    { code: 'NIFTY50', amount: 50, isActive: true },
    { code: 'WHOPPING75', amount: 75, isActive: true },
    { code: 'YOLOFREE', amount: 100, isActive: false },
  ]
  