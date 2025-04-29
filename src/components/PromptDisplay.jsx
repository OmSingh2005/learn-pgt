"use client";

export default function PromptDisplay({ units }) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Learning Prompts</h2>
        <div className="space-y-6">
          {units.map((unit, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-indigo-600 mb-3">{unit.name}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {unit.prompts.map((prompt, i) => (
                  <li key={i} className="text-gray-700">{prompt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }