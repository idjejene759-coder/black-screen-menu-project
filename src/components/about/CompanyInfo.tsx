import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const values = [
  {
    icon: "ShieldCheck",
    title: "Гарантия качества и соблюдение сроков",
    description: "Мы берём на себя ответственность за контроль выполнения заказа на каждом этапе — от консультации в подборе техники до её ввода в эксплуатацию"
  },
  {
    icon: "DollarSign",
    title: "Оптимальные цены на оборудование",
    description: "Прямые контракты и дилерские соглашения с ведущими производителями позволяют предложить самые выгодные цены"
  },
  {
    icon: "Users",
    title: "Индивидуальный подход к клиенту",
    description: "Главный принцип нашей работы — индивидуальный подход к каждому клиенту"
  },
  {
    icon: "Package",
    title: "Широкий ассортимент оборудования",
    description: "Обширный выбор техники и комплектующих позволяет подобрать оптимальное решение под любые задачи и сократить сроки поставки"
  },
  {
    icon: "Wrench",
    title: "Техническое обслуживание оборудования",
    description: "Техническое обслуживание и ремонт свайных машин, буровых установок, ударных молотов, вибропогружателей, обсадных столов и навесного оборудования от ведущих производителей"
  },
  {
    icon: "Award",
    title: "Постпродажный сервис",
    description: "Постгарантийное обслуживание и техническая поддержка на всём сроке эксплуатации оборудования"
  }
];

const tasks = [
  "Приём и обработка заявок, производство",
  "Таможенная очистка и логистика",
  "Подбор техники и запчастей",
  "Шефмонтаж и запуск оборудования",
  "Гарантийное и постгарантийное обслуживание"
];

export const CompanyInfo = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-white to-muted/30">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
              О компании КоперГруппСервис
            </h2>
            <div className="space-y-4 text-primary leading-relaxed">
              <p>
                <strong className="text-foreground">КоперГруппСервис</strong> специализируется на производстве и поставках оборудования для забивки свай и лидерного бурения. Мы изготавливаем копровые мачты кранового и экскаваторного типа, а также производим расходные и запасные части: свайные наголовники для гидравлических и дизельных молотов, захваты молота по направляющим, крепления, шнеки и другие металлоконструкции по вашим чертежам.
              </p>
              <p>
                Организуем поставку высококачественного импортного оборудования из стран Азии и Турции, сотрудничая с известными мировыми производителями. За годы работы нам удалось выстроить долгосрочные и надежные партнерские отношения с лидерами рынка.
              </p>
              <p>
                Помимо поставок техники, КГС предлагает полный спектр профессиональных услуг:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 ml-6">
                <li className="flex items-start space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Техническое обслуживание и профилактику оборудования</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Шефмонтаж на объекте</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>Диагностику и ремонт сваебойного и бурового оборудования, как импортного, так и отечественного производства</span>
                </li>
              </ul>
              <p>
                Также мы поставляем запасные части для молотов, сваебойных машин, вибропогружателей, бурового оборудования и сваевдавлевающих машин — всё для того, чтобы ваша техника работала без простоев и максимально эффективно.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-lg mb-6 border-l-4 border-accent">
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                Миссия компании
              </h2>
              <p className="text-primary text-lg leading-relaxed">
                Подбирать и поставлять оптимальное оборудование и запчасти для надёжного, эффективного и своевременного решения проектов наших клиентов.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-3xl font-heading font-bold mb-4 text-primary">
                Цель компании
              </h3>
              <p className="text-primary text-lg leading-relaxed">
                Обеспечивать рынки России и стран СНГ высококачественным оборудованием для строительства свайных фундаментов по оптимальным ценам, формируя долгосрочные и взаимовыгодные отношения с клиентами.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <OptimizedImage
                src="https://cdn.poehali.dev/files/1f5915a9-5020-4a3c-8149-d748d8290557.jpeg"
                alt="Производственный цех КГС"
                variant="content"
                className="h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-l-4 border-accent mb-16">
          <h3 className="text-3xl font-heading font-bold mb-4 text-center text-primary">
            Задачи компании
          </h3>
          <p className="text-primary mb-6 text-center">
            Сопровождаем каждый этап работы по поставкам оборудования заказчику:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <span className="text-primary">{task}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">
            Наши ценности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={value.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-primary">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};