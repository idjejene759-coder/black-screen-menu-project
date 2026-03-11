import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const projectingConsiderations = [
  "Рабочие задачи и условия эксплуатации",
  "Характеристики базовой машины",
  "Расчёт нагрузок",
  "Технические ограничения",
  "Промышленные и экологические стандарты"
];

const projectingResults = [
  "Оборудование с высокой эффективностью",
  "Оптимальные затраты на производство и эксплуатацию",
  "Надёжность и безопасность",
  "Точная интеграция с базовой машиной"
];

const deliverySteps = [
  {
    number: "1",
    title: "Приём и проверка оборудования у завода-изготовителя",
    items: [
      "Контроль комплектации",
      "Проверка соответствия параметрам",
      "Фото- и видеоотчёты по запросу"
    ]
  },
  {
    number: "2",
    title: "Подготовка документации",
    items: [
      "Формирование полного пакета документов",
      "Оформление бумаг для прохождения таможни",
      "Проверка корректности всех спецификаций"
    ]
  },
  {
    number: "3",
    title: "Отгрузка и таможенное оформление",
    items: [
      "Загрузка оборудования на транспорт",
      "Сопровождение груза на всех этапах",
      "Организация быстрой и правильной таможенной очистки"
    ]
  },
  {
    number: "4",
    title: "Доставка до региона заказчика",
    items: [
      "Автотранспорт",
      "Железнодорожная доставка",
      "Авиадоставка",
      "Комбинированные логистические схемы"
    ],
    note: "Сроки поставки рассчитываются индивидуально"
  },
  {
    number: "5",
    title: "Контроль и безопасность груза",
    items: [
      "Страхование груза",
      "Сопровождение груза по всему маршруту",
      "Обеспечение сохранности груза",
      "Постоянное информирование клиента о статусе перевозки"
    ]
  },
  {
    number: "6",
    title: "Уведомление о прибытии",
    items: [
      "Сообщаем о готовности к выгрузке заранее и координируем процесс"
    ]
  }
];

export const EngineeringAndDelivery = () => {
  return (
    <>
      <section id="engineering" className="py-10 md:py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/30">
              Проектирование
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Проектирование бурового и свайного оборудования
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-6">
                  Комплексное проектирование оборудования под ваши задачи
                </h3>
                <div className="prose prose-lg max-w-none text-primary mb-8">
                  <p>
                    Проектирование начинается с формирования технического задания на основе опросного листа.
                  </p>
                  <p>Затем создаётся технический проект, учитывающий:</p>
                </div>

                <div className="space-y-3 mb-8">
                  {projectingConsiderations.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 flex items-start space-x-3">
                        <Icon name="FileText" size={20} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-primary">{item}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-lg md:text-xl font-heading font-semibold text-primary mb-4">Результат проектирования:</h4>
                  <div className="space-y-3">
                    {projectingResults.map((result, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                        <CardContent className="p-4 flex items-start space-x-3">
                          <Icon name="Award" size={20} className="text-primary flex-shrink-0 mt-1" />
                          <span className="text-primary font-medium">{result}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/5bdd34b4-6fba-4783-85d8-e4801f75ad94.jpeg"
                  alt="Буровая установка КГС в работе"
                  variant="content"
                />
              </div>
            </div>

            <div className="space-y-8 mt-12">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
                <CardContent className="p-8">
                  <p className="text-primary text-lg leading-relaxed">
                    КоперГруппСервис — это инженерная экспертиза, современное производство и практический опыт, позволяющие создавать универсальное, надёжное и экономически выгодное оборудование для фундаментного строения
                  </p>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
              Доставка
            </Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
              Доставка оборудования
            </h2>
            <p className="text-primary text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
              КоперГруппСервис обеспечивает покупателю быструю, надёжную и безопасную доставку оборудования и спецтехники — от проверки товара у производителя до выгрузки на объекте заказчика.
            </p>

            <h3 className="text-xl md:text-2xl font-heading font-semibold text-primary mb-8">
              Как мы организуем доставку:
            </h3>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="space-y-6">
                {deliverySteps.map((step, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg md:text-xl font-heading font-semibold text-primary mb-4">{step.title}</h4>
                          <ul className="space-y-2">
                            {step.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start space-x-2">
                                <Icon name="ChevronRight" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-primary">{item}</span>
                              </li>
                            ))}
                          </ul>
                          {step.note && (
                            <p className="mt-3 text-sm text-primary italic">* {step.note}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-col justify-center space-y-6 sticky top-24">
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/Доставка 1.png"
                  alt="Доставка оборудования КГС - проверка на заводе"
                  variant="content"
                />
                <OptimizedImage
                  src="https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/bucket/14d7e65a-e0bf-4141-aee9-0e4afbda4cd1.png"
                  alt="Молот DD-35 в контейнере - доставка оборудования КГС"
                  variant="content"
                />

              </div>
            </div>

            <div className="max-w-4xl mt-12 space-y-4">
              <p className="text-primary text-base md:text-lg leading-relaxed">
                Благодаря многолетнему опыту работы с оборудованием для свайного фундаментостроения и надежным партнерам, КоперГруппСервис обеспечивает своим клиентам быстрые и надёжные поставки техники.
              </p>
              <p className="text-primary text-base md:text-lg leading-relaxed">
                Оптимизированные маршруты, отработанные процессы и прямое взаимодействие с производителями позволяют организовать доставку в минимальные сроки и на выгодных условиях.
              </p>
              <p className="text-primary text-base md:text-lg leading-relaxed">
                Мы полностью берём на себя все этапы — от проверки оборудования и подготовки документов до таможенного сопровождения, транспортировки и обеспечения сохранности груза.
              </p>
              <p className="text-primary text-base md:text-lg leading-relaxed font-semibold">
                КоперГруппСервис — когда важны точность, надёжность и ответственность за результат.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};