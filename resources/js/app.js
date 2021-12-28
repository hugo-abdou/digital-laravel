require("./bootstrap");

const navBar = document.getElementById("nav-bar");

const handleScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 50) {
        if (!navBar.classList.contains("float")) {
            navBar.classList.add("float", "shadow");
        }
    } else {
        if (navBar.classList.contains("float")) {
            navBar.classList.remove("float", "shadow");
        }
    }
};

window.document.addEventListener("scroll", function () {
    handleScroll();
});
