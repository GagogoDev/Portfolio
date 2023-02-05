export const Education = () => {
    return (
        <section>
            <div className="row d-flex justify-content-center" id="section-education">
                <h1 className="h1-education text-center text-primary">
                    Educación
                </h1>
                <div className="col-12 col-lg-10 d-flex justify-content-center mt-5">
                    <div className="row box-education d-flex justify-content-center p-0">
                        <div className="col-12 col-md-4 p-1">
                            <div className="row">
                                <div className="col-6 col-md-12">
                                    <button className="button-education w-100 active">
                                        Títulos
                                    </button>
                                </div>
                                <div className="col-6 col-md-12">
                                    <button className="button-education w-100">
                                        Cursos
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 p-2">
                            <div className="card-education">
                                <p className="title-card-education m-0 mb-2 text-center">
                                    Técnico Universitario en Informática
                                </p>
                                <p className="subtitle-card-education m-0 ps-2 text-start">
                                    Universidad Técnica Federico Santa María,
                                    Sede Viña del Mar
                                </p>
                                <p className="date-card-education m-0 ps-2 text-start">
                                    2019 - 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
