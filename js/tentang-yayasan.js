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



// daftar guru

const btn = document.getElementById("toggleBtn");
const icon = document.getElementById("icon");

const container = document.getElementById("moreTeachers");
const cards = document.querySelectorAll(".extra");

let open = false;

btn.addEventListener("click", () => {

    open = !open;

    if (open) {

        container.style.maxHeight = container.scrollHeight + "px";

        cards.forEach((card, index) => {

            setTimeout(() => {

                card.classList.add("show");

            }, index * 120);

        });

        btn.querySelector("span").textContent = "Lihat Lebih Sedikit";

        icon.style.transform = "rotate(180deg)";

    } else {

        cards.forEach((card, index) => {

            setTimeout(() => {

                card.classList.remove("show");

            }, index * 80);

        });

        setTimeout(() => {

            container.style.maxHeight = "0";

        }, 250);

        btn.querySelector("span").textContent = "Lihat Selengkapnya";

        icon.style.transform = "rotate(0deg)";
    }

});