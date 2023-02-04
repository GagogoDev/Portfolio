import { Carousel } from './Carousel';

export const Tecnologias = () => {
    return (
        <section>
            <div className="row" id="sectionTecnologias">
                <h1 className="h1-tecnologias text-center text-primary">Tecnologías</h1>
                <div className="col-12 d-flex justify-content-center mt-5">
                    <Carousel />
                </div>
            </div>
        </section>
    );
};
