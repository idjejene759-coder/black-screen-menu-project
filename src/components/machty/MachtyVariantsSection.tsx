import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const variants = [
  {
    name: "МК-12С",
    type: "сваебойная",
    specs: [
      { label: "Длина погружаемой сваи", value: "12 м" },
      { label: "Максимальное сечение сваи", value: "400 × 400 мм" },
      { label: "Масса навесного оборудования", value: "не более 16 т" }
    ],
    detailedSpecs: [
      { label: "Рабочие наклоны мачты, не более", value: "" },
      { label: "Вперед-назад, град", value: "4", indent: true },
      { label: "Влево-вправо, град", value: "4", indent: true },
      { label: "Изменение вылета мачты не более, м", value: "1" },
      { label: "Ширина направляющих мачты Ах⌀В/Сx⌀D, мм", value: "330×⌀70" },
      { label: "Типы применяемых молотов", value: "" },
      { label: "Дизельные трубчатые", value: "HD-19", indent: true },
      { label: "Дизельные штанговые", value: "DD-18 / DD-25", indent: true },
      { label: "Гидравлические", value: "HHP-4", indent: true },
      { label: "Масса навесного оборудования, не более, т", value: "16" }
    ]
  },
  {
    name: "МК-14С",
    type: "сваебойная",
    specs: [
      { label: "Длина погружаемой сваи", value: "14 м" },
      { label: "Максимальное сечение сваи", value: "400 × 400 мм" },
      { label: "Масса навесного оборудования", value: "не более 18 т" }
    ],
    detailedSpecs: [
      { label: "Рабочие наклоны мачты, не более", value: "" },
      { label: "Вперед-назад, град", value: "4", indent: true },
      { label: "Влево-вправо, град", value: "4", indent: true },
      { label: "Изменение вылета мачты не более, м", value: "1" },
      { label: "Ширина направляющих мачты Ах⌀В/Сx⌀D, мм", value: "330×⌀70" },
      { label: "Типы применяемых молотов", value: "" },
      { label: "Дизельные трубчатые", value: "HD-25", indent: true },
      { label: "Дизельные штанговые", value: "DD-25 / DD-35", indent: true },
      { label: "Гидравлические", value: "HHP-5", indent: true },
      { label: "Масса навесного оборудования, не более, т", value: "18" }
    ]
  },
  {
    name: "МК-16С",
    type: "сваебойная",
    specs: [
      { label: "Длина погружаемой сваи", value: "16 м" },
      { label: "Максимальное сечение сваи", value: "400 × 400 мм" },
      { label: "Масса навесного оборудования", value: "не более 19 т" }
    ],
    detailedSpecs: [
      { label: "Рабочие наклоны мачты, не более", value: "" },
      { label: "Вперед-назад, град", value: "4", indent: true },
      { label: "Влево-вправо, град", value: "4", indent: true },
      { label: "Изменение вылета мачты не более, м", value: "1" },
      { label: "Ширина направляющих мачты Ах⌀В/Сx⌀D, мм", value: "330×⌀70" },
      { label: "Типы применяемых молотов", value: "" },
      { label: "Дизельные трубчатые", value: "HD-30", indent: true },
      { label: "Дизельные штанговые", value: "DD-35 / DD-45", indent: true },
      { label: "Гидравлические", value: "HHP-5", indent: true },
      { label: "Масса навесного оборудования, не более, т", value: "19" }
    ]
  },
  {
    name: "МК-12Б",
    type: "буровая",
    specs: [
      { label: "Глубина бурения", value: "12 м" },
      { label: "Максимальный диаметр бурения", value: "600 мм" },
      { label: "Масса навесного оборудования", value: "не более 10 т" }
    ],
    detailedSpecs: [
      { label: "Рабочие наклоны мачты, не более", value: "" },
      { label: "Вперед-назад, град", value: "4", indent: true },
      { label: "Влево-вправо, град", value: "4", indent: true },
      { label: "Макс. крутящий момент на буровом инструменте, кгс×м", value: "3700" },
      { label: "Частота вращения выходного вала редуктора, об/мин", value: "31,6" },
      { label: "Масса привода, кг", value: "1550" },
      { label: "Изменение вылета мачты не более, м", value: "1" },
      { label: "Ширина направляющих мачты Ах⌀В / Сx⌀D, мм", value: "365×⌀70 / 650×⌀102" },
      { label: "Типы применяемых вращателей", value: "СО2МП" },
      { label: "Масса навесного оборудования, не более, т", value: "10" }
    ]
  },
  {
    name: "МК-14Б",
    type: "буровая",
    specs: [
      { label: "Глубина бурения", value: "14 м" },
      { label: "Максимальный диаметр бурения", value: "600 мм" },
      { label: "Масса навесного оборудования", value: "не более 12 т" }
    ],
    detailedSpecs: [
      { label: "Рабочие наклоны мачты, не более", value: "" },
      { label: "Вперед-назад, град", value: "4", indent: true },
      { label: "Влево-вправо, град", value: "4", indent: true },
      { label: "Макс. крутящий момент на буровом инструменте, кгс×м", value: "3700" },
      { label: "Частота вращения выходного вала редуктора, об/мин", value: "31,6" },
      { label: "Масса привода, кг", value: "1550" },
      { label: "Изменение вылета мачты не более, м", value: "1" },
      { label: "Ширина направляющих мачты Ах⌀В / Сx⌀D, мм", value: "365×⌀70 / 650×⌀102" },
      { label: "Типы применяемых вращателей", value: "СО2МП" },
      { label: "Масса навесного оборудования, не более, т", value: "12" }
    ]
  },
  {
    name: "МК-16Б",
    type: "буровая",
    specs: [
      { label: "Глубина бурения", value: "16 м" },
      { label: "Максимальный диаметр бурения", value: "600 мм" },
      { label: "Масса навесного оборудования", value: "не более 14 т" }
    ],
    detailedSpecs: [
      { label: "Рабочие наклоны мачты, не более", value: "" },
      { label: "Вперед-назад, град", value: "4", indent: true },
      { label: "Влево-вправо, град", value: "4", indent: true },
      { label: "Макс. крутящий момент на буровом инструменте, кгс×м", value: "3700" },
      { label: "Частота вращения выходного вала редуктора, об/мин", value: "31,6" },
      { label: "Масса привода, кг", value: "1550" },
      { label: "Изменение вылета мачты не более, м", value: "1" },
      { label: "Ширина направляющих мачты Ах⌀В / Сx⌀D, мм", value: "365×⌀70 / 650×⌀102" },
      { label: "Типы применяемых вращателей", value: "СО2МП" },
      { label: "Масса навесного оборудования, не более, т", value: "14" }
    ]
  }
];

const MachtyVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Варианты копровых мачт серии МК
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {variants.map((variant, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                        {variant.name}
                      </h3>
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        {variant.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                      {variant.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                          <span className="text-base text-primary flex-1">{spec.label}</span>
                          <span className="text-base font-semibold text-primary text-right ml-4">{spec.value}</span>
                        </div>
                      ))}
                      
                      {expandedVariant === variant.name && (
                        <>
                          {variant.detailedSpecs.map((spec, idx) => (
                            <div key={idx} className={spec.indent ? "flex justify-between items-center py-1 border-b border-gray-200 last:border-0 ml-4" : "flex justify-between items-center py-1 border-b border-gray-200 last:border-0"}>
                              {spec.value ? (
                                <>
                                  <span className="text-base text-primary">{spec.label}</span>
                                  <span className="text-base font-semibold text-primary">{spec.value}</span>
                                </>
                              ) : (
                                <span className="text-base font-bold text-primary mt-2">{spec.label}</span>
                              )}
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => setExpandedVariant(expandedVariant === variant.name ? null : variant.name)}
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

export default MachtyVariantsSection;