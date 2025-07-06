import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Movie from "../../Assets/Projects/Moive.png";
import game from "../../Assets/Projects/stone-paper-scisssor.jpg";
import Fashionwear from "../../Assets/Projects/NitinFashionWear.png";
import dibetes from "../../Assets/Projects/dibetics.jpg";
import Ai from "../../Assets/Projects/AI.png";
import Netflix from "../../Assets/Projects/NEFTLIX.png";
import melodiymix from "../../Assets/melodymix.png";
import GameHub from "../../Assets/gamehub.png";
import FoodJet from "../../Assets/Projects/FoodJet.png";
import FridayAi from "../../Assets/Projects/FirdayAi.png";

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
              imgPath={FridayAi}
              isBlog={false}
              title="Friday Ai Interviewer"
              ghLink="https://github.com/nitin-pandita/Friday-AiInterviewer.git"
              description="AI generated Interview - Friday AI Interiviewer"
              demoLink="https://friday-ai-interviewer.vercel.app/"
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
              imgPath={Ai}
              isBlog={false}
              title="Ai Summarizer"
              ghLink="https://github.com/nitin-pandita/Ai-Summarizer.git"
              description="Ai summarizer is a website where you can summarize the article or blog. You can also get the summary of the article or blog in the form of a summary."
              demoLink="https://articles-ai-summarizer.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="NETFLIX GPT"
              ghLink="https://github.com/nitin-pandita/Netflix-GPT.git"
              description="NETFLIX GPT is a website where you can search for movies and TV shows and get the details of the movie and TV show. With the help of GPT-3, you can also get the summary of the movie or TV show."
              demoLink="https://netflix-2p13xd72f-nitin-pandita.vercel.app/browse"
            />
          </Col>

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
              imgPath={FoodJet}
              isBlog={false}
              title="FoodJet"
              ghLink="https://github.com/nitin-pandita/FoodJet.git"
              description="Movie Food Ordering Website with Payment Gateway, search and filter, and authentication, etc."
              demoLink="https://github.com/nitin-pandita/FoodJet.git"
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
