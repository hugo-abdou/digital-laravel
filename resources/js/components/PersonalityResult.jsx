import { Menu, Transition } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { Fragment, useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { classNames } from "../helpers";
import Card from "./Card";
import Icon from "./Icon";

function Progressbar({ name, value, color, lables, userId, editable }) {
    return (
        <div className="p-1 flex flex-col items-center">
            <CircularProgressbar
                className="!w-14 mx-auto"
                value={value || 0}
                text={`${value || 0}%`}
                strokeWidth={10}
                styles={buildStyles({
                    pathColor: color,
                })}
            />
            {!editable ? (
                <Menu as="div" className="relative z-30">
                    {({ open }) => (
                        <>
                            <Menu.Button>
                                <span className="text-center capitalize font-semibold text-2xl text-black block mt-2">
                                    {name}
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
                                                            name !== lable &&
                                                            Inertia.put(
                                                                `/change_personality/${userId}`,
                                                                {
                                                                    curent: name,
                                                                    new: lable,
                                                                },
                                                                {
                                                                    preserveScroll: true,
                                                                    preserveState: true,
                                                                }
                                                            )
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
            ) : (
                <span className="text-center capitalize font-semibold text-2xl text-black block mt-2">
                    {name}
                </span>
            )}
        </div>
    );
}

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
const colors = {
    e: "#0097fe",
    i: "#014b7c",
    t: "#ff120c",
    f: "#e149d9",
    s: "#0dcc53",
    n: "#814be7",
    j: "#ffe51c",
    p: "#ce5c0a",
};

function lableValues(key) {
    if (key == "e" || key == "i") return ["e", "i"];
    if (key == "s" || key == "n") return ["s", "n"];
    if (key == "t" || key == "f") return ["t", "f"];
    if (key == "j" || key == "p") return ["j", "p"];
}

export default function PersonalityResult() {
    const { personality_result, auth } = usePage().props;
    const [editable, setEditable] = useState(false);
    function initialForm() {
        let obj = {};
        personality_result.data.map(({ name, pourcentage }) => {
            obj[name] = pourcentage;
        });
        return obj;
    }

    const { data, setData, put, processing, errors } = useForm(initialForm);

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
                    {personality_result.data.map(({ name, pourcentage }) => {
                        return (
                            <Progressbar
                                editable={editable}
                                userId={auth.user.id}
                                color={colors[name]}
                                key={name}
                                name={name}
                                lables={lableValues(name)}
                                value={pourcentage}
                            />
                        );
                    })}
                </div>
                {editable && (
                    <>
                        <div className="grid gap-4 grid-cols-2 h-full mt-6">
                            {personality_result.data.map(({ name }) => {
                                return (
                                    <Label
                                        key={name}
                                        value={data[name] || 0}
                                        label={`${name} :`}
                                        handelChange={(e) =>
                                            setData(name, e.target.value)
                                        }
                                    />
                                );
                            })}
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
