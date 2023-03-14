import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import leetcode from '../assets/img/leetcode-svgrepo-com.svg';
// import Github from '../assets/img/icons8-github-60.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col> */}
          <Col size={12} sm={6} className="text-end text-sm-end">
            {/* <div className="social-icon">
              <a href="https://www.linkedin.com/in/ahip-sharma-093060202/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BCcdT4L%2FkQnKI7cuLbZm%2BWQ%3D%3D"><img src={navIcon1} alt="" /></a>
              <a href="https://leetcode.com/ahipsharma/"><img src={leetcode} alt="" /></a>
              <a href="https://github.com/ahipsharma"><img src={Github} alt="" /></a>
            </div> */}
            {/* <p>Copyright 2022. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
