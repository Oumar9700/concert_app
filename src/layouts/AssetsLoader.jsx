import { useEffect } from 'react';

const AssetsLoader = ({ styles = [], scripts = [] }) => {
  useEffect(() => {
    const styleElements = styles.map(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    const scriptElements = scripts.map(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    // Nettoyage au démontage du composant
    return () => {
      styleElements.forEach(link => document.head.removeChild(link));
      scriptElements.forEach(script => document.body.removeChild(script));
    };
  }, [styles, scripts]);

  return null; // Ce composant n’affiche rien
};

export default AssetsLoader;
