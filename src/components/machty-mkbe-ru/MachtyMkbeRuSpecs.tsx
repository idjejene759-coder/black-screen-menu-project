import { Card, CardContent } from "@/components/ui/card";

const specs = [
  { label: "Минимальная масса экскаватора, т", value: "22" },
  { label: "Максимальная длина цельного шнека, м", value: "12" },
  { label: "Максимальный диаметр бурения, мм", value: "800" },
  { label: "Максимальная длина основной мачты, м", value: "14" },
  { label: "Максимальная длина с дополнительными секциями, м", value: "20,5" },
  { label: "Максимальная глубина бурения (основная мачта), м", value: "12" },
  { label: "Максимальная глубина бурения (с доп. секциями), м", value: "24" },
  { label: "Максимальная масса ударной части молотов, кг", value: "до 5 000" },
];

const MachtyMkbeRuSpecs = () => {
  return (
    <section id="specs" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
            Технические характеристики МКБЭ
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

export default MachtyMkbeRuSpecs;
