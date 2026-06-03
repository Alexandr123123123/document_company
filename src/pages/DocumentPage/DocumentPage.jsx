import { DocumentCard } from '../../widgets/DocumentCard/DocumentCard';
import { PdfExportButton } from '../../widgets/PdfExportButton/PdfExportButton';
import { useRef, useState } from 'react';
import './DocumentPage.css';

export const DocumentPage = () => {
  const docRef = useRef(null);
  const [showA4Guide, setShowA4Guide] = useState(false);

  return (
    <div className="document-page-container">
      <div className="document-action-buttons" style={{ display: 'flex', gap: '15px', marginBottom: '20px', alignItems: 'center' }}>
        <PdfExportButton targetRef={docRef} />
        <button 
          onClick={() => setShowA4Guide(!showA4Guide)}
          style={{
            padding: '12px 24px',
            backgroundColor: showA4Guide ? '#ef4444' : '#f3f4f6',
            color: showA4Guide ? 'white' : '#111827',
            border: showA4Guide ? 'none' : '1px solid #d1d5db',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '15px',
            transition: 'all 0.2s'
          }}
        >
          {showA4Guide ? 'Выключить границу A4' : 'Включить границу A4'}
        </button>
      </div>

      <div style={{ position: 'relative', width: '794px' }}>
        <div ref={docRef}>
          <DocumentCard />
        </div>
        
        {showA4Guide && (
          <div style={{
            position: 'absolute',
            top: '1123px',
            left: '-30px',
            right: '-30px',
            borderTop: '3px dashed #ef4444',
            zIndex: 1000,
            pointerEvents: 'none'
          }}>
            <div style={{
              position: 'absolute',
              right: '0',
              top: '-32px',
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '4px 10px',
              borderRadius: '6px',
              fontWeight: 'bold',
              fontSize: '14px',
              boxShadow: '0 2px 5px rgba(239,68,68,0.3)'
            }}>
              Конец страницы А4
            </div>
          </div>
        )}
      </div>
      <div className="test-bottom-container" style={{ marginTop: '50px', padding: '20px', backgroundColor: '#e5e7eb', borderRadius: '8px', maxWidth: '794px', width: '100%', boxSizing: 'border-box' }}>
        <h3>Тестовый блок внизу страницы</h3>
        <p>Этот текст не должен попасть в PDF при печати (Ctrl+P) или при нажатии кнопки скачивания. Он находится за пределами компонента DocumentCard.</p>
      </div>
    </div>
  );
};
