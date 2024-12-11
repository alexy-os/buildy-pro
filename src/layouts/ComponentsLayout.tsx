import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export function ComponentsLayout() {
  useEffect(() => {
    // Динамически загружаем стили и скрипт
    const highlightStyle = document.createElement('link');
    highlightStyle.rel = 'stylesheet';
    highlightStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css';
    document.head.appendChild(highlightStyle);

    // Добавляем стили для code-viewer с приоритетом
    const codeViewerStyle = document.createElement('style');
    codeViewerStyle.textContent = `
      pre.bg-code-viewer {
        background-color: hsl(var(--foreground)) !important;
        margin: 0 !important;
      }
      
      .dark pre.bg-code-viewer {
        background-color: color-mix(in hsl, hsl(var(--background)), black 10%) !important;
      }

      pre.bg-code-viewer code {
        background-color: transparent !important;
        padding: 1rem !important;
      }
    `;
    document.head.appendChild(codeViewerStyle);

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js';
    script.onload = () => {
      // @ts-ignore
      hljs.highlightAll();
    };
    document.body.appendChild(script);

    return () => {
      // Удаляем при размонтировании
      highlightStyle.remove();
      codeViewerStyle.remove();
      script.remove();
    };
  }, []);

  return <Outlet />;
} 