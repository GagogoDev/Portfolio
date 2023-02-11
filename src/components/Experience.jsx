import { TimeExperience } from "./TimeExperience";

export const Experience = () => {
    return (
        <section>
            <div className="row d-flex justify-content-center" id="section-experience" >
                <h1 className="h1-experience text-center text-primary">
                    Experiencia
                </h1>
                <div className="col-12 col-lg-10 d-flex justify-content-center mt-5">
                    <TimeExperience/>
                </div>
            </div>
        </section>
    );
};
