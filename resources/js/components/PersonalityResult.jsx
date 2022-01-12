import { Menu, Transition } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { isObject, isPlainObject } from "lodash";
import React, { Fragment, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { classNames } from "../helpers";
import Card from "./Card";
import Icon from "./Icon";

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

function Label(props) {
    return (
        <label className="flex items-center">
            <span className="mr-1 w-10 capitalize font-semibold">
                {props.label}
            </span>
            <input
                max={100}
                type="number"
                onChange={props.handelChange}
                value={props.value || ""}
                className="w-full py-0 border-gray-400 rounded-md"
            />
        </label>
    );
}

export default function PersonalityResult() {
    const { personality_result, auth } = usePage().props;
    const [editable, setEditable] = useState(false);
    const { data, setData, put, processing, errors } =
        useForm(personality_result);

    function handelSubmit() {
        put(`/personality_result/${auth.user.id}/update`, {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }

    return (
        <Card
            className={editable ? "row-span-2 " : ""}
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            title="Personality Result"
        >
            <p className="text-sm text-dark-gray">
                Intrevorted Intuitive Feeling Perceiver
            </p>
            <div
                className={
                    editable ? "flex flex-col justify-around h-[400px]" : ""
                }
            >
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
                {editable && (
                    <>
                        <div className="grid gap-4 grid-cols-2 h-full mt-6">
                            <Label
                                value={data["e"] || 0}
                                label="E :"
                                handelChange={(e) =>
                                    setData("e", e.target.value)
                                }
                            />
                            <Label
                                value={data["s"] || 0}
                                label="s :"
                                handelChange={(e) =>
                                    setData("s", e.target.value)
                                }
                            />
                            <Label
                                value={data["i"] || 0}
                                label="i :"
                                handelChange={(e) =>
                                    setData("i", e.target.value)
                                }
                            />
                            <Label
                                value={data["n"] || 0}
                                label="n :"
                                handelChange={(e) =>
                                    setData("n", e.target.value)
                                }
                            />
                            <Label
                                value={data["t"] || 0}
                                label="t :"
                                handelChange={(e) =>
                                    setData("t", e.target.value)
                                }
                            />
                            <Label
                                value={data["j"] || 0}
                                label="j :"
                                handelChange={(e) =>
                                    setData("j", e.target.value)
                                }
                            />
                            <Label
                                value={data["f"] || 0}
                                label="f :"
                                handelChange={(e) =>
                                    setData("f", e.target.value)
                                }
                            />
                            <Label
                                value={data["p"] || 0}
                                label="p :"
                                handelChange={(e) =>
                                    setData("p", e.target.value)
                                }
                            />
                        </div>
                        {Object.keys(errors).length ? (
                            <div className="text-center mt-2">
                                <span className="text-red-400 text-xs">
                                    The Values must be between 0 and 100.
                                </span>
                            </div>
                        ) : null}
                        <button
                            onClick={handelSubmit}
                            className="px-4 py-2 mt-5 w-full font-medium tracking-wide text-white capitalize bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none flex justify-center items-center"
                        >
                            <span className="inline-block animate-spin px-2">
                                {processing && (
                                    <Icon name="loader" className="mr-2" />
                                )}
                            </span>
                            Save
                        </button>
                    </>
                )}
            </div>
        </Card>
    );
}
