// Scroll fade-in for sections
document.addEventListener("DOMContentLoaded", () => {
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeEls.forEach(el => observer.observe(el));
});
