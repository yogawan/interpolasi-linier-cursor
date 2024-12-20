import React from "react";

import NavigationMolecules from "../molecules/NavigationMolecule";

const HomePage = () => {
    return (
        <div className="bg-[#EEEEEE] h-[100vh] flex justify-center">
            <NavigationMolecules></NavigationMolecules>
            <div className="flex flex-col justify-center items-center pt-30 w-[720px]">
                <h1 className="text-black text-6xl m-2 text-center font-inter font-thin">Starter Project, ReactJS with <u><em>Atomic Design</em></u> and <em><u>Tailwind Configuration</u></em></h1>
                <p className="text-black/75 text-xl m-2 text-center font-inter font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ut officia quia nulla, officiis, dolorum quae nostrum amet repudiandae, quas quidem non obcaecati asperiores veniam itaque laboriosam unde iure omnis.</p>
                <a className="text-center p-5 border border-black/25 rounded-xl" href="https://github.com/yogawan">See me on GitHub</a>
            </div>
        </div>
    );
};

export default HomePage;