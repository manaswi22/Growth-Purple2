import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MathCard = ({ title }) => {
  return (
    <Card className="mb-3" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`/exam/${title.toLowerCase().replace(/ /g, '-')}`}>
          <Button variant="primary">Start</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MathCard;
