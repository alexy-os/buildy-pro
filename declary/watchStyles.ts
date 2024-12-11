import { validateStyles } from './styleValidator';
import { cn } from '../src/lib/utils';

const WATCH_PATTERNS = [
  'src/pages/components/hero/base/**/*.{ts,tsx}'
];

const WATCH_DIR = 'src/pages/components/hero/base';

const processFile = async (filePath: string) => {
  const content = await Bun.file(filePath).text();
  const componentRegex = /<([A-Z][a-zA-Z]*)[^>]*className=["'`](.*?)["'`][^>]*>/g;
  let match;
  let hasIssues = false;

  console.log(`\nChecking ${filePath}...`);

  while ((match = componentRegex.exec(content)) !== null) {
    const [_, componentName, originalClasses] = match;
    const normalizedClasses = cn(originalClasses);
    
    const result = validateStyles(normalizedClasses);

    if (!result.isValid || result.contextWarnings.length > 0) {
      hasIssues = true;
      console.log(`\n\x1b[33mIssues in ${componentName} component:\x1b[0m`);
      
      if (result.violations.length) {
        console.log('\nStyle violations:');
        result.violations.forEach(v => console.log(`  ❌ ${v}`));
      }
      
      if (result.suggestions.length) {
        console.log('\n\x1b[36mSuggestions:\x1b[0m');
        result.suggestions.forEach(s => console.log(`  ✨ ${s}`));
      }
    }
  }

  if (!hasIssues) {
    console.log('\x1b[32m✓ No style violations\x1b[0m');
  }
};

const watchStyles = async () => {
  console.log('\nWatching for style violations...');
  
  // Initial check
  for (const pattern of WATCH_PATTERNS) {
    const glob = new Bun.Glob(pattern);
    for await (const file of glob.scan()) {
      await processFile(file);
    }
  }
  
  // Set up file system watcher
  const watcher = new FileWatcher({
    dir: WATCH_DIR,
    callback: async (filePath) => {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        await processFile(filePath);
      }
    }
  });

  await watcher.start();
};

// Simple FileWatcher implementation
class FileWatcher {
  private dir: string;
  private callback: (filePath: string) => Promise<void>;

  constructor({ 
    dir, 
    callback 
  }: { 
    dir: string, 
    callback: (filePath: string) => Promise<void> 
  }) {
    this.dir = dir;
    this.callback = callback;
  }

  async start() {
    const { watch } = await import('node:fs');
    
    watch(this.dir, { recursive: true }, async (_, filename) => {
      if (filename) {
        const filePath = `${this.dir}/${filename}`;
        await this.callback(filePath);
      }
    });
    
    console.log(`\nWatching directory: ${this.dir}`);
  }
}

watchStyles().catch(console.error); 