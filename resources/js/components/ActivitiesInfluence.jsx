import React, { useState } from "react";
import Card from "./Card";
import MyRange from "./MyRange";

export default function ActivitiesInfluence() {
    const [value, setValue] = useState(5);
    return (
        <Card title="Activities Influence">
            <div className="mt-5">
                <MyRange />
            </div>
        </Card>
    );
}
