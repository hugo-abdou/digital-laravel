import React from "react";
import Card from "./Card";

export default function InfluenceManagement({ className }) {
    return (
        <Card title="Persona Details:" className={className}>
            <div className="flex items-center">
                <div className="overflow-hidden rounded-full w-1/3">
                    <img
                        className="w-full h-full object-cover"
                        src="/assets/avatar1.png"
                    />
                </div>
                <div className="w-2/3 pl-4">
                    <p className="first-letter:text-2xl first-letter:text-d-yellow">
                        3 of the top five influencers are in alignment with
                        current goal established
                    </p>
                </div>
            </div>
            <div className="flex justify-center gap-3 mt-5 font-bold text-xs text-black">
                <span className="bg-d-yellow text-white px-1 rounded-full">
                    1
                </span>
                <span className="bg-gray-400 px-1 rounded-full">2</span>
                <span className="bg-gray-400 px-1 rounded-full">3</span>
            </div>
        </Card>
    );
}
