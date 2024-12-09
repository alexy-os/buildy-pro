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

const Viewer = React.forwardRef<HTMLDivElement, ViewerProps>(
    ({ className, code, preview, language = 'tsx', title, ...props }, ref) => {
        const [mode, setMode] = React.useState<ViewMode>('preview');

        const handleCopy = React.useCallback(async () => {
            await navigator.clipboard.writeText(code);
            toast.success('Code copied to clipboard');
        }, [code]);

        return (
            <div
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
                            <span className="text-sm text-muted-foreground">{title}</span>
                        )}
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleCopy}>
                        <ClipboardIcon className="h-4 w-4" />
                    </Button>
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