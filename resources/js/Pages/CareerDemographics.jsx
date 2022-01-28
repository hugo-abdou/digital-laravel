import React from "react";
import ActivitiesInfluence from "../components/ActivitiesInfluence";
import Card from "../components/Card";
import ExtractDataGuide from "../components/ExtractDataGuide";
import Influencers from "../components/Influencers";
import PeopleInfluence from "../components/PeopleInfluence";

export default function CareerDemographics() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-4 px-4">
            <PeopleInfluence />
            <Influencers />
            <ExtractDataGuide />
            <ActivitiesInfluence />
        </div>
    );
}
