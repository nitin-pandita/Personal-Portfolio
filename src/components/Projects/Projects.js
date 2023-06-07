import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Movie from "../../Assets/Projects/Moive.png";
import game from "../../Assets/Projects/stone-paper-scisssor.jpg";
import Fashionwear from "../../Assets/Projects/NitinFashionWear.png";
import dibetes from "../../Assets/Projects/dibetics.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie Recommendation System"
              description="Movie Recommendation System will help you to recommend you some movies that you might be interested in watching"
              ghLink="https://github.com/nitin-pandita/Movie-Recommender-System.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fashionwear}
              isBlog={false}
              title="Nitin Fashionwears"
              description="Nitin Fashionwear is a E-commerce website . Made for Customer ease and for finding all the products in one place."
              ghLink="https://github.com/nitin-pandita/Nitin-Fashionwear.git"
              demoLink="https://nitin-pandita.github.io/Nitin-Fashionwear/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dibetes}
              isBlog={false}
              title="Diabetes Prediction"
              description="Using Machine Learning created a Diabetes Prediction Model for predicting whether the person is suffering from Diabetes or not."
              ghLink="https://github.com/nitin-pandita/Diabetes-Prediction-Model.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Using 'Open CV' created a Stone Paper Scissor Game with AI. Using HandDetection we can play stone paper scissor and the point gets added after each win."
              ghLink="https://github.com/nitin-pandita/Hands-Detection-of-a-real-time-model-using-OpenCV-game-building-.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
