import { Menu, Transition } from "@headlessui/react";
import { usePage } from "@inertiajs/inertia-react";
import React, { Fragment, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { classNames } from "../helpers";
import Card from "./Card";

function Progressbar({ lables, value, color }) {
    const [selectedLable, setLable] = useState(lables[0] || "");
    return (
        <div className="p-1 flex flex-col items-center">
            <CircularProgressbar
                className="!w-14 mx-auto"
                value={value[selectedLable] || 0}
                text={`${value[selectedLable] || 0}%`}
                strokeWidth={10}
                styles={buildStyles({
                    pathColor: color[selectedLable],
                })}
            />

            <Menu as="div" className="relative z-30">
                {({ open }) => (
                    <>
                        <Menu.Button>
                            <span className="text-center capitalize font-semibold text-2xl text-black block mt-2">
                                {selectedLable}
                            </span>
                        </Menu.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="top-0 absolute -right-3 mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                {lables.map((lable) => {
                                    return (
                                        <Menu.Item key={lable}>
                                            {({ active }) => (
                                                <button
                                                    onClick={() =>
                                                        setLable(lable)
                                                    }
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "flex px-4 py-2 text-center capitalize font-semibold text-2xl text-black w-full"
                                                    )}
                                                >
                                                    <span>{lable}</span>
                                                </button>
                                            )}
                                        </Menu.Item>
                                    );
                                })}
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    );
}
Progressbar.defaultProps = {
    lables: [],
    color: {},
    value: 10,
};

export default function PersonalityResult() {
    const { personality_result } = usePage().props;
    return (
        <Card title="Personality Result">
            <p className="text-sm text-dark-gray">
                Intrevorted Intuitive Feeling Perceiver
            </p>
            <div className="flex justify-around h-full items-center mt-6">
                <Progressbar
                    color={{ e: "#0097fe", i: "#014b7c" }}
                    lables={["e", "i"]}
                    value={personality_result}
                />
                <Progressbar
                    color={{ s: "#0dcc53", n: "#814be7" }}
                    lables={["s", "n"]}
                    value={personality_result}
                />
                <Progressbar
                    color={{ t: "#ff120c", f: "#e149d9" }}
                    lables={["t", "f"]}
                    value={personality_result}
                />
                <Progressbar
                    color={{ j: "#ffe51c", p: "#ce5c0a" }}
                    lables={["j", "p"]}
                    value={personality_result}
                />
            </div>
        </Card>
    );
}
