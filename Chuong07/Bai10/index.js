let lapsCompleted = 0;

// Tạo một hàm để tăng biến lapsCompleted lên 1
function incrementLaps() {
    lapsCompleted += 1; // Tăng giá trị lên 1
}

// Chạy hàm ba lần
incrementLaps();
incrementLaps();
incrementLaps();

// In ra giá trị của lapsCompleted
console.log(lapsCompleted);
