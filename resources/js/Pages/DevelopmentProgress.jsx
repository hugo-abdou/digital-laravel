import { Menu } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import Card from "../components/Card";
import Icon from "../components/Icon";
import InfluenceManagement from "../components/InfluenceManagement";
import InputFeild from "../components/InputFeild";
import { classNames } from "../helpers";

function GoalsCard({ items, addGoal }) {
    const [editable, setEditable] = useState(false);
    let lastOne = null;
    const { data, setData, post, processing, errors } = useForm({ goal: "" });

    function handelSubmit() {
        post("/goal/create", {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }

    return (
        <Card
            MenuItems={
                addGoal && <MenuItems handelClick={() => setEditable(true)} />
            }
            className="w-1/3"
        >
            {editable && (
                <div className="my-4">
                    <InputFeild
                        value={data.goal}
                        label={`add Goal :`}
                        handelChange={(e) => setData("goal", e.target.value)}
                    />
                    <button
                        onClick={handelSubmit}
                        className="px-4 py-2 mt-5 mx-auto font-medium tracking-wide text-white capitalize bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none flex justify-center items-center text-sm"
                    >
                        {processing && (
                            <span className="inline-block  px-2">
                                <Icon
                                    name="loader"
                                    className="mr-2 animate-spin"
                                />
                            </span>
                        )}
                        Save
                    </button>
                </div>
            )}

            <ul className={classNames(!addGoal ? "mt-7" : "")}>
                {items.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className="flex items-center justify-between border-b-2 px-1 py-2"
                        >
                            <span className="font-medium text-lg text-black">
                                Goal {lastOne && lastOne.pourcentage}
                            </span>
                            <span className="flex items-center font-bold text-lg text-black">
                                {item.pourcentage}%
                                <Icon
                                    name={item.up ? "caret-up" : "caret-down"}
                                    className={classNames(
                                        item.up
                                            ? "text-green-400"
                                            : "text-red-400",
                                        "inline-block  text-lg ml-2"
                                    )}
                                />
                            </span>
                        </li>
                    );
                })}
            </ul>
        </Card>
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

export default function DevelopmentProgress() {
    const { goals } = usePage().props;
    return (
        <div className="px-5">
            <div className="relative bg-white overflow-hidden rounded-xl">
                <img
                    src="assets/background.png"
                    className="absolute h-full w-full"
                />
                <div className="absolute bg-gradient-to-r from-[#000]/70 via-[#000]/70 to-[#000]/20 inset-0"></div>
                <div className="relative py-9 px-3 grid grid-cols-3 gap-3 w-full">
                    <Card title="Develoment Progress">
                        <div className="flex items-center">
                            <div className="w-1/2">
                                <svg
                                    className="mx-auto"
                                    width="37"
                                    height="104"
                                    viewBox="0 0 69 180"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect
                                        x="8"
                                        y="6"
                                        width="80%"
                                        height="100%"
                                        fill="#00F052"
                                    />
                                    <rect
                                        x="7"
                                        y="6"
                                        width="80%"
                                        height="100%"
                                        stroke="#555555"
                                        strokeWidth="3"
                                    />
                                </svg>
                                <CircularProgressbar
                                    className="!w-16 mx-auto -mt-1"
                                    value="0"
                                    text={`${0}%`}
                                    strokeWidth={10}
                                    styles={buildStyles({
                                        trailColor: "#555555",
                                    })}
                                />
                            </div>
                            <h4 className="font-semibold text-lg mb-6">
                                Percentage Of Goal Alignment
                            </h4>
                        </div>
                    </Card>
                    <Card title="Wellness Progress">
                        <div className="flex items-center">
                            <div className="w-1/2 p-5">
                                <PieChart
                                    lineWidth={20}
                                    labelPosition="0"
                                    background="#d6d6d6"
                                    data={[
                                        {
                                            value: 30,
                                            color: "#1471FC",
                                        },
                                        {
                                            value: 70,
                                            color: "#FF28A9",
                                        },
                                    ]}
                                />
                            </div>
                            <div className="ml-5">
                                <div className="flex items-center">
                                    <span className="w-8 h-3 block bg-[#FC53B8]"></span>
                                    <div className="text-center">
                                        <span className="font-semibold text-lg ml-4 block">
                                            Activity
                                        </span>
                                        <span className="font-semibold text-dark-gray text-lg ml-4 block">
                                            36%
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center mt-5">
                                    <span className="w-8 h-3 block bg-[#1D83FA]"></span>
                                    <div className="text-center">
                                        <span className="font-semibold text-lg ml-4 block">
                                            Inactivity
                                        </span>
                                        <span className="font-semibold text-dark-gray text-lg ml-4 block">
                                            36%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <InfluenceManagement />
                </div>
            </div>
            <div className="mt-10 flex gap-4">
                {goals && (
                    <GoalsCard
                        addGoal={goals.length < 18}
                        items={goals.filter((item, index) =>
                            index < 6 ? item : null
                        )}
                    />
                )}
                {goals.length > 6 && (
                    <GoalsCard
                        items={goals.filter((item, index) =>
                            index > 5 && index < 12 ? item : null
                        )}
                    />
                )}
                {goals.length > 12 && (
                    <GoalsCard
                        items={goals.filter((item, index) =>
                            index > 11 ? item : null
                        )}
                    />
                )}
            </div>
        </div>
    );
}
