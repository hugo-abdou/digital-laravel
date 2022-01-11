import React, { useState } from "react";
import { useForm, usePage } from "@inertiajs/inertia-react";
import { StarIcon, RefreshIcon } from "@heroicons/react/solid";
import { Menu } from "@headlessui/react";
import { classNames } from "../helpers";
import Card from "./Card";
import Icon from "./Icon";

function InputFeild(props) {
    if (!props.editable) return <span className="ml-2 ">{props.value}</span>;
    return (
        <>
            <input
                type={props.type}
                onChange={props.handelChange}
                value={props.value || ""}
                className="py-0 mt-2 w-full rounded border-gray-400"
            />
            {props.error && (
                <span className="text-red-400 text-xs">{props.error}</span>
            )}
        </>
    );
}
function SelectFeild(props) {
    if (!props.editable) return <span className="ml-2 ">{props.value}</span>;
    return (
        <>
            <select
                value={props.value}
                onChange={props.handelChange}
                className="py-0 w-full rounded border-gray-400"
            >
                {props.children}
            </select>
            {props.error && (
                <span className="text-red-400 text-xs">{props.error}</span>
            )}
        </>
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
                    <StarIcon
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    <span>Fill Data</span>
                </button>
            )}
        </Menu.Item>
    );
}

export default function PersonaDetails({ className }) {
    const { user } = usePage().props.auth;

    const [editable, setEditable] = useState(false);

    const { data, setData, put, processing, errors } = useForm(user);

    const handelSubmit = () => {
        put(`/users/${user.id}/update`, {
            preserveScroll: true,
            onSuccess() {
                setEditable(false);
            },
        });
    };

    return (
        <Card
            MenuItems={<MenuItems handelClick={() => setEditable(true)} />}
            title="Persona Details"
            className={classNames(className)}
        >
            <table>
                <tbody className="mt-11">
                    <tr>
                        <td className="text-sm text-black">
                            <span className="font-bold">Name:</span>
                        </td>
                        <td className="text-sm py-2">
                            <InputFeild
                                type="text"
                                editable={editable}
                                handelChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                error={errors.name}
                                value={data.name}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm text-black">
                            <span className="font-bold">Age:</span>
                        </td>
                        <td className="text-sm py-2">
                            <InputFeild
                                type="number"
                                editable={editable}
                                error={errors.age}
                                handelChange={(e) =>
                                    setData("age", e.target.value)
                                }
                                value={data.age}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm text-black">
                            <span className="font-bold">Gender:</span>
                        </td>
                        <td className="text-sm py-2">
                            <SelectFeild
                                error={errors.gender}
                                editable={editable}
                                handelChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                value={data.gender}
                            >
                                <option></option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                                <option>Prefer Not Say</option>
                            </SelectFeild>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm text-black">
                            <span className="font-bold">Occupation:</span>
                        </td>
                        <td className="text-sm py-2">
                            <SelectFeild
                                error={errors.occupation}
                                editable={editable}
                                handelChange={(e) =>
                                    setData("occupation", e.target.value)
                                }
                                value={data.occupation || ""}
                            >
                                <option></option>
                                <option>test</option>
                            </SelectFeild>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm text-black">
                            <span className="font-bold">Ethnicity:</span>
                        </td>
                        <td className="text-sm py-2">
                            <SelectFeild
                                error={errors.ethnicity}
                                editable={editable}
                                handelChange={(e) =>
                                    setData("ethnicity", e.target.value)
                                }
                                value={data.ethnicity || ""}
                            >
                                <option></option>
                                <option>
                                    American Indian or Alaska Native
                                </option>
                                <option>Asian</option>
                                <option>Black or African American</option>
                                <option>Hispanic or Latino</option>
                                <option>
                                    Native Hawaiian or Other Pacific Islander
                                </option>
                                <option>White</option>
                            </SelectFeild>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm text-black">
                            <span className="font-bold">Material Statue:</span>
                        </td>
                        <td className="text-sm py-2">
                            <SelectFeild
                                error={errors.marital_status}
                                editable={editable}
                                handelChange={(e) =>
                                    setData("marital_status", e.target.value)
                                }
                                value={data.marital_status || ""}
                            >
                                <option></option>
                                <option>Single</option>
                                <option>Married</option>
                                <option>Divorced</option>
                            </SelectFeild>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm text-black">
                            <span className="font-bold">Income Level:</span>
                        </td>
                        <td className="text-sm py-2">
                            <SelectFeild
                                editable={editable}
                                error={errors.income_level}
                                handelChange={(e) =>
                                    setData("income_level", e.target.value)
                                }
                                value={data.income_level || ""}
                            >
                                <option></option>
                                <option>Lower – $32,048 or less</option>
                                <option>
                                    Lower-Middle Class – $32,048 - $53,413
                                </option>
                                <option>
                                    Middle Class – $53,413 - $106,827
                                </option>
                                <option>
                                    Upper-Middle Class – $106,827 - $373,894
                                </option>
                                <option>Upper Class – $373,894 and up</option>
                            </SelectFeild>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm text-black">
                            <span className="font-bold">Education:</span>
                        </td>
                        <td className="text-sm py-2">
                            <SelectFeild
                                editable={editable}
                                error={errors.education_level}
                                handelChange={(e) =>
                                    setData("education_level", e.target.value)
                                }
                                value={data.education_level || ""}
                            >
                                <option></option>
                                <option>High School / GED</option>
                                <option>Some College</option>
                                <option>Associate Degree</option>
                                <option>Bachelor's Degree</option>
                                <option>Master's Degree</option>
                                <option>Doctorate Degree</option>
                                <option>Post-Doctorate</option>
                            </SelectFeild>
                        </td>
                    </tr>
                </tbody>
            </table>

            {editable && (
                <button
                    onClick={handelSubmit}
                    className="px-4 py-2 mt-4 w-full font-medium tracking-wide text-white capitalize bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none flex justify-center items-center"
                >
                    <span className="inline-block animate-spin px-2">
                        {processing && <Icon name="loader" className="mr-2" />}
                    </span>
                    Save
                </button>
            )}
        </Card>
    );
}
