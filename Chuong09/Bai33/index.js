let player1Time = 102
let player2Time = 107

// Hàm trả về thời gian nhanh nhất trong cuộc đua
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// Hàm trả về tổng thời gian cuộc đua
function getTotalRaceTime() {
    return player1Time + player2Time
}

// Gọi hàm và lưu kết quả vào biến
let totalRaceTime = getTotalRaceTime()

// In ra tổng thời gian cuộc đua
console.log(totalRaceTime)
