import React from "react";
import Card from "../components/Card";

export default function wellnessProfile() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-4 px-4">
            <Card>
                <img src="/assets/calendar.png" />
                <div className="space-y-5 mt-5 font-semibold text-lg text-dark-gray">
                    <p>
                        Actual Age : <span className="text-black">16</span>
                    </p>
                    <p>
                        Body Age : <span className="text-black">34</span>
                    </p>
                    <p>
                        Age Comparison : <span className="text-black">16</span>
                    </p>
                </div>
            </Card>
            <Card>
                <img src="/assets/weight-scale.png" />
                <div className="space-y-5 mt-5 font-semibold text-lg text-dark-gray">
                    <p>
                        Gender : <span className="text-black">male</span>
                    </p>
                    <p>
                        Weight : <span className="text-black">34</span>
                    </p>
                    <p>
                        Height : <span className="text-black">56</span>
                    </p>
                </div>
            </Card>
            <Card>
                <img src="/assets/fitness.png" />
                <div className="space-y-5 mt-5 font-semibold text-lg text-dark-gray">
                    <p>
                        Cest : <span className="text-black">12 Inches</span>
                    </p>
                    <p>
                        Waist : <span className="text-black">06 Inches</span>
                    </p>
                    <p>
                        Legs : <span className="text-black">05 Inches</span>
                    </p>
                    <p>
                        Body Fat : <span className="text-black">15%</span>
                    </p>
                    <p>
                        Target Body Fat :{" "}
                        <span className="text-black">waist</span>
                    </p>
                </div>
            </Card>
            <Card>
                <img src="/assets/muscle.png" />
                <div className="space-y-5 mt-5 font-semibold text-lg text-dark-gray">
                    <p>
                        BMI : <span className="text-black">34.2 (Strong)</span>
                    </p>
                    <p>
                        Aerobic Fitness :
                        <span className="text-black">23 (Weak)</span>
                    </p>
                    <p>
                        Muscular Strength :
                        <span className="text-black">12 (Weak)</span>
                    </p>
                    <p>
                        Endurnce :
                        <span className="text-black">15 (Strong)</span>
                    </p>
                    <p>
                        Flexibility :
                        <span className="text-black">67 (Strong)</span>
                    </p>
                </div>
            </Card>
        </div>
    );
}
