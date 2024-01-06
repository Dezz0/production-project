import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FunctionComponent<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t("Страница не найдена")}
        </div>
    );
};

export default NotFoundPage;
