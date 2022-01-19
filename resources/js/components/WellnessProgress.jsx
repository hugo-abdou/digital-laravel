import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import Card from "./Card";

export default function WellnessProgress() {
    return (
        <Card title="Wellness Progress">
            <div className="flex items-center">
                <div className="w-1/2 p-5">
                    <PieChart
                        lineWidth={20}
                        labelPosition="0"
                        background="#d6d6d6"
                        data={[
                            {
                                value: 30,
                                color: "#1471FC",
                            },
                            {
                                value: 70,
                                color: "#FF28A9",
                            },
                        ]}
                    />
                </div>
                <div className="ml-5">
                    <div className="flex items-center">
                        <span className="w-8 h-3 block bg-[#FC53B8]"></span>
                        <div className="text-center">
                            <span className="font-semibold text-lg ml-4 block">
                                Activity
                            </span>
                            <span className="font-semibold text-dark-gray text-lg ml-4 block">
                                36%
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center mt-5">
                        <span className="w-8 h-3 block bg-[#1D83FA]"></span>
                        <div className="text-center">
                            <span className="font-semibold text-lg ml-4 block">
                                Inactivity
                            </span>
                            <span className="font-semibold text-dark-gray text-lg ml-4 block">
                                36%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
