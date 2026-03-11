import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Жилой комплекс «Новая высота», Москва",
    description: "Поставка и шефмонтаж 3 сваебойных молотов для забивки свай под многоэтажный ЖК",
    equipment: "Дизельные молоты DZJ-90",
    duration: "2 месяца",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
  },
  {
    id: 2,
    title: "Завод по производству металлоконструкций, Екатеринбург",
    description: "Комплексная поставка оборудования: буровая установка и копровые мачты",
    equipment: "Буровая установка MD-750, 2 копровые мачты",
    duration: "3 месяца",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg"
  },
  {
    id: 3,
    title: "Мост через реку Кама, Пермский край",
    description: "Поставка вибропогружателей для монтажа свайных опор моста",
    equipment: "Вибропогружатели ICE 44RF",
    duration: "4 месяца",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
  },
  {
    id: 4,
    title: "Торговый центр, Санкт-Петербург",
    description: "Шефмонтаж сваебойного оборудования на крупном объекте коммерческой недвижимости",
    equipment: "Гидравлический молот BSP CX-500",
    duration: "1.5 месяца",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/f641c2ee-f411-4bee-b2e9-96127d7fee2b.jpg"
  },
  {
    id: 5,
    title: "Промышленный парк, Новосибирск",
    description: "Изготовление нестандартных металлоконструкций на собственном производстве",
    equipment: "Копровая мачта, наголовники, захваты",
    duration: "2 месяца",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/d0357e51-fc69-4bd7-9feb-b9f4924208f0.jpg"
  },
  {
    id: 6,
    title: "Нефтеперерабатывающий завод, Казахстан",
    description: "Международная поставка буровой установки с полным таможенным сопровождением",
    equipment: "Буровая установка BGS-85",
    duration: "3 месяца",
    year: "2022",
    image: "https://cdn.poehali.dev/projects/ac018ba4-20ce-4648-95d6-1d6c97ae54c8/files/409c5f64-ba5d-4fa6-ba0b-315c94eea0dc.jpg"
  }
];

interface ProductionAndProjectsProps {
  selectedProject: number | null;
  setSelectedProject: (id: number | null) => void;
}

export const ProductionAndProjects = ({ selectedProject, setSelectedProject }: ProductionAndProjectsProps) => {
  return (
    <>
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Производственный цех
            </h2>
            <p className="text-primary text-lg max-w-2xl mx-auto">
              Производственная площадка – г. Берёзовский, Свердловская область
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Icon name="Factory" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Производственные мощности</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">2 производственных цеха площадью 1000 и 1800 кв.м.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">2 станка плазменной резки с ЧПУ 2,5 × 6,0 м</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">12 сварочных постов (полуавтомат)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">Фрезерные станки с ЧПУ</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">Токарные станки с ЧПУ</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">Гибочные станки</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">Кран-балки грузоподъёмностью 5 т</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Icon name="Package" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-semibold">Склад запчастей</h3>
              </div>
              <p className="text-primary mb-6">
                На складе всегда в наличии комплектующие для поставляемого оборудования, что обеспечивает:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="Zap" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">быстрый ремонт техники</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">минимизацию простоев</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="TrendingDown" className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span className="text-primary">снижение затрат наших клиентов</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="image-card relative h-[500px]">
            <img 
              src="https://cdn.poehali.dev/files/deb19006-00e7-4d28-bcb8-fd36d27a1a5b.png"
              alt="Современное оборудование производства КГС"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Современное оборудование для качественного производства
                </h3>
                <p className="text-white/90">
                  Оснащение цеха позволяет выполнять производственные задачи любой сложности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Реализованные проекты
            </h2>
            <p className="text-primary text-lg max-w-2xl mx-auto">
              Более 60 успешно выполненных шефмонтажей по всей России и СНГ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    variant="thumbnail"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent/90 text-white border-none">
                    {project.year}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg text-primary mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-primary">
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {project.duration}
                    </span>
                    <span className="text-accent font-medium hover:underline">
                      Подробнее →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedProject && (
            <div 
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
              onClick={() => setSelectedProject(null)}
            >
              <Card 
                className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64">
                  <OptimizedImage
                    src={projects.find(p => p.id === selectedProject)?.image || ''}
                    alt={projects.find(p => p.id === selectedProject)?.title || ''}
                    variant="content"
                    className="w-full h-full object-cover"
                  />
                  <button 
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>
                <CardContent className="p-6 md:p-8">
                  <Badge className="mb-4">{projects.find(p => p.id === selectedProject)?.year}</Badge>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <p className="text-primary mb-6 leading-relaxed">
                    {projects.find(p => p.id === selectedProject)?.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2">
                      <Icon name="Package" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-medium text-primary">Оборудование:</span>
                        <p className="text-foreground">{projects.find(p => p.id === selectedProject)?.equipment}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Icon name="Clock" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-medium text-primary">Срок выполнения:</span>
                        <p className="text-foreground">{projects.find(p => p.id === selectedProject)?.duration}</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full btn-gradient text-white" asChild>
                    <Link to="/contact">Заказать аналогичный проект</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </>
  );
};