import React from 'react';
import './Contenu.css';
import data from "../../assets/data.js";
import { Context } from "../../context/LangContext";

export default function Contenu() {

    const { lang } = React.useContext(Context);

    return (
        <div className='content'>
            <h1 className='title'>{data[lang].title}</h1>
            <p className='content-text'>{data[lang].text}</p>
        </div>
    )
}
