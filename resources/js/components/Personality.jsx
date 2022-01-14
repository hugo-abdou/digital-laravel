import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Card from "./Card";

export default function PersonalityDefinition({ title, columName }) {
    const { personality_definition } = usePage().props;

    return (
        <Card title={title}>
            <div className="text-sm text-dark-gray space-y-3">
                <p>
                    <span className="uppercase mr-1 font-bold">
                        {personality_definition.name}
                    </span>
                    {personality_definition[columName]}
                </p>
            </div>
        </Card>
    );
}
