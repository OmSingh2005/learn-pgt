"use client";

import { useState } from 'react';

export default function CourseInputForm({ onSubmit }) {
    const [course, setCourse] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (course.trim()) {
        onSubmit(course);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-8">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Enter Your Course Name:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="e.g., Machine Learning, Calculus, Psychology 101"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Generate Prompts
          </button>
        </div>
      </form>
    );
  }