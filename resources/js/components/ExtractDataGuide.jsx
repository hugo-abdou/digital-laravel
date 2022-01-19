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
    return (
        <Card
            className="col-span-2"
            title={
                <>
                    Guide to extract your data from{" "}
                    <a href="/" className="underline">
                        salary.com
                    </a>
                </>
            }
        >
            <Slider
                className="mb-5"
                customPaging={(i) => {
                    return (
                        <div>
                            <span
                                className={classNames(
                                    i == selectedIndicator
                                        ? "bg-d-yellow text-white"
                                        : "bg-gray-300 text-black",
                                    "rounded-full w-6 h-6 font-semibold inline-block"
                                )}
                                onClick={() => setIndicator(i)}
                            >
                                {i + 1}
                            </span>
                        </div>
                    );
                }}
                {...settings}
            >
                {[1, 2, 3].map((i) => {
                    return (
                        <div key={i}>
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <img src="/assets/laptop.png" alt="" />
                                </div>
                                <div className="w-1/2 flex items-center">
                                    <div>
                                        <span className="bg-[#ED7D31] text-white text-center leading-10 uppercase w-10 h-10 block font-bold text-lg rounded-full">
                                            1
                                        </span>
                                    </div>
                                    <p className="ml-4 text-sm text-dark-gray">
                                        Go to salary.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </Card>
    );
}
