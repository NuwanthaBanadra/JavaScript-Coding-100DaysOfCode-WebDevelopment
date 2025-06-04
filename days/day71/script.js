const articles = [
    {
        title: "The Rise of AI in Everyday Life",
        summary: "Artificial Intelligence is becoming increasingly prevalent in our daily routines...",
        image: "https://via.placeholder.com/300x150",
        category: "Technology"
    },
    {
        title: "Championship Game Ends in a Thrilling Finish",
        summary: "The final match kept fans on the edge of their seats until the last second...",
        image: "https://via.placeholder.com/300x150",
        category: "Sports"
    },
    {
        title: "10 Tips for a Healthier Lifestyle",
        summary: "Incorporate these simple habits into your daily routine for better health...",
        image: "https://via.placeholder.com/300x150",
        category: "Health"
    },
    // Add more articles as needed
];

const newsContainer = document.getElementById("newsContainer");
const searchInput = document.getElementById("search");

function displayArticles(filteredArticles) {
    newsContainer.innerHTML = "";
    filteredArticles.forEach(article => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = `
      <img src="${article.image}" alt="${article.title}">
      <div class="content">
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
      </div>
    `;
        newsContainer.appendChild(card);
    });
}

function filterCategory(category) {
    const filtered = category === "All" ? articles : articles.filter(a => a.category === category);
    displayArticles(filtered);
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = articles.filter(a =>
        a.title.toLowerCase().includes(query) ||
        a.summary.toLowerCase().includes(query)
    );
    displayArticles(filtered);
});

// Initial display
displayArticles(articles);
