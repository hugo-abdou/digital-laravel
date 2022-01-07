import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { classNames } from "../helpers";

export default function Layout({ children }) {
    const [sideBarOpen, setSideBarOpen] = useState(true);
    function toggleSideBar() {
        setSideBarOpen(!sideBarOpen);
    }
    return (
        <main className="flex">
            <SideBar isOpen={sideBarOpen} />
            <div
                className={classNames(
                    "w-full",
                    sideBarOpen ? "ml-64" : "ml-16"
                )}
            >
                <NavBar toggleSideBar={toggleSideBar} />
                <article className="py-10">{children}</article>
            </div>
        </main>
    );
}
