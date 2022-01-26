import React from "react";
import { classNames } from "../helpers";

export default function InputFeild(props) {
    return (
        <label className="flex items-center">
            {props.label && (
                <span className="mr-1 flex-1 capitalize font-semibold">
                    {props.label}
                </span>
            )}

            <input
                placeholder={props.placeholder}
                type={props.type || "number"}
                min={0}
                max={100}
                onChange={props.handelChange}
                value={props.value || ""}
                className={classNames(
                    "flex-1 py-0 border-gray-400 rounded-md",
                    props.className
                )}
            />
        </label>
    );
}
