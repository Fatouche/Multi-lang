import React from "react";

export const Context = React.createContext();

const supportedLangs = ["EN", "FR", "ES"];
const browserLang = navigator.language.slice(0, 2).toUpperCase();

const ContextProvider = ({ children }) => {
    const [lang, setLang] = React.useState(supportedLangs.includes(browserLang) ? browserLang : "EN");
    
    return (
        <Context.Provider value={{ lang, setLang }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;