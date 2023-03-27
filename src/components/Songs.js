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
import Teri from '../assets/img/Teri Meri Dosti.png';
import Zindagi from '../assets/img/Zindagi se Mulakat.png';
import My from '../assets/img/My Life my rules.png';
import High from '../assets/img/High Roads.png';
import Endless from '../assets/img/Endless Beating.png';
import Meri from '../assets/img/Meri Behena.png';
import Yaadon from '../assets/img/Yaadon ki Barat.png';

export const Songs = () => {

  const projects = [
    {
      link: "https://open.spotify.com/track/0BsIZqkh2d4DVJn21F2lcF?si=cd82c15066dd42b5",
      title: "Khushi Ke ye pal",
      description: "Ahip Sharma",
      imgUrl: Khushi,
    },
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
    {
      link: "https://open.spotify.com/track/0V6JZ743lP0drK3yZJVAV1?si=9285835c0ce04d6b",
      title: "Life is Too Short",
      description: "Ahip Sharma",
      imgUrl: Life,
    },
    {
      link: "https://open.spotify.com/track/38rBYHpbY0rYNH5bTKkbh0?si=f7318001f92c46a6",
      title: "Rising the Grief",
      description: "Ahip Sharma",
      imgUrl: Rising,
    },
    {
      link: "https://open.spotify.com/track/0CbqbzHxq0wxQd8dKZjChs?si=f5cc277502f14dbf",
      title: "Galaxy of Music",
      description: "Ahip Sharma",
      imgUrl: Galaxy,
    },
    {
      link: "https://open.spotify.com/track/1QVJ1LXfM9lsKwOnFRlqwl?si=11c10031b5ad4f0e",
      title: "Teri Meri Dosti",
      description: "Ahip Sharma",
      imgUrl: Teri,
    },
    {
      link: "https://open.spotify.com/track/1pJsWGRlRnx6E8jiw0Tw67?si=42f0ceafdfa44f39",
      title: "Zindagi se Mulakat",
      description: "Ahip Sharma",
      imgUrl: Zindagi,
    },
    {
      link: "https://www.youtube.com/watch?v=Z9Z9Z9Z9Z9Z9",
      title: "My Life my rules",
      description: "Ahip Sharma",
      imgUrl: My
    },
    {
      link: "https://open.spotify.com/track/6PhSpGknEVyQCDMy2O3YRZ?si=857e4e2cc38f4ef5",
      title: "Meri Behena",
      description: "Ahip Sharma",
      imgUrl: Meri
    },
    {
      link: "https://open.spotify.com/track/2APH9nV5KB3LHlRnj3vEdk?si=52e1acb4eeab4d2e",
      title: "Yaadon ki Barat",
      description: "Ahip Sharma",
      imgUrl: Yaadon
    },
    {
      link: "https://open.spotify.com/album/04gtVQPIBODVyvIGNq3Dbh?si=730ce610dc1640d0",
      title: "High Roads EP",
      description: "Ahip Sharma",
      imgUrl: High,
    },
    {
      link: "https://open.spotify.com/album/63ZPwTlyn49oYvAOzOPoGW?si=59f7b4efb7724950",
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
