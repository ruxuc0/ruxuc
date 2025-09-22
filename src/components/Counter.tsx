import React, { useState } from "react";

interface CounterProps {
  initialValue?: number;
  step?: number;
  label?: string;
}

export default function Counter({ 
  initialValue = 0, 
  step = 1, 
  label = "counter" 
}: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="my-6 p-6 border border-blue-200 rounded-lg bg-blue-50/30">
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-4">{label}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-4">{count}</div>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCount(count - step)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            -{step}
          </button>
          <button
            onClick={() => setCount(initialValue)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            reset
          </button>
          <button
            onClick={() => setCount(count + step)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            +{step}
          </button>
        </div>
      </div>
    </div>
  );
}
