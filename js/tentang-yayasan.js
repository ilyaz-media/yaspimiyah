// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        if (mobileMenu.classList.contains("hidden")) {

            menuBtn.classList.remove("fa-xmark");
            menuBtn.classList.add("fa-bars");

        } else {

            menuBtn.classList.remove("fa-bars");
            menuBtn.classList.add("fa-xmark");

        }

    });

}


// ================================
// ACTIVE NAVBAR LINK
// ================================


// ===============================
// Active Navbar
// ===============================

// Nama file halaman saat ini
let currentPage = window.location.pathname.split("/").pop();
// Jika membuka folder tanpa nama file,
// anggap sebagai index.html
if (currentPage === "") {
    currentPage = "index.html";
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

    const href = link.getAttribute("href");

    // Abaikan link kosong
    if (!href || href === "#") return;

    // Ambil nama file tanpa #section
    const page = href.split("#")[0];

    // Hapus class aktif terlebih dahulu
    link.classList.remove(
        "text-primary",
        "font-semibold",
        "underline",
        "decoration-2",
        "underline-offset-8"
    );
    // Aktifkan hanya halaman yang sama
    if (page === currentPage) {

        link.classList.add(
            "text-primary",
            "font-semibold",
            "underline",
            "decoration-2",
            "underline-offset-8"
        );

    }

});

// data emis
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const timer = setInterval(() => {

        current++;

        counter.textContent = current;

        if (current >= target) {

            clearInterval(timer);

        }

    }, 20);

});