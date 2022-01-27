import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Card from "./Card";
import InputFeild from "./InputFeild";
import { useForm, usePage } from "@inertiajs/inertia-react";
import Button from "./Button";
import {
    CheckCircleIcon,
    PencilAltIcon,
    PlusCircleIcon,
    TrashIcon,
} from "@heroicons/react/solid";
import { classNames } from "../helpers";
import { Menu } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";

const colors = [
    "#1471FC",
    "#FABD3B",
    "#FF28A9",
    "#31559C",
    "#FF8500",
    "#00B76E",
];

ChartJS.register(ArcElement, Tooltip, Legend);

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

export default function ActivitiesInfluence() {
    const [editable, setEditable] = useState(false);
    const [addNew, setaddNew] = useState({
        active: false,
        name: null,
        value: null,
    });
    const { activities } = usePage().props;
    const { data, setData, put, processing, errors } = useForm(activities);

    const [chartData, setChartData] = useState({
        labels: activities.map((item) => item.name),
        datasets: [
            {
                data: activities.map((item) => item.value),
                backgroundColor: colors,
                borderColor: colors,
            },
        ],
    });

    function updateActivities() {
        put("/activities/update", {
            preserveState: true,
            onSuccess: onSuccess,
        });
    }

    function onSuccess(page) {
        let activities = page.props.activities;
        setData(activities);
        setEditable(false);
        setChartData({
            labels: activities.map((item) => item.name),
            datasets: [
                {
                    data: activities.map((item) => item.value),
                    backgroundColor: colors,
                    borderColor: colors,
                },
            ],
        });
        setaddNew({
            active: false,
            name: null,
            value: null,
        });
    }
    function addNewActivity() {
        Inertia.post("activities/create", addNew, {
            preserveScroll: true,
            onSuccess: onSuccess,
        });
    }
    function deleteActivity(id) {
        if (confirm("are you sur you whant to delete this activity")) {
            Inertia.delete(`activities/${id}/delete`, {
                preserveScroll: true,
                onSuccess: onSuccess,
            });
        }
    }

    return (
        <Card
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            title="Activities Influence"
            className={classNames(editable ? "row-span-2" : "")}
        >
            <Doughnut data={chartData} />
            {editable && (
                <>
                    <div className="mt-5 space-y-2">
                        {data.map(({ name, value, id }) => {
                            return (
                                <div
                                    key={id}
                                    className="grid grid-cols-12 w-full"
                                >
                                    <div className="col-span-11">
                                        <InputFeild
                                            handelChange={({
                                                target: { value },
                                            }) => {
                                                if (
                                                    value >= 0 &&
                                                    value <= 100
                                                ) {
                                                    setData(
                                                        activities.map(
                                                            (item) => {
                                                                if (
                                                                    item.id ==
                                                                    id
                                                                ) {
                                                                    item.value =
                                                                        value;
                                                                }
                                                                return item;
                                                            }
                                                        )
                                                    );
                                                }
                                            }}
                                            className=" flex-initial"
                                            value={value}
                                            label={name}
                                        />
                                    </div>
                                    <TrashIcon
                                        onClick={() => deleteActivity(id)}
                                        className="h-5 w-5 ml-2 p-0.5 mt-1 text-red-500 rounded-full cursor-pointer shadow-lg active:shadow border"
                                    />
                                </div>
                            );
                        })}
                        {addNew.active && (
                            <div className="flex justify-between gap-2 !mt-10">
                                <InputFeild
                                    handelChange={(e) =>
                                        setaddNew({
                                            ...addNew,
                                            name: e.target.value,
                                        })
                                    }
                                    placeholder="Name"
                                    type="text"
                                    className="!w-2/3 flex-initial"
                                    value={addNew.name}
                                />
                                <InputFeild
                                    handelChange={({ target: { value } }) => {
                                        if (value >= 0 && value <= 100) {
                                            setaddNew({
                                                ...addNew,
                                                value: value,
                                            });
                                        }
                                    }}
                                    placeholder="Value"
                                    className="!w-1/3 flex-initial"
                                    value={addNew.value}
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex items-center mt-5">
                        <Button
                            processing={processing}
                            onClick={updateActivities}
                            className="w-full"
                        />
                        <div className="w-full py-2">
                            <div
                                className={classNames(
                                    "h-10 w-10 mx-auto  rounded-full cursor-pointer shadow-lg active:shadow border",
                                    addNew.active
                                        ? "text-green-500"
                                        : "text-gray-500"
                                )}
                            >
                                {addNew.active ? (
                                    <CheckCircleIcon onClick={addNewActivity} />
                                ) : (
                                    <PlusCircleIcon
                                        onClick={() =>
                                            setaddNew({
                                                ...addNew,
                                                active: true,
                                            })
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Card>
    );
}
