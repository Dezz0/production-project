import { FunctionComponent } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
    className?: string;
}

const Loader: FunctionComponent<LoaderProps> = ({ className }) => {

    return (
        <div className={classNames("lds-ellipsis", {}, [className])}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default Loader;
