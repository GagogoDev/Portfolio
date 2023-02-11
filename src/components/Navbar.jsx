import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    {'<GQ/>'}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPortfolio" aria-controls="navbarPortfolio" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarPortfolio" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                {t('Navbar.Profile')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {t('Navbar.Technologies')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {t('Navbar.Experience')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {t('Navbar.Education')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {t('Navbar.Contact')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
