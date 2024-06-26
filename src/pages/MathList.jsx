import React from 'react';
import MathCard from '../components/MathCard';
import { Container, Row, Col } from 'react-bootstrap';

const MathList = () => {
  const courses = [
    { title: 'Algebra' },
    { title: 'Advanced Math' },
    { title: 'Geometry and Trigonometry' },
    { title: 'Problem Solving and Data Analysis' },
  ];

  return (
    <Container>
      <h1 className="my-4">Math</h1>
      <Row>
        {courses.map(course => (
          <Col key={course.title} xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <MathCard title={course.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MathList;
