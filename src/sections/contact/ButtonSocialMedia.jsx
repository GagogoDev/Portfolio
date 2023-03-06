export const ButtonSocialMedia = ({ data }) => {
    const { id, text, d, viewBox } = data;
    return (
        <div className="col-12 social-links p-0 d-flex justify-content-center justify-content-lg-start">
            <div className="social-btn d-flex justify-content-center justify-content-lg-start align-items-center" id={ id } >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={ viewBox }>
                    <path d={ d } />
                </svg>
                <span>{ text }</span>
            </div>
        </div>
    );
};
