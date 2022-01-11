/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
    CodeIcon,
    DotsVerticalIcon,
    FlagIcon,
    StarIcon,
} from "@heroicons/react/solid";
import { classNames } from "../helpers";

export default function Card({ className, title, children, MenuItems }) {
    return (
        <div
            className={classNames(
                "bg-white rounded-md px-4 py-5 sm:px-6 min-h-[250px]",
                className
            )}
        >
            <div className="flex space-x-3">
                <div className="flex-1 font-bold text-lg text-black">
                    <h4>{title}</h4>
                </div>
                <div className="flex-shrink-0 self-center flex">
                    <Menu
                        as="div"
                        className="relative z-30 inline-block text-left"
                    >
                        {({ open }) => (
                            <>
                                <div>
                                    <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                                        <span className="sr-only">
                                            Open options
                                        </span>
                                        <DotsVerticalIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div className="py-1">{MenuItems}</div>
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
            <div className="my-2">{children}</div>
        </div>
    );
}
