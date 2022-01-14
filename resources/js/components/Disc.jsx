import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import Card from "./Card";

function Pourcentage() {
    return (
        <div className="text-center">
            <PieChart
                className="w-32"
                lineWidth={20}
                labelPosition="0"
                label={() => "i"}
                data={[
                    { title: "One", value: 50, color: "#F0BB00" },
                    { title: "Two", value: 25, color: "#FF28A9" },
                    { title: "Three", value: 25, color: "#1471FC" },
                ]}
            />
            <span className="text-lg font-bold text-black">25%</span>
        </div>
    );
}

export default function Disc() {
    return (
        <Card title="Disc" className="col-span-2 ">
            <div className="flex justify-around">
                <Pourcentage />
                <Pourcentage />
                <Pourcentage />
                <Pourcentage />
            </div>
        </Card>
    );
}
