document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.getElementById("hero");
    const secondSection = document.getElementById("second-section");
    const emojiButton = document.querySelector(".emoji-button");
    const backButton = document.querySelector(".back-button");

    // Initially hide the second section
    secondSection.style.display = "none";

    emojiButton.addEventListener("click", function() {
        heroSection.style.display = "none";
        secondSection.style.display = "block";
    });

    backButton.addEventListener("click", function() {
        secondSection.style.display = "none";
        heroSection.style.display = "block";
    });
});


