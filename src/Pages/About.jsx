import NavigationBar from "../Components/NavigationBar"
import '../Styles/About.css'
import AldoSaman from "../Assets/Img/aldosaman2.jpg";
import { useState, useEffect } from 'react';
import Footer from "../Components/Footer";

const About = () => {
    const [text, setText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const textContent = 'Muhammad Reynald Saman';
        const typingAnimation = setInterval(() => {
            setText(textContent.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
            if (charIndex === textContent.length - 1) {
            clearInterval(typingAnimation);
            }
        }, 100);
        return () => clearInterval(typingAnimation);
    }, [charIndex]);



    return (
        <>
            <NavigationBar/>
            <section id="about">
                <div className="container d-flex justify-content-center align-items-center" data-aos="fade-down" data-aos-duration="1500">
                    <div className="row">
                        <div className="col-11 col-lg-7 me-lg-5 m-auto">
                            <h1 className="fw-bold">About Me</h1>
                            <h4 className="mt-3 mb-3 fw-bold">{text}<span>|</span></h4>
                            <p>Halo, nama saya Muhammad Reynald Saman. Saya tinggal di Gorontalo, Indonesia. Saya lahir di Gorontalo pada tanggal 27 Maret 2007. Saat ini, saya berusia 16 tahun. Saya adalah siswa jurusan Rekayasa Perangkat Lunak dan GIM di SMKN 3 Gorontalo.</p>
                            <p>Coding telah menjadi hobi saya sejak saya berusia 14 tahun, dan saya menyukai komputer sejak saya masih kecil. Selain coding, saya juga menikmati mendengarkan musik, terutama dari JKT48. Saya juga memiliki minat dalam bermain game, dengan Valorant, GTA San Andreas, dan GTA V menjadi beberapa permainan favorit yang sering saya mainkan.</p>
                        </div>
                        <div className="col image">
                            <img src={AldoSaman} alt="Aldo Saman"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default About;