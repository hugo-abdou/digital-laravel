import { Menu } from "@headlessui/react";
import { PencilAltIcon } from "@heroicons/react/solid";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { classNames } from "../helpers";
import Button from "./Button";
import Card from "./Card";
import Icon from "./Icon";
import InputFeild from "./InputFeild";

function Goals({ items, addGoal }) {
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
                    <Button
                        text="Save"
                        className="mt-5 mx-auto w-full"
                        processing={processing}
                        onClick={handelSubmit}
                    />
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
export default function GoalsCard() {
    const { goals } = usePage().props;

    return (
        <div className="mt-10 flex gap-4">
            {goals && (
                <Goals
                    addGoal={goals.length < 18}
                    items={goals.filter((item, index) =>
                        index < 6 ? item : null
                    )}
                />
            )}
            {goals.length > 6 && (
                <Goals
                    items={goals.filter((item, index) =>
                        index > 5 && index < 12 ? item : null
                    )}
                />
            )}
            {goals.length > 12 && (
                <Goals
                    items={goals.filter((item, index) =>
                        index > 11 ? item : null
                    )}
                />
            )}
        </div>
    );
}
