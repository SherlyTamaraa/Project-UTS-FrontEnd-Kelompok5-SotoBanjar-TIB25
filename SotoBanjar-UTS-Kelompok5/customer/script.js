function setupNavbarActiveLinks() {
    var navLinks = document.querySelectorAll(".custom-navbar .navbar-nav .nav-link");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navLinks.forEach(function(l) { l.classList.remove("active"); });
            this.classList.add("active");
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setupNavbarActiveLinks();
});