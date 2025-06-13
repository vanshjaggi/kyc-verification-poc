import { useState } from 'react';
import Modal from './Modal';

const DocumentPreview = ({ file }) => {
  const [open, setOpen] = useState(false);
  if (!file) return null;

  const url = URL.createObjectURL(file);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Preview Document</button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          {file.type.startsWith('image') ? (
            <img src={url} alt="Preview" />
          ) : (
            <iframe
  src={url}
  title="PDF Preview"
  className="pdf-viewer"
/>
          )}
        </Modal>
      )}
    </div>
  );
};

export default DocumentPreview;
