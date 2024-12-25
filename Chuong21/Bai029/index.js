function getLabelsHtml(text, sender, ...staffObjs) {
/*
Thử thách:
1. Thêm các tham số.
2. Cập nhật mẫu HTML ở những chỗ bạn
   thấy **NAME**.
3. Trả về mẫu HTML cho mỗi nhãn.
*/


// `<div class="label-card">
//     <p>Dear **NAME** </p>
//     <p>${text}</p>
//     <p>Best wishes,</p>
//     <p>${sender}</p>
// </div>`
    return staffObjs.map(staffObj => 
`<div class="label-card">
    <p>Dear ${staffObj.name}</p>
    <p>${text}</p>
    <p>Best wishes,</p>
    <p>${sender}</p>
</div>`
    ).join('')
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
    text, 
    sender, 
    {name: 'Sally'}, 
    {name: 'Mike'}, 
    {name: 'Rob'}, 
    {name: 'Harriet'}
    ) 

