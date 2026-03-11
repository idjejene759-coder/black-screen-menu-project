import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const drillingSmall = {
  title: "Буровое исполнение (экскаватор 20-30 т)",
  columns: [
    { header: "на стреле", subHeader: "20-25 т" },
    { header: "На жёсткой раме", subHeader: "20-25 т" },
    { header: "на стреле", subHeader: "25-30 т" },
    { header: "На жёсткой раме", subHeader: "25-30 т" },
  ],
  rows: [
    { label: "Мин. масса экскаватора (т)", values: ["20-25", "20-25", "25-30", "25-30"] },
    { label: "Макс. высота шнековой колонны (м)", values: ["10", "12", "12", "14"] },
    { label: "Диаметр бурения (мм)", values: ["500", "500", "500", "500"] },
    { label: "Макс. глубина бурения (м)", values: ["10", "12", "12", "14"] },
    { label: "Расчётный макс. крутящий момент на бурильном инструменте (об/мин)", values: ["500", "500", "700", "700"] },
    { label: "Макс. осевая нагрузка на бурильном инструменте (т)", values: ["5", "5", "5", "5"] },
    { label: "Макс. грузоподъёмность кранового оборудования (т)", values: ["3", "3", "3", "3"] },
    { label: "Высота мачты (м)", values: ["12", "14", "14", "16"] },
    { label: "Ширина направляющих мачты AxøB/CxøD (мм)", values: ["500x80", "500x80", "500x80", "500x80"] },
  ]
};

const drillingLarge = {
  title: "Буровое исполнение (экскаватор 30-35+ т)",
  columns: [
    { header: "на стреле", subHeader: "30-35 т" },
    { header: "На жёсткой раме", subHeader: "30-35 т" },
    { header: "на стреле", subHeader: "35+ т" },
    { header: "На жёсткой раме", subHeader: "35+ т" },
  ],
  rows: [
    { label: "Мин. масса экскаватора (т)", values: ["30-35", "30-35", "35- и более", "35- и более"] },
    { label: "Макс. высота шнековой колонны (м)", values: ["14", "16", "16", "18"] },
    { label: "Диаметр бурения (мм)", values: ["800", "800", "1000", "1000"] },
    { label: "Макс. глубина бурения (м)", values: ["14", "16", "16", "18"] },
    { label: "Расчётный макс. крутящий момент на бурильном инструменте (об/мин)", values: ["1000", "1000", "1500", "1500"] },
    { label: "Макс. осевая нагрузка на бурильном инструменте (т)", values: ["5", "5", "5", "5"] },
    { label: "Макс. грузоподъёмность кранового оборудования (т)", values: ["3", "3", "3", "3"] },
    { label: "Высота мачты (м)", values: ["16", "18", "18", "20"] },
    { label: "Ширина направляющих мачты AxøB/CxøD (мм)", values: ["600x100", "600x100", "600x100", "600x100"] },
  ]
};

const pilingSmall = {
  title: "Сваебойное исполнение (экскаватор 20-30 т)",
  columns: [
    { header: "на стреле", subHeader: "20-25 т" },
    { header: "На жёсткой раме", subHeader: "20-25 т" },
    { header: "на стреле", subHeader: "25-30 т" },
    { header: "На жёсткой раме", subHeader: "25-30 т" },
  ],
  rows: [
    { label: "Минимальная масса экскаватора (т)", values: ["20-25", "20-25", "25-30", "25-30"] },
    { label: "Длина забиваемой сваи, не более (м)", values: ["6", "10", "8", "10"] },
    { label: "Сечение сваи, не более (мм)", values: ["300", "300", "300", "350"] },
    { label: "Высота мачты (мм)", values: ["12", "17", "14", "16"] },
    { label: "Масса молота, не более (т)", values: ["3", "5", "5", "5"] },
    { label: "Рабочие наклоны мачты: влево-вправо, вперёд (град.)", values: ["4", "4", "4", "4"] },
    { label: "Основная лебёдка, тяговое усилие (т)", values: ["5", "По запросу", "По запросу", "По запросу"] },
    { label: "Вспомогательная лебёдка, тяговое усилие (т)", values: ["3", "По запросу", "По запросу", "По запросу"] },
    { label: "Навешиваемые молота", values: ["DD-12", "DD-18", "DD-18", "DD-25"] },
  ]
};

