import React from "react";

export default function SelectFeild(props) {
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
