import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const machtCapabilities = [
  "Бурение",
  "Забивку свай"
];

const modernizationFactors = [
  "Прочность несущих конструкций",
  "Устойчивость машины под нагрузкой",
  "Мощность силовой установки",
  "Возможности гидравлической системы",
  "Совместимость с системой управления",
  "Особенности веса и баланса",
  "Условия эксплуатации",
  "Экономическая эффективность проекта"
];

const modernizationBenefits = [
  "Стоимость в несколько раз ниже, чем покупка новой техники",
  "Сохранение базовой машины в первоначальном виде",
  "Модульная конструкция всех доработок — без вмешательства в ключевые узлы",
  "Возможность полного восстановления исходной конфигурации техники"
];

export const MastsAndModernization = () => {
  return (
    <>
      <section id="masts" className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
              Копровые мачты
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Копровые мачты для кранов и экскаваторов
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-6">
                  Универсальность оборудования — наш приоритет
                </h3>
                <p className="text-primary text-base md:text-lg leading-relaxed mb-4">
                  Для расширения возможностей строительной техники мы предлагаем копровые мачты для кранов и экскаваторов.
                </p>
                <p className="text-primary text-base md:text-lg leading-relaxed mb-6">
                  Устанавливая мачту на базовую машину, вы получаете оборудование, способное выполнять:
                </p>

                <div className="space-y-3 mb-8">
                  {machtCapabilities.map((capability, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 flex items-center space-x-3">
                        <Icon name="CheckCircle2" size={24} className="text-accent flex-shrink-0" />
                        <span className="text-primary font-medium">{capability}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30">
                  <CardContent className="p-6">
                    <p className="text-primary text-lg">
                      Это позволяет использовать уже имеющуюся технику в новых задачах без покупки нового оборудования, снижая затраты заказчика.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center items-center">
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/42a4a533-f2e0-42a5-97b3-c47368e3c3fd.jpeg"
                  alt="Производство копровых мачт КГС"
                  variant="content"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modernization" className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
              Модернизация
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
              Модернизация техники для забивки свай
            </h2>
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-6">
              Оптимальные технические решения по модернизации
            </h3>

            <p className="text-primary text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
              КоперГруппСервис разрабатывает и реализует проекты по модернизации кранов и экскаваторов, с помощью которых, простаивающие машины переоборудуются в полноценные сваебойные или буровые установки.
            </p>

            <h4 className="text-lg md:text-xl font-heading font-semibold text-primary mb-4">При модернизации учитываем:</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {modernizationFactors.map((factor, index) => (
                <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Icon name="Settings" size={20} className="text-accent flex-shrink-0" />
                    <span className="text-primary">{factor}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h4 className="text-lg md:text-xl font-heading font-semibold text-primary mb-4">Преимущества модернизации:</h4>
            <div className="space-y-3">
              {modernizationBenefits.map((benefit, index) => (
                <Card key={index} className="border border-border hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <Icon name="CheckCircle2" size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-primary">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};