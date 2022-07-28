/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var navhide = document.getElementById("myLinks");
    if (navhide.style.display === "block") {
      navhide.style.display = "none";
    } else {
      navhide.style.display = "block";
    }
  }