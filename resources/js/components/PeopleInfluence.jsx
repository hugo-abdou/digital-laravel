import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Card from "./Card";
import InputFeild from "./InputFeild";
import { useForm, usePage } from "@inertiajs/inertia-react";
import Button from "./Button";
import { PencilAltIcon } from "@heroicons/react/solid";
import { classNames } from "../helpers";
import { Menu } from "@headlessui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: [
        "hasband",
        "chidlrens",
        "gloria",
        "self working",
        "self",
        "boutique owner",
        "other",
    ],
    datasets: [
        {
            data: [12, 19, 3, 5, 2, 3, 15],
            backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
                "rgba(255, 159, 64, 0.5)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 159, 64, 1)",
            ],
        },
    ],
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

export default function PeopleInfluence() {
    const [editable, setEditable] = useState(false);
    const { people } = usePage().props;
    const { data: form, setData, put, processing, errors } = useForm(people);

    function handelSubmit() {
        put("/people/update", {
            preserveScroll: true,
            preserveState: false,
            onSuccess() {
                setEditable(false);
            },
        });
    }

    data.datasets[0].data = [
        people.hasband,
        people.chidlrens,
        people.gloria,
        people.self_working,
        people.self,
        people.boutique_owner,
        people.other,
    ];

    return (
        <Card
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            title="People Influence"
            className={classNames(editable ? "row-span-2" : "")}
        >
            <Doughnut data={data} />
            {editable && (
                <>
                    <div className="mt-5 space-y-2">
                        {data.labels.map((name) => {
                            return (
                                <InputFeild
                                    key={name}
                                    handelChange={(e) =>
                                        setData(
                                            name.replace(" ", "_"),
                                            e.target.value
                                        )
                                    }
                                    className="!w-20 flex-initial"
                                    value={form[name.replace(" ", "_")] || 0}
                                    label={name}
                                />
                            );
                        })}
                    </div>
                    <div className="mt-5">
                        <Button
                            processing={processing}
                            onClick={handelSubmit}
                            className="w-full"
                        />
                    </div>
                </>
            )}
        </Card>
    );
}
