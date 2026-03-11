import { useEffect } from 'react';

interface SchemaOrgProps {
  data: object;
}

export const SchemaOrg = ({ data }: SchemaOrgProps) => {
  useEffect(() => {
    const scriptId = 'schema-org-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(data);
    
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
};
