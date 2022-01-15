import React from "react";

export default function DevelopmentProgress() {
    return (
        <div>
            <div className="relative bg-white h-[250px] overflow-hidden rounded-xl">
                <img src="assets/background.png" className="absolute w-full" />
                <div class="absolute bg-gradient-to-r from-[#000]/70 via-[#000]/70 to-[#000]/20 inset-0"></div>
            </div>
        </div>
    );
}
