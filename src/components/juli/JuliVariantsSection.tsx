import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const benefits = [
  {
    icon: "Zap",
    title: "Энергия удара +70–80%",
    text: "Энергия удара на 70–80 % выше, чем у российских молотов с аналогичной массой ударной части.",
  },
  {
    icon: "Gauge",
    title: "Высокая компрессия",
    text: "Высокая степень компрессии по сравнению с отечественными аналогами.",
  },
  {
    icon: "Fuel",
    title: "Низкий расход топлива",
    text: "Высокая мощность при низком расходе топлива.",
  },
  {
    icon: "Clock",
    title: "Длительный срок службы",
    text: "Надёжная конструкция и качественные материалы обеспечивают долговечность.",
  },
  {
    icon: "Wind",
    title: "Эффективная теплоотдача",
    text: "Эффективная теплоотдача, повышающая общую производительность оборудования.",
  },
];

const variants = [
  {
    name: "DD-18",
    specs: [
      { label: "Масса ударной части", value: "1,8 т" },
      { label: "Максимальная энергия", value: "43 кДж" },
      { label: "Количество ударов в минуту", value: "40–60" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "1,8" },
      { label: "Максимальный ход цилиндра, м", value: "2,1" },
      { label: "Количество ударов в минуту", value: "40–60" },
      { label: "Максимальная энергия, кДж", value: "43" },
      { label: "Расход топлива, л/час", value: "6" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "596" },
      { label: "Максимальный вес сваи, т", value: "5" },
      { label: "Коэффициент компрессии", value: "18" },
      { label: "Масса молота, кг", value: "3300" }
    ]
  },
  {
    name: "DD-25",
    specs: [
      { label: "Масса ударной части", value: "2,5 т" },
      { label: "Максимальная энергия", value: "57,5 кДж" },
      { label: "Количество ударов в минуту", value: "40–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "2,5" },
      { label: "Максимальный ход цилиндра, м", value: "2,5" },
      { label: "Количество ударов в минуту", value: "40–50" },
      { label: "Максимальная энергия, кДж", value: "57,5" },
      { label: "Расход топлива, л/час", value: "10" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "968" },
      { label: "Максимальный вес сваи, т", value: "6" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "4600" }
    ]
  },
  {
    name: "DD-30",
    specs: [
      { label: "Масса ударной части", value: "3,0 т" },
      { label: "Максимальная энергия", value: "73,5 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "3,0" },
      { label: "Максимальный ход цилиндра, м", value: "2,7" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "73,5" },
      { label: "Расход топлива, л/час", value: "11" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "1109" },
      { label: "Максимальный вес сваи, т", value: "6,5" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "5000" }
    ]
  },
  {
    name: "DD-35",
    specs: [
      { label: "Масса ударной части", value: "3,5 т" },
      { label: "Максимальная энергия", value: "89,6 кДж" },
      { label: "Количество ударов в минуту", value: "40–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "3,5" },
      { label: "Максимальный ход цилиндра, м", value: "2,8" },
      { label: "Количество ударов в минуту", value: "40–50" },
      { label: "Максимальная энергия, кДж", value: "89,6" },
      { label: "Расход топлива, л/час", value: "12" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "1250" },
      { label: "Максимальный вес сваи, т", value: "7" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "6100" }
    ]
  },
  {
    name: "DD-45",
    specs: [
      { label: "Масса ударной части", value: "4,5 т" },
      { label: "Максимальная энергия", value: "120 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "4,5" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "120" },
      { label: "Расход топлива, л/час", value: "14,5" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "1430" },
      { label: "Максимальный вес сваи, т", value: "9" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "7380" }
    ]
  },
  {
    name: "DD-55",
    specs: [
      { label: "Масса ударной части", value: "5,5 т" },
      { label: "Максимальная энергия", value: "157 кДж" },
      { label: "Количество ударов в минуту", value: "45–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "5,5" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "45–50" },
      { label: "Максимальная энергия, кДж", value: "157" },
      { label: "Расход топлива, л/час", value: "16,5" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "1690" },
      { label: "Максимальный вес сваи, т", value: "13" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "10000" }
    ]
  },
  {
    name: "DD-65",
    specs: [
      { label: "Масса ударной части", value: "6,5 т" },
      { label: "Максимальная энергия", value: "189 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "6,5" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "189" },
      { label: "Расход топлива, л/час", value: "18" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "1980" },
      { label: "Максимальный вес сваи, т", value: "16" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "13000" }
    ]
  },
  {
    name: "DD-75",
    specs: [
      { label: "Масса ударной части", value: "7,5 т" },
      { label: "Максимальная энергия", value: "226 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "7,5" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "226" },
      { label: "Расход топлива, л/час", value: "19" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "2280" },
      { label: "Максимальный вес сваи, т", value: "18,5" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "14500" }
    ]
  },
  {
    name: "DD-85",
    specs: [
      { label: "Масса ударной части", value: "8,5 т" },
      { label: "Максимальная энергия", value: "250 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "8,5" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "250" },
      { label: "Расход топлива, л/час", value: "20" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "2560" },
      { label: "Максимальный вес сваи, т", value: "22" },
      { label: "Коэффициент компрессии", value: "22" },
      { label: "Масса молота, кг", value: "16500" }
    ]
  },
  {
    name: "DD-103",
    specs: [
      { label: "Масса ударной части", value: "10,3 т" },
      { label: "Максимальная энергия", value: "309 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "10,3" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "309" },
      { label: "Расход топлива, л/час", value: "24" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "2950" },
      { label: "Максимальный вес сваи, т", value: "30" },
      { label: "Коэффициент компрессии", value: "24" },
      { label: "Масса молота, кг", value: "18000" }
    ]
  },
  {
    name: "DD-128",
    specs: [
      { label: "Масса ударной части", value: "12,8 т" },
      { label: "Максимальная энергия", value: "398 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "12,8" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "398" },
      { label: "Расход топлива, л/час", value: "28" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "3460" },
      { label: "Максимальный вес сваи, т", value: "38" },
      { label: "Коэффициент компрессии", value: "28" },
      { label: "Масса молота, кг", value: "22000" }
    ]
  },
  {
    name: "DD-160",
    specs: [
      { label: "Масса ударной части", value: "16 т" },
      { label: "Максимальная энергия", value: "455 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "16" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "455" },
      { label: "Расход топлива, л/час", value: "40" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "3970" },
      { label: "Максимальный вес сваи, т", value: "48" },
      { label: "Коэффициент компрессии", value: "28" },
      { label: "Масса молота, кг", value: "28700" }
    ]
  },
  {
    name: "DD-180",
    specs: [
      { label: "Масса ударной части", value: "18 т" },
      { label: "Максимальная энергия", value: "549 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "18" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "549" },
      { label: "Расход топлива, л/час", value: "48" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "4510" },
      { label: "Максимальный вес сваи, т", value: "55" },
      { label: "Коэффициент компрессии", value: "30" },
      { label: "Масса молота, кг", value: "35000" }
    ]
  },
  {
    name: "DD-200",
    specs: [
      { label: "Масса ударной части", value: "20 т" },
      { label: "Максимальная энергия", value: "603 кДж" },
      { label: "Количество ударов в минуту", value: "35–50" }
    ],
    detailedSpecs: [
      { label: "Масса ударной части, т", value: "20" },
      { label: "Максимальный ход цилиндра, м", value: "3" },
      { label: "Количество ударов в минуту", value: "35–50" },
      { label: "Максимальная энергия, кДж", value: "603" },
      { label: "Расход топлива, л/час", value: "51" },
      { label: "Сила взрыва при воздействии на сваю, кН", value: "4750" },
      { label: "Максимальный вес сваи, т", value: "60" },
      { label: "Коэффициент компрессии", value: "30" },
      { label: "Масса молота, кг", value: "39000" }
    ]
  }
];

const JuliVariantsSection = () => {
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  return (
    <section id="variants" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              Модели молотов Dongtai Juli серии DD
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
                        штанговый
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
                            <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-0">
                              <span className="text-base text-primary">{spec.label}</span>
                              <span className="text-base font-semibold text-primary">{spec.value}</span>
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

            <div className="bg-primary/5 rounded-2xl p-6 md:p-8 mt-4">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6 text-center">
                Преимущества дизельных молотов Dongtai Juli DD
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((b, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={b.icon} size={20} className="text-accent" />
                      </div>
                      <h3 className="text-base font-heading font-bold text-primary">{b.title}</h3>
                    </div>
                    <p className="text-base text-primary leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuliVariantsSection;