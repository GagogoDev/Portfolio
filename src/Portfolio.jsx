import { Contact, Education, Experience, Navbar, Profile, Section, Technologies } from './sections';

export const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Profile />
                <Section title={'Tecnologías'}>
                    <Technologies />
                </Section>
                <Section title={'Experiencia'}>
                    <Experience />
                </Section>
                <Section title={'Educación'}>
                    <Education />
                </Section>
                <Section title={'Contacto'}>
                    <Contact />
                </Section>
            </div>
        </>
    );
};
