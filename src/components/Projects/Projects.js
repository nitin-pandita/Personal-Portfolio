import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Movie from "../../Assets/Projects/Moive.png";
import game from "../../Assets/Projects/stone-paper-scisssor.jpg";
import Fashionwear from "../../Assets/Projects/NitinFashionWear.png";
import dibetes from "../../Assets/Projects/dibetics.jpg";
import melodiymix from "../../Assets/melodymix.png";
import GameHub from "../../Assets/gamehub.png";
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
              imgPath={melodiymix}
              isBlog={false}
              title="MelodyMix"
              description="Melody Mix is a music player where you can listen to your favorite song"
              ghLink="https://github.com/nitin-pandita/MelodyMix.git"
              demoLink="https://melodymix.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GameHub}
              isBlog={false}
              title="GameHub"
              description="GameHub, the ultimate gaming paradise for all gamers, brought to life by a passionate team of gaming enthusiasts! GameHub is not just a gaming platform; it's an immersive universe designed to revolutionize your gaming experience like never before."
              ghLink="https://github.com/nitin-pandita/GameHub.git"
              demoLink="https://gamehub-nitin.netlify.app/"
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
