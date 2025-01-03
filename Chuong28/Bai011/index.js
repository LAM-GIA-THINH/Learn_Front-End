/**
 * Thử thách:
 * 
 * Kiểm tra trang web này để biết cách thay đổi header Content-Type
 * để chỉ ra rằng có JSON trong body của yêu cầu.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
 * 
 * Áp dụng header đó vào yêu cầu fetch của chúng ta, gửi nó và kiểm tra dữ liệu trả về.
 */


fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
    method: "POST",
    body: JSON.stringify({
        title: "Buy Milk",
        completed: false
    }),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then(res => res.json())
    .then(data => console.log(data))