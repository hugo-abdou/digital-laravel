import React from "react";
import Card from "../components/Card";
import InfluenceManagement from "../components/InfluenceManagement";
import OveralProgress from "../components/OveralProgress";
import PersonaDetails from "../components/PersonaDetails";

const Home = function () {
    return (
        <div className="grid grid-cols-3 gap-4 px-4">
            <PersonaDetails className="row-span-2 min-h-[200px]" />
            <InfluenceManagement className="min-h-[200px]" />
            <OveralProgress className="min-h-[200px]" />

            <Card
                title="Persona Statement - Background"
                className="col-span-2 min-h-[200px]"
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
        </div>
    );
};
export default Home;
