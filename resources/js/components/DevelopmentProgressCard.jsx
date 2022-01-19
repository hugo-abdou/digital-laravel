import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Card from "./Card";

export default function DevelopmentProgressCard() {
    const { goal } = usePage().props;
    return (
        <Card title="Develoment Progress">
            <div className="flex items-center">
                <div className="w-1/2">
                    <svg
                        className="mx-auto rotate-180"
                        width="37"
                        height="104"
                        viewBox="0 0 69 180"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="8"
                            y="-6"
                            width="80%"
                            height={`${goal}%`}
                            fill="#00F052"
                        />
                        <rect
                            x="7"
                            y="-6"
                            width="80%"
                            height="100%"
                            stroke="#555555"
                            strokeWidth="3"
                        />
                    </svg>
                    <CircularProgressbar
                        className="!w-16 mx-auto -mt-1"
                        value="0"
                        text={`${Math.floor(goal)}%`}
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
    );
}
