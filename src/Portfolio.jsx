import {
    Contact,
    Courses,
    Experience,
    Navbar,
    Profile,
    Section,
    Technologies,
} from './sections';

export const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Profile />
                <Section title={'Tecnologías'} id="technologies">
                    <Technologies />
                </Section>
                <Section title={'Experiencia'} id="experience">
                    <Experience />
                </Section>
                <Section title={'Educación'} id="courses" colLg={8}>
                    <Courses />
                </Section>
                <Section title={'Contacto'} id="contact">
                    <Contact />
                </Section>
            </div>
        </>
    );
};
