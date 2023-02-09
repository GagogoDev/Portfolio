import { titlesEducation } from "../data/titlesEducation";
import { CardEducation } from "./";

export const Education = () => {
    return (
        <section>
            <div className="row d-flex justify-content-center" id="section-education">
                <h1 className="h1-education text-center text-primary">
                    Educación
                </h1>
                <div className="col-12 col-lg-10 d-flex justify-content-center mt-5">
                    <div className="row box-education d-flex justify-content-center p-0">
                        <div className="col-12 col-md-3 col-lg-2 p-0">
                            <div className="border-education">
                                <div className="row p-1">
                                    <div className="col-6 col-md-12">
                                        <button className="button-education button-education-first w-100 active">
                                            Títulos
                                        </button>
                                    </div>
                                    <div className="col-6 col-md-12">
                                        <button className="button-education button-education-last w-100">
                                            Cursos
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9 col-lg-10">
                            <div className="row p-1 d-flex justify-content-evenly align-items-center parent-cards">
                                {
                                    titlesEducation.map( title => <CardEducation key={title.id} data={title}/> )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
