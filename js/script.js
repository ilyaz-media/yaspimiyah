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


// vidio modal

const btn = document.getElementById("videoBtn");

const modal = document.getElementById("videoModal");

const close = document.getElementById("closeVideo");

const video = document.getElementById("videoPlayer");

btn.addEventListener("click", () => {

    modal.classList.remove("hidden");

    modal.classList.add("flex");

    video.play();

});

close.addEventListener("click", () => {

    modal.classList.remove("flex");

    modal.classList.add("hidden");

    video.pause();

    video.currentTime = 0;

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("flex");

        modal.classList.add("hidden");

        video.pause();

        video.currentTime = 0;

    }

});