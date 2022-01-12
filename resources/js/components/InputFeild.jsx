import React from "react";

export default function InputFeild(props) {
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
