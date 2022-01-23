import { Menu } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { classNames } from "../helpers";
import Card from "./Card";
import Button from "./Button";

function InputFeild(props) {
    if (!props.editable)
        return (
            <div className="ml-5 text-center font-bold text-lg text-dark-gray">
                <span>{props.name}</span>
                <span className="block">{props.value || 0}%</span>
            </div>
        );
    return (
        <div className="ml-5 font-bold text-center capitalize text-lg text-dark-gray">
            <span>{props.name}</span>
            <input
                type="number"
                onChange={props.handelChange}
                value={props.value || 0}
                className="py-0 mt-2 w-24 rounded border-gray-400"
            />
            {props.error && (
                <span className="text-red-400 text-xs">{props.error}</span>
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

export default function WellnessProgress() {
    const [editable, setEditable] = useState(false);
    const { wellness } = usePage().props;
    const { data, setData, put, processing, errors } = useForm(wellness);

    function handelSubmit() {
        put(`/wellness/update`, {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }
    return (
        <Card
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            title="Wellness Progress"
        >
            <div className="flex items-center">
                <div className="w-1/2 p-5">
                    <PieChart
                        lineWidth={20}
                        labelPosition="0"
                        background="#d6d6d6"
                        data={[
                            {
                                value: parseInt(wellness.activity || 0),
                                color: "#FF28A9",
                            },
                            {
                                value: parseInt(wellness.inactivity || 0),
                                color: "#1471FC",
                            },
                        ]}
                    />
                </div>
                <div className="ml-5">
                    <div className="flex items-center">
                        <span className="w-8 h-3 block bg-[#FC53B8]"></span>
                        <div className="text-center">
                            <InputFeild
                                handelChange={(e) =>
                                    setData("activity", e.target.value)
                                }
                                editable={editable}
                                name="activity"
                                value={data.activity}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mt-5">
                        <span className="w-8 h-3 block bg-[#1D83FA]"></span>
                        <div className="text-center">
                            <InputFeild
                                handelChange={(e) =>
                                    setData("inactivity", e.target.value)
                                }
                                editable={editable}
                                name="inactivity"
                                value={data.inactivity}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {editable && (
                <Button
                    processing={processing}
                    onClick={handelSubmit}
                    className="w-full mt-2"
                />
            )}
        </Card>
    );
}
