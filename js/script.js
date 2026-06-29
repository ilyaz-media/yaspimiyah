const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    } else {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }

});


// link navbar controller
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("text-primary" ,"font-semibold",'underline',"decoration-2",
    "underline-offset-8");
    }
});