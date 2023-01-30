export const Perfil = () => {
    return (
        <section>
            <div className="row d-flex justify-content-center align-items-center" id="section-perfil">
                <div className="col-12">
                    <div className="row d-flex justify-content-center align-items-center text-center">
                        <img
                            src="public/images/user-image-test.png"
                            alt="Foto de perfil"
                            id="foto-perfil"
                        />
                        <h1 className="d-inline text-primary">
                            Gabriel Quiroz Ríos
                        </h1>
                        <br />
                        <h5 className="d-inline">Programador Junior</h5>
                    </div>
                    <div className="row mt-4 mt-lg-2 d-flex justify-content-center align-items-center text-center">
                        <div className="col-12 col-lg-6">
                            <p>
                                Reprehenderit dolore do sunt nisi qui aliqua ea
                                aute eiusmod fugiat aute aute laborum. Cupidatat
                                ut proident excepteur ad nisi amet in velit et.
                                In non ut proident dolor nisi nostrud pariatur
                                minim esse sit veniam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
