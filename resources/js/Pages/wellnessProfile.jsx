import { Menu } from "@headlessui/react";
import { UserAddIcon } from "@heroicons/react/solid";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { classNames } from "../helpers";

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
                    <UserAddIcon
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    <span>Add Influencer</span>
                </button>
            )}
        </Menu.Item>
    );
}

function InputFeild(props) {
    return (
        <p className="flex items-center ">
            {props.name}
            {props.editable ? (
                <input
                    type="number"
                    value={props.value}
                    type={props.type || "number"}
                    className="w-24 py-0.5 rounded-lg ml-4"
                    onChange={props.onChange}
                />
            ) : (
                <span className="text-black ml-2"> {props.value}</span>
            )}
        </p>
    );
}

function Card1(props) {
    const [editable, setEditable] = useState(false);
    const { profile } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm(profile);

    function handelSubmit() {
        put("/profile/edit", {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }
    return (
        <Card MenuItems={<MenuItems handelClick={() => setEditable(true)} />}>
            <img src="/assets/calendar.png" />
            <div className="space-y-5 mt-5 font-semibold text-lg text-dark-gray">
                <InputFeild
                    name="Actual Age :"
                    editable={editable}
                    onChange={(e) => setData("age", e.target.value)}
                    value={data.age || 0}
                />
                <InputFeild
                    name="Body Age :"
                    onChange={(e) => setData("body_age", e.target.value)}
                    editable={editable}
                    value={data.body_age || 0}
                />
                <InputFeild
                    name=" Age Comparison :"
                    value={data.age - data.body_age || 0}
                />
                {editable && (
                    <Button
                        className="w-full"
                        processing={processing}
                        onClick={handelSubmit}
                    />
                )}
            </div>
        </Card>
    );
}

function Card2(props) {
    const [editable, setEditable] = useState(false);
    const { profile } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm(profile);

    function handelSubmit() {
        put("/profile/edit", {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }
    return (
        <Card MenuItems={<MenuItems handelClick={() => setEditable(true)} />}>
            <img src="/assets/weight-scale.png" />
            <div className="space-y-5 mt-5 font-semibold text-lg text-dark-gray">
                <p>
                    Gender : <span className="text-black">male</span>
                </p>
                <InputFeild
                    name="Weight : "
                    onChange={(e) => setData("weight", e.target.value)}
                    editable={editable}
                    value={data.weight || 0}
                />
                <InputFeild
                    name="Height : "
                    onChange={(e) => setData("height", e.target.value)}
                    editable={editable}
                    value={data.height || 0}
                />
                {editable && (
                    <Button
                        className="w-full"
                        processing={processing}
                        onClick={handelSubmit}
                    />
                )}
            </div>
        </Card>
    );
}

function Card3(props) {
    const [editable, setEditable] = useState(false);
    const { profile } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm(profile);

    function handelSubmit() {
        put("/profile/edit", {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }
    return (
        <Card MenuItems={<MenuItems handelClick={() => setEditable(true)} />}>
            <img src="/assets/fitness.png" />
            <div className="space-y-5 mt-5 font-semibold text-lg text-dark-gray">
                <InputFeild
                    name="Cest :"
                    onChange={(e) => setData("cest", e.target.value)}
                    editable={editable}
                    value={editable ? data.cest || 0 : data.cest + " Inches"}
                />
                <InputFeild
                    name="Waist :"
                    onChange={(e) => setData("waist", e.target.value)}
                    editable={editable}
                    value={editable ? data.waist || 0 : data.waist + " Inches"}
                />
                <InputFeild
                    name="Legs :"
                    onChange={(e) => setData("legs", e.target.value)}
                    editable={editable}
                    value={editable ? data.legs || 0 : data.legs + " Inches"}
                />
                <InputFeild
                    name="Body Fat :"
                    onChange={(e) => setData("body_fat", e.target.value)}
                    editable={editable}
                    value={editable ? data.body_fat || 0 : data.body_fat + "%"}
                />
                <InputFeild
                    name="Target Body Fat :"
                    onChange={(e) => setData("target_body_fat", e.target.value)}
                    editable={editable}
                    type="text"
                    value={data.target_body_fat || ""}
                />

                {editable && (
                    <Button
                        className="w-full"
                        processing={processing}
                        onClick={handelSubmit}
                    />
                )}
            </div>
        </Card>
    );
}

function Card4(props) {
    const [editable, setEditable] = useState(false);
    const { profile } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm(profile);

    function handelSubmit() {
        put("/profile/edit", {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }
    return (
        <Card MenuItems={<MenuItems handelClick={() => setEditable(true)} />}>
            <img src="/assets/muscle.png" />
            <div className="space-y-5 mt-5 font-semibold text-lg text-dark-gray">
                <InputFeild
                    name="BMI :"
                    onChange={(e) => setData("bmi", e.target.value)}
                    editable={editable}
                    value={editable ? data.bmi || 0 : data.bmi + " (Strong)"}
                />
                <InputFeild
                    name="Aerobic Fitness :"
                    onChange={(e) => setData("aerobic_fitness", e.target.value)}
                    editable={editable}
                    value={
                        editable
                            ? data.aerobic_fitness || 0
                            : data.aerobic_fitness + " (Strong)"
                    }
                />

                <InputFeild
                    name="Muscular Strength :"
                    onChange={(e) =>
                        setData("muscular_strength", e.target.value)
                    }
                    editable={editable}
                    value={
                        editable
                            ? data.muscular_strength || 0
                            : data.muscular_strength + " (Strong)"
                    }
                />
                <InputFeild
                    name="Endurnce :"
                    onChange={(e) => setData("endurnce", e.target.value)}
                    editable={editable}
                    value={
                        editable
                            ? data.endurnce || 0
                            : data.endurnce + " (Strong)"
                    }
                />

                <InputFeild
                    name="Flexibility :"
                    onChange={(e) => setData("flexibility", e.target.value)}
                    editable={editable}
                    value={
                        editable
                            ? data.flexibility || 0
                            : data.flexibility + " (Strong)"
                    }
                />
                {editable && (
                    <Button
                        className="w-full"
                        processing={processing}
                        onClick={handelSubmit}
                    />
                )}
            </div>
        </Card>
    );
}

export default function wellnessProfile() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-4 px-4">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
        </div>
    );
}
