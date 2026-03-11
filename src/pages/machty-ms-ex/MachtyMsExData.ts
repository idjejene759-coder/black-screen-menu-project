export interface VariantSpec {
  label: string;
  onBoom: string;
  onFrame: string;
}

export interface Variant {
  id: string;
  name: string;
  specs: { label: string; value: string }[];
  detailedSpecs: VariantSpec[];
}

export const pilingVariants: Variant[] = [
  {
    id: "piling-20-25",
    name: "Экскаватор 20–25 т",
    specs: [
      { label: "Макс. длина сваи", value: "6 / 10 м" },
      { label: "Сечение сваи", value: "до 300 мм" },
      { label: "Рекомендуемый молот", value: "DD-12 / DD-18" },
    ],
    detailedSpecs: [
      { label: "Длина забиваемой сваи, не более (м)", onBoom: "6", onFrame: "10" },
      { label: "Сечение сваи, не более (мм)", onBoom: "300", onFrame: "300" },
      { label: "Высота мачты (м)", onBoom: "12", onFrame: "17" },
      { label: "Масса молота, не более (т)", onBoom: "3", onFrame: "5" },
      { label: "Рабочие наклоны мачты (град.)", onBoom: "4", onFrame: "4" },
      { label: "Основная лебёдка (т)", onBoom: "5", onFrame: "По запросу" },
      { label: "Вспомогательная лебёдка (т)", onBoom: "3", onFrame: "По запросу" },
      { label: "Навешиваемые молота", onBoom: "DD-12", onFrame: "DD-18" },
    ],
  },
  {
    id: "piling-25-30",
    name: "Экскаватор 25–30 т",
    specs: [
      { label: "Макс. длина сваи", value: "8 / 10 м" },
      { label: "Сечение сваи", value: "до 350 мм" },
      { label: "Рекомендуемый молот", value: "DD-18 / DD-25" },
    ],
    detailedSpecs: [
      { label: "Длина забиваемой сваи, не более (м)", onBoom: "8", onFrame: "10" },
      { label: "Сечение сваи, не более (мм)", onBoom: "300", onFrame: "350" },
      { label: "Высота мачты (м)", onBoom: "14", onFrame: "16" },
      { label: "Масса молота, не более (т)", onBoom: "5", onFrame: "5" },
      { label: "Рабочие наклоны мачты (град.)", onBoom: "4", onFrame: "4" },
      { label: "Основная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Вспомогательная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Навешиваемые молота", onBoom: "DD-18", onFrame: "DD-25" },
    ],
  },
  {
    id: "piling-30-35",
    name: "Экскаватор 30–35 т",
    specs: [
      { label: "Макс. длина сваи", value: "12 / 14 м" },
      { label: "Сечение сваи", value: "до 400 мм" },
      { label: "Рекомендуемый молот", value: "DD-25 / DD-35" },
    ],
    detailedSpecs: [
      { label: "Длина забиваемой сваи, не более (м)", onBoom: "12", onFrame: "14" },
      { label: "Сечение сваи, не более (мм)", onBoom: "300", onFrame: "400" },
      { label: "Высота мачты (м)", onBoom: "18", onFrame: "18" },
      { label: "Масса молота, не более (т)", onBoom: "6", onFrame: "6" },
      { label: "Рабочие наклоны мачты (град.)", onBoom: "4", onFrame: "4" },
      { label: "Основная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Вспомогательная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Навешиваемые молота", onBoom: "DD-25", onFrame: "DD-35" },
    ],
  },
  {
    id: "piling-35plus",
    name: "Экскаватор 35+ т",
    specs: [
      { label: "Макс. длина сваи", value: "14 / 16 м" },
      { label: "Сечение сваи", value: "до 400 мм" },
      { label: "Рекомендуемый молот", value: "DD-35 / DD-45" },
    ],
    detailedSpecs: [
      { label: "Длина забиваемой сваи, не более (м)", onBoom: "14", onFrame: "16" },
      { label: "Сечение сваи, не более (мм)", onBoom: "400", onFrame: "400" },
      { label: "Высота мачты (м)", onBoom: "20", onFrame: "22" },
      { label: "Масса молота, не более (т)", onBoom: "7", onFrame: "8" },
      { label: "Рабочие наклоны мачты (град.)", onBoom: "4", onFrame: "4" },
      { label: "Основная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Вспомогательная лебёдка (т)", onBoom: "По запросу", onFrame: "По запросу" },
      { label: "Навешиваемые молота", onBoom: "DD-35", onFrame: "DD-45" },
    ],
  },
];

