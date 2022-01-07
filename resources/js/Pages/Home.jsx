import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Card from "../components/Card";
import PersonaDetails from "../components/PersonaDetails";

const Home = function () {
    return (
        <div className="grid grid-cols-3 gap-4 px-4">
            <PersonaDetails className="row-span-2" />
            <PersonaDetails />
            <PersonaDetails />
            <PersonaDetails />
            <PersonaDetails />
            <PersonaDetails className="col-span-2" />
            <PersonaDetails />
        </div>
    );
};
export default Home;
