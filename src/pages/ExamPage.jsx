import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionPopup from '../components/QuestionPopup';

const questionsData = [
  {
    question: "What is the definition of a variable in algebra?",
    options: ["A constant value","A symbol representing a quantity","A mathematical operation","A whole number"],
    correctAnswer: "A symbol representing a quantity",
    userAnswer: "",
    answered: false,
    review: false,
  },
  // Add more questions as needed (27 questions per section)
  {
    question: "According to education reform advocate William Lee, incorporating hands-on learning in school curricula can _____ student engagement and understanding; he contends that experiential learning encourages active participation and deeper comprehension.",
    options: ["arthimetic", "alzebra", "trignometry", "statistics"],
    correctAnswer: "alzebra",
    userAnswer: "",
    answered: false,
    review: false,
  },
  {
    question: "According to education reform advocate William Lee, incorporating hands-on learning in school curricula can _____ student engagement and understanding; he contends that experiential learning encourages active participation and deeper comprehension.",
    options: ["diminish", "expand", "neglect", "restrict"],
    correctAnswer: "expand",
    userAnswer: "",
    answered: false,
    review: false,
  },
  {
    question: "According to education reform advocate William Lee, incorporating hands-on learning in school curricula can _____ student engagement and understanding; he contends that experiential learning encourages active participation and deeper comprehension.",
    options: ["diminish", "expand", "neglect", "restrict"],
    correctAnswer: "expand",
    userAnswer: "",
    answered: false,
    review: false,
  },
  {
    question: "According to education reform advocate William Lee, incorporating hands-on learning in school curricula can _____ student engagement and understanding; he contends that experiential learning encourages active participation and deeper comprehension.",
    options: ["diminish", "expand", "neglect", "restrict"],
    correctAnswer: "expand",
    userAnswer: "",
    answered: false,
    review: false,
  },
  {
    question: "According to education reform advocate William Lee, incorporating hands-on learning in school curricula can _____ student engagement and understanding; he contends that experiential learning encourages active participation and deeper comprehension.",
    options: ["diminish", "expand", "neglect", "restrict"],
    correctAnswer: "expand",
    userAnswer: "",
    answered: false,
    review: false,
  },
  {
    question: "According to education reform advocate William Lee, incorporating hands-on learning in school curricula can _____ student engagement and understanding; he contends that experiential learning encourages active participation and deeper comprehension.",
    options: ["diminish", "expand", "neglect", "restrict"],
    correctAnswer: "expand",
    userAnswer: "",
    answered: false,
    review: false,
  },
  {
    question: "According to education reform advocate William Lee, incorporating hands-on learning in school curricula can _____ student engagement and understanding; he contends that experiential learning encourages active participation and deeper comprehension.",
    options: ["diminish", "expand", "neglect", "restrict"],
    correctAnswer: "expand",
    userAnswer: "",
    answered: false,
    review: false,
  },
  {
    question: "According to education reform advocate William Lee, incorporating hands-on learning in school curricula can _____ student engagement and understanding; he contends that experiential learning encourages active participation and deeper comprehension.",
    options: ["diminish", "expand", "neglect", "restrict"],
    correctAnswer: "expand",
    userAnswer: "",
    answered: false,
    review: false,
  },
  {
    question: "According to education reform advocate William Lee, incorporating hands-on learning in school curricula can _____ student engagement and understanding; he contends that experiential learning encourages active participation and deeper comprehension.",
    options: ["diminish", "expand", "neglect", "restrict"],
    correctAnswer: "expand",
    userAnswer: "",
    answered: false,
    review: false,
  },
];

const ExamPage = () => {
  const { subject } = useParams();
  const [time, setTime] = useState(1800);
  const [showPopup, setShowPopup] = useState(false);
  const [questions, setQuestions] = useState(questionsData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePopupClose = () => setShowPopup(false);
  const handlePopupShow = () => setShowPopup(true);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleSaveAndExit = () => {
    // Logic to save progress and exit the test
    navigate('/');
  };

  const handleOptionChange = (option) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].userAnswer = option;
    updatedQuestions[currentQuestionIndex].answered = true;
    setQuestions(updatedQuestions);
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    handlePopupClose();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleSubmit = () => {
    navigate('/results', { state: { questions } });
  };
  const handleMarkForReview = () => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].review = !updatedQuestions[currentQuestionIndex].review;
    setQuestions(updatedQuestions);
  };
  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h2>{subject.replace(/-/g, ' ')}</h2>
          <Dropdown>
            <Dropdown.Toggle variant="secondary">Directions</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Read the question carefully and choose the best answer.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex justify-content-center">
          <div>
            <span>{formatTime(time)}</span>
            <Button variant="link" onClick={() => setTime(time => 0)}>Hide</Button>
          </div>
        </Col>
        {/* <Col className="d-flex justify-content-end">
          <Button variant="warning" onClick={handleSaveAndExit}>Save & Exit</Button>
        </Col> */}
        <Col className="d-flex justify-content-end">
  <Button
    variant="warning"
    onClick={handleSaveAndExit}
    style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem', height:'30px' }} // Adjust these values as needed
  >
    Save & Exit
  </Button>
</Col>

      </Row>

      <Row>
        <Col md={8}>
          <p>{questions[currentQuestionIndex].question}</p>
        </Col>
        <Col md={4}>
          <div>
            <Button variant="link" className="mb-3" onClick={handleMarkForReview}>
            {questions[currentQuestionIndex].review ? 'Unmark Review' : 'Mark for Review'}
            </Button>
            <div>
              {questions[currentQuestionIndex].options.map(option => (
                <div key={option}>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={questions[currentQuestionIndex].userAnswer === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
            <Button variant="link">Report Error</Button>
          </div>
        </Col>
      </Row>

      <Row className="my-3">
        <Col>
          <Button variant="link" >
            DSAT Practice Test 1
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button variant="link" onClick={handlePopupShow}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Button>
        </Col>
        <Col className="d-flex justify-content-end">
          {currentQuestionIndex < questions.length - 1 ? (
            <Button variant="primary" onClick={handleNextQuestion}>Next</Button>
          ) : (
            <Button variant="success" onClick={handleSubmit}>Submit</Button>
          )}
        </Col>
      </Row>

      <QuestionPopup
        show={showPopup}
        handleClose={handlePopupClose}
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        goToQuestion={goToQuestion}
      />
    </Container>
  );
};

export default ExamPage;
