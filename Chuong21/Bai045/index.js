//debug code này
// function addTouristSurcharge(payment) {
//     console.log(payment + 10)
// }

// addTouristSurcharge('60')

function addTouristSurcharge(payment) {
    try {
        if (typeof payment === 'number') {
            console.log(payment + 10)
        } else {
            throw new ReferenceError('payment is not a number')
        }
    } catch (err) {
        console.error('Error: ' + err)
    }
}

addTouristSurcharge('60')

// Các tùy chọn debug nâng cao

// Điểm dừng (Breakpoints):
// Chạy code cho đến khi gặp điểm dừng, cho phép bạn xem những gì xảy ra cho đến điểm đó.
// Trình theo dõi (Watchers):
// Theo dõi giá trị của các biến hoặc biểu thức theo thời gian khi bạn từng bước qua code của mình.