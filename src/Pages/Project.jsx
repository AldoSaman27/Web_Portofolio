import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar"
import '../Styles/Project.css';
import project_1 from "../Assets/Img/Project/project (1).png";
import project_2 from "../Assets/Img/Project/project (2).png";
import project_3 from "../Assets/Img/Project/project (3).png";

const Project = () => {
    return (
        <>
            <NavigationBar/>
            <section id="project">
                <div className="container">
                    <div className="row mb-3 text-center">
                        <h1 className="fw-bold" data-aos="fade-down" data-aos-duration="1500">Project</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-center mb-5">
                            <div className="project_cards" data-aos="fade-up" data-aos-duration="2000">
                                <div className="cards_image">
                                    <img src={project_1} alt="" />
                                </div>
                                <div className="cards_description p-3">
                                    <h5>Website Search Movie</h5>
                                    <p>Website untuk mencari informasi film secara online. Menggunakan bahasa pemrograman React.js</p>
                                </div>
                                <div className="cards_footer p-3">
                                    <a href="/project" target="_blank" rel="noreferrer" className="btn btn-primary w-100 mb-2">View Project</a>
                                    <a href="https://github.com/AldoSaman27/Website-Search-Movie" target="_blank" rel="noreferrer" className="btn btn-secondary w-100">View Repositories</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center mb-5">
                            <div className="project_cards" data-aos="fade-up" data-aos-duration="2500">
                                <div className="cards_image">
                                    <img src={project_2} alt="" />
                                </div>
                                <div className="cards_description p-3">
                                    <h5>Website Pemilihan</h5>
                                    <p>Website untuk memilih pemimpin OSIS di lingkungan sekolah. Menggunakan bahasa pemrograman HTML, CSS, JS, dan PHP</p>
                                </div>
                                <div className="cards_footer p-3">
                                    <a href="/project" target="_blank" rel="noreferrer" className="btn btn-primary w-100 mb-2">View Project</a>
                                    <a href="https://github.com/AldoSaman27/Web_Pemilihan" target="_blank" rel="noreferrer" className="btn btn-secondary w-100">View Repositories</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center mb-5">
                            <div className="project_cards" data-aos="fade-up" data-aos-duration="3000">
                                <div className="cards_image">
                                    <img src={project_3} alt="" />
                                </div>
                                <div className="cards_description p-3">
                                    <h5>Website UCP SA:MP</h5>
                                    <p>Website untuk mengakses User Control Panel pada game SA:MP. Menggunakan bahasa pemrograman HTML, CSS, JS, dan PHP</p>
                                </div>
                                <div className="cards_footer p-3">
                                    <a href="/project" target="_blank" rel="noreferrer" className="btn btn-primary w-100 mb-2">View Project</a>
                                    <a href="/project" rel="noreferrer" className="btn btn-secondary w-100">View Repositories</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Project;