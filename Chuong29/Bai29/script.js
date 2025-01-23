document.addEventListener("DOMContentLoaded", () => {
    // Navigation buttons
    const goToWatchlistBtn = document.getElementById("goToWatchlistBtn");
    const goToSearchBtn = document.getElementById("goToSearchBtn");

    // Navigate to watchlist.html from index.html
    if (goToWatchlistBtn) {
        goToWatchlistBtn.addEventListener("click", () => {
            window.location.href = "watchlist.html";
        });
    }

    // Navigate to index.html from watchlist.html
    if (goToSearchBtn) {
        goToSearchBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    // Tìm kiếm phim - index.html
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const resultsDiv = document.getElementById("results");

    if (searchBtn && searchInput && resultsDiv) {
        // Sự kiện tìm kiếm phim
        searchBtn.addEventListener("click", async () => {
            const query = searchInput.value.trim();
            if (!query) return;

            try {
                const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=e8472118`);
                const data = await res.json();

                if (data.Response === "True") {
                    displayResults(data.Search);
                } else {
                    resultsDiv.innerHTML = "<p>Không tìm thấy kết quả!</p>";
                }
            } catch (error) {
                console.error("Có lỗi xảy ra:", error);
                resultsDiv.innerHTML = "<p>Đã xảy ra lỗi khi tìm kiếm.</p>";
            }
        });

        // Hiển thị kết quả tìm kiếm
        function displayResults(movies) {
            resultsDiv.innerHTML = movies.map(movie => {
                return `
                    <div>
                        <h3>${movie.Title}</h3>
                        <p>${movie.Year}</p>
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <button class="add-to-watchlist" data-imdbid="${movie.imdbID}">Thêm vào danh sách theo dõi</button>
                    </div>
                `;
            }).join("");

            // Thêm sự kiện cho tất cả các nút "Thêm vào danh sách theo dõi"
            const buttons = document.querySelectorAll(".add-to-watchlist");
            buttons.forEach(button => {
                button.addEventListener("click", function() {
                    const imdbID = button.getAttribute("data-imdbid");
                    addToWatchlist(imdbID);
                });
            });
        }

        // Thêm bộ phim vào danh sách theo dõi
        function addToWatchlist(imdbID) {
            const movie = resultsDiv.querySelector(`button[data-imdbid='${imdbID}']`).parentElement;
            const movieData = {
                imdbID,
                title: movie.querySelector("h3").textContent,
                year: movie.querySelector("p").textContent,
                poster: movie.querySelector("img").src
            };

            let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
            watchlist.push(movieData);
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
            alert("Đã thêm vào danh sách theo dõi!");
        }
    } else {
        console.error("Không tìm thấy phần tử cần thiết trong index.html.");
    }

    // Danh sách theo dõi - watchlist.html
    const watchlistDiv = document.getElementById("watchlist");

    if (watchlistDiv) {
        // Nạp và hiển thị dữ liệu từ bộ nhớ cục bộ
        const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        
        if (watchlist.length === 0) {
            watchlistDiv.innerHTML = "<p>Danh sách theo dõi của bạn chưa có bộ phim nào!</p>";
        } else {
            watchlistDiv.innerHTML = watchlist.map(movie => {
                return `
                    <div>
                        <h3>${movie.title}</h3>
                        <p>${movie.year}</p>
                        <img src="${movie.poster}" alt="${movie.title}">
                    </div>
                `;
            }).join("");
        }
    } else {
        console.error("Không tìm thấy phần tử với ID 'watchlist' trong watchlist.html.");
    }
});
