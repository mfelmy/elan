import "./Work.scss";

import React, {useState} from "react";

import Page from "../../page/Page";
import Showcase from "../../showcase/Showcase";
import ShowcaseList from "../../showcase/ShowcaseList";

export type Clients =
    | "boiler-room"
    | "integr8"
    | "melt"
    | "moxy"
    | "scopes"
    | "soundcloud"
    | "the-standard"
    | "twitter"
    | "whole";

interface IWorkProps {
    setIsOverList: (isOver: boolean) => void;
}

const Work: React.FC<IWorkProps> = (props) => {
    return (
        <Page title="Work" aside={Aside}>
            <Main setIsOverList={props.setIsOverList} />
        </Page>
    );
};

const Aside = (
    <React.Fragment>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            itaque dolores error sapiente eveniet doloribus culpa at nisi
            corrupti vel veritatis eum quaerat qui ratione quidem, tenetur
            laudantium autem? Maiores?
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            itaque dolores error sapiente eveniet doloribus culpa at nisi
            corrupti vel veritatis.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            corrupti vel veritatis eum quaerat qui ratione quidem, tenetur
            laudantium autem? Maiores?
        </p>
    </React.Fragment>
);

interface IMainProps {
    setIsOverList: (isOver: boolean) => void;
}

const Main: React.FC<IMainProps> = (props) => {
    const [openModalId, setOpenModalId] = useState<Clients | null>(null);

    const onModalToggle = (id: Clients) => {
        if (openModalId !== id) {
            setOpenModalId(id);
        } else {
            setOpenModalId(null);
        }
    };
    const onModalClose = () => {
        setOpenModalId(null);
    };

    return (
        <div className="Work">
            <ShowcaseList
                openModalId={openModalId}
                onModalToggle={onModalToggle}
                setIsOverList={props.setIsOverList}
            />
            {openModalId && (
                <Showcase id={openModalId} onModalClose={onModalClose} />
            )}
        </div>
    );
};

export default Work;
