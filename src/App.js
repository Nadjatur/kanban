import {useState, useEffect} from 'react';
import './App.scss';
import './components/Card.scss';
import './components/Section.scss';
import ToDoSection from './components/ToDoSection';
import InProgressSection from './components/InProgressSection';
import ReadyForReviewSection from './components/ReadyForReviewSection';
import TestingSection from './components/TestingSection';
import CompletedTasksSection from './components/CompletedTasksSection';
//import Card from './components/Card';


//import data from './results.json';
import React from 'react'

function App() {
  const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  return (
    <div className={`rowSections overflow2 style-2  ${theme}`}>
      
      <ToDoSection/>
      <InProgressSection/>
      <ReadyForReviewSection/>
      <TestingSection/>
      <button className='btn'>+</button>
      <CompletedTasksSection/>
      <button onClick={toggleTheme} className="buttonToggle"><img src="assets/sun.png" className='sun'/></button>
     
    </div>
  );
}

export default App;
