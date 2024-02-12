// Get the navbar element
var navbar1 = document.getElementById("navbar1");

// Function to change navbar color on scroll
function changeNavbarColor() {
  if (window.scrollY > 0) {
    navbar1.classList.add("scrolled");
  } else {
    navbar1.classList.remove("scrolled");
  }
}

// Listen for the scroll event and call the function
window.addEventListener("scroll", changeNavbarColor);
