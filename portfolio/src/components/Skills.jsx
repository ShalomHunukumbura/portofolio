import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Mern from '../assets/img/mern.png'
import Ts from '../assets/img/ts.png'
import Tail from '../assets/img/tailwind.png'
import Aws from '../assets/img/aws.png'
import Angular from '../assets/img/angular.png'

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
          <Container>
            <Row>
              <Col className="skill-bx">
                <h2>Skills</h2>
                <p>
                  I have a strong foundation in modern web development,
                  including expertise in the MERN stack, TypeScript, and
                  Tailwind CSS. I enjoy building dynamic, user-friendly
                  applications and continuously improving my skills by tackling
                  new challenges. Whether it's creating responsive designs,
                  integrating APIs, or implementing real-time features, I'm
                  passionate about delivering high-quality solutions.
                </p>
                <Carousel responsive={responsive} infinite={true} className="skills-slider">
                    <div className="item">
                        <img className="skill-img" src={Mern} alt="image" />
                        
                    </div>
                    <div className="item">
                        <img className="skill-img" src={Ts} alt="image" />
                        
                    </div>
                    <div className="item">
                        <img className="skill-img" src={Tail} alt="image" />
                        
                    </div>
                    <div className="item">
                        <img className="skill-img" src={Aws} alt="image" />
                        
                    </div>
                    <div className="item">
                        <img className="skill-img" src={Angular} alt="image" />
                        
                    </div>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </section>
      );
}