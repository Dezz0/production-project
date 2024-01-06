import React from "react";
import { useTranslation } from "react-i18next";

interface MainPageProps {
}

const MainPage: React.FC<MainPageProps> = () => {
    const { t } = useTranslation();

    return <div>
        {t("Главная страница")}
    </div>;
};

export default MainPage;
