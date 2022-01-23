import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Card from "./Card";

export default function Personality({ title, columName }) {
    const { personality } = usePage().props;

    return (
        <Card title={title}>
            <div className="text-sm text-dark-gray space-y-3 !max-h-[200px] overflow-auto">
                {personality ? (
                    <div>
                        {columName == "definition" && (
                            <span className="uppercase mr-1 font-bold ">
                                {personality.name}
                            </span>
                        )}
                        <div
                            className="inline"
                            dangerouslySetInnerHTML={{
                                __html: personality[columName],
                            }}
                        />
                    </div>
                ) : (
                    <span className="uppercase mr-1 font-bold">
                        No Data Found
                    </span>
                )}
            </div>
        </Card>
    );
}
