import { Container, Row, Col } from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg';
import { useState, useEffect } from 'react';

export const Banner = () => {
    const toRotate = ['Web Developer', 'React Developer', 'MERN Stack Developer'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagLine"> Welcome to my Portfolio </span>
              <h1>
                {`Hi I'm Shalom  and I'm a `}
                <span className="wrap">{text}</span>
              </h1>
              <p>
                I'm a passionate full-stack developer specializing in building
                modern, responsive, and user-friendly web applications. With a
                strong foundation in the MERN stack and experience in real-time
                communication apps, I thrive on solving challenging problems and
                bringing ideas to life. Let's create something amazing together!
              </p>
              <button onClick={() => console.log('connect')}>Get in touch <ArrowRightCircle size={25} />
              </button>              
            </Col>
            <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
            </Col>
          </Row>
        </Container>
      </section>
    );
}