import { ReactElement } from 'react';

interface Example {
    id: string;
    title: string;
    component: ReactElement;
    code: string;
}

// Automatic component imports
const components = import.meta.glob<{ [key: string]: React.ComponentType }>(
    './examples/*.tsx',
    { eager: true }
);

// Automatic code imports
const codeFiles = import.meta.glob<string>(
    './examples/*.tsx',
    { 
        eager: true, 
        query: '?raw',
        import: 'default'
    }
);

export const loadExamples: Example[] = Object.entries(components).map(([path, module]) => {
    // Получаем имя файла и преобразуем его в PascalCase для именованного экспорта
    const fileName = path.split('/').pop()?.replace('.tsx', '') || '';
    const componentName = fileName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
    
    // Пробуем получить компонент из разных вариантов экспорта
    const Component = module.default || module[componentName] || module[fileName];
    
    if (!Component) {
        console.error(`Component not found in file: ${path}. Tried: default, ${componentName}, ${fileName}`);
        return null;
    }

    const code = codeFiles[path] || '';
    
    return {
        id: fileName,
        title: fileName.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
        component: <Component />,
        code
    };
}).filter((example): example is Example => example !== null);