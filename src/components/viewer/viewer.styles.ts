import { cva } from 'class-variance-authority';

export const viewerVariants = cva(
    'w-full rounded-lg border border-border bg-background overflow-hidden',
    {
        variants: {
            size: {
                default: 'min-h-[400px]',
                sm: 'min-h-[200px]',
                lg: 'min-h-[600px]',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    }
);

export const headerVariants = cva(
    'flex items-center justify-between border-b border-border p-4'
); 