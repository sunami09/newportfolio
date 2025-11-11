import React from 'react';
import './UploadPipelineDiagram.css';

const UploadPipelineDiagram: React.FC = () => (
  <div className="upload-pipeline-diagram">
    <svg viewBox="0 0 600 340" width="100%" height="340">
      {/* File */}
  <rect x="30" y="140" width="60" height="40" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="60" y="165" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="500">File</text>

      {/* Frontend */}
  <rect x="120" y="120" width="110" height="80" rx="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
  <text x="175" y="165" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="500">Frontend App</text>

      {/* Firebase */}
  <rect x="270" y="30" width="100" height="60" rx="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
  <text x="320" y="65" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="500">Firebase Auth</text>

      {/* generateSignerUrl */}
  <rect x="270" y="220" width="140" height="60" rx="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
  <text x="340" y="255" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="500">Sign URL Service</text>

      {/* Storage */}
  <rect x="470" y="120" width="100" height="80" rx="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
  <text x="520" y="165" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="500">Cloud Storage</text>

      {/* Arrows */}
      {/* File -> Frontend */}
      <line x1="90" y1="160" x2="120" y2="160" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  {/* Frontend -> Firebase */}
  <line x1="230" y1="140" x2="270" y2="60" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  {/* Frontend -> generateSignerUrl */}
  <line x1="230" y1="180" x2="270" y2="250" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  {/* Frontend -> Storage */}
  <line x1="230" y1="160" x2="470" y2="160" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* Arrow marker definition */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L10,5 L0,10 Z" fill="#38bdf8" />
        </marker>
      </defs>
    </svg>
  </div>
);

export default UploadPipelineDiagram;
