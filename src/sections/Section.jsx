export const Section = ( { children, title, id, colLg = 10 } ) => {
    return (
        <section id={ `section-${id}` }>
            <div className="row d-flex justify-content-center div-section">
                <h1 className="h1-section text-center text-primary">
                    { title }
                </h1>
                <div className={`col-12 col-lg-${colLg} d-flex justify-content-center mt-5`}>
                    { children }
                </div>
            </div>
        </section>
    );
};
