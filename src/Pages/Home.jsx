import NavigationBar from "../Components/NavigationBar";
import '../Styles/Home.css';
import { useState, useEffect } from 'react';
import Footer from "../Components/Footer";
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
    const [text, setText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [sentences] = useState([
      'Junior Full Stack Developer',
      'Software Engineering Student'
    ]);
    const [sentenceIndex, setSentenceIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      const sentence = sentences[sentenceIndex];
      const typingAnimation = setInterval(() => {
        if (!isPaused) {
          if (!isDeleting && charIndex < sentence.length) {
            setText(sentence.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
            if (charIndex === sentence.length - 1) {
              setIsPaused(true);
              setTimeout(() => {
                setIsDeleting(true);
                setIsPaused(false);
              }, 2000);
            }
          } else if (isDeleting && charIndex > 0) {
            setText(sentence.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
            if (charIndex === 1) {
              setIsDeleting(false);
              setText('');
              setCharIndex(0);
              setSentenceIndex((sentenceIndex + 1) % sentences.length);
              setIsPaused(true);
              setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(false);
              }, 100);
            }
          }
        }
      }, 100);
      return () => clearInterval(typingAnimation);
    }, [charIndex, isDeleting, isPaused, sentenceIndex, sentences]);

    return (
        <>
          <NavigationBar/>
          <section id="home">
              <div className="container" data-aos="fade-up" data-aos-duration="1500">
                  <div className="row d-flex justify-content align-items-center">
                      <div className="col d-flex flex-column justify-content-center">
                          <h2>Hi,</h2>
                          <h1>I'am Aldo Saman</h1>
                          <h3>{text}<span>|</span></h3>
                      </div>
                      <div className="col d-flex justify-content-center align-items-center">
                          <Player autoplay loop src="https://assets6.lottiefiles.com/packages/lf20_gnb0jsok.json"/>
                      </div>
                  </div>
              </div>
          </section>
          <Footer/>
        </>
    )
}

export default Home;