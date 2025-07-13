import html2pdf from 'html2pdf.js';

export const exportToPDF = () => {
  const element = document.getElementById('resume-preview');
  const buttons = element.querySelector('.export-buttons');
  if (buttons) buttons.style.display = 'none';

  html2pdf()
    .from(element)
    .save('resume.pdf')
    .then(() => {
      if (buttons) buttons.style.display = 'flex';
    });
};

export const exportToWord = () => {
  const element = document.getElementById('resume-preview');
  const buttons = element.querySelector('.export-buttons');
  if (buttons) buttons.style.display = 'none';

  const content = element.innerHTML;
  const blob = new Blob(['<html><body>' + content + '</body></html>'], {
    type: 'application/msword',
  });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'resume.doc';
  link.click();

  if (buttons) buttons.style.display = 'flex';
};
