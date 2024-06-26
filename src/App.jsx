import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MathList from './pages/MathList';
import ExamPage from './pages/ExamPage';
import ResultPage from './components/ResultPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MathList />} />
        <Route path="/exam/:subject" element={<ExamPage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
