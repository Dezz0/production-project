import React, { FunctionComponent } from 'react';
import { useTranslation } from "react-i18next";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher: FunctionComponent<LangSwitcherProps> = ({ className }) => {

    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
};

export default LangSwitcher;
