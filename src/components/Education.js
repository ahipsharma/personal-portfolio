import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import School from "../assets/img/EducationImg/All Saints School.png";
import School2 from "../assets/img/EducationImg/All Saints.jpeg";
import School3 from "../assets/img/EducationImg/Vidya Mandir.jpeg";
import College from "../assets/img/EducationImg/Bennett.jpeg";
import colorSharp from "../assets/img/color-sharp.png"

export const Education = () => {
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
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Education</h2>
                        <p>I'm happy to share my skills to the people<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={School} alt="Image" />
                                <h5>All Saints Convent School</h5>
                                <h5>Nursery - 8th.</h5>
                            </div>
                            <div className="item">
                                <img src={School2} alt="Image" />
                                <h5>All Saints' School</h5>
                                <h5>9th - 10th.</h5>
                            </div>
                            <div className="item">
                                <img src={School3} alt="Image" />
                                <h5>S.V.M. Sr. Secondary School</h5>
                                <h5>11th-12th</h5>
                            </div>
                            <div className="item">
                                <img src={College} alt="Image" />
                                <h5>Bennett University</h5>
                                <h5>B.Tech. Computer Science</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
