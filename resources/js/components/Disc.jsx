import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import Card from "./Card";
import { Menu } from "@headlessui/react";
import { classNames } from "../helpers";
import { PencilAltIcon } from "@heroicons/react/solid";
import InputFeild from "./InputFeild";
import Icon from "./Icon";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { toInteger } from "lodash";
import Button from "./Button";

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

function Pourcentage(props) {
    return (
        <div className="text-center">
            <PieChart
                className="w-32"
                lineWidth={20}
                labelPosition="0"
                background="#d6d6d6"
                label={() => props.disc.name.toUpperCase()}
                data={[
                    {
                        title: `DI ${props.disc.di}%`,
                        value: toInteger(props.disc.di),
                        color: "#FF28A9",
                    },

                    {
                        title: `D ${props.disc.d}%`,
                        value: toInteger(props.disc.d),
                        color: "#F0BB00",
                    },
                    {
                        title: `DC ${props.disc.dc}%`,
                        value: toInteger(props.disc.dc),
                        color: "#1471FC",
                    },
                ]}
            />
            <span className="text-lg font-bold text-black">
                {props.disc.pourcentage}%
            </span>
        </div>
    );
}
export default function Disc() {
    const [editable, setEditable] = useState(false);
    const { discs } = usePage().props;
    const { data, setData, put, processing, errors } = useForm({ discs });

    function setFormData(attr, disc, val) {
        setData(
            "discs",
            discs.map((item) => {
                if (item.id == disc.id) {
                    disc[attr] = val;
                    return disc;
                }
                return item;
            })
        );
        setData(
            "discs",
            discs.map((item) => {
                if (item.id == disc.id) {
                    let total =
                        parseInt(disc.d) +
                        parseInt(disc.di) +
                        parseInt(disc.dc);

                    if (total !== 100) {
                        errors.discs = true;
                        disc.error = true;
                    } else {
                        errors.discs = false;
                        disc.error = false;
                    }

                    return disc;
                }
                return item;
            })
        );
    }

    function handelSubmit() {
        if (!errors.discs) {
            put("/discs/update", {
                preserveScroll: true,
                onSuccess() {
                    setEditable(false);
                },
            });
        }
    }

    return (
        <Card
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            title="DISC"
            className={classNames("col-span-2", editable && "row-span-2")}
        >
            <div className="flex justify-around pb-5">
                {discs.map((disc) => {
                    return <Pourcentage disc={disc} key={disc.id} />;
                })}
            </div>
            {editable && (
                <>
                    <div className="grid grid-cols-4 mt-20">
                        {data.discs.map((disc) => {
                            return (
                                <div key={disc.id} className="space-y-4 px-4">
                                    <InputFeild
                                        className="w-20 "
                                        value={disc.pourcentage}
                                        handelChange={({
                                            target: { value },
                                        }) => {
                                            if (value <= 100 && value >= 0) {
                                                setFormData(
                                                    "pourcentage",
                                                    disc,
                                                    value
                                                );
                                            }
                                        }}
                                        label={`${disc.name} :`}
                                    />
                                    <InputFeild
                                        className={classNames(
                                            "w-20",
                                            disc.error ? "!border-red-400" : ""
                                        )}
                                        value={disc.d}
                                        handelChange={({
                                            target: { value },
                                        }) => {
                                            if (value <= 100 && value >= 0) {
                                                setFormData("d", disc, value);
                                            }
                                        }}
                                        label="D :"
                                    />
                                    <InputFeild
                                        className={classNames(
                                            "w-20",
                                            disc.error ? "!border-red-400" : ""
                                        )}
                                        value={disc.di}
                                        handelChange={({
                                            target: { value },
                                        }) => {
                                            if (value <= 100 && value >= 0) {
                                                setFormData("di", disc, value);
                                            }
                                        }}
                                        label="DI :"
                                    />
                                    <InputFeild
                                        className={classNames(
                                            "w-20",
                                            disc.error ? "!border-red-400" : ""
                                        )}
                                        value={disc.dc}
                                        handelChange={({
                                            target: { value },
                                        }) => {
                                            if (value <= 100 && value >= 0) {
                                                setFormData("dc", disc, value);
                                            }
                                        }}
                                        label="DC :"
                                    />
                                    {disc.error && (
                                        <span className="text-xs text-red-500">
                                            total of DC, DI, D must be exacly
                                            100%
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <Button
                        text="Save"
                        className="mt-5 mx-auto"
                        processing={processing}
                        onClick={handelSubmit}
                    />
                </>
            )}
        </Card>
    );
}
