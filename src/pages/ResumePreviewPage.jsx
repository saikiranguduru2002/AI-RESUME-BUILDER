// src/pages/ResumePreviewPage.jsx
import React, { useEffect, useState } from 'react';
import ResumePreview from '../components/ResumePreview';
import { exportToPDF, exportToWord } from '../utils/exportUtils';

function ResumePreviewPage() {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('resumeData');
    if (stored) {
      setResumeData(JSON.parse(stored));
    }
  }, []);

  if (!resumeData) {
    return <p style={{ padding: '20px' }}>No resume data found. Please fill the form first.</p>;
  }

  return (
    <div className="resume-section">
      <h2 className="resume-title">Resume Preview</h2>
      <ResumePreview
        data={resumeData}
        onExportPDF={exportToPDF}
        onExportWord={exportToWord}
      />
    </div>
  );
}

export default ResumePreviewPage;
