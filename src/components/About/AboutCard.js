import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I design dynamic mobile apps and websites using a combination of
            HTML, CSS, and JavaScript and JavaScript frameworks like ReactJS, React Native and NextJS. Specializing in WordPress, I bring
            creativity to life through responsive and user-friendly interfaces.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Rest at the end, not in the middle"{" "}
          </p>
          <footer className="blockquote-footer">Junelle Suaybaguio</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
