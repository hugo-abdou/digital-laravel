import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { classNames } from "../helpers";
import Card from "./Card";

export default function Indicators() {
    const {
        url,
        props: { indicator },
    } = usePage();
    const links = ["e", "n", "f", "s", "t", "p", "i", "j", "d", "i", "s", "k"];
    return (
        <Card title="Indicators">
            <div className="flex items-start">
                <div className="w-1/3">
                    <span className="bg-[#ED7D31] text-white text-center leading-10 uppercase w-10 h-10 block font-bold text-lg rounded-full">
                        {indicator.name}
                    </span>
                </div>
                <p className="ml-4 text-sm text-dark-gray">
                    {indicator.description}
                </p>
            </div>
            <div className="flex uppercase justify-center space-x-2 mt-5">
                {links.map((name, index) => {
                    return (
                        <Link
                            key={index}
                            preserveScroll
                            className={classNames(
                                " w-5 h-5 leading-5 text-center text-xs font-bold rounded-full",
                                url == `/personality-profile?indicator=${name}`
                                    ? "bg-d-yellow text-white"
                                    : "bg-gray-300 text-black"
                            )}
                            href={`/personality-profile?indicator=${name}`}
                        >
                            {name}
                        </Link>
                    );
                })}
            </div>
        </Card>
    );
}
