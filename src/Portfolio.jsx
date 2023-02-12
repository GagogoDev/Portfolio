import { Education, Experience, Navbar, Profile, Section, Technologies } from './components/';

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
                <Education />
            </div>
        </>
    );
};
