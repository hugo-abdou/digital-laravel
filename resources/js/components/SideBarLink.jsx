import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import Icon from "./Icon";

export default function SideBarLink({ href, name, icon, isOpen }) {
    const { url } = usePage();
    return (
        <li
            className={
                url.includes(href)
                    ? "bg-dark-blue text-d-yellow"
                    : "text-white hover:bg-dark-blue/50 group"
            }
        >
            <Link href={href} as="a" className="flex">
                <span
                    className={
                        url === href
                            ? "bg-d-yellow w-1 block"
                            : "bg-transparent w-1 block group-hover:bg-white"
                    }
                ></span>

                <div className="py-4 ml-4 flex items-center">
                    <Icon name={icon} />
                    {isOpen && (
                        <span className="font-bold text-xs ml-3">{name}</span>
                    )}
                </div>
            </Link>
        </li>
    );
}
