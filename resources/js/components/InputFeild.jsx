import React from "react";
import { classNames } from "../helpers";

export default function InputFeild(props) {
    return (
        <label className="flex items-center">
            <span className="mr-1 w-10 capitalize font-semibold">
                {props.label}
            </span>
            <input
                max={100}
                type="number"
                onChange={props.handelChange}
                value={props.value || ""}
                className={classNames(
                    "w-full py-0 border-gray-400 rounded-md",
                    props.className
                )}
            />
        </label>
    );
}
