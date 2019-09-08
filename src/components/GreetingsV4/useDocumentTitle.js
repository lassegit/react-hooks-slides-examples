import { useEffect } from 'react';

const useDocumentTitle = (name, surname) => {
  useEffect(() => {
    document.title = `${name} ${surname}`;
  }, [name, surname]);
};

export default useDocumentTitle;
