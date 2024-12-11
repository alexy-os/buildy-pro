import { cn } from '../src/lib/utils';
import { styleConfig } from './styleConfig';

interface ValidationResult {
  isValid: boolean;
  violations: string[];
  suggestions: string[];
  contextWarnings: string[];
}

type AllowedClass = 
  | typeof styleConfig.components.base.layout[number]
  | typeof styleConfig.components.base.spacing[number]
  | typeof styleConfig.components.base.typography.sizes[number]
  | typeof styleConfig.components.base.typography.variants[number]
  | typeof styleConfig.components.theme.backgrounds[number]
  | typeof styleConfig.components.theme.text[number];

const checkForbiddenPatterns = (
  className: string,
  violations: string[],
  suggestions: string[]
) => {
  let hasForbiddenPattern = false;
  
  Object.entries(styleConfig.forbidden).forEach(([category, patterns]) => {
    patterns.forEach(pattern => {
      if (pattern.test(className)) {
        hasForbiddenPattern = true;
        violations.push(`Class "${className}" matches forbidden pattern in ${String(category)}`);
        if (category === 'colors') {
          suggestions.push(`Use theme colors from styleConfig.components.theme instead of "${className}"`);
        } else {
          suggestions.push(`Use predefined classes from styleConfig.components`);
        }
      }
    });
  });
  
  return hasForbiddenPattern;
};

const isAllowedClass = (className: string): boolean => {
  const baseClasses: string[] = [
    ...styleConfig.components.base.layout,
    ...styleConfig.components.base.spacing,
    ...styleConfig.components.base.typography.sizes,
    ...styleConfig.components.base.typography.variants
  ];
  
  const themeClasses: string[] = [
    ...styleConfig.components.theme.backgrounds,
    ...styleConfig.components.theme.text
  ];
  
  // Проверяем сначала на запрещенные паттерны
  const tempViolations: string[] = [];
  const tempSuggestions: string[] = [];
  if (checkForbiddenPatterns(className, tempViolations, tempSuggestions)) {
    return false;
  }
  
  return baseClasses.includes(className) || 
         themeClasses.includes(className) ||
         baseClasses.some(base => className.match(new RegExp(`^(sm:|md:|lg:|xl:)${base}$`)));
};

export const validateStyles = (classNames: string): ValidationResult => {
  const classes = cn(classNames).split(' ');
  const violations: string[] = [];
  const suggestions: string[] = [];
  const contextWarnings: string[] = [];

  classes.forEach(className => {
    if (!isAllowedClass(className)) {
      // Если класс не разрешен, добавляем нарушение
      violations.push(`Class "${className}" is not allowed`);
      suggestions.push(`Check styleConfig.components for allowed classes`);
      // И проверяем на запрещенные паттерны для более конкретных сообщений
      checkForbiddenPatterns(className, violations, suggestions);
    }
  });

  return {
    isValid: violations.length === 0,
    violations,
    suggestions,
    contextWarnings
  };
}; 