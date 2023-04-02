import { useState } from "react";
import { contacts } from '../../data';
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { ContactItem } from "./ContactItem";

const MySwal = withReactContent(Swal);

const initialForm = {
    name: '',
    email: '',
    message: '',
};

const fireSwalSuccess = () => {
    MySwal.fire({
        title: 'Mensaje enviado',
        icon: 'success',
    });
}

const fireSwalError = (error) => {
    MySwal.fire({
        title: 'Ocurrió un error inesperado',
        text: error,
        icon: 'error',
    });
}

export const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formState, setFormState] = useState(initialForm);

    const onFormChange = ({ target }) => {
        const { name, value } = target;

        setFormState({ ...formState, [name]: value });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const validateForm = () => {
        if (name.length < 5) return false;
        if (email.length < 5) return false;
        if (message.length < 5) return false;

        return true;
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (isLoading) return false;
        if ( !validateForm() ) return false;

        let data = {};
        setIsLoading(true);

        try {
            const axiosConfig = {
                url: '/email/sendEmailPortfolio',
                baseURL: 'https://api-utilities.gabrielquirozdev.com/api',
                // baseURL: 'http://127.0.0.1:8000/api',
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                data: { name, email, message }
            }

            data = await axios.request( axiosConfig );
        } catch (error) {
            if ( parseInt( error.response.status ) == 429 ) {
                fireSwalError( 'Demasiadas solicitudes, espere un tiempo' );
                return false;
            }
        } finally {
            onResetForm();
            setIsLoading(false);
        }

        if ( parseInt( data.status ) !== 200 ) {
            fireSwalError('');
            return false;
        }

        if ( parseInt( data.data.status ) !== 1 ) {
            fireSwalError('');
            return false;
        }

        fireSwalSuccess();
    };

    const { name, email, message } = formState;

    const textButtonSubmit =
        isLoading ?
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
        </div>
        :
        'Enviar'
    ;

    return (
        <div className="row justify-content-center w-100 ps-0 ps-md-5 ps-lg-0 pe-0 pe-md-5 pe-lg-0">
            <div className="col-12 col-lg-6 offset-lg-1">
                <form className="border border-primary rounded p-3" onSubmit={ (e) => onSubmitForm(e) } >
                    <div className="form-group mb-2">
                        <label className="mb-1" htmlFor="name">Nombre</label>
                        <input type="text" className="form-control" name="name" minLength={5} value={name} placeholder="Ingrese nombre" required onChange={onFormChange} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1" htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" minLength={5} value={email} placeholder="Ingrese email" required onChange={onFormChange} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1" htmlFor="message">Mensaje</label><br />
                        <textarea className='form-control w-100' name="message" rows="5" minLength={5} value={message} placeholder="Ingrese mensaje" required onChange={onFormChange} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary d-flex text-light mt-3 contact-button">
                        { textButtonSubmit }
                    </button>
                </form>
            </div>
            <div className="col-12 col-lg-1 mt-2 mt-lg-0">
                <div className="row d-flex align-items-center">
                    {
                        contacts.map( contact => <ContactItem key={ contact.id } data={ contact } /> )
                    }
                </div>
            </div>
        </div>
    );
};
