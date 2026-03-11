import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Variant {
  name: string;
  specs: Array<{ label: string; value: string }>;
  detailedSpecs: Array<{ label: string; value: string }>;
}

interface EquipmentVariantsSectionProps {
  variants: Variant[];
  expandedVariant: string | null;
  onToggleVariant: (name: string) => void;
  title: string;
}

export const EquipmentVariantsSection = ({ 
  variants, 
  expandedVariant, 
  onToggleVariant,
  title 
}: EquipmentVariantsSectionProps) => {
  return (
    <section id="variants" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              {title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {variants.map((variant, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-heading font-bold text-primary">
                        {variant.name}
                      </h3>
                    </div>
                    
                    <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                      {variant.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                          <span className="text-sm text-primary">{spec.label}</span>
                          <span className="text-sm font-semibold text-primary">{spec.value}</span>
                        </div>
                      ))}
                      
                      {expandedVariant === variant.name && (
                        <>
                          {variant.detailedSpecs.map((spec, idx) => (
                            <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                              <span className="text-sm text-primary">{spec.label}</span>
                              <span className="text-sm font-semibold text-primary">{spec.value}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => onToggleVariant(variant.name)}
                        className="w-full"
                      >
                        {expandedVariant === variant.name ? (
                          <>
                            <Icon name="ChevronUp" size={16} className="mr-2" />
                            Скрыть характеристики
                          </>
                        ) : (
                          <>
                            <Icon name="ChevronDown" size={16} className="mr-2" />
                            Подробнее
                          </>
                        )}
                      </Button>
                      <a href="#consultation" className="block">
                        <Button className="btn-gradient text-white w-full" size="sm">
                          <Icon name="MessageSquare" size={16} className="mr-2" />
                          Получить консультацию
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};