import React from "react";
import InfluenceManagement from "../components/InfluenceManagement";
import OveralProgress from "../components/OveralProgress";
import PersonaDetails from "../components/PersonaDetails";
import PersonalityBackground from "../components/PersonalityBackground";
import Personality from "../components/Personality";
import PersonalityResult from "../components/PersonalityResult";

export default function PersonaDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-4 px-4">
            <PersonaDetails className="row-span-2" />
            <InfluenceManagement />
            <OveralProgress />
            <Personality
                title="Personality Definition"
                columName="definition"
            />
            <PersonalityBackground />
            <PersonalityResult title="Personality Result" />
        </div>
    );
}
