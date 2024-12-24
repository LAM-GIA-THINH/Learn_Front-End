const dreamHoliday = {
    destination: 'Austin, Texas',
    activity: 'visit the Tesla HQ',
    accommodation: 'luxury ranch',
    companion: 'Elon Musk'
}

const { destination, activity, accommodation, companion } = dreamHoliday

console.log(`I would love to go to ${destination} to ${activity}. 
     I'd sleep in a ${accommodation} and hang out with ${companion} all day.`)

/* 
Thử thách
1. Hoàn thiện đối tượng dreamHoliday với thông tin
   phù hợp với bạn. Bạn có thể thêm các thuộc tính mới 
   hoặc thay đổi các thuộc tính hiện có.
2. Phân rã (destructure) đối tượng và sử dụng các biến
   đã phân rã để tạo một hoặc nhiều câu nói về
   kỳ nghỉ mơ ước của bạn.
   
Vd. "I would love to go to Austin, Texas to visit the Tesla HQ. 
     I'd sleep in a luxury ranch and hang out with Elon Musk all day."
*/