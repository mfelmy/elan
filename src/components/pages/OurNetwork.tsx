import "./OurNetwork.scss";

import React from "react";

import ContactForm from "../ContactForm";
import Instagram from "../Instagram";
import Page from "../Page";

const OurNetwork: React.FC = () => {
    return (
        <Page title="Our network" aside={Aside}>
            {Main}
        </Page>
    );
};

const Aside = <ContactForm />;

const Main = (
    <div className="OurNetwork h-100">
        <Instagram />
    </div>
);

export default OurNetwork;
