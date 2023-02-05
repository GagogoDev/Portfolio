import { Carousel } from './Carousel';

export const Technologies = () => {
    return (
        <section>
            <div className="row" id="section-technologies">
                <h1 className="h1-technologies text-center text-primary">Tecnologías</h1>
                <div className="col-12 d-flex justify-content-center mt-5">
                    <Carousel />
                </div>
            </div>
        </section>
    );
};
