// src/components/ResumePreview.jsx
import React from 'react';

function ResumePreview({ data, onExportPDF, onExportWord }) {
  return (
    <div className="resume-preview" id="resume-preview">
      <div className="resume-header">
        {data.photo && (
          <img
            src={URL.createObjectURL(data.photo)}
            alt="Profile"
            style={{ height: '100px', borderRadius: '50%', marginBottom: '10px' }}
          />
        )}
        <h2>{data.name}</h2>
        <p>{data.email}</p>
        <p>{data.social}</p>
      </div>

      <div className="resume-section">
        <h3>Education</h3>
        <p>{data.education}</p>
      </div>

      <div className="resume-section">
        <h3>Experience</h3>
        <p>{data.experience}</p>
      </div>

      <div className="resume-section">
        <h3>Certifications</h3>
        <p>{data.certifications}</p>
      </div>

      <div className="export-buttons no-print">
        <button onClick={onExportPDF}>Export to PDF</button>
        <button onClick={onExportWord}>Export to Word</button>
      </div>
    </div>
  );
}

export default ResumePreview;
