import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard({ title, info, imgSrc,link }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} /> {/* Use the 'imgSrc' prop */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{info}</Card.Text> {/* Use the 'info' prop */}
      </Card.Body>
      <Card.Body>
        <Card.Link href={link}>source code</Card.Link>
        <Card.Link href="#">App click</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
