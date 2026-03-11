import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { ImageWithWatermark } from "@/components/ImageWithWatermark";

const equipment = [
  {
    id: 1,
    title: "Мачты копровые",
    image: "https://cdn.poehali.dev/files/a7621a5b-a3ac-4eea-ac25-fe435cc9b539.jpg",
    models: [
      "Мачты копровые крановые (серия МК)",
      "Мачта копрово-бурильная экскаваторного типа (серия МКБЭ, Россия)",
      "Мачта копрово-бурильная на экскаваторе (серия МКБЭ-2, Россия)",
      "Мачты копровые экскаваторные (Китай)"
    ]
  },
  {
    id: 2,
    title: "Сваебойные машины",
    image: "https://cdn.poehali.dev/files/dc56ba91-4566-419f-ad64-d9d462fcd770.png",
    models: [
      "Сваебойные установки STARKE (серия LH)",
      "Шагающие сваебойные установки Dongtai Juli (серия KLB)",
      "Полноповоротные копрово-бурильные установки (КБУРГ) на базе гусеничных экскаваторов"
    ]
  },
  {
    id: 3,
    title: "Буровые машины",
    image: "https://cdn.poehali.dev/files/d6969695-9ea3-4575-ae46-0100d7ffa85f.png",
    models: [
      "Гидравлическая буровая машина JINT (серия SH)",
      "Гидравлическая буровая машина JINT (серия SD)",
      "Горизонтальная буровая машина Dongtai Juli (серия JL)"
    ]
  },
  {
    id: 4,
    title: "Сваебойные молоты",
    image: "https://cdn.poehali.dev/files/fcde3461-5a8e-4e03-95e8-6be812d06a47.jpg",
    models: [
      "Молоты гидравлические DongHao (серия DYH)",
      "Молоты дизельные трубчатые STARKE (серия HD)",
      "Молоты дизельные трубчатые SEMW (серия D)",
      "Молоты дизельные штанговые Dongtai Juli (серия DD)",
      "Свайные наголовники"
    ]
  },
  {
    id: 5,
    title: "Вибропогружатели крановые",
    image: "https://cdn.poehali.dev/files/de50e8f1-befe-4b9f-947b-27da44f35736.png",
    models: [
      "Вибропогружатели гидравлические крановые Yongan (серия YZ)",
      "Вибропогружатели гидравлические крановые Yongan (серия YZ-VM)",
      "Вибропогружатели электрические крановые Yongan (серия DZJ)"
    ]
  },
  {
    id: 6,
    title: "Вибропогружатели экскаваторные",
    image: "https://cdn.poehali.dev/files/15229d1d-d65c-45a6-b826-53c849a41ca6.jpg",
    models: [
      "Гидравлические экскаваторные вибропогружатели с боковым зажимом (серия CS)",
      "Гидравлические экскаваторные вибропогружатели с нижним зажимом (серия S)",
      "Удлинённая стрела для экскаватора",
      "Быстросъёмное соединение (квик-каплер)"
    ]
  },
  {
    id: 7,
    title: "Сваевдавливающие установки",
    image: "https://cdn.poehali.dev/files/8274ba00-30ca-4dfc-9bbb-8ecdaf684819.png",
    models: [
      "Сваевдавливающая установка Dongtai Juli (серия YZS)"
    ]
  },
  {
    id: 8,
    title: "Сваескусыватели",
    image: "https://cdn.poehali.dev/files/c2c6ca8b-f3f3-4575-b4d8-70ed1fa7605c.png",
    models: [
      "Сваескусыватели для круглых свай",
      "Сваескусыватели для квадратных свай"
    ]
  },
  {
    id: 9,
    title: "Домкраты",
    image: "https://cdn.poehali.dev/files/ab3f1f78-2a63-452b-a488-858a9da00782.png",
    models: [
      "Домкраты для извлечения свай"
    ]
  }
];

export const HomeEquipment = () => {
  return (
    <section id="equipment" className="py-10 md:py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 md:mb-4">Наше оборудование</h2>
          <p className="text-primary text-base md:text-lg">
            Широкий ассортимент специализированной техники для свайных работ
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {equipment.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white shadow-md">
              <div className="relative aspect-square overflow-hidden bg-white">
                <ImageWithWatermark
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full object-contain group-hover:scale-105 transition-transform duration-300 ${item.id === 7 || item.id === 8 || item.id === 9 ? 'p-0' : 'p-4'}`}

                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-heading font-semibold text-lg md:text-xl mb-4">{item.title}</h3>
                <ul className="space-y-2 mb-6">
                  {item.models.map((model, idx) => (
                    <li key={idx}>
                      <a 
                        href="#contact"
                        className="text-sm md:text-base text-primary hover:text-primary flex items-start transition-colors cursor-pointer group/item"
                      >
                        <Icon name="ChevronRight" size={18} className="mr-1 mt-0.5 flex-shrink-0 text-accent/60 group-hover/item:text-accent" />
                        <span className="leading-snug group-hover/item:underline">{model}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <Link to="/catalog">
                  <Button variant="outline" className="w-full group/btn border-accent text-accent hover:bg-accent hover:text-white">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to="/catalog" className="block sm:inline-block">
            <Button size="lg" className="bg-accent hover:bg-accent/90 w-full sm:w-auto">
              Полный каталог оборудования
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};