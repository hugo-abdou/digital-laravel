import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import Card from "../components/Card";
import InfluenceManagement from "../components/InfluenceManagement";

export default function DevelopmentProgress() {
    return (
        <div className="px-5">
            <div className="relative bg-white  overflow-hidden rounded-xl">
                <img
                    src="assets/background.png"
                    className="absolute h-full w-full"
                />
                <div className="absolute bg-gradient-to-r from-[#000]/70 via-[#000]/70 to-[#000]/20 inset-0"></div>
                <div className="relative py-9 px-3 grid grid-cols-3 gap-3 w-full">
                    <Card title="Develoment Progress">
                        <div className="flex items-center">
                            <div className="w-1/2">
                                <svg
                                    className="mx-auto"
                                    width="37"
                                    height="104"
                                    viewBox="0 0 69 180"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="8"
                                        y="6"
                                        width="80%"
                                        height="100%"
                                        fill="#00F052"
                                    />
                                    <rect
                                        x="7"
                                        y="6"
                                        width="80%"
                                        height="100%"
                                        stroke="#555555"
                                        stroke-width="3"
                                    />
                                </svg>
                                <CircularProgressbar
                                    className="!w-16 mx-auto -mt-1"
                                    value="0"
                                    text={`${0}%`}
                                    strokeWidth={10}
                                    styles={buildStyles({
                                        trailColor: "#555555",
                                    })}
                                />
                            </div>
                            <h4 className="font-semibold text-lg mb-6">
                                Percentage Of Goal Alignment
                            </h4>
                        </div>
                    </Card>
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
                    <InfluenceManagement />
                </div>
            </div>
        </div>
    );
}
