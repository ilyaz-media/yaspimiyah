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


// ================================
// VIDEO MODAL
// ================================

const videoBtn = document.getElementById("videoBtn");
const videoModal = document.getElementById("videoModal");
const closeVideo = document.getElementById("closeVideo");
const videoPlayer = document.getElementById("videoPlayer");

if (videoBtn && videoModal && closeVideo && videoPlayer) {

    videoBtn.addEventListener("click", () => {

        videoModal.classList.remove("hidden");
        videoModal.classList.add("flex");

        videoPlayer.play();

    });

    closeVideo.addEventListener("click", closeModal);

    videoModal.addEventListener("click", (e) => {

        if (e.target === videoModal) {

            closeModal();

        }

    });

    function closeModal() {

        videoModal.classList.remove("flex");
        videoModal.classList.add("hidden");

        videoPlayer.pause();
        videoPlayer.currentTime = 0;

    }

}


// ================================
// ACCORDION
// ================================

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {

    accordion.addEventListener("click", () => {

        const panel = accordion.nextElementSibling;
        const icon = accordion.querySelector(".accordion-icon");

        // Tutup accordion lain
        accordions.forEach((item) => {

            if (item !== accordion) {

                const otherPanel = item.nextElementSibling;
                const otherIcon = item.querySelector(".accordion-icon");

                otherPanel.style.maxHeight = null;
                otherPanel.classList.remove("opacity-100");
                otherPanel.classList.add("opacity-0");

                otherIcon.classList.remove("rotate-45");

            }

        });

        // Toggle accordion aktif
        if (panel.style.maxHeight) {

            panel.style.maxHeight = null;

            panel.classList.remove("opacity-100");
            panel.classList.add("opacity-0");

            icon.classList.remove("rotate-45");

        } else {

            panel.style.maxHeight = panel.scrollHeight + "px";

            panel.classList.remove("opacity-0");
            panel.classList.add("opacity-100");

            icon.classList.add("rotate-45");

        }

    });

});