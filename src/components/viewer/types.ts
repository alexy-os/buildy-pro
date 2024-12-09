export interface ViewerProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string;
    preview?: React.ReactNode;
    title?: string;
    language?: string;
}

export type ViewMode = 'preview' | 'code'; 