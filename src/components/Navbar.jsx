import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const [language, setLanguage] = useState(true)
    const { t, i18n } = useTranslation();

    const onSwitchLanguage = () => {
        setLanguage(!true)

        if (language) { // Ingles
            i18n.changeLanguage('en');
        } else { // Español
            i18n.changeLanguage('es');
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-darkv nav">
            <div className="container-fluid ps-3 ps-lg-5">
                <a className="navbar-brand" href="#">
                    {'<GQ/>'}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPortfolio" aria-controls="navbarPortfolio" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarPortfolio">
                    <ul className="navbar-nav me-auto d-flex justify-content-end w-100">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                {t('Navbar.Perfil')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {t('Navbar.Tecnologias')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {t('Navbar.Educacion')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {t('Navbar.Contacto')}
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <button className="nav-link btn btn-outline-primary navbar-button-cv" href="#">
                                {t('Navbar.Descargar Curriculum')}
                            </button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={onSwitchLanguage}>
                                {t('Navbar.Idioma')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
