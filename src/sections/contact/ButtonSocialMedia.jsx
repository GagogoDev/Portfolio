import { useState } from 'react';

import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip'

export const ButtonSocialMedia = ({ data }) => {
    const [textCopyClipboard, setTextCopyClipboard] = useState('Click para copiar');

    const { id, text, d, viewBox, href } = data;

    const onCopyClipboard = () => {
        navigator.clipboard.writeText( text );
        setTextCopyClipboard('¡Copiado!');
        setTimeout(() => {
            setTextCopyClipboard('Click para copiar');
        }, 1500);
    };

    const onRedirect = () => {
        window.open( href , '_blank');
    };

    return (
        <>
            <div className="col-12 social-links p-0 d-flex justify-content-center justify-content-lg-start" onClick={ href ? onRedirect : onCopyClipboard } >
                <div className="social-btn d-flex justify-content-center justify-content-lg-start align-items-center" id={ id }
                    data-tooltip-id={`tooltip-${id}`}
                    data-tooltip-content={ href ? 'Click para ir' : textCopyClipboard }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={ viewBox }>
                        <path d={ d } />
                    </svg>
                    <span>{ text }</span>
                </div>
            </div>
            <ReactTooltip id={`tooltip-${id}`} effect="solid" place="left" className="tooltip"/>
        </>
    );
};
