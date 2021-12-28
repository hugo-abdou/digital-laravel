require("./bootstrap");

let lastScrollTop = 0;
const navBar = document.getElementById("nav-bar");

const handleScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 100) {
        if (!navBar.classList.contains("float")) {
            console.log("add");
            navBar.classList.add("float", "shadow");
        }
    } else {
        if (navBar.classList.contains("float")) {
            console.log("remove");
            navBar.classList.remove("float", "shadow");
        }
    }
};

window.document.addEventListener("scroll", function () {
    handleScroll();
});
