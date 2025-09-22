import React, { useState, useEffect } from "react";

interface DataPoint {
  x: number;
  y: number;
}

interface DataVisualizerProps {
  title?: string;
  width?: number;
  height?: number;
}

export default function DataVisualizer({ 
  title = "interactive data visualizer",
  width = 400,
  height = 300
}: DataVisualizerProps) {
  const [points, setPoints] = useState<DataPoint[]>([]);
  const [animating, setAnimating] = useState(false);

  const addRandomPoint = () => {
    const newPoint: DataPoint = {
      x: Math.random() * (width - 20) + 10,
      y: Math.random() * (height - 20) + 10,
    };
    setPoints(prev => [...prev, newPoint]);
  };

  const clearPoints = () => {
    setPoints([]);
  };

  const generateWave = () => {
    const wavePoints: DataPoint[] = [];
    for (let i = 0; i < width; i += 5) {
      wavePoints.push({
        x: i,
        y: height / 2 + Math.sin(i * 0.02) * 50,
      });
    }
    setPoints(wavePoints);
  };

  const animatePoints = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 2000);
  };

  return (
    <div className="my-8 p-6 border border-gray-200 rounded-lg bg-gray-50/30">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      
      <div className="mb-4 flex gap-2 flex-wrap">
        <button
          onClick={addRandomPoint}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
        >
          add point
        </button>
        <button
          onClick={generateWave}
          className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
        >
          sine wave
        </button>
        <button
          onClick={animatePoints}
          className="px-3 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600 transition-colors"
        >
          animate
        </button>
        <button
          onClick={clearPoints}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
        >
          clear
        </button>
      </div>

      <div className="border border-gray-300 bg-white">
        <svg width={width} height={height} className="block">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#3b82f6"
              className={animating ? "animate-ping" : ""}
            />
          ))}
          
          {/* Connect points with lines if more than one */}
          {points.length > 1 && (
            <path
              d={`M ${points.map(p => `${p.x},${p.y}`).join(" L ")}`}
              stroke="#6366f1"
              strokeWidth="2"
              fill="none"
            />
          )}
        </svg>
      </div>
      
      <div className="mt-2 text-sm text-gray-600">
        points: {points.length}
      </div>
    </div>
  );
}
