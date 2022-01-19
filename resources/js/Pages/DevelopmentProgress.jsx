import React from "react";
import DevelopmentProgressCard from "../components/DevelopmentProgressCard";
import GoalsCard from "../components/GoalsCard";
import InfluenceManagement from "../components/InfluenceManagement";
import WellnessProgress from "../components/WellnessProgress";
export default function DevelopmentProgress() {
    return (
        <div className="px-5">
            <div className="relative bg-white overflow-hidden rounded-xl">
                <img
                    src="assets/background.png"
                    className="absolute h-full w-full"
                />
                <div className="absolute bg-gradient-to-r from-[#000]/70 via-[#000]/70 to-[#000]/20 inset-0"></div>
                <div className="relative py-9 px-3 grid grid-cols-3 gap-3 w-full">
                    <DevelopmentProgressCard />
                    <WellnessProgress />
                    <InfluenceManagement />
                </div>
            </div>
            <GoalsCard />
        </div>
    );
}
