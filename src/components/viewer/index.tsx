'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ClipboardIcon, CodeIcon, EyeIcon } from 'lucide-react';
import { toast } from 'sonner';
import React from 'react';
import { ViewerProps, ViewMode } from './types';
import { headerVariants, viewerVariants } from './viewer.styles';
import { ViewerPreview } from './viewer-preview';
import { ViewerCode } from './viewer-code';
import { CodeModeSelect } from '../elements/code-mode';
import { useSettings } from '@/lib/settings'

const Viewer = React.forwardRef<HTMLDivElement, ViewerProps>(
    ({ className, code, preview, language = 'tsx', title, ...props }, ref) => {
        const [mode, setMode] = React.useState<ViewMode>('preview');
        const { getSetting } = useSettings();
        const codeMode = getSetting('codeMode', 'base');
        
        // Force re-render when codeMode changes
        const [key, setKey] = React.useState(0);
        React.useEffect(() => {
            setKey(prev => prev + 1);
        }, [codeMode]);

        const handleCopy = React.useCallback(async () => {
            await navigator.clipboard.writeText(code);
            toast.success('Code copied to clipboard');
        }, [code]);

        return (
            <div
                key={key}
                ref={ref}
                className={cn(viewerVariants(), className)}
                {...props}
            >
                <div className={headerVariants()}>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setMode(mode === 'preview' ? 'code' : 'preview')}
                        >
                            {mode === 'preview' ? (
                                <CodeIcon className="h-4 w-4" />
                            ) : (
                                <EyeIcon className="h-4 w-4" />
                            )}
                            <span className="ml-2">{mode === 'preview' ? 'Code' : 'Preview'}</span>
                        </Button>
                        {title && (
                            <span className="text-sm hidden md:flex text-muted-foreground">{title}</span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <CodeModeSelect />
                        <Button variant="ghost" size="sm" onClick={handleCopy}>
                            <ClipboardIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="p-4">
                    {mode === 'preview' ? (
                        <ViewerPreview>{preview}</ViewerPreview>
                    ) : (
                        <ViewerCode code={code} language={language} />
                    )}
                </div>
            </div>
        );
    }
);

Viewer.displayName = 'Viewer';

export { Viewer }; 