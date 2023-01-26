import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {

    const onSwitchLanguage = ({ target }) => {
        const checked = target.checked;

        if (checked) { // Español
        } else { // Inglés
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    NAVBAR
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end w-100">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Perfil
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Tecnologías
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Educación
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacto
                            </a>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <button className="nav-link btn btn-outline-primary navbar-button-cv" href="#">
                                Descargar Curriculum
                            </button>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <div className="d-flex align-items-center">
                                    <label><FontAwesomeIcon icon={faLanguage}/></label>
                                    <div className="form-check form-switch d-flex align-items-center justify-content-center">
                                        <input className="form-check-input" type="checkbox" id="switchLanguage" onChange={onSwitchLanguage}/>
                                        <label className="form-check-label" htmlFor="switchLanguage"></label>
                                    </div>
                                    <label><FontAwesomeIcon icon={faLanguage}/></label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