const pilingLarge = {
  title: "Сваебойное исполнение (экскаватор 30-35+ т)",
  columns: [
    { header: "на стреле", subHeader: "30-35 т" },
    { header: "На жёсткой раме", subHeader: "30-35 т" },
    { header: "на стреле", subHeader: "35+ т" },
    { header: "На жёсткой раме", subHeader: "35+ т" },
  ],
  rows: [
    { label: "Минимальная масса экскаватора (т)", values: ["30-35", "30-35", "35-и более", "35- и более"] },
    { label: "Длина забиваемой сваи, не более (м)", values: ["12", "14", "14", "16"] },
    { label: "Сечение сваи, не более (мм)", values: ["300", "400", "400", "400"] },
    { label: "Высота мачты (мм)", values: ["18", "18", "20", "22"] },
    { label: "Масса молота, не более (т)", values: ["6", "6", "7", "8"] },
    { label: "Рабочие наклоны мачты: влево-вправо, вперёд (град.)", values: ["4", "4", "4", "4"] },
    { label: "Основная лебёдка, тяговое усилие (т)", values: ["По запросу", "По запросу", "По запросу", "По запросу"] },
    { label: "Вспомогательная лебёдка, тяговое усилие (т)", values: ["По запросу", "По запросу", "По запросу", "По запросу"] },
    { label: "Навешиваемые молота", values: ["DD-25", "DD-35", "DD-35", "DD-45"] },
  ]
};

const allTables = [
  { data: pilingSmall, type: "piling" as const },
  { data: pilingLarge, type: "piling" as const },
  { data: drillingSmall, type: "drilling" as const },
  { data: drillingLarge, type: "drilling" as const },
];

interface SpecTableProps {
  title: string;
  columns: { header: string; subHeader: string }[];
  rows: { label: string; values: string[] }[];
  type: "piling" | "drilling";
}

const SpecTable = ({ title, columns, rows, type }: SpecTableProps) => (
  <Card className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl overflow-hidden">
    <CardContent className="p-0">
      <div className="p-5 pb-3 flex items-center gap-3">
        <h3 className="text-lg md:text-xl font-heading font-bold text-primary">{title}</h3>
        <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 flex-shrink-0">
          {type === "piling" ? "сваебойное" : "буровое"}
        </Badge>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary text-white">
              <th className="text-left p-3 font-medium min-w-[200px]">Характеристики</th>
              {columns.map((col, i) => (
                <th key={i} className="text-center p-3 font-medium min-w-[110px]">
                  <div>{col.header}</div>
                  <div className="text-white/70 text-xs font-normal mt-0.5">{col.subHeader}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-3 text-primary border-t border-gray-200">{row.label}</td>
                {row.values.map((val, vi) => (
                  <td key={vi} className="p-3 text-center font-semibold text-primary border-t border-gray-200">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 pt-3">
        <a href="#consultation" className="block">
          <Button className="btn-gradient text-white w-full" size="sm">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Получить консультацию
          </Button>
        </a>
      </div>
    </CardContent>
  </Card>
);

const MsExVariantsSection = () => {
  const [activeTab, setActiveTab] = useState<"piling" | "drilling">("piling");

  const filteredTables = allTables.filter(t => t.type === activeTab);

  return (
    <section id="variants" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 text-center">
              Варианты исполнения мачт MS-EX
            </h2>
            <p className="text-primary text-center mb-8 text-base md:text-lg">
              В зависимости от базовой машины мачты выпускаются на жёсткой раме и на стреле
            </p>

            <div className="flex justify-center gap-3 mb-8">
              <Button
                variant={activeTab === "piling" ? "default" : "outline"}
                onClick={() => setActiveTab("piling")}
                className={activeTab === "piling" ? "btn-gradient text-white" : ""}
              >
                <Icon name="ArrowDown" size={16} className="mr-2" />
                Сваебойное исполнение
              </Button>
              <Button
                variant={activeTab === "drilling" ? "default" : "outline"}
                onClick={() => setActiveTab("drilling")}
                className={activeTab === "drilling" ? "btn-gradient text-white" : ""}
              >
                <Icon name="CircleDot" size={16} className="mr-2" />
                Буровое исполнение
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-12">
              {filteredTables.map((table, index) => (
                <SpecTable
                  key={`${table.type}-${index}`}
                  title={table.data.title}
                  columns={table.data.columns}
                  rows={table.data.rows}
                  type={table.type}
                />
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4 text-center">Области применения</h3>
              <p className="text-base md:text-lg text-primary leading-relaxed mb-4 text-center">
                Копровое оборудование применяется при строительстве:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Icon name="Building2" size={28} className="text-accent mx-auto mb-2" />
                  <span className="text-base text-primary font-medium">Здания</span>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Icon name="Landmark" size={28} className="text-accent mx-auto mb-2" />
                  <span className="text-base text-primary font-medium">Мосты</span>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Icon name="Pipette" size={28} className="text-accent mx-auto mb-2" />
                  <span className="text-base text-primary font-medium">Нефтепроводы</span>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Icon name="Factory" size={28} className="text-accent mx-auto mb-2" />
                  <span className="text-base text-primary font-medium">Промышленные объекты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MsExVariantsSection;