document.addEventListener("DOMContentLoaded", () => {
    const testimonials = [
        "🚛 'These guys move like a military squad — fast and focused!' — Maria J.",
        "🛠️ 'Furniture was set up perfectly. Couldn’t ask for more.' — James L.",
        "📦 'Everything was boxed with care. Felt like family helped me move!' — Linda M.",
        "🕐 'On time, no excuses. Extremely reliable.' — Nate P.",
        "🧹 'Left our old place cleaner than when we arrived.' — Rachel T.",
        "💪 'Not a single scratch or broken item. Professional all the way.' — Sam R.",
        "😄 'Team had great attitudes, made moving fun. Seriously!' — Ashley V.",
        "🌎 'Handled our out-of-state move like pros. 10/10.' — Carlos D.",
        "📍 'Knew every DFW shortcut. We were early!' — Tara S.",
        "📞 'Communication was crystal clear. Always knew what was next.' — Mike T.",
        "🛻 'They came with the right equipment and attitude.' — Bella F.",
        "👍 'Didn't even need to lift a finger. Stress-free.' — Greg B.",
        "🧡 'Felt like family helped me move. Can't recommend enough.' — Emma J.",
        "📋 'Very organized and labeled everything.' — Logan K.",
        "🔑 'Helped us lock up and secure everything safely.' — Dana H.",
        "🔥 'Fast and focused without sacrificing care.' — Brandon G.",
        "🥇 'Best movers we’ve used — and we’ve moved 5 times!' — Olivia N.",
        "🚚 'Truck was spotless. They care about every detail.' — Jason E.",
        "💼 'Handled our office move with zero downtime.' — Monica D.",
        "💯 'Hardworking and trustworthy. Worth every penny.' — Kelly Z."
    ];

    let index = 0;
    const box = document.getElementById("testimonial-box");
    const text = document.getElementById("testimonial-text");

    function showNextTestimonial() {
        box.style.opacity = 0;
        setTimeout(() => {
            text.textContent = testimonials[index];
            box.style.opacity = 1;
            index = (index + 1) % testimonials.length;
        }, 400);
    }

    showNextTestimonial();
    setInterval(showNextTestimonial, 5000);
});
