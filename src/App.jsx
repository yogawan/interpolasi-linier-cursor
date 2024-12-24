import React from "react";

import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";

const App = () => {
    return (
        <div className="cursor-custom">
            <CustomCursor></CustomCursor>
            <Hero></Hero>
        </div>
    )
}

export default App;