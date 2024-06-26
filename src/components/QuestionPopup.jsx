
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const QuestionPopup = ({ show, handleClose, questions, currentQuestionIndex, goToQuestion }) => {
  const getBackgroundColor = (question) => {
    if (question.review) {
      return 'orange'; // Color for review
    }
    return question.answered ? 'green' : 'lightcoral'; // Color for answered and unanswered
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Questions Overview</Modal.Title>
      </Modal.Header>
      <Modal.Body className="question-popup">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {questions.map((question, index) => (
            <div
              key={index}
              onClick={() => goToQuestion(index)}
              style={{
                cursor: 'pointer',
                padding: '10px',
                margin: '5px',
                backgroundColor: getBackgroundColor(question),
                border: '1px solid #ddd',
                borderRadius: '5px',
                width: '40px',
                textAlign: 'center',
                color: 'white'
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default QuestionPopup;

