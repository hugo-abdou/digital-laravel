require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});

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
