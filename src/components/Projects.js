import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CertificateCard } from "../components/CerificateCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import certImg1 from "../assets/img/Cert-1.png";
import certImg2 from "../assets/img/Cert-2.png";
import certImg3 from "../assets/img/Cert-3.png";
import certImg4 from "../assets/img/Cert-4.png";
import certImg5 from "../assets/img/Cert-5.png";
import certImg6 from "../assets/img/Cert-6.png";
import certImg7 from "../assets/img/Cert-7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import cvPdf from "../assets/img/CVUzlah.pdf";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PTSMS Data Management System",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "CLA Legal Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Sales Dashboard",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Purwhadika Capstone 2",
      description: "Purwhadika",
      imgUrl: projImg4,
    },
    {
      title: "Purwhadika Capstone 1",
      description: "Purwhadika",
      imgUrl: projImg5,
    },
    {
      title: "Purwhadika Capston 3",
      description: "Purwhadika",
      imgUrl: projImg6,
    },
  ];

  const certificates = [
    {
      title: "Intro To Data Analytics",
      description: "RevoU",
      imgUrl: certImg1, 
    },
    {
      title: "Generative AI at SAP",
      description: "SAP",
      imgUrl: certImg2, 
    },
    {
      title: "Belajar Management Proyek",
      description: "Dicoding",
      imgUrl: certImg3,
    },
    {
      title: "Dasar Pemrograman",
      description: "Dicoding",
      imgUrl: certImg4, 
    },
    {
      title: "Data Science Foundation",
      description: "IYKRA, Udemy",
      imgUrl: certImg5,
    },
    {
      title: "The Data Science Course",
      description: "365 Careers, Udemy",
      imgUrl: certImg6,
    },
    {
      title: "MUET English Test",
      description: "Malaysian Examination Council",
      imgUrl: certImg7,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portfolio</h2>
                <p>Explore my journey through various projects, certifications, and professional experiences. This portfolio showcases my skills and accomplishments in web development and data science. From innovative applications to industry-recognized certifications, each element represents a step in my career growth. Browse through to get a comprehensive view of my capabilities and potential contributions to your team or project.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">CV</Nav.Link>
                    </Nav.Item>
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
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          certificates.map((certificate, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                {...certificate}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="justify-content-center">
                        <Col md={8} className="text-center">
                          <h3>My CV</h3>
                          <p>You can preview my CV below or download it using the link.</p>
                          <div className="mb-3">
                            <a href={cvPdf} download="NauvalUzlah_CV.pdf" className="btn btn-primary">
                              Download CV
                            </a>
                          </div>
                          <div className="cv-preview">
                            <object
                              data={cvPdf}
                              type="application/pdf"
                              width="100%"
                              height="600px"
                            >
                              <p>It appears you don't have a PDF plugin for this browser. 
                              You can <a href={cvPdf}>click here to download the PDF file.</a></p>
                            </object>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}