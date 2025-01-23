const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

let postsContainer = document.querySelector(".posts-container");

function renderPosts() {
    postsContainer.innerHTML = "";  

    posts.forEach((post) => {
        // Create the user info section
        const topSection = document.createElement("section");
        topSection.classList.add("top");

        const userAvatar = document.createElement("img");
        userAvatar.classList.add("user-avatar", "two");
        userAvatar.src = post.avatar;

        const containerDiv = document.createElement("div");
        containerDiv.classList.add("container");

        const userName = document.createElement("h3");
        userName.textContent = post.name;

        const userLocation = document.createElement("h4");
        userLocation.textContent = post.location;

        containerDiv.appendChild(userName);
        containerDiv.appendChild(userLocation);

        topSection.appendChild(userAvatar);
        topSection.appendChild(containerDiv);

        // Create the post section
        const postSection = document.createElement("section");
        postSection.classList.add("main");

        const postImg = document.createElement("img");
        postImg.classList.add("post");
        postImg.src = post.post;

        const iconsDiv = document.createElement("div");
        iconsDiv.classList.add("icons");

        const likeButton = document.createElement("button");
        likeButton.classList.add("like-button");
        const likeIcon = document.createElement("img");
        likeIcon.classList.add("icon");
        likeIcon.src = "./images/icon-heart.png";
        likeButton.appendChild(likeIcon);

        const commentButton = document.createElement("button");
        const commentIcon = document.createElement("img");
        commentIcon.classList.add("icon");
        commentIcon.src = "./images/icon-comment.png";
        commentButton.appendChild(commentIcon);

        const dmButton = document.createElement("button");
        const dmIcon = document.createElement("img");
        dmIcon.classList.add("icon");
        dmIcon.src = "./images/icon-dm.png";
        dmButton.appendChild(dmIcon);

        iconsDiv.appendChild(likeButton);
        iconsDiv.appendChild(commentButton);
        iconsDiv.appendChild(dmButton);

        const likesCount = document.createElement("h3");
        likesCount.classList.add("like-amounts");
        likesCount.textContent = `${post.likes} likes`;

        const commentText = document.createElement("h3");
        commentText.classList.add("comment");
        commentText.innerHTML = `<strong>${post.username}</strong>&nbsp;${post.comment}`;

        postSection.appendChild(postImg);
        postSection.appendChild(iconsDiv);
        postSection.appendChild(likesCount);
        postSection.appendChild(commentText);

        postsContainer.appendChild(topSection);  // Append user info section
        postsContainer.appendChild(postSection); // Append post section

        // Add event listener to the like button
        likeButton.addEventListener("dblclick", function () {
            post.likes += 1;
            likesCount.textContent = `${post.likes} likes`;
        });
    });
}

renderPosts();
