fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        throw Error("I'm an error!")
        // document.body.style.backgroundImage = `url(${data.urls.regular})`
		// document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        console.log("Something went wrong! 😭")
        // Nơi bắt lỗi
        // Chọn một ảnh mặc định
    })

    // **Khi nào một promise bị từ chối?**

    // Một promise sẽ bị từ chối nếu một lỗi được 
    // phát sinh trong bất kỳ khối `.then()` 
    // nào hoặc nếu lập trình viên gọi thủ công `Promise.reject()`.