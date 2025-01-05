fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=kjhgdsfljhalskjdhflaksdjhflkjhasdf")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        /**
         * Thách thức: Lấy một URL cho hình nền mặc định và đặt nó ở đây
         * 
         * 1. Thay đổi phần "query" trong URL ở trên thành một từ khóa có ý nghĩa
         * 2. Ghi URL của hình ảnh vào console (thay thế cho console.log(data) ở trên)
         * 3. Sử dụng URL đó làm hình nền "mặc định" sẽ được dùng nếu 
         *    promise bị từ chối.
         */
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
        // Báo lỗi về server
    })
