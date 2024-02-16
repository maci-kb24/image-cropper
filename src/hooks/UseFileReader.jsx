import { useState, useEffect } from 'react';

const useFileReader = (file) => {
  const [dataUrl, setDataUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setDataUrl(reader.result);
      };

      reader.onerror = () => {
        setError('Error reading file');
      };

      reader.readAsDataURL(file);
    }
  }, [file]);

  return { dataUrl, error };
};

export default useFileReader;
