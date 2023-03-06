import { ButtonSocialMedia } from './ButtonSocialMedia';
import { contacts } from '../../data';

export const Contact = () => {
    return (
        <div className="row justify-content-center w-100 ps-0 ps-md-5 ps-lg-0 pe-0 pe-md-5 pe-lg-0">
            <div className="col-12 col-lg-6 offset-lg-1">
                <form className="border border-primary rounded p-3">
                    <div className="form-group mb-2">
                        <label className="mb-1" htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" id="name" placeholder="Ingrese nombre" />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1" htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingrese email" />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1" htmlFor="message">Mensaje</label><br />
                        <textarea name="message" id="message" className='form-control w-100' rows="5" placeholder="Ingrese mensaje"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary d-flex text-light mt-3 contact-button">
                        Enviar
                    </button>
                </form>
            </div>
            <div className="col-12 col-lg-1 mt-2 mt-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center">
                <div className="row d-flex justify-content-center justify-content-lg-start align-items-center">
                    {
                        contacts.map( contact => <ButtonSocialMedia key={ contact.id } data={ contact } /> )
                    }
                </div>
            </div>
        </div>
    );
};
