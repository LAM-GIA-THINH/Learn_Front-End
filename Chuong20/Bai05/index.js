import { tweetsData } from './data.js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})

function getFeedHtml(){
    
    let feedHtml = ``
    
    for (let tweet of tweetsData){
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>`
    }
return feedHtml
/*
Thách thức:
1. Sử dụng vòng lặp "for of" để lặp qua dữ liệu và 
   tạo chuỗi HTML cho từng tweet bằng cách sử dụng 
   mẫu bên dưới. Thay thế các chữ viết hoa 
   (UPPERCASE) bằng dữ liệu từ tweets.
2. Lưu chuỗi HTML này vào một biến `let` có tên là "feedHtml".
3. Ghi log ra giá trị của `feedHtml`.
4. Gọi hàm getFeedHtml để kiểm tra xem nó có hoạt động hay không.
*/
}

getFeedHtml()



/*
<div class="tweet">
    <div class="tweet-inner">
        <img src="URL OF PROFILE PIC" class="profile-pic">
        <div>
            <p class="handle">TWEET HANDLE</p>
            <p class="tweet-text">TWEET TEXT</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    NUMBER OF REPLIES
                </span>
                <span class="tweet-detail">
                    NUMBER OF LIKES
                </span>
                <span class="tweet-detail">
                    NUMBER OF RETWEETS
                </span>
            </div>   
        </div>            
    </div>
</div>

*/