export const drillingVariants: Variant[] = [
  {
    id: "drilling-20-25",
    name: "Экскаватор 20–25 т",
    specs: [
      { label: "Макс. глубина бурения", value: "10 / 12 м" },
      { label: "Диаметр бурения", value: "до 500 мм" },
      { label: "Крутящий момент", value: "500 об/мин" },
    ],
    detailedSpecs: [
      { label: "Макс. высота шнековой колонны (м)", onBoom: "10", onFrame: "12" },
      { label: "Диаметр бурения (мм)", onBoom: "500", onFrame: "500" },
      { label: "Макс. глубина бурения (м)", onBoom: "10", onFrame: "12" },
      { label: "Макс. крутящий момент (об/мин)", onBoom: "500", onFrame: "500" },
      { label: "Макс. осевая нагрузка (т)", onBoom: "5", onFrame: "5" },
      { label: "Макс. грузоподъёмность крана (т)", onBoom: "3", onFrame: "3" },
      { label: "Высота мачты (м)", onBoom: "12", onFrame: "14" },
      { label: "Направляющие мачты (мм)", onBoom: "500×80", onFrame: "500×80" },
    ],
  },
  {
    id: "drilling-25-30",
    name: "Экскаватор 25–30 т",
    specs: [
      { label: "Макс. глубина бурения", value: "12 / 14 м" },
      { label: "Диаметр бурения", value: "до 500 мм" },
      { label: "Крутящий момент", value: "700 об/мин" },
    ],
    detailedSpecs: [
      { label: "Макс. высота шнековой колонны (м)", onBoom: "12", onFrame: "14" },
      { label: "Диаметр бурения (мм)", onBoom: "500", onFrame: "500" },
      { label: "Макс. глубина бурения (м)", onBoom: "12", onFrame: "14" },
      { label: "Макс. крутящий момент (об/мин)", onBoom: "700", onFrame: "700" },
      { label: "Макс. осевая нагрузка (т)", onBoom: "5", onFrame: "5" },
      { label: "Макс. грузоподъёмность крана (т)", onBoom: "3", onFrame: "3" },
      { label: "Высота мачты (м)", onBoom: "14", onFrame: "16" },
      { label: "Направляющие мачты (мм)", onBoom: "500×80", onFrame: "500×80" },
    ],
  },
  {
    id: "drilling-30-35",
    name: "Экскаватор 30–35 т",
    specs: [
      { label: "Макс. глубина бурения", value: "14 / 16 м" },
      { label: "Диаметр бурения", value: "до 800 мм" },
      { label: "Крутящий момент", value: "1000 об/мин" },
    ],
    detailedSpecs: [
      { label: "Макс. высота шнековой колонны (м)", onBoom: "14", onFrame: "16" },
      { label: "Диаметр бурения (мм)", onBoom: "800", onFrame: "800" },
      { label: "Макс. глубина бурения (м)", onBoom: "14", onFrame: "16" },
      { label: "Макс. крутящий момент (об/мин)", onBoom: "1000", onFrame: "1000" },
      { label: "Макс. осевая нагрузка (т)", onBoom: "5", onFrame: "5" },
      { label: "Макс. грузоподъёмность крана (т)", onBoom: "3", onFrame: "3" },
      { label: "Высота мачты (м)", onBoom: "16", onFrame: "18" },
      { label: "Направляющие мачты (мм)", onBoom: "600×100", onFrame: "600×100" },
    ],
  },
  {
    id: "drilling-35plus",
    name: "Экскаватор 35+ т",
    specs: [
      { label: "Макс. глубина бурения", value: "16 / 18 м" },
      { label: "Диаметр бурения", value: "до 1000 мм" },
      { label: "Крутящий момент", value: "1500 об/мин" },
    ],
    detailedSpecs: [
      { label: "Макс. высота шнековой колонны (м)", onBoom: "16", onFrame: "18" },
      { label: "Диаметр бурения (мм)", onBoom: "1000", onFrame: "1000" },
      { label: "Макс. глубина бурения (м)", onBoom: "16", onFrame: "18" },
      { label: "Макс. крутящий момент (об/мин)", onBoom: "1500", onFrame: "1500" },
      { label: "Макс. осевая нагрузка (т)", onBoom: "5", onFrame: "5" },
      { label: "Макс. грузоподъёмность крана (т)", onBoom: "3", onFrame: "3" },
      { label: "Высота мачты (м)", onBoom: "18", onFrame: "20" },
      { label: "Направляющие мачты (мм)", onBoom: "600×100", onFrame: "600×100" },
    ],
  },
];

export const galleryImages: { src: string; alt: string }[] = [];
