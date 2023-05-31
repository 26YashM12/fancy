// Add your JavaScript code here

// Example: Display a welcome message
const welcomeMessage = "Welcome to My Fancy Website!";
console.log(welcomeMessage);

// Example: Fetch data from an API
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    // Process the data and update the UI
    console.log(data);
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });

// Example: Implement a smooth scrolling functionality
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));
    const offset = 100; // Adjust the offset as needed

    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: "smooth",
    });
  });
});

// Example: Implement an image slider
const sliderImages = document.querySelectorAll(".slider-image");
let currentIndex = 0;

function showSlide(index) {
  sliderImages.forEach((image) => image.classList.remove("active"));
  sliderImages[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
  showSlide(currentIndex);
}

// Example: Add event listeners to slider controls
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", previousSlide);

// Example: Implement form submission handling
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Gather form data
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Process the form data (e.g., send it to a server)
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Display a success message or perform other actions
  alert("Form submitted successfully!");
});
