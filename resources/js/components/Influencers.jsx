import React from "react";
import Card from "./Card";
import Icon from "./Icon";

export default function Influencers() {
    return (
        <Card className="col-span-2">
            <img src="/assets/stars.png" className="mx-auto" />
            <div className="max-w-[539px]  text-center mx-auto mt-6">
                <p className="font-semibold text-lg text-dark-gray">
                    Are Your Top people and activities infuence goals forward ?
                </p>
                <p className="text-2xl font-bold text-black mt-1">
                    There are Top 5 influencers. People trend to be average of
                    the top five they spend time with.
                </p>

                <div className="grid grid-cols-5 mt-7 gap-4">
                    {[1, 2, 3, 4, 5].map((i) => {
                        return (
                            <div
                                key={i}
                                className="rounded-full overflow-hidden shadow-md ring ring-d-yellow"
                            >
                                <img
                                    src="/assets/avatar101.jpg"
                                    className="w-full h-full"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Card>
    );
}
