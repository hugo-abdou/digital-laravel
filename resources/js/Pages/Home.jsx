import React from "react";
import InfluenceManagement from "../components/InfluenceManagement";
import OveralProgress from "../components/OveralProgress";
import PersonaDetails from "../components/PersonaDetails";

const Home = function () {
    return (
        <div className="grid grid-cols-3 gap-4 px-4">
            <PersonaDetails className="row-span-2 min-h-[200px]" />
            <InfluenceManagement className="min-h-[200px]" />
            <OveralProgress className="min-h-[200px]" />
        </div>
    );
};
export default Home;
