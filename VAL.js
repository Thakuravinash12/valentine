const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const question = document.getElementById("question");
const mainGif = document.getElementById("main-gif");

// Move the "No" button randomly
noBtn.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Change content when "Yes" is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAY! I knew you'd say yes! ❤️";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHIwbXhzbHlyZzJqZzZpZnB6bmZ6bmZ6bmZ6bmZ6bmZ6bmZ6Jm09ZSZmPWpwZw/14urMYvFxIKEms/giphy.gif"; // Change to a happy GIF
    noBtn.style.display = "none"; // Hide the No button
});