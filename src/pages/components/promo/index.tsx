import { Viewer } from '@/components/viewer';
import { loadBlocks } from './loadBlocks';

export function PromoComponentsPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="space-y-8">
                <div className="prose dark:prose-invert">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-b from-sky-500 to-sky-700 text-transparent bg-clip-text">UI <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">Promo</span> Sections</h1>
                    <p className="text-lg text-muted-foreground py-12">A collection of <strong>UI/UX promo section</strong> examples showcasing how effortlessly you can elevate your designs. Add gradient borders to cards, highlight key words in headings, increase border radii, or integrate stunning SVGs and Lottie animations. With simple, reusable components, Buildy/UI transforms into marketing masterpieces and targeted sections for your landing pages.</p>
                </div>

                <div className="grid gap-8">
                        {loadBlocks.map((example) => (
                        <Viewer
                            key={example.id}
                            title={example.title}
                            code={example.code}
                            preview={example.component}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
} 