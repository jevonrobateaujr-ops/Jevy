/* Dark Mode Toggle */
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

/* Auto Year Update */
document.getElementById("year").textContent = new Date().getFullYear();

/* Slideshow */
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let s of slides) s.style.display = "none";

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);
}
showSlides();

/* Expandable Bio */
const expandBtn = document.querySelector(".expand-btn");
const expandableText = document.querySelector(".expandable");

if (expandBtn) {
    expandBtn.addEventListener("click", () => {
        const expanded = expandableText.style.maxHeight === "350px";
        expandableText.style.maxHeight = expanded ? "100px" : "350px";
        expandBtn.textContent = expanded ? "Read More" : "Show Less";
    });
}

/* Contact Form Validation */
const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const msg = document.getElementById("message").value.trim();

        if (!name || !email || !msg) {
            alert("Please fill out all fields.");
            return;
        }

        alert("Your message has been submitted successfully.");
        form.reset();
    });
}
