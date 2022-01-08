import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { classNames } from "../helpers";
import Card from "./Card";

export default function PersonaDetails({ className }) {
    const { user } = usePage().props.auth;
    return (
        <Card title="Persona Details:" className={classNames(className)}>
            <ul className="mt-11 space-y-6 ml-6">
                <li className="text-sm text-black">
                    <span className="font-bold">Name:</span>
                    <span className="ml-2 ">{user.name}</span>
                </li>
                <li className="text-sm text-black">
                    <span className="font-bold">Age:</span>
                    <span className="ml-2 ">{user.age}</span>
                </li>
                <li className="text-sm text-black">
                    <span className="font-bold">Gender:</span>
                    <span className="ml-2 ">{user.name}</span>
                </li>
                <li className="text-sm text-black">
                    <span className="font-bold">Occupation:</span>
                    <span className="ml-2 ">{user.name}</span>
                </li>
                <li className="text-sm text-black">
                    <span className="font-bold">Ethnicity:</span>
                    <span className="ml-2 ">{user.name}</span>
                </li>
                <li className="text-sm text-black">
                    <span className="font-bold">Material Statue:</span>
                    <span className="ml-2 ">{user.name}</span>
                </li>
                <li className="text-sm text-black">
                    <span className="font-bold">Income Level:</span>
                    <span className="ml-2 ">{user.name}</span>
                </li>
                <li className="text-sm text-black">
                    <span className="font-bold">Education:</span>
                    <span className="ml-2 ">{user.name}</span>
                </li>
            </ul>
        </Card>
    );
}
