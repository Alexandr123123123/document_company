import { exportToPdf } from '../../shared/lib/pdfExport';
import './PdfExportButton.css';

export const PdfExportButton = ({ targetRef }) => {
  const handleExport = () => {
    if (targetRef.current) {
      exportToPdf(targetRef.current, 'my_resume.pdf');
    }
  };

  return (
    <button className="pdf-export-btn" onClick={handleExport}>
      Скачать PDF
    </button>
  );
};
