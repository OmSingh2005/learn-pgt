"use client";

import { useState } from 'react';

export default function WeaknessInput({ onSubmit }) {
    const [weakTopic, setWeakTopic] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (weakTopic.trim()) {
        onSubmit(weakTopic);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Struggling with a specific topic? Generate a quiz:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={weakTopic}
            onChange={(e) => setWeakTopic(e.target.value)}
            placeholder="e.g., Gradient Descent, Quantum Mechanics"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Generate Quiz
          </button>
        </div>
      </form>
    );
  }