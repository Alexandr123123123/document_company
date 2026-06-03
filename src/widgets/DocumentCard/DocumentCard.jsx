import './DocumentCard.css';

export const DocumentCard = () => {
  return (
    <div className="document-container" style={{ position: 'relative' }}>
      <div>
        <h1>Новый документ</h1>
        <p>Содержимое документа будет здесь.</p>
      </div>
      
      <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', textAlign: 'center', color: '#6b7280', borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
        <p>Этот текст находится в самом низу белого листа (А4). Он должен отображаться в сгенерированном PDF.</p>
      </div>
    </div>
  );
};
