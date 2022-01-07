import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import AppLayout from "./layout/AppLayout";
window.addEventListener("load", () => {
    const app = document.getElementById("app");
    if (app) {
        createInertiaApp({
            resolve: async (name) => {
                const page = await import(`./Pages/${name}`);
                page.default.layout =
                    page.default.layout ||
                    function (page) {
                        return <AppLayout children={page} />;
                    };
                return page;
            },
            setup({ el, App, props }) {
                render(<App {...props} />, el);
                el.dataset.page = "";
            },
        });
    }
});
