// src/pages/ResumeBuilder.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist';
import ResumePreview from '../components/ResumePreview';
import { exportToPDF, exportToWord } from '../utils/exportUtils';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;


function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    social: '',
    education: '',
    experience: '',
    certifications: ''
  });

  const [previewReady, setPreviewReady] = useState(false);
  const [pdfData, setPdfData] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSave = pdfData || { ...formData };
    localStorage.setItem('resumeData', JSON.stringify(dataToSave));
    setPreviewReady(true);
  };

  const handlePDFUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || file.type !== 'application/pdf') return;

    const reader = new FileReader();
    reader.onload = async function () {
      const typedArray = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

      let extractedText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const text = await page.getTextContent();
        const pageText = text.items.map(item => item.str).join(' ');
        extractedText += pageText + '\n';
      }

      const parsedData = {
        name: 'Name from PDF',
        email: '',
        social: '',
        education: extractedText.trim(),
        experience: '',
        certifications: ''
      };

      setPdfData(parsedData);
      alert('✅ Resume uploaded. Now click "Save" to proceed.');
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="resume-section">
      <h2 className="resume-title">Resume Builder</h2>
      <form className="resume-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Social Links:
          <input name="social" type="text" value={formData.social} onChange={handleChange} />
        </label>
        <label>
          Education:
          <textarea name="education" value={formData.education} onChange={handleChange} />
        </label>
        <label>
          Experience:
          <textarea name="experience" value={formData.experience} onChange={handleChange} />
        </label>
        <label>
          Certifications:
          <textarea name="certifications" value={formData.certifications} onChange={handleChange} />
        </label>
        <label>
          Upload Resume (PDF):
          <input type="file" accept="application/pdf" onChange={handlePDFUpload} />
        </label>

        <button type="submit">Save to LocalStorage</button>
      </form>

      {previewReady && (
        <button className="preview-button" onClick={() => navigate('/resume/preview')}>
          View Resume Preview
        </button>
      )}
    </div>
  );
}

export default ResumeBuilder;
