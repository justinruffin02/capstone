// Testimonial Fader
const testimonials = [
    "⭐ 'Tuff Stuff was quick, professional, and careful!' – Maria J.",
    "🌟 '5 stars for excellent service from start to finish!' – James L.",
    "🚛 'Handled our heavy furniture like pros!' – Ben & Sara T.",
    "📦 'Packed everything so securely. Would hire again!' – Lauren C.",
    "🏠 'Best movers in the DFW area!' – Mike H.",
    "🛠 'Even assembled our IKEA furniture perfectly!' – John D.",
    "🎯 'On time and efficient!' – The Martin Family",
    "💪 'These guys are *strong* and professional.' – Carla R.",
    "👍 'A+ service, friendly team, fast moving.' – Nate E.",
    "😄 'Made our move stress-free. Highly recommend.' – Destiny P."
];

let currentTestimonial = 0;
const quoteEl = document.getElementById("testimonial-quote");

function showNextTestimonial() {
    if (!quoteEl) return;
    quoteEl.classList.remove("show");

    setTimeout(() => {
        quoteEl.textContent = testimonials[currentTestimonial];
        quoteEl.classList.add("show");
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }, 500);
}

setInterval(showNextTestimonial, 5000);
window.addEventListener("DOMContentLoaded", showNextTestimonial);
