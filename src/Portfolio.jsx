import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Profile />
                <Section title={t('Navbar.Technologies')} id="technologies">
                    <Technologies />
                </Section>
                <Section title={t('Navbar.Experience')} id="experience">
                    <Experience />
                </Section>
                <Section title={t('Navbar.Courses')} id="courses" colLg={8}>
                    <Courses />
                </Section>
                <Section title={t('Navbar.Contact')} id="contact">
                    <Contact />
                </Section>
            </div>
        </>
    );
};
