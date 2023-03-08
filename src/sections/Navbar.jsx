import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav">
            <div className="container-fluid">
                <Link className="navbar-brand" to="section-profile" smooth={true} offset={0} duration={100} >
                    {'<GQ/>'}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPortfolio" aria-controls="navbarPortfolio" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarPortfolio" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                        <li className="nav-item">
                            <Link className="nav-link" to="section-profile" smooth={true} offset={0} duration={100} >
                                {t('Navbar.Profile')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="section-technologies" smooth={true} offset={-200} duration={100} >
                                {t('Navbar.Technologies')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="section-experience" smooth={true} offset={-200} duration={100} >
                                {t('Navbar.Experience')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="section-education" smooth={true} offset={-200} duration={100} >
                                {t('Navbar.Education')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="section-contact" smooth={true} offset={0} duration={100} >
                                {t('Navbar.Contact')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
