import React from 'react';
import './ToggleLangs.css';
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import { Context } from "../../context/LangContext";

export default function ToggleLangs() {
    const { setLang } = React.useContext(Context);
    return (
        <div className='container-langs'>
            <img className='flag' src={FrenchFlag} alt='French flag' onClick={() => setLang("FR")} />
            <img className='flag' src={EnglishFlag} alt='English flag' onClick={() => setLang("EN")} />
            <img className='flag' src={SpanishFlag} alt='Spanish flag' onClick={() => setLang("ES")} />
        </div>
    )
}
