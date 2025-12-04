import { Footer, Navbar } from '../pages';



const DefaultLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>

    );
};



export default DefaultLayout;