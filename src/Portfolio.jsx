import { Educacion, Navbar, Profile, Tecnologias } from './components/';

export const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Profile />
                <Tecnologias />
                <Educacion />
            </div>
        </>
    );
};
