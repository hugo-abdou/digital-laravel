import React from "react";
import Disc from "../components/Disc";
import Indicators from "../components/Indicators";
import Personality from "../components/Personality";
import PersonalityResult from "../components/PersonalityResult";

export default function PersonalityProfile() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-4 px-4">
            <PersonalityResult title="Myers-Briggs" />
            <Disc />
            <Personality
                title="Personality Definition"
                columName="definition"
            />
            <Personality
                title="Workplace Attributes"
                columName="workplace_attributes"
            />
            <Personality
                title="Interpersonal Attributes"
                columName="interpersonal_attributes"
            />
            <Personality title="Strength" columName="strength" />
            <Personality title="Weaknesses" columName="weaknesses" />
            <Indicators />
        </div>
    );
}
