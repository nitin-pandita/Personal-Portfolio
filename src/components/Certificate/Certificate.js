import React from "react";
import ProjectCards from "../Projects/ProjectCards";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Ai from "../../Assets/Projects/AI.png";
import CertificateCard from "./CertificateCard";
import css from "./Assets/css.png";
import certificate1 from "./Assets/certificate1.jpg";
import certificate2 from "./Assets/certificate2.jpg";
import openSource from "./Assets/hackathon.png";
import hackathon from "./Assets/hackathon1.png";
import hackathon2 from "./Assets/hackathon2.png";
const Certificate = () => {
  return (
    <div>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Certifications </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few certificate that i have achieved.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <CertificateCard
                imgPath={css}
                isBlog={true}
                crLink="https://www.hackerrank.com/certificates/ba50f2a900a1"
                title="Hacker Rank Css Certificate"
                description="It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others."
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificateCard
                imgPath={certificate1}
                isBlog={true}
                crLink="https://learn.365datascience.com/certificates/CC-FD4B101359/"
                title="
Machine Learning in Python"
                description="Awarded the Machine Learning in Python Certificate for successfully completing the course exam. Holding this certificate demonstrates their proficiency on the topic and signifies they are qualified to apply their newly acquired expertise in the fields of data analytics and data science."
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificateCard
                imgPath={certificate2}
                isBlog={true}
                crLink="https://learn.365datascience.com/certificates/CC-6E543EC260/"
                title="Python Programmer Bootcamp"
                description="Awarded the Python Programmer Bootcamp Certificate for successfully completing the course exam. Holding this certificate demonstrates their proficiency on the topic and signifies they are qualified to apply their newly acquired expertise in the fields of data analytics and data science."
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificateCard
                imgPath={hackathon}
                isBlog={true}
                crLink="https://certificate.givemycertificate.com/c/1a81b3a1-8c16-4e40-aac3-da16ddfc6fb1"
                title="Hackathon Certificate"
                description="Hackathon Build for Future held in DTU "
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificateCard
                imgPath={openSource}
                isBlog={true}
                crLink="https://certificate.givemycertificate.com/c/51d3f432-5496-4d28-b606-d1d0adf7ad47"
                title="SHEBUILD Certificate"
                description="SHEBUILD an open Source Program where i contributed to the project and got the certificate for the same."
              />
            </Col>
            <Col md={4} className="project-card">
              <CertificateCard
                imgPath={hackathon2}
                isBlog={true}
                crLink="https://drive.google.com/file/d/1jC8X2M2f1kopJoljAME6LNWb4u7bAGw9/view"
                title="IT Rajasthan Hackathon Certificate"
                description="Rajasthan Hackathon I was able to reach to the last of the competition."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Certificate;
