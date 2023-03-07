import { useTranslation } from 'react-i18next';

export const Navbar = () => {
    const { t } = useTranslation();

    const onClickLink = ( href ) => {
        let element = document.getElementById(`section-${href}`);

        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
           });
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={ () => onClickLink('profile') } >
                    {'<GQ/>'}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPortfolio" aria-controls="navbarPortfolio" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarPortfolio" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                        <li className="nav-item">
                            <a className="nav-link" onClick={ () => onClickLink('profile') } >
                                {t('Navbar.Profile')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={ () => onClickLink('technologies') } >
                                {t('Navbar.Technologies')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={ () => onClickLink('experience') } >
                                {t('Navbar.Experience')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={ () => onClickLink('education') } >
                                {t('Navbar.Education')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={ () => onClickLink('contact') } >
                                {t('Navbar.Contact')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
