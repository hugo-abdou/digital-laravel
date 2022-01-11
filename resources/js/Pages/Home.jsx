import React from "react";
import Card from "../components/Card";
import InfluenceManagement from "../components/InfluenceManagement";
import OveralProgress from "../components/OveralProgress";
import PersonaDetails from "../components/PersonaDetails";
import PersonalityResult from "../components/PersonalityResult";

const Home = function () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-4 px-4">
            <PersonaDetails className="row-span-2" />
            <InfluenceManagement className="" />
            <OveralProgress className="" />
            <Card title="Personality Definition" className="">
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
            <Card
                title="Persona Statement - Background"
                className="col-span-2 "
            >
                <div className="text-sm text-dark-gray space-y-3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc, et sagittis, sit viverra elementum. Cursus gravida
                        id gravida in risus quis. Sem et risus sed magnis
                        nec.Nunc, et sagittis, sit viverra elementum. Cursus
                        gravida id gravida in risus quis. Sem et risus sed
                        magnis nec.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc, et sagittis, sit viverra elementum. Cursus gravida
                        id gravida in risus quis. Sem et risus sed magnis
                        nec.Nunc, et sagittis, sit viverra elementum. Cursus
                        gravida id gravida in risus quis. Sem et risus sed
                        magnis nec.
                    </p>
                </div>
            </Card>
            <Card title="Personality Result" className="">
                <p className="text-sm text-dark-gray">
                    Intrevorted Intuitive Feeling Perceiver
                </p>
                <div className="flex justify-around h-full items-center mt-6">
                    <PersonalityResult color="#1471FC" lable="I" value={70} />
                    <PersonalityResult color="#DD2929" lable="N" value={30} />
                    <PersonalityResult color="#F0A500" lable="F" value={90} />
                    <PersonalityResult color="#00F052" lable="P" value={80} />
                </div>
            </Card>
        </div>
    );
};
export default Home;
