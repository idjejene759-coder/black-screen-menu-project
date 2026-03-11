import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useEffect } from 'react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const allItems = [{ label: 'Главная', path: '/' }, ...items];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://kgs-ural.ru${item.path}`
    }))
  };

  useEffect(() => {
    const scriptId = 'breadcrumb-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(breadcrumbSchema);
    
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="bg-secondary/30 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {allItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <Icon name="ChevronRight" size={16} className="mx-2 text-primary" />
              )}
              {index === allItems.length - 1 ? (
                <span className="text-foreground font-medium">{item.label}</span>
              ) : (
                <Link 
                  to={item.path} 
                  className="text-primary hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};