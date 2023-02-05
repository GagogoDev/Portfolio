import { Educacion, Navbar, Profile, Technologies } from './components/';

export const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Profile />
                <Technologies />
                <Educacion />
            </div>
        </>
    );
};
