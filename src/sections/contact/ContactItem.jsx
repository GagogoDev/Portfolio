export const ContactItem = ( { data } ) => {
    const { id, iconClass, href } = data;

    return (
        <div className="col col-lg-12 d-flex justify-content-center">
            <a className="a-social-media" href={ href } target="_blank">
                <i className={iconClass} aria-hidden="true"></i>
            </a>
        </div>
            
    );
};
