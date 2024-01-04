import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import  headerImg from "./media/header.jpg";
import 'animate.css';
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] =useState(false);
    const  toRotate = ["Web Developer", "Web Designer", "Full Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() *100);
    const period = 2000;
    
    useEffect(() => {
        const ticker = setTimeout(() => {
          tick();
        }, delta);
      
        return () => clearTimeout(ticker);
      }, [text, delta, loopNum, isDeleting]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
      
        setText((prevText) => {
          if (isDeleting) {
            return prevText.slice(0, -1);
          } else {
            return fullText.slice(0, prevText.length + 1);
          }
        });
      
        if (isDeleting && text === '') {
          setIsDeleting(false);
          setLoopNum((prevLoopNum) => prevLoopNum + 1);
        } else if (isDeleting || text === fullText) {
          setIsDeleting(true);
        }
      }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{'Hello I am Marc Lord '} <span className="wrap">{text}</span></h1>
                    <p>My name is Marc Lord. I am a Full Stack Developer located in the island of Trinidad and Tobago.I have graduated with a Bachelors of Applied Science in Computer Engineering</p>
                    <button onClick={()=>console.log('connect')}>Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}