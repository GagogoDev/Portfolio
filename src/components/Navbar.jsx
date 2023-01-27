import { useTranslation } from "react-i18next";

export const Navbar = () => {

    const { t, i18n } = useTranslation();

    const onSwitchLanguage = ({ target }) => {
        const checked = target.checked;

        if (checked) { // Ingles
            i18n.changeLanguage('en');
        } else { // Español
            i18n.changeLanguage('es');
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {'<GQ/>'}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
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
                            <div className="nav-link">
                                <div className="d-flex align-items-center">
                                    <label>ES</label>
                                    <div className="form-check form-switch d-flex align-items-center justify-content-center">
                                        <input className="form-check-input" type="checkbox" id="switchLanguage" onChange={onSwitchLanguage}/>
                                        <label className="form-check-label" htmlFor="switchLanguage"></label>
                                    </div>
                                    <label>EN</label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
