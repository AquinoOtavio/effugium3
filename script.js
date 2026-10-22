/* =========================================================
   EFFUGIUM — SCRIPT PRINCIPAL
   Tema + Menu Hambúrguer + Lightbox
   ========================================================= */


/* =========================================================
   TEMA
   ========================================================= */

const themeButton = document.getElementById("theme-toggle");
const mobileThemeButton = document.getElementById("theme-toggle-mobile");


/* ================= ATUALIZA ÍCONES ================= */

function updateThemeIcons() {

    const isLight = document.body.classList.contains("light");

    const icon = isLight
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';


    if (themeButton) {
        themeButton.innerHTML = icon;
    }


    if (mobileThemeButton) {
        mobileThemeButton.innerHTML = icon;
    }
}


/* ================= ALTERAR TEMA ================= */

function toggleTheme() {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );


    updateThemeIcons();
}


/* =========================================================
   RECUPERAR TEMA SALVO
   ========================================================= */

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

}


/* Atualiza os ícones ao carregar */

updateThemeIcons();


/* =========================================================
   BOTÃO TEMA DESKTOP
   ========================================================= */

if (themeButton) {

    themeButton.addEventListener(
        "click",
        toggleTheme
    );

}


/* =========================================================
   BOTÃO TEMA MOBILE
   ========================================================= */

if (mobileThemeButton) {

    mobileThemeButton.addEventListener(
        "click",
        toggleTheme
    );

}


/* =========================================================
   MENU HAMBÚRGUER
   ========================================================= */

const menuToggle =
    document.getElementById("menu-toggle");

const mainNav =
    document.getElementById("main-nav");


/* ================= ABRIR / FECHAR MENU ================= */

function toggleMobileMenu() {

    if (!menuToggle || !mainNav) {
        return;
    }


    const isOpen =
        mainNav.classList.toggle("open");


    menuToggle.classList.toggle(
        "active",
        isOpen
    );


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );


    document.body.classList.toggle(
        "menu-open",
        isOpen
    );


    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Fechar menu"
            : "Abrir menu"
    );
}


/* ================= CLIQUE NO HAMBÚRGUER ================= */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
   ========================================================= */

if (mainNav) {

    const navLinks =
        mainNav.querySelectorAll(
            ".nav-item, .mobile-reserve"
        );


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (
                    window.innerWidth <= 920 &&
                    mainNav.classList.contains("open")
                ) {

                    mainNav.classList.remove("open");

                    menuToggle.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Abrir menu"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );
                }

            }
        );

    });

}


/* =========================================================
   FECHAR MENU AO REDIMENSIONAR
   ========================================================= */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 920 &&
            mainNav
        ) {

            mainNav.classList.remove("open");

            if (menuToggle) {

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );
            }


            document.body.classList.remove(
                "menu-open"
            );
        }

    }
);


/* =========================================================
   FECHAR MENU COM ESC
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            mainNav &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove("open");


            if (menuToggle) {

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );
            }


            document.body.classList.remove(
                "menu-open"
            );
        }

    }
);


/* =========================================================
   LIGHTBOX — EKKO
   ========================================================= */

$(document).on(
    "click",
    '[data-toggle="lightbox"]',
    function (event) {

        event.preventDefault();

        $(this).ekkoLightbox({
            alwaysShowClose: true
        });

    }
);

