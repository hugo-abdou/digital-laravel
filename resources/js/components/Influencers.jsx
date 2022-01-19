import { Menu } from "@headlessui/react";
import { UserAddIcon } from "@heroicons/react/solid";
import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { classNames } from "../helpers";
import Card from "./Card";
import HeadlessDialog from "./HeadlessDialog";

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

export default function Influencers() {
    const [editable, setEditable] = useState(false);
    const { influencers } = usePage().props;
    return (
        <Card
            MenuItems={
                influencers.length < 5 && (
                    <MenuItems handelClick={() => setEditable(true)} />
                )
            }
            className="col-span-2"
        >
            <img src="/assets/stars.png" className="mx-auto" />
            <div className="max-w-[539px]  text-center mx-auto mt-6">
                <p className="font-semibold text-lg text-dark-gray">
                    Are Your Top people and activities infuence goals forward ?
                </p>
                <p className="text-2xl font-bold text-black mt-1">
                    There are Top 5 influencers. People trend to be average of
                    the top five they spend time with.
                </p>

                <div className="grid grid-cols-5 mt-7 gap-4">
                    {influencers.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="rounded-full overflow-hidden shadow-md ring ring-d-yellow">
                                    <img
                                        src="/assets/avatar101.jpg"
                                        className="w-full h-full"
                                    />
                                </div>
                                <span className="mt-2 text-black block font-semibold capitalize">
                                    {item.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <HeadlessDialog
                isOpen={editable}
                setIsOpen={(val) => setEditable(val)}
            />
        </Card>
    );
}
