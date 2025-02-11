fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

/**
 * Thách thức: Lấy dữ liệu hiện tại về một loại tiền điện tử từ danh sách dưới đây:
 *    * bitcoin
 *    * dogecoin
 *    * ethereum
 *    * litecoin
 * 
 * 1. Tìm kiếm tài liệu API để tìm một endpoint sẽ cung cấp 
 *    cho bạn "dữ liệu hiện tại cho một đồng tiền"
 *    (https://www.coingecko.com/api/documentations/v3#/)
 * 
 * 2. Thực hiện một yêu cầu thử nghiệm từ tài liệu API và xem qua 
 *    dữ liệu để tìm bất kỳ thông tin thú vị nào mà bạn có thể sử dụng 
 *    trong bảng điều khiển.
 */
