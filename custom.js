document.addEventListener('DOMContentLoaded', (event) => {
 document.body.addEventListener("click", function(event) {
alert('a');
  var myArOverlay = document.getElementById("myArOverlay");

  // Check if the display property is already "flex"
  if (window.getComputedStyle(myArOverlay).display === "flex") {
    // Apply your desired styles here
    myArOverlay.style.display = "none"; // Example style change

  }
});
});


