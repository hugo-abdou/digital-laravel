import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { classNames } from "../helpers";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Indicators() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [selectedIndicator, setIndicator] = useState(0);
    const { indicators } = usePage().props;
    return (
        <Card className="indicators" title="Indicators">
            <Slider
                className="mb-5"
                customPaging={(i) => {
                    return (
                        <div className="!mx-0">
                            <span
                                className={classNames(
                                    i == selectedIndicator
                                        ? "bg-d-yellow text-white"
                                        : "bg-gray-300 text-black",
                                    "rounded-full uppercase w-4 h-4 text-xs font-semibold inline-block"
                                )}
                                onClick={() => setIndicator(i)}
                            >
                                {indicators[i].name}
                            </span>
                        </div>
                    );
                }}
                {...settings}
            >
                {indicators.map((indicator) => {
                    return (
                        <div
                            key={indicator.id}
                            className="mb-5 h-[160px] overflow-auto"
                        >
                            <div className="flex">
                                <div className="w-1/3">
                                    <span className="bg-[#ED7D31] text-white text-center leading-10 uppercase w-10 h-10 block font-bold text-lg rounded-full">
                                        {indicator.name}
                                    </span>
                                </div>
                                <p className="ml-4 text-sm text-dark-gray">
                                    {indicator.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </Card>
    );
}
