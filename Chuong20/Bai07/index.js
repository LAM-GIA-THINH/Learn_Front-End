import { tweetsData } from './data.js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})

function getFeedHtml(){
    
/*
Thử thách:
1. Thay for bằng forEach
*/
      
    let feedHtml = ``
    tweetsData.forEach(function(tweet){
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
</div>
`
   })
   return feedHtml 
}

console.log(getFeedHtml())