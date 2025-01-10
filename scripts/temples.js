const hamMenu = document.querySelector("#menu");
const header = document.querySelector("header");
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("open");
    header.classList.toggle("open");
});

// waywind
const menu = document.querySelector("nav ul");
const matcher = document.querySelector("#menu-matcher");
menu.addEventListener("click", (e) => {
    matcher.textContent = e.target.childNodes[0].data;
})