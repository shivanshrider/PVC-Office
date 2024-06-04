function toggleFAQPopup() {
    var popup = document.getElementById("faqPopup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

// Close the FAQ popup if the user clicks anywhere outside of it
window.onclick = function(event) {
    var popup = document.getElementById("faqPopup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
const fadeImages = document.querySelectorAll('.fade-image');
let currentImageIndex = 0;

function fadeInNextImage() {
  fadeImages[currentImageIndex].classList.remove('visible');
  currentImageIndex = (currentImageIndex + 1) % fadeImages.length;
  fadeImages[currentImageIndex].classList.add('visible');
}

fadeImages[currentImageIndex].classList.add('visible');
setInterval(fadeInNextImage, 5000);

