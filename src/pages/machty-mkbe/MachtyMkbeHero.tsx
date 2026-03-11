import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  compareRows,
  mkbeSpecs,
  mkbe2Specs,
  mkbePurpose,
  mkbePilingEquipment,
  mkbeDrillingEquipment,
  mkbeOptionalEquipment,
  mkbeConstructionElements,
  mkbeWorkPrinciple,
  mkbe2Composition,
  pageImage,
} from "./MachtyMkbeData";

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
    <span className="text-base text-primary">{text}</span>
  </div>
);

const MachtyMkbeHero = () => {
  const [openCard, setOpenCard] = useState<"mkbe" | "mkbe2" | null>(null);

  const toggleCard = (card: "mkbe" | "mkbe2") => {
    setOpenCard(openCard === card ? null : card);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-14 pb-8 md:pt-16 md:pb-10 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              Мачты копровые экскаваторные
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Мачты копровые экскаваторные (серия МКБЭ)
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#mkbe" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Подробнее о МКБЭ
              </a>
              <a href="#mkbe2" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Подробнее о МКБЭ-2
              </a>
              <a href="#gallery" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Фотогалерея
              </a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Таблица + фото + карточки */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            {/* Таблица слева, фото справа */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">Технические характеристики МКБЭ / МКБЭ-2</h2>
                <div className="overflow-x-auto rounded-xl shadow border border-gray-100 mb-4">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="text-left py-3 px-4 font-heading font-semibold text-base">Параметр</th>
                        <th className="text-center py-3 px-4 font-heading font-bold text-base">
                          <span className="block text-accent">МКБЭ</span>
                          <span className="text-white/70 text-xs font-normal">Мачта копрово-бурильная экскаваторного типа</span>
                        </th>
                        <th className="text-center py-3 px-4 font-heading font-bold text-base">
                          <span className="block text-accent">МКБЭ-2</span>
                          <span className="text-white/70 text-xs font-normal">Мачта копрово-бурильная на экскаваторе</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {compareRows.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="py-2.5 px-4 text-primary text-base">{row.label}</td>
                          <td className="py-2.5 px-4 text-center font-semibold text-primary text-base">{row.mkbe}</td>
                          <td className="py-2.5 px-4 text-center font-semibold text-primary text-base">{row.mkbe2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>

              <div className="flex items-center justify-center">
                <div className="rounded-2xl overflow-hidden bg-gray-50 shadow-xl w-full aspect-square">
                  <OptimizedImage
                    src={pageImage}
                    alt="Мачты копровые экскаваторные серия МКБЭ"
                    className="w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </div>

            {/* Карточка МКБЭ */}
            <Card id="mkbe" className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl mb-6 bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-primary">
                    Мачта копрово-бурильная экскаваторного типа (серия МКБЭ)
                  </h2>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 flex-shrink-0 ml-4">
                    бурильная
                  </Badge>
                </div>

                <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                  {mkbeSpecs.map((row, idx) => (
                    <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                      <span className="text-base text-primary flex-1">{row.label}</span>
                      <span className="text-base font-semibold text-primary text-right ml-4">{row.value}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCard("mkbe")}
                  className="w-full mb-3 text-accent hover:text-accent/80"
                >
                  <Icon name={openCard === "mkbe" ? "ChevronUp" : "ChevronDown"} size={16} className="mr-2" />
                  {openCard === "mkbe" ? "Свернуть описание" : "Развернуть описание"}
                </Button>

                {openCard === "mkbe" && (
                  <div className="border-t pt-4 mb-4 animate-fade-in space-y-6">
                    <p className="text-base text-primary leading-relaxed">
                      Мачта копрово-бурильная серии МКБЭ предназначена для установки на гусеничные экскаваторы отечественного и импортного производства массой от 22 тонн. Оборудование прошло сертификацию в соответствии с требованиями ТР ТС и имеет Декларацию соответствия ЕАЭС.
                    </p>

                    <div>
                      <p className="text-base font-semibold text-primary mb-3 pb-1 border-b border-gray-200">Применяется для:</p>
                      <div className="space-y-2">
                        {mkbePurpose.map((item, idx) => <CheckItem key={idx} text={item} />)}
                      </div>
                    </div>

                    <div>
                      <p className="text-base font-semibold text-primary mb-3 pb-1 border-b border-gray-200">Комплектация и оборудование</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-base font-semibold text-primary mb-2">Сваебойное оборудование</p>
                          <p className="text-base text-primary mb-2">Молоты российского и импортного производства:</p>
                          <div className="space-y-2">
                            {mkbePilingEquipment.map((item, idx) => <CheckItem key={idx} text={item} />)}
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-semibold text-primary mb-2">Бурильное оборудование</p>
                          <div className="space-y-2 mb-3">
                            {mkbeDrillingEquipment.map((item, idx) => <CheckItem key={idx} text={item} />)}
                          </div>
                          <p className="text-base text-primary mb-2">По согласованию с заказчиком:</p>
                          <div className="space-y-2">
                            {mkbeOptionalEquipment.map((item, idx) => <CheckItem key={idx} text={item} />)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-base font-semibold text-primary mb-3 pb-1 border-b border-gray-200">Конструкция</p>
                      <div className="space-y-3">
                        <p className="text-base text-primary">Мачта — сварная прямоугольная коробчатая конструкция, усиленная по всей длине диафрагмами жёсткости. Направляющие выполнены из круглых или профильных труб.</p>
                        <p className="text-base font-semibold text-primary">На мачте установлены:</p>
                        <div className="space-y-2">
                          {mkbeConstructionElements.map((item, idx) => <CheckItem key={idx} text={item} />)}
                        </div>
                        <p className="text-base text-primary">Передвижение каретки — цепным механизмом (планетарный редуктор РДЦ-800, усилие 8 т), либо системой «гидроцилиндр – полиспаст». Мачта не требует дополнительного оборудования для монтажа.</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-base font-semibold text-primary mb-3 pb-1 border-b border-gray-200">Принцип работы</p>
                      <div className="space-y-2">
                        {mkbeWorkPrinciple.map((item, idx) => <CheckItem key={idx} text={item} />)}
                      </div>
                    </div>
                  </div>
                )}

                <a href="#consultation">
                  <Button className="btn-gradient text-white w-full">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Получить консультацию
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Карточка МКБЭ-2 */}
            <Card id="mkbe2" className="border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-primary">
                    Мачта копрово-бурильная на экскаваторе (серия МКБЭ-2)
                  </h2>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 flex-shrink-0 ml-4">
                    многофункциональная
                  </Badge>
                </div>

                <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-4">
                  {mkbe2Specs.map((row, idx) => (
                    <div key={idx} className="flex justify-between items-start py-1 border-b border-gray-200 last:border-0">
                      <span className="text-base text-primary flex-1">{row.label}</span>
                      <span className="text-base font-semibold text-primary text-right ml-4">{row.value}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCard("mkbe2")}
                  className="w-full mb-3 text-accent hover:text-accent/80"
                >
                  <Icon name={openCard === "mkbe2" ? "ChevronUp" : "ChevronDown"} size={16} className="mr-2" />
                  {openCard === "mkbe2" ? "Свернуть описание" : "Развернуть описание"}
                </Button>

                {openCard === "mkbe2" && (
                  <div className="border-t pt-4 mb-4 animate-fade-in space-y-6">
                    <p className="text-base text-primary leading-relaxed">
                      Первая отечественная разработка, обеспечивающая совместное использование сваебойного и бурильного оборудования на одной мачте.
                    </p>

                    <div>
                      <p className="text-base font-semibold text-primary mb-3 pb-1 border-b border-gray-200">Конструкция предусматривает два ряда направляющих:</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                          <span className="text-base text-primary">Для установки молота (дизельного или гидравлического).</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                          <span className="text-base text-primary">Для установки вращателя (гидравлического или электрического).</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-base font-semibold text-primary mb-3 pb-1 border-b border-gray-200">Состав мачты МКБЭ-2</p>
                      <div className="space-y-2">
                        {mkbe2Composition.map((item, idx) => <CheckItem key={idx} text={item} />)}
                      </div>
                      <p className="text-base text-primary mt-3">Подъём и опускание молота и сваи — грузовыми лебёдками. Перемещение гидравлического вращателя — гидроцилиндром с системой полиспастов (усилие 19 тонн). По желанию заказчика — цепной механизм перемещения вращателя.</p>
                    </div>
                  </div>
                )}

                <a href="#consultation">
                  <Button className="btn-gradient text-white w-full">
                    <Icon name="MessageSquare" size={16} className="mr-2" />
                    Получить консультацию
                  </Button>
                </a>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </>
  );
};

export default MachtyMkbeHero;