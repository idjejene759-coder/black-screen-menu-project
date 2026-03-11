import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";

const team = [
  {
    name: "Евгений Анатольевич Селезнев",
    position: "Генеральный директор",
    email: "info@kgs-ural.ru",
    description: "Руководит стратегическим развитием компании и ключевыми направлениями бизнеса"
  },
  {
    name: "Ольга Александровна Тапинюк",
    position: "Исполнительный директор",
    email: "zhirova@kgs-ural.ru",
    description: "Отвечает за операционное управление и координацию всех подразделений компании"
  },
  {
    name: "Юлия Александровна Плюхина",
    position: "Менеджер по продажам",
    email: "sales2@kgs-ural.ru",
    description: "Консультирует клиентов и подбирает оптимальные решения для проектов"
  },
  {
    name: "Анна Викторовна Семенова",
    position: "Менеджер по продажам",
    email: "sales4@kgs-ural.ru",
    description: "Консультирует клиентов и подбирает оптимальные решения для проектов"
  },
  {
    name: "Артур Фирдависович Муталлапов",
    position: "Сервисный инженер",
    email: "service@kgs-ural.ru",
    description: "Обеспечивает техническую поддержку, диагностику и ремонт оборудования"
  }
];

export const TeamAndPartners = () => {
  return (
    <>
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Наша команда
            </h2>
            <p className="text-primary text-lg max-w-2xl mx-auto">
              Профессионалы с многолетним опытом в сфере свайного оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="font-heading font-bold text-lg text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-2">
                      {member.position}
                    </p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-xs text-primary hover:text-accent transition-colors flex items-center space-x-1"
                    >
                      <Icon name="Mail" size={14} />
                      <span>{member.email}</span>
                    </a>
                  </div>
                  <p className="text-sm text-primary">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Партнёрства и сертификаты
            </h2>
            <p className="text-primary text-lg max-w-2xl mx-auto">
              Официальный дилер ведущих производителей свайного оборудования
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative aspect-[4/3] bg-white">
                <OptimizedImage
                  src="https://cdn.poehali.dev/files/5e0971fa-3d0b-4041-a860-aef1bb88b334.JPG"
                  alt="Дилерский сертификат Dongtai Juli Machinery"
                  variant="gallery"
                  className="h-full object-contain"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                    <Icon name="Award" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">Дилерский сертификат</h3>
                    <p className="text-sm text-primary mb-2">
                      Официальный дилер Dongtai Juli Machinery Manufacturing Co., Ltd
                    </p>
                    <div className="text-xs text-primary space-y-1">
                      <p>• Право продажи дизельных свайных молотов и запчастей</p>
                      <p>• Территория: вся Россия</p>
                      <p>• Действителен до: 24 июня 2027</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0">
                <Icon name="FileText" className="text-primary" size={48} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading font-semibold text-xl mb-2">
                  Полный пакет документов
                </h3>
                <p className="text-primary mb-4">
                  Предоставляем все необходимые сертификаты, декларации соответствия, 
                  паспорта на оборудование и инструкции на русском языке. 
                  Помогаем с таможенным оформлением.
                </p>
                <Button className="btn-gradient text-white">
                  Запросить документы
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};