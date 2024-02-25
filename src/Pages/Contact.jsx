import { Github, Instagram, Linkedin, Send } from 'react-bootstrap-icons';
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import '../Styles/Contact.css';
import { useState } from "react";
import { Alert } from 'react-bootstrap';

const scriptURL = process.env.REACT_APP_SCRIPT_URL;

const Contact = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setIsSubmitting(true);

      if ((nameValue === '') || (nameValue === null) || (nameValue === 0)) {
        alert("Nama lengkap tidak boleh kosong!");
        setIsSubmitting(false);
        return 1;
      } else if ((emailValue === '') || (emailValue === null) || (emailValue === 0)) {
        alert("Email tidak boleh kosong!");
        setIsSubmitting(false);
        return 1;
      } else if ((messageValue === '') || (messageValue === null) || (messageValue === 0)) {
        alert("Message tidak boleh kosong!");
        setIsSubmitting(false);
        return 1;
      }
  
      const form = e.target;
      const formData = new FormData(form);
  
      fetch(scriptURL, { method: 'POST', body: formData })
        .then((response) => {
        //   console.log('Success!', response);
          setIsSubmitting(false);
          setIsSubmitted(true);
          form.reset();
        })
        .catch((error) => {
        //   console.error('Error!', error.message);
          setIsSubmitting(false);
        });
    };

    return (
        <>
            <NavigationBar/>
            <section id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-11" data-aos="fade-right" data-aos-duration="1500">
                            <h1 className="fw-bold mt-5">Contact</h1>
                            <p>Have some project? or maybe just want to discuss your project, I help you as much as I can.</p>

                            <ul className="p-0">
                                <li><Instagram className="me-2"/><a href="https://instagram.com/aldosaman_" target="_blank" rel="noreferrer" >aldosaman_</a></li>
                                <li><Linkedin className="me-2"/><a href="https://www.linkedin.com/in/muhammad-reynald-saman/" target="_blank" rel="noreferrer" >Muhammad Reynald Saman</a></li>
                                <li><Github className="me-2"/><a href="https://github.com/AldoSaman27" target="_blank" rel="noreferrer" >AldoSaman27</a></li>
                            </ul>
                        </div>
                        <div className="col-11" data-aos="fade-left" data-aos-duration="1500">
                            <h1 className="fw-bold">Message</h1>
                            <Alert variant="success" dismissible className={`${isSubmitted ? '' : 'd-none'}`}>
                                <strong>Terima Kasih!</strong> Pesan anda sudah terkirim.
                            </Alert>
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="d-flex">
                                    <div className="col me-2 mb-3">
                                        <label htmlFor="id_full_name" className="mb-1">Full Name</label>
                                        <input type="text" name="nama" id="id_full_name" className="form-control" placeholder="Your full name" onChange={(e) => { setNameValue(e.target.value); }} required/>
                                    </div>
                                    <div className="col ms-2 mb-3">
                                        <label htmlFor="id_email" className="mb-1">Email</label>
                                        <input type="email" name="email" id="id_email" className="form-control" placeholder="Your email" onChange={(e) => { setEmailValue(e.target.value); }} required/>
                                    </div>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="id_message" className="mb-1">Message</label>
                                    <textarea name="pesan" id="id_message" rows="3" className="form-control" placeholder="Your message" onChange={(e) => { setMessageValue(e.target.value); }} required></textarea>
                                </div>
                                <button  variant="info" type="submit" disabled={isSubmitting}>
                                    <Send className="me-2"/>
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Contact;