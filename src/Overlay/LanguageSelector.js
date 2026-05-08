import React, {useState} from "react";
import i18n from '../i18n';

const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguageVal = (val) => {
        i18n.changeLanguage(val);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(val);
    }


    return (
        <>
            <div>
                <span className={selectedLanguage === "en" ? "languageSelectorSpan checkedSpan" :"languageSelectorSpan"}  onClick={()=> {chooseLanguageVal("en")}}>
                    en
                </span>
                |
                <span className={selectedLanguage === "es" ? "languageSelectorSpan checkedSpan" :"languageSelectorSpan"} onClick={() => {chooseLanguageVal("es")}}>
                    es
                </span>
                |
                <span className={selectedLanguage === "fr" ? "languageSelectorSpan checkedSpan" :"languageSelectorSpan"} onClick={() => {chooseLanguageVal("fr")}}>
                    fr
                </span>
                |
                <span className={selectedLanguage === "zh" ? "languageSelectorSpan checkedSpan" :"languageSelectorSpan"} onClick={() => {chooseLanguageVal("zh")}}>
                    中文
                </span>
                |
                <span className={selectedLanguage === "pt" ? "languageSelectorSpan checkedSpan" :"languageSelectorSpan"} onClick={() => {chooseLanguageVal("pt")}}>
                    pt
                </span>

            </div>
        </>

    );
};

export default LanguageSelector;
