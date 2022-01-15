import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Card from "./Card";
import { Menu } from "@headlessui/react";
import { classNames } from "../helpers";
import { PencilAltIcon } from "@heroicons/react/solid";
import Icon from "./Icon";

function LoopSvg(props) {
    let arr = [];

    return (
        <rect
            x={2.3}
            y="2.23584"
            width={(145 / 100) * props.pourcentage || 0}
            height="47.6981"
            fill={props.color}
        />
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
function InputFeild(props) {
    if (!props.editable)
        return (
            <div className="ml-5 w-1/3 text-center font-bold text-lg text-dark-gray">
                <span className="block">{props.value || 0}%</span>
                <span>{props.name}</span>
            </div>
        );
    return (
        <div className="ml-5 font-bold w-1/3 text-center text-lg text-dark-gray">
            <span>{props.name}</span>
            <input
                type={props.type}
                onChange={props.handelChange}
                value={props.value || ""}
                className="py-0 mt-2 w-24 rounded border-gray-400"
            />
            {props.error && (
                <span className="text-red-400 text-xs">{props.error}</span>
            )}
        </div>
    );
}

export default function OveralProgress({ className }) {
    const { overal_progress } = usePage().props;

    const [editable, setEditable] = useState(false);

    const { data, setData, put, processing, errors } = useForm({
        goals: overal_progress.goals,
        wellness: overal_progress.wellness,
    });

    function handelSubmit() {
        put(`/overal_progress/${overal_progress.id}/update`, {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }

    return (
        <Card
            title="Overal Progress"
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            className={className}
        >
            <div className="flex justify-between items-center p-3">
                <svg
                    className="w-2/3"
                    height="53"
                    viewBox="0 0 158 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <LoopSvg
                        pourcentage={overal_progress.goals}
                        color="#FF28A9"
                    />
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
                </svg>
                <InputFeild
                    type="number"
                    name="Goals"
                    editable={editable}
                    error={errors.goals}
                    handelChange={(e) => setData("goals", e.target.value)}
                    value={data.goals}
                />
            </div>
            <div className="flex items-center justify-between p-3">
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
                    <LoopSvg
                        pourcentage={overal_progress.wellness}
                        color="#00F018"
                    />
                </svg>
                <InputFeild
                    type="number"
                    name="Wellness"
                    editable={editable}
                    error={errors.wellness}
                    handelChange={(e) => setData("wellness", e.target.value)}
                    value={data.wellness}
                />
            </div>
            {editable && (
                <button
                    onClick={handelSubmit}
                    className="px-4 py-2 mt-4 w-full font-medium tracking-wide text-white capitalize bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none flex justify-center items-center"
                >
                    <span className="inline-block animate-spin px-2">
                        {processing && <Icon name="loader" className="mr-2" />}
                    </span>
                    Save
                </button>
            )}
        </Card>
    );
}
