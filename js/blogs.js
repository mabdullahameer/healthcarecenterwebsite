document.addEventListener("DOMContentLoaded", () => {
    const blogData = [
        { title: "Mental Health: Breaking the Stigma", category: "mental-health", content: "Explore how to support mental health awareness." },
        { title: "How Nutrition Impacts Health", category: "nutrition", content: "Understand the role of nutrition in maintaining balance." },
        { title: "Benefits of Regular Physical Activity", category: "fitness", content: "Learn how staying active can boost physical and mental health." },
        { title: "Children's Health: Building a Foundation", category: "general-health", content: "Support your child's health during development." },
        // Add more blogs here
    ];

    const blogList = document.getElementById("blog-list");
    const searchInput = document.getElementById("search-input");
    const categoryFilter = document.getElementById("category-filter");
    const prevBtn = document.getElementById("prev-page");
    const nextBtn = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    const postsPerPage = 5;
    let currentPage = 1;
    let filteredBlogs = blogData;

    // Render blogs for the current page
    function renderPage() {
        const start = (currentPage - 1) * postsPerPage;
        const end = currentPage * postsPerPage;

        blogList.innerHTML = "";
        filteredBlogs.slice(start, end).forEach(blog => {
            const blogPost = document.createElement("article");
            blogPost.className = "blog-post";
            blogPost.dataset.category = blog.category;
            blogPost.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
                <a href="#" class="read-more">Read More &rarr;</a>
            `;
            blogList.appendChild(blogPost);
        });

        pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredBlogs.length / postsPerPage)}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === Math.ceil(filteredBlogs.length / postsPerPage);
    }

    // Filter blogs based on search and category
    function filterBlogs() {
        const searchQuery = searchInput.value.toLowerCase();
        const category = categoryFilter.value;

        filteredBlogs = blogData.filter(blog => {
            const matchesCategory = category === "all" || blog.category === category;
            const matchesSearch = blog.title.toLowerCase().includes(searchQuery) || blog.content.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        currentPage = 1; // Reset to the first page
        renderPage();
    }

    // Event Listeners
    searchInput.addEventListener("input", filterBlogs);
    categoryFilter.addEventListener("change", filterBlogs);

    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentPage < Math.ceil(filteredBlogs.length / postsPerPage)) {
            currentPage++;
            renderPage();
        }
    });

    // Initial render
    renderPage();
});
