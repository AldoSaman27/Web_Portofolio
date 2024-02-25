import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

const NotFound = () => {
    return (
        <>
            <NavigationBar/>
            <section id="notfound" style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
                <h1 className="fw-bold">Page Not Found</h1>
            </section>
            <Footer/>
        </>
    )
}

export default NotFound;