import React from "react";
import { classNames } from "../helpers";
import Icon from "./Icon";

export default function Button(props) {
    return (
        <button
            type="button"
            className={classNames(
                "flex justify-center border-blue-300 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
                props.className
            )}
            onClick={props.onClick}
        >
            {props.processing && (
                <Icon name="loader" className="mr-3 mt-1 animate-spin" />
            )}
            {props.text || "Save"}
        </button>
    );
}
