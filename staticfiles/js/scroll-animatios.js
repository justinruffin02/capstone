document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-fade");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});
