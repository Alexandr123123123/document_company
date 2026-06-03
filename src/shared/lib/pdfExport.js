import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf/dist/jspdf.umd.min.js';

/**
 * Exports a given HTML element to a PDF file.
 * @param {HTMLElement} element - The DOM element to capture.
 * @param {string} filename - The name of the output PDF file.
 */
export const exportToPdf = async (element, filename = 'cv.pdf') => {
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better resolution
      useCORS: true,
    });
    
    const imgData = canvas.toDataURL('image/png');
    
    // A4 size: 210mm x 297mm
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
