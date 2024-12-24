import React from "react";

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-none w-full h-[100vh]">
            <div className="w-[512px]">
                <h1 className="font-thin text-black text-6xl text-center">Custom Cursor</h1>
                <p className="font-thin text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <a className="text-center p-5 border border-black/15 rounded-2xl mt-5" href="https://github.com/yogawan">Follow Developer on GitHub</a>
        </div>
    )
};

export default Hero;