import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import Card from "../components/Card";
import InfluenceManagement from "../components/InfluenceManagement";
import OveralProgress from "../components/OveralProgress";
import PersonaDetails from "../components/PersonaDetails";
import PersonalityBackground from "../components/PersonalityBackground";
import PersonalityResult from "../components/PersonalityResult";

const Home = function () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-4 px-4">
            <PersonaDetails className="row-span-2" />
            <InfluenceManagement />
            <OveralProgress />
            <Card title="Personality Definition">
                <div className="text-sm text-dark-gray space-y-3">
                    <p>
                        INFP ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc, et sagittis, sit viverra elementum. Cursus gravida
                        id gravida in risus quis. Sem et risus sed magnis
                        nec.Nunc, et sagittis, sit viverra elementum. Cursus
                        gravida id gravida in risus quis. Sem et risus sed
                        magnis nec.
                    </p>
                </div>
            </Card>
            <PersonalityBackground />
            <PersonalityResult />
        </div>
    );
};

export default Home;
