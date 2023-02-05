import { Educacion, Navbar, Perfil, Tecnologias } from './components/';

export const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Perfil />
                <Tecnologias />
                <Educacion />
            </div>
        </>
    );
};
