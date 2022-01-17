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
    }

    function handelSubmit() {
        put("/discs/update", {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }

    return (
        <Card
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            title="Disc"
            className={classNames("col-span-2", editable && "row-span-2")}
        >
            <div className="flex justify-around pb-5">
                {discs.map((disc) => {
                    return <Pourcentage disc={disc} key={disc.id} />;
                })}
            </div>
            {editable && (
                <>
                    <div className="flex justify-around mt-20">
                        {data.discs.map((disc) => {
                            return (
                                <div key={disc.id} className="space-y-4 px-4">
                                    <InputFeild
                                        className="w-20"
                                        value={disc.pourcentage}
                                        handelChange={(e) =>
                                            setFormData(
                                                "pourcentage",
                                                disc,
                                                e.target.value
                                            )
                                        }
                                        label={`${disc.name} :`}
                                    />
                                    <InputFeild
                                        className="w-20"
                                        value={disc.d}
                                        handelChange={(e) =>
                                            setFormData(
                                                "d",
                                                disc,
                                                e.target.value
                                            )
                                        }
                                        label="D :"
                                    />
                                    <InputFeild
                                        className="w-20"
                                        value={disc.di}
                                        handelChange={(e) =>
                                            setFormData(
                                                "di",
                                                disc,
                                                e.target.value
                                            )
                                        }
                                        label="DI :"
                                    />
                                    <InputFeild
                                        className="w-20"
                                        value={disc.dc}
                                        handelChange={(e) =>
                                            setFormData(
                                                "dc",
                                                disc,
                                                e.target.value
                                            )
                                        }
                                        label="DC :"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <button
                        // onClick={handelSubmit}
                        className="px-4 py-2 mx-auto mt-5 font-medium tracking-wide text-white capitalize bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none flex justify-center items-center"
                        onClick={handelSubmit}
                    >
                        {processing && (
                            <span className="inline-block animate-spin px-2">
                                <Icon name="loader" className="mr-2" />
                            </span>
                        )}
                        Save
                    </button>
                </>
            )}
        </Card>
    );
}
