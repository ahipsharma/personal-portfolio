import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Khushi from "../assets/img/Khushi ke ye pal.png";
import Hokar from "../assets/img/Hokar Juda Tere Se.png";
import Khulke from "../assets/img/Khulke Jeele Aaj.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Jeene from '../assets/img/Jeene Ki Wajah.png';
import Life from '../assets/img/Life is Too Short.png';
import Rising from '../assets/img/Rising the Grief.png';
import Galaxy from '../assets/img/Galaxy of Music.png';
import Zindagi from '../assets/img/Teri Meri Dosti.png';
import My from '../assets/img/My Life my rules.png';
import High from '../assets/img/High Roads.png';
import Endless from '../assets/img/Endless Beating.png';
import Meri from '../assets/img/Meri Behena.png';
import Yaadon from '../assets/img/Yaadon ki Barat.png';

export const Songs = () => {

  const projects = [
    {
      title: "Hokar Juda Tere Se",
      description: "Ahip Sharma ft. Anamika",
      imgUrl: Khushi,
    },
    {
      title: "Hokar Juda Tere Se",
      description: "Ahip Sharma",
      imgUrl: Hokar,
    },
    {
      title: "Khulke Jeele Aaj",
      description: "Ahip Sharma ft. Atishi Agarwal",
      imgUrl: Khulke,
    },
    {
      title: "Jeene Ki Wajah",
      description: "Ahip Sharma",
      imgUrl: Jeene,
    },
    {
      title: "Life is Too Short",
      description: "Ahip Sharma",
      imgUrl: Life,
    },
    {
      title: "Rising the Grief",
      description: "Ahip Sharma",
      imgUrl: Rising,
    },
    {
      title: "Galaxy of Music",
      description: "Ahip Sharma",
      imgUrl: Galaxy,
    },
    {
      title: "Teri Meri Dosti",
      description: "Ahip Sharma",
      imgUrl: Zindagi,
    },
    {
      title: "Zindagi se Mulakat",
      description: "Ahip Sharma",
      imgUrl: Zindagi,
    },
    {
      title: "My Life my rules",
      description: "Ahip Sharma",
      imgUrl: My
    },
    {
      title: "Meri Behena",
      description: "Ahip Sharma",
      imgUrl: Meri
    },
    {
      title: "Yaadon ki Barat",
      description: "Ahip Sharma",
      imgUrl: Yaadon
    },
    {
      title: "High Roads EP",
      description: "Ahip Sharma",
      imgUrl: High,
    },
    {
      title: "Album - Endless Beating",
      description: "Ahip Sharma",
      imgUrl: Endless,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Songs</h2>
                <p>I love to present my songs on Spotify. Hope you love them.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
