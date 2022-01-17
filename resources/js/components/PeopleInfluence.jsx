import React from "react";
import {
    buildStyles,
    CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Card from "../components/Card";

function Chart({ children, value, color }) {
    return (
        <CircularProgressbarWithChildren
            value={value}
            strokeWidth={4}
            styles={buildStyles({
                pathColor: color,
                trailColor: "transparent",
            })}
        >
            <div style={{ width: "91%" }}>{children}</div>
        </CircularProgressbarWithChildren>
    );
}

export default function PeopleInfluence() {
    return (
        <Card title="People Influence">
            <div className="mt-5 w-60">
                <Chart color="#1471FC" value={95}>
                    <Chart color="#FABD3B" value={85}>
                        <Chart color="#FF28A9" value={75}>
                            <Chart color="#00F052" value={65}>
                                <Chart color="#F8534F" value={55}>
                                    <Chart color="#31559C" value={45}>
                                        <Chart color="#FF8500" value={35}>
                                            <Chart color="#00B76E" value={25} />
                                        </Chart>
                                    </Chart>
                                </Chart>
                            </Chart>
                        </Chart>
                    </Chart>
                </Chart>
            </div>
        </Card>
    );
}
