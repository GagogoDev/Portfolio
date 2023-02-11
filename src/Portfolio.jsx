import { Education, Experience, Navbar, Profile, Technologies } from './components/';

export const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Profile />
                <Technologies />
                <Experience />
                <Education />
            </div>
        </>
    );
};
