import { Swipper } from './Swipper';

export const Tecnologias = () => {
    return (
        <section>
            <div className="row" id="sectionTecnologias">
                <h1 className="text-center">Tecnologías</h1>
                <div className="col-12 d-flex justify-content-center mt-5 p-5">
                    <Swipper />
                </div>
            </div>
        </section>
    );
};
