import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Hokar from "../assets/img/Songimg/Hokar Juda Tere Se.png";
import Khulke from "../assets/img/Songimg/Khulke Jeele Aaj.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Jeene from '../assets/img/Songimg/Jeene Ki Wajah.png';

export const Songs = () => {

  const projects = [
    {
      link: "https://open.spotify.com/track/440FAVO2TPKIOCoL32BCht?si=091e748c47024149",
      title: "Hokar Juda Tere Se",
      description: "Ahip Sharma",
      imgUrl: Hokar,
    },
    {
      link: "https://open.spotify.com/track/3VclFF3yPLIpPgoh9O9DVh?si=cc4e791601c74a67",
      title: "Khulke Jeele Aaj",
      description: "Ahip Sharma ft. Atishi Agarwal",
      imgUrl: Khulke,
    },
    {
      link: "https://open.spotify.com/track/46LrTUjsQyfyrsvMOISVTi?si=1e5a83f187064605",
      title: "Jeene Ki Wajah",
      description: "Ahip Sharma",
      imgUrl: Jeene,
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
                <p>Hello all I would love to present my songs on Spotify. Hope you like them.</p>
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
