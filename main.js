document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");

    function toggleMenu(event) {
        event.stopPropagation();
        menu.classList.toggle("active");
        menu.classList.toggle("inactive");
    }

    function closeMenu() {
        menu.classList.remove("active");
        menu.classList.add("inactive");
    }

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !navbar.contains(event.target)) {
            closeMenu();
        }
    });
    
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    menuIcon.addEventListener("click", toggleMenu);
});