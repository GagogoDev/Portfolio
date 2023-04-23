import { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { experiencesEs, experiencesEn } from '../../data';
import './Experience.css';

export const Experience = () => {
    const [ experiences, setExperiences ] = useState( experiencesEs )
    const { i18n } = useTranslation();

    useEffect(() => {
        switch (i18n.language) {
            case 'es':
                setExperiences( experiencesEs );
                break;
            case 'en':
                setExperiences( experiencesEn );
                break;
            default:
                break;
        }
    }, [ i18n.language ]);

    return (
        <ul className="timeline">
            {experiences.map(({ id, direction, title, date, description }) => (
                <li key={id}>
                    <div className={`direction-${direction}`}>
                        <div className="flag-wrapper">
                            <span className="hexa"></span>
                            <span className="flag">{title}</span>
                            <span className="time-wrapper">
                                <span className="time">{date}</span>
                            </span>
                        </div>
                        <div className="desc">{description}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};
