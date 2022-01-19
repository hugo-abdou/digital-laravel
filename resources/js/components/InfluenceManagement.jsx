import React, { useState } from "react";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { classNames } from "../helpers";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { Menu } from "@headlessui/react";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
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
                    <BadgeCheckIcon
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    <span>Select Influencer</span>
                </button>
            )}
        </Menu.Item>
    );
}

function HeadlessuiModal(props) {
    const { influencers } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm({
        influencers: influencers,
    });
    function setFormData(attr, influencer, val) {
        setData(
            "influencers",
            influencers.map((item) => {
                if (item.id == influencer.id) {
                    influencer[attr] = val;
                    return influencer;
                }
                return item;
            })
        );
    }
    function handelSubmit() {
        put("/influencers/update", {
            preserveScroll: true,
            onSuccess() {
                closeDialog();
            },
        });
    }
    function closeDialog() {
        props.setIsOpen(false);
    }
    return (
        <Transition appear show={props.isOpen || false} as={Fragment}>
            <Dialog
                as="div"
                className="absolute inset-0 z-10 overflow-y-auto"
                onClose={closeDialog}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                    </Transition.Child>
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900"
                            >
                                Select your favorite 3 Influencers
                            </Dialog.Title>

                            <div className="mt-4">
                                <ul className="space-y-5">
                                    {data.influencers.map((item) => {
                                        return (
                                            <li
                                                key={item.id}
                                                className="flex items-center justify-around"
                                            >
                                                <div className="flex items-center">
                                                    <div className="rounded-full overflow-hidden shadow-md ring ring-d-yellow w-10">
                                                        <img
                                                            src="/assets/avatar101.jpg"
                                                            className="w-full h-full"
                                                        />
                                                    </div>
                                                    <input
                                                        onChange={(e) =>
                                                            setFormData(
                                                                "name",
                                                                item,
                                                                e.target.value
                                                            )
                                                        }
                                                        value={item.name}
                                                        className="ml-2 text-black block font-semibold capitalize focus:ring-0 rounded-md border-gray-200"
                                                        type="text"
                                                    />
                                                </div>
                                                <input
                                                    onChange={(e) =>
                                                        setFormData(
                                                            "active",
                                                            item,
                                                            e.target.checked
                                                        )
                                                    }
                                                    checked={item.active}
                                                    className="focus:ring-0 text-d-yellow"
                                                    type="checkbox"
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                                <Button
                                    processing={processing}
                                    onClick={handelSubmit}
                                    text="Save"
                                    className="w-full mt-5"
                                />
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

export default function InfluenceManagement({ className }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [selectedIndicator, setIndicator] = useState(0);
    const [editable, setEditable] = useState(false);
    const { influencers } = usePage().props;
    return (
        <Card
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            title="Influence Management"
            className={className}
        >
            <Slider
                className="mb-5"
                customPaging={(i) => {
                    return (
                        <div>
                            <span
                                className={classNames(
                                    i == selectedIndicator
                                        ? "bg-d-yellow text-white"
                                        : "bg-gray-300 text-black",
                                    "rounded-full w-6 h-6 font-semibold inline-block"
                                )}
                                onClick={() => setIndicator(i)}
                            >
                                {i + 1}
                            </span>
                        </div>
                    );
                }}
                {...settings}
            >
                {influencers
                    .filter((item) => item.active)
                    .map((item, i) => {
                        return (
                            <div key={item.id}>
                                <div className="flex items-center p-1 mb-1">
                                    <div className="w-1/3">
                                        <div className="rounded-full overflow-hidden shadow-md ring ring-d-yellow">
                                            <img
                                                src="/assets/avatar101.jpg"
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <span className="mt-3 w-full text-center text-black block font-semibold capitalize">
                                            {item.name}
                                        </span>
                                    </div>
                                    <div className="w-2/3 pl-4">
                                        <p className="first-letter:text-2xl first-letter:text-d-yellow">
                                            {i + 1} of the top five influencers
                                            are in alignment with current goal
                                            established
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </Slider>
            <HeadlessuiModal
                isOpen={editable}
                setIsOpen={(val) => setEditable(val)}
            />
        </Card>
    );
}
