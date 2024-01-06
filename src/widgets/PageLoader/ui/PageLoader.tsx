import { FunctionComponent } from "react";
import cls from "./PageLoader.module.scss";
import "shared/lib/classNames/classNames";
import { classNames } from "shared/lib/classNames/classNames";
import Loader from "shared/ui/Loader/Loader";

interface PageLoaderProps {
    className?: string;
}

const PageLoader: FunctionComponent<PageLoaderProps> = ({ className }) => {

    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};

export default PageLoader;
