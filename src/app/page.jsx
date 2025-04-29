"use client";

import { useState } from 'react';
import CourseInputForm from '@/components/CourseInputForm';
import PromptDisplay from '@/components/PromptDisplay';
import WeaknessInput from '@/components/WeaknessInput';

export default function Home() {
  const [course, setCourse] = useState('');
  const [units, setUnits] = useState([]);
  const [weakTopic, setWeakTopic] = useState('');
  const [quizPrompt, setQuizPrompt] = useState('');

  const handleCourseSubmit = async (courseName) => {
    // TODO: Call Gemini API to get course structure
    console.log("Fetching units for:", courseName);
    // Mock response (replace with real API call)
    setUnits([
      { name: "Introduction to Machine Learning", prompts: ["Explain supervised learning.", "Compare classification vs regression."] },
      { name: "Neural Networks", prompts: ["Describe how a perceptron works.", "What is backpropagation?"] },
    ]);
  };

  const handleWeaknessSubmit = async (topic) => {
    // TODO: Call Gemini API to generate quiz
    console.log("Generating quiz for weak topic:", topic);
    setQuizPrompt("Generate 5 quiz questions mixing core ML concepts and " + topic);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
        AI-Powered Prompt Generator for Learning
      </h1>

      <CourseInputForm onSubmit={handleCourseSubmit} />
      
      {units.length > 0 && (
        <>
          <PromptDisplay units={units} />
          <WeaknessInput onSubmit={handleWeaknessSubmit} />
        </>
      )}

      {quizPrompt && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-blue-800">Your Quiz Prompt:</h3>
          <p className="mt-2">{quizPrompt}</p>
        </div>
      )}
    </div>
  );
}