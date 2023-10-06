import React from 'react';
import './LanguageSelect.css'

export default function LanguageSelect() {
    const [selectedLanguage, setSelectedLanguage] = React.useState('en');

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div>
                <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="tg">Tajik</option>
                    <option value="ru">Russian</option>
                </select>
                        </div>
    );
}