const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("1");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 100,
};

scrollReveal().reveal(".header__image", {
...scrollRevealOption,
origin: "right",
});
scrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
    });
    scrollReveal().reveal(".header__content h1", {
        ...scrollRevealOption,
        delay: 1000,
        });
        scrollReveal().reveal(".header__content h1", {
            ...scrollRevealOption,
            delay: 1500,
            });