import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitin Pandita </span>
            from <span className="purple"> J&K, India.</span>
            <br /> I am a data science final year student.
            <br />
            Additionally, I am currently working on Open Source Projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I play with Data"{" "}
          </p>
          <footer className="blockquote-footer">Nitin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
