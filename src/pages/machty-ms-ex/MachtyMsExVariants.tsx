import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { pilingVariants, drillingVariants } from "./MachtyMsExData";

const MachtyMsExVariants = () => {
  const [activeTab, setActiveTab] = useState<"piling" | "drilling">("piling");
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  const currentVariants = activeTab === "piling" ? pilingVariants : drillingVariants;

  return (
    <section id="variants" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 text-center">
            Варианты исполнения мачт МКБЭ
          </h2>
          <p className="text-primary text-center mb-8 text-base md:text-lg">
            МКБЭ-1 (на стреле) / МКБЭ-2 (на жёсткой раме)
          </p>

          <div className="flex justify-center gap-3 mb-8">
            <Button
              variant={activeTab === "drilling" ? "default" : "outline"}
              onClick={() => { setActiveTab("drilling"); setExpandedVariant(null); }}
              className={activeTab === "drilling" ? "btn-gradient text-white" : ""}
            >
              Буровое исполнение
            </Button>
            <Button
              variant={activeTab === "piling" ? "default" : "outline"}
              onClick={() => { setActiveTab("piling"); setExpandedVariant(null); }}
              className={activeTab === "piling" ? "btn-gradient text-white" : ""}
            >
              Сваебойное исполнение
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {currentVariants.map((variant) => {
              const isExpanded = expandedVariant === variant.id;
              return (
                <Card key={variant.id} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-lg md:text-xl font-heading font-bold text-primary">{variant.name}</h3>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 flex-shrink-0">
                        {activeTab === "piling" ? "сваебойное" : "буровое"}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      {variant.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between items-center text-base">
                          <span className="text-primary">{spec.label}</span>
                          <span className="font-semibold text-primary">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedVariant(isExpanded ? null : variant.id)}
                      className="w-full mb-3 text-accent hover:text-accent/80"
                    >
                      <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} className="mr-2" />
                      {isExpanded ? "Скрыть характеристики" : "Подробнее"}
                    </Button>

                    {isExpanded && (
                      <div className="border-t pt-4 mb-4 animate-fade-in">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-2 pr-3 text-primary font-medium">Характеристика</th>
                                <th className="text-center py-2 px-2 text-primary font-medium min-w-[90px]">На стреле</th>
                                <th className="text-center py-2 pl-2 text-primary font-medium min-w-[90px]">На раме</th>
                              </tr>
                            </thead>
                            <tbody>
                              {variant.detailedSpecs.map((spec, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                                  <td className="py-2 pr-3 text-primary">{spec.label}</td>
                                  <td className="py-2 px-2 text-center font-semibold text-primary">{spec.onBoom}</td>
                                  <td className="py-2 pl-2 text-center font-semibold text-primary">{spec.onFrame}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    <a href="#consultation">
                      <Button className="btn-gradient text-white w-full" size="sm">
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Получить консультацию
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
};

export default MachtyMsExVariants;