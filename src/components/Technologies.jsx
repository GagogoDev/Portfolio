import { Carousel } from './Carousel';

export const Technologies = () => {
    return (
        <section>
            <div className="row d-flex justify-content-center" id="section-technologies">
                <h1 className="h1-technologies text-center text-primary">Tecnologías</h1>
                <div className="col-12 col-lg-10 d-flex justify-content-center mt-5">
                    <Carousel />
                </div>
            </div>
        </section>
    );
};
