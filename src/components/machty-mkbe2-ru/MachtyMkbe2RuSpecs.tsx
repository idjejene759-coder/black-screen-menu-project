import { Card, CardContent } from "@/components/ui/card";

const specs = [
  { label: "Масса экскаватора, т", value: "20–45" },
  { label: "Длина погружаемой сваи, м", value: "до 12" },
  { label: "Максимальная масса ударной части молотов, кг", value: "3 500" },
  { label: "Углы наклона", value: "влево/вправо 7°; назад 18°; вперёд 5°" },
  { label: "Максимальный диаметр бурения, мм", value: "800" },
  { label: "Длина основной мачты, м", value: "10–18" },
  { label: "Максимальная грузоподъёмность лебёдки подъёма сваи, кг", value: "7 000" },
  { label: "Максимальная грузоподъёмность через полиспаст, кг", value: "14 000" },
  { label: "Максимальная глубина бурения (основная мачта), м", value: "11" },
  { label: "Максимальная глубина бурения (с доп. секциями), м", value: "17" },
];

const MachtyMkbe2RuSpecs = () => {
  return (
    <section id="specs" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Технические характеристики МКБЭ-2
          </h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left py-3 px-6 font-heading font-semibold text-base">Параметр</th>
                      <th className="text-left py-3 px-6 font-heading font-semibold text-base">Значение</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="py-2.5 px-6 text-primary text-base">{spec.label}</td>
                        <td className="py-2.5 px-6 font-semibold text-primary text-base">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MachtyMkbe2RuSpecs;
