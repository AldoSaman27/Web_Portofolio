import NavigationBar from "../Components/NavigationBar";
import '../Styles/Skill.css';
// Programming Language
import html from "../Assets/Icons/html.svg";
import css from "../Assets/Icons/css.svg";
import javascript from "../Assets/Icons/javascript.svg";
import php from "../Assets/Icons/php.svg";
import cpp from "../Assets/Icons/cpp.svg";
import fpc from "../Assets/Icons/fpc.gif";
import typescript from "../Assets/Icons/typescript.svg";
// Framework
import bootstrap from "../Assets/Icons/bootstrap.svg";
import laravel from "../Assets/Icons/laravel.svg";
import nodejs from "../Assets/Icons/nodejs.svg";
// Library
import reactjs from "../Assets/Icons/reactjs.svg";
import Footer from "../Components/Footer";

const Skill = () => {   
    return (
        <>
            <NavigationBar/>
            <section id="skill">
                <div className="container">
                    <div className="row ms-2 mb-3">
                        <h1 className="fw-bold skills" data-aos="fade-down" data-aos-duration="1500">Skills</h1>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-duration="2000">
                        <div className="col-md-6">
                            <div className="row ms-2 mb-2">
                                <h5>Programming Language</h5>
                            </div>
                            <div className="row">
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={html} alt="" width={50}/>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={css} alt="" width={50}/>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={javascript} alt="" width={45}/>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={php} alt="" width={65}/>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={cpp} alt="" width={50}/>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={fpc} alt="" width={50}/>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={typescript} alt="" width={45}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row ms-2 mb-2">
                                <h5>Framework</h5>
                            </div>
                            <div className="row">
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={bootstrap} alt="" width={50}/>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={laravel} alt="" width={45}/>
                                    </div>
                                </div>
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={nodejs} alt="" width={50}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row ms-2 mb-2">
                                <h5>Library</h5>
                            </div>
                            <div className="row">
                                <div className="col-4 col-md-3 d-flex align-items-center justify-content-center mb-4">
                                    <div className="skill_icon">
                                        <img src={reactjs} alt="" height={55}/>
                                    </div>
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

export default Skill;