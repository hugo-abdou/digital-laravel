import react, { useState } from "react";
import { Menu } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import Card from "./Card";
import { PencilAltIcon } from "@heroicons/react/solid";
import { classNames } from "../helpers";
import Icon from "./Icon";
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
export default function PersonalityBackground() {
    const { auth } = usePage().props;
    const [editable, setEditable] = useState(false);
    const [textareaHeight, setTextariaHeight] = useState(100);

    const { data, setData, put, processing, errors } = useForm({
        background: auth.user.background,
    });

    function handelSubmit() {
        put(`/users/${auth.user.id}/update`, {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    }

    function handleKeyUp(evt) {
        setData("background", evt.target.value);

        if (evt.key === "Enter") {
            // Max: 500px Min: 38px
            let newHeight = Math.max(
                Math.min(evt.target.scrollHeight + 2, 500),
                38
            );
            if (newHeight !== textareaHeight) {
                setTextariaHeight(newHeight);
            }
        }
    }
    return (
        <Card
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            title="Persona Statement - Background"
            className="col-span-2 min-h-0"
        >
            <div className="text-sm text-dark-gray space-y-3">
                {editable ? (
                    <textarea
                        onKeyUp={handleKeyUp}
                        style={{ height: textareaHeight }}
                        className="w-full border-none bg-gray-100 rounded-md shadow-inner"
                        defaultValue={data.background}
                    />
                ) : (
                    <p>{auth.user.background}</p>
                )}
            </div>
            {editable && (
                <Button
                    text="Save"
                    className="mt-5 mx-auto"
                    processing={processing}
                    onClick={handelSubmit}
                />
            )}
        </Card>
    );
}
