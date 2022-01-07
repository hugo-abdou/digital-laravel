import React from "react";
import { classNames } from "../helpers";
import SideBarLink from "./SideBarLink";

export default function SideBar({ isOpen }) {
    return (
        <div
            className={classNames(
                "fixed h-screen overflow-hidden bg-gradient-to-b from-[#0F2F4F] via-[#1D3D60] to-[#31559C]",
                isOpen ? "w-64" : "w-16"
            )}
        >
            <a href="/" className="!w-56 block ml-1">
                <span className="sr-only">Digital Self</span>
                <img src="/assets/Digital Self.png" alt="dijital self logo" />
            </a>
            <div className="overflow-hidden overflow-y-auto">
                <nav className="h-[calc(100vh-60px)] mt-2 flex flex-col justify-center">
                    <ul className="mb-20 w-64">
                        <SideBarLink
                            href="/dashboard"
                            name="Persona Dashboard"
                            icon="user-circle"
                            isOpen={isOpen}
                        />
                        <SideBarLink
                            href="/"
                            name="Personality Profile"
                            icon="clipboard-list"
                            isOpen={isOpen}
                        />
                        <SideBarLink
                            href="/"
                            name="Development Progress"
                            icon="chart-bar"
                            isOpen={isOpen}
                        />
                        <SideBarLink
                            href="/"
                            name="Career Demographics"
                            icon="cog"
                            isOpen={isOpen}
                        />
                        <SideBarLink
                            href="/"
                            name="Wellness Profil"
                            icon="heart-beat"
                            isOpen={isOpen}
                        />
                    </ul>
                </nav>
            </div>
        </div>
    );
}
