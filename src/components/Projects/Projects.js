import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import getccn from "../../Assets/Projects/getccn.png";
import net512 from "../../Assets/Projects/net512.png";
import lasermachine from "../../Assets/Projects/lasermachine.png";
import rcdigital from "../../Assets/Projects/rcdigital.png";
import imawc from "../../Assets/Projects/imawc.png";
import autohub from "../../Assets/Projects/autohub.png";
import oconee from "../../Assets/Projects/oraj.png";
import akr from "../../Assets/Projects/akr.png";
import pima from "../../Assets/Projects/pimaortho.png";
import nextJSportfolio from "../../Assets/Projects/nextJS portfolio.png"
import partstman from "../../Assets/Projects/partsman.png";

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
              imgPath={getccn}
              isBlog={false}
              title="GetCCN"
              description="Our company is here to help with Managed IT Services, including IT Security, Backup, and Cloud management, to make IT hassle-free for you."
              demoLink="https://getccn.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={net512}
              isBlog={false}
              title="Net512"
              description="Managed IT Security implements several layers of protection for your business and monitors the deep web for any leaks regarding your company."
              demoLink="https://www.net512.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lasermachine}
              isBlog={false}
              title="Laser-Machine.co.uk"
              description="Laser Hair Removal Machines: One-Stop-Shop for Medical Grade Lasers - Empower your business by providing the most effective & efficient services with our premium machines."
              demoLink="https://laser-machine.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rcdigital}
              isBlog={false}
              title="RCDigital"
              description="RC Digital is your partner in highly-profitable regenerative medicine marketing. We’ll help you find the leads and convert the leads that can’t wait to become your patients."
              demoLink="https://www.rcdigital.us/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imawc}
              isBlog={false}
              title="Integrated Medical & Wellness Clinics"
              description="IMAWC is a one-of-a-kind treatment center focused on increasing your quality of life. Our approach is based on the latest therapies and science in integrative medicine."
              demoLink="https://imawc.rcdigital.us/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={autohub}
              isBlog={false}
              title="Autohub Group"
              description="The Autohub Group is one of the top car distributors, dealerships, and auto service group in the Philippines. They are the authorized dealer of Ford Philippines."
              demoLink="https://www.autohubgroup.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oconee}
              isBlog={false}
              title="Oconee Regenerative and Joint Institute"
              description="So many with chronic knee pain go untreated. We at Oconee Regenerative and Joint Institute strive to relieve knee pain for everyone we can."
              demoLink="https://oconeeregenerativejoint.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={akr}
              isBlog={false}
              title="Atlantic Knee Restoration and Regenerative Medicine"
              description="We at Atlantic Knee Restoration and Regenerative Medicine strive to relieve knee pain for everyone we can."
              demoLink="https://www.atlantickneerestoration.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pima}
              isBlog={false}
              title="Pima Orthopedic"
              description="We specialize in Regenerative and Sports Medicine, Orthopedic Surgery and Joint Replacement, and provide the highest standard of care for our patients."
              demoLink="https://pimaortho.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nextJSportfolio}
              isBlog={false}
              title="Suaybaguio NextJS Portfolio"
              description="My website portfolio showcases my work, skillfully crafted in NextJS for a dynamic and engaging user experience. Developed during a bootcamp, reflects my early journey into app and web development, highlighting newfound skills and projects."
              ghLink="https://github.com/swedr13/nextJS-portfolio"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={partstman}
              isBlog={false}
              title="Partsman PH"
              description="During my internship, I developed my first app using React Native, combining creativity and technical skills to create a versatile and user-friendly mobile application."
              ghLink="https://github.com/aquilasoftwares/partsman-app"
              demoLink="https://partsman.ph/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
