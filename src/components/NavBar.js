import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import leetcode from '../assets/img/leetcode-svgrepo-com.svg';
import Github from '../assets/img/github-icon-1.svg';
import Spotify from '../assets/img/spotify-1.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#songs" className={activeLink === 'songs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('songs')}>Songs</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ahip-sharma-093060202/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BCcdT4L%2FkQnKI7cuLbZm%2BWQ%3D%3D"><img src={navIcon1} alt="" /></a>
                <a href="https://leetcode.com/ahipsharma/"><img src={leetcode} alt="" /></a>
                <a href="https://github.com/ahipsharma"><img src={Github} alt="" /></a>
                <a href="https://open.spotify.com/artist/6TiiZlvHEIdxGdaDBcBHe8?si=8ncUThzzR-OBgJD7OxJQkA"><img src={Spotify} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
