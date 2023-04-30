import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './Profile.css';

export const Profile = () => {
    const [ language, setLanguage ] = useState( true );
    const { t, i18n } = useTranslation();

    const onSwitchLanguage = () => {
        setLanguage( !language );

        if ( language ) {
            // Ingles
            i18n.changeLanguage('en');
        } else {
            // Español
            i18n.changeLanguage('es');
        }
    };

    return (
        <section>
            <div className="row" id="section-profile">
                <div className="col-12">
                    <p className="title-profile d-block text-primary">
                        Gabriel Quiroz Ríos
                    </p>
                    <p className="subtitle-profile d-block">{t('Profile.Subtitle')}</p>
                    <p className="description-profile d-block">{t('Profile.Description')}</p>
                </div>
                <div className="col-12 d-flex justify-content-center mt-5">
                    <a className="btn btn-outline-primary profile-button text-effect" href="/files/CurriculumVitae.pdf" download>
                        {t('Navbar.Download CV')}
                    </a>
                    <button className="btn btn-outline-primary profile-button text-effect" onClick={onSwitchLanguage}>
                        {t('Navbar.Language')}
                    </button>
                </div>
            </div>
        </section>
    );
};
