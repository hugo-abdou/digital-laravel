import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function PersonalityResult({ lable, value, color }) {
    return (
        <div className="p-1">
            <CircularProgressbar
                className="!w-14 mx-auto"
                value={value}
                text={`${value}%`}
                strokeWidth={10}
                styles={buildStyles({
                    pathColor: color,
                })}
            />
            <span className="text-center font-semibold text-2xl text-black block mt-2">
                {lable}
            </span>
        </div>
    );
}
PersonalityResult.defaultProps = {
    lable: "D",
    value: 10,
};
export default PersonalityResult;
