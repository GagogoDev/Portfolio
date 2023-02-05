import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
                    <p className="subtitle-profile d-block">Programador Junior</p>
                    <p className="description-profile d-block">
                        Reprehenderit dolore do sunt nisi qui aliqua ea aute
                        eiusmod fugiat aute aute laborum. Cupidatat ut proident
                        excepteur ad nisi amet in velit et. In non ut proident
                        dolor nisi nostrud pariatur minim esse sit veniam.
                    </p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-outline-primary profile-button">
                        {t('Navbar.Download CV')}
                    </button>
                    <button className="btn btn-outline-primary profile-button" onClick={onSwitchLanguage}>
                        {t('Navbar.Language')}
                    </button>
                </div>
            </div>
        </section>
    );
};
