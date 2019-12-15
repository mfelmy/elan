import "./Home.scss";

import React from "react";

const Home: React.FC = () => {
    return (
        <div className="Home h-100 d-flex justify-content-center align-items-center">
            <div className="background-container forground">
                <div className="background" />
            </div>
            <img className="negative-margin" src="/assets/holo" alt="holo" />
            <img src="/assets/cover" alt="holo" />
        </div>
    );
};

export default Home;
