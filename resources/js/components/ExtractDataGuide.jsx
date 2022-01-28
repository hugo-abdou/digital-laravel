import React, { useState } from "react";
import { classNames } from "../helpers";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InputFeild from "./InputFeild";
import Button from "./Button";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Menu } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/solid";

function MenuItems(props) {
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    onClick={props.handelClick}
                    className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "flex px-4 py-2 text-sm w-full"
                    )}
                >
                    <PencilAltIcon
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    <span>Fill Data</span>
                </button>
            )}
        </Menu.Item>
    );
}

function Graphs(props) {
    const { data, setData, put, processing, errors, reset } = useForm(
        props.hrs
    );

    function updateHr() {
        put("/hrs/update", {
            preserveScroll: true,
            onSuccess() {
                props.setEditable(false);
            },
        });
    }
    return (
        <>
            <div className="flex-1 text-black">
                <h4>
                    <span className="font-bold text-lg ">
                        Electrical Enginee
                    </span>
                    <span className="ml-2">in Texas city, Tx</span>
                    <span className="underline block">
                        Guide tBased on HR-reported data: a national average
                        with a geographic differential
                    </span>
                    <span className="font-medium">Paid Annually</span>
                </h4>
            </div>
            <div className="h-80 relative ">
                <img
                    src="/assets/guid-graph.jpeg"
                    className="absolute bottom-4 w-full"
                    alt=""
                />
                <div className="relative text-center flex w-full top-16">
                    <div className=" w-1/6 ml-2">
                        <span className="block">10%</span>
                        {props.editAble ? (
                            <InputFeild
                                value={data[0].value}
                                handelChange={({ target: { value } }) =>
                                    setData(
                                        data.map((item, index) => {
                                            if (index == 0) {
                                                item.value = value;
                                            }
                                            return item;
                                        })
                                    )
                                }
                            />
                        ) : (
                            <span>${props.hrs[0].value}</span>
                        )}
                    </div>
                    <div className=" w-1/6">
                        <span className="block">20%</span>
                        {props.editAble ? (
                            <InputFeild
                                value={data[1].value}
                                handelChange={({ target: { value } }) =>
                                    setData(
                                        data.map((item, index) => {
                                            if (index == 1) {
                                                item.value = value;
                                            }
                                            return item;
                                        })
                                    )
                                }
                            />
                        ) : (
                            <span>${props.hrs[1].value}</span>
                        )}
                    </div>
                    <div className=" w-1/6 ml-14 font-semibold ">
                        <span className="block">50%(Median)</span>
                        {props.editAble ? (
                            <InputFeild
                                value={data[2].value}
                                handelChange={({ target: { value } }) =>
                                    setData(
                                        data.map((item, index) => {
                                            if (index == 2) {
                                                item.value = value;
                                            }
                                            return item;
                                        })
                                    )
                                }
                            />
                        ) : (
                            <span>${props.hrs[2].value}</span>
                        )}
                    </div>
                    <div className=" w-1/6 ml-10">
                        <span className="block">75%</span>
                        {props.editAble ? (
                            <InputFeild
                                value={data[3].value}
                                handelChange={({ target: { value } }) =>
                                    setData(
                                        data.map((item, index) => {
                                            if (index == 3) {
                                                item.value = value;
                                            }
                                            return item;
                                        })
                                    )
                                }
                            />
                        ) : (
                            <span>${props.hrs[3].value}</span>
                        )}
                    </div>
                    <div className="w-1/6">
                        <span className="block">90%</span>
                        {props.editAble ? (
                            <InputFeild
                                value={data[4].value}
                                handelChange={({ target: { value } }) =>
                                    setData(
                                        data.map((item, index) => {
                                            if (index == 4) {
                                                item.value = value;
                                            }
                                            return item;
                                        })
                                    )
                                }
                            />
                        ) : (
                            <span>${props.hrs[4].value}</span>
                        )}
                    </div>
                </div>
            </div>
            {props.editAble && (
                <div>
                    <Button
                        processing={processing}
                        onClick={updateHr}
                        className="mx-auto my-5"
                    />
                </div>
            )}
        </>
    );
}

export default function Indicators() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [selectedIndicator, setIndicator] = useState(0);
    const { hrs } = usePage().props;

    let isFirstVisit =
        new Date(hrs[0].created_at) < new Date(hrs[0].updated_at);

    const [editAble, setEditable] = useState(false);
    return (
        <Card
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            className="col-span-2"
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
                {!isFirstVisit && (
                    <>
                        <div className="flex-1 font-bold text-lg text-black">
                            <h4>
                                Guide to extract your data from
                                <a href="/" className="underline">
                                    salary.com
                                </a>
                            </h4>
                        </div>
                        <div className="flex items-center h-80">
                            <div className="w-1/2 ">
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
                    </>
                )}
                {!isFirstVisit && (
                    <>
                        <div className="flex-1 font-bold text-lg text-black">
                            <h4>
                                Guide to extract your data from
                                <a href="/" className="underline">
                                    salary.com
                                </a>
                            </h4>
                        </div>
                        <div className="flex items-center h-80">
                            <div className="w-1/2 ">
                                <img src="/assets/laptop2.png" alt="" />
                            </div>
                            <div className="w-1/2 flex items-center">
                                <div>
                                    <span className="bg-[#ED7D31] text-white text-center leading-10 uppercase w-10 h-10 block font-bold text-lg rounded-full">
                                        2
                                    </span>
                                </div>
                                <p className="ml-4 text-sm text-dark-gray">
                                    Fill the inputs and press get my salary
                                    estimate button
                                </p>
                            </div>
                        </div>
                    </>
                )}
                <Graphs
                    hrs={hrs}
                    setEditable={setEditable}
                    editAble={editAble}
                />
            </Slider>
        </Card>
    );
}
