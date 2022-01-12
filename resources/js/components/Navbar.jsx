import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { classNames } from "../helpers";
import { Link, usePage } from "@inertiajs/inertia-react";

const navigation = [
    { name: "Upcoming Challenges", href: "/" },
    { name: "Forum Area", href: "/" },
];

export default function NavBar(props) {
    const {
        auth: { user },
    } = usePage().props;

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-5">
                                <MenuIcon
                                    className="block h-8 w-8 cursor-pointer"
                                    aria-hidden="true"
                                    onClick={props.toggleSideBar}
                                />
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-dark-gray text-p-sm"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="max-w-xs  rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        <img
                                            className="h-14 w-14 rounded-full"
                                            src={
                                                "https://ui-avatars.com/api/?name=" +
                                                user.name
                                            }
                                            alt=""
                                        />
                                        <span className="font-semibold text-black text-p-sm ml-2">
                                            {user.name}
                                        </span>
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    as="button"
                                                    method="post"
                                                    href="/logout"
                                                    className={classNames(
                                                        active && "bg-gray-100",
                                                        "block px-4 py-2 text-left w-full text-sm text-gray-700"
                                                    )}
                                                >
                                                    logout
                                                </Link>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
