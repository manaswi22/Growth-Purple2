
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const questions = location.state?.questions || [];

  const correctAnswers = questions.filter(q => q.correctAnswer === q.userAnswer).length;

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h2>Results</h2>
          <p>You answered {correctAnswers} out of {questions.length} questions correctly.</p>
          <Button variant="primary" href="/">Back to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ResultPage;
