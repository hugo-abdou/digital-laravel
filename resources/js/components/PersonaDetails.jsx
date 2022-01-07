import React from "react";
import { classNames } from "../helpers";
import Card from "./Card";

export default function PersonaDetails({ className }) {
    return <Card className={classNames(className, "min-h-[200px]")} />;
}
