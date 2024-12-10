import { ReactElement } from 'react';

interface Example {
    id: string;
    title: string;
    component: ReactElement;
    code: string;
}

// Automatic component imports
const components = import.meta.glob<{ default: React.ComponentType }>(
    './examples/*.tsx',
    { eager: true }
);

// Automatic code imports
const codeFiles = import.meta.glob<string>( // Explicitly specify the type string
    './examples/*.tsx',
    { 
        eager: true, 
        query: '?raw',
        import: 'default'
    }
);

export const loadComponents: Example[] = Object.entries(components).map(([path, module]) => {
    const id = path.split('/').pop()?.replace('.tsx', '') || '';
    const Component = module.default;
    const code = codeFiles[path] || '';
    
    return {
        id,
        title: id.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '),
        component: <Component />,
        code
    };
});