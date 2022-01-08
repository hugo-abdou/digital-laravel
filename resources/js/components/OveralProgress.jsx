import React from "react";
import Card from "./Card";

export default function OveralProgress({ className }) {
    let green = "#00F018";
    let rose = "#FF28A9";
    return (
        <Card title="Overal Progress" className={className}>
            <div className="flex items-center p-3">
                <svg
                    className="w-2/3"
                    height="53"
                    viewBox="0 0 158 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1.5"
                        y="1.5"
                        width="146.057"
                        height="49.1698"
                        stroke="#555555"
                        strokeWidth="3"
                    />
                    <rect
                        x="146.82"
                        y="14.9057"
                        width="11.1792"
                        height="22.3585"
                        fill="#555555"
                    />
                    {[0, 1, 2, 3, 4, 5].map((item) => {
                        return (
                            <rect
                                key={item}
                                x={2.3 + 15.7 * item}
                                y="2.23584"
                                width="14.9057"
                                height="47.6981"
                                fill={rose}
                            />
                        );
                    })}
                </svg>
                <div className="ml-5 font-bold text-lg text-dark-gray">
                    <span className="block">30%</span>
                    <span>Goals</span>
                </div>
            </div>
            <div className="flex items-center p-3">
                <svg
                    className="w-2/3"
                    height="53"
                    viewBox="0 0 158 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1.5"
                        y="1.5"
                        width="146.057"
                        height="49.1698"
                        stroke="#555555"
                        strokeWidth="3"
                    />
                    <rect
                        x="146.82"
                        y="14.9057"
                        width="11.1792"
                        height="22.3585"
                        fill="#555555"
                    />
                    {[0, 1, 2, 3, 4, 5].map((item) => {
                        return (
                            <rect
                                key={item}
                                x={2.3 + 15.7 * item}
                                y="2.23584"
                                width="14.9057"
                                height="47.6981"
                                fill={green}
                            />
                        );
                    })}
                </svg>
                <div className="ml-5 font-bold text-lg text-dark-gray">
                    <span className="block">30%</span>
                    <span>Goals</span>
                </div>
            </div>
        </Card>
    );
}
