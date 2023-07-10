import React from "react";
import ProjectCard from "./ProjectCard";
import cryptoApp from '../images/cryptoApp.jpg';
import { CardDeck, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import './style.css';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: cryptoApp, // Use the imported image instead of the filename
      sourcecode:"https://github.com/rakesh-cpu/ReactMovieApp",
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: cryptoApp,
      sourcecode:"https://github.com/rakesh-cpu/ReactMovieApp",
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: cryptoApp,
      sourcecode:"https://github.com/rakesh-cpu/CURDoperation-using-Nodejs",
    },
  ];

  return (
    <div className="projects-section" mt={10}>
      <h2>Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4 project-cards">
        {projects.map((project, index) => (
          <Col key={index}>
            <ProjectCard
              title={project.title}
              info={project.description} // Use the 'info' prop instead of 'description'
              imgSrc={project.imageUrl} // Use 'imgSrc' prop instead of 'imageUrl'
              link = {project.sourcecode}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;
