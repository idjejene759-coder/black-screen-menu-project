import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PartImageGallery } from "@/components/PartImageGallery";
import { useCart } from "@/components/CartContext";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const parts = [
  { 
    id: 1, 
    title: "Болт стопорный DD/HD", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/1335ddfd-533e-45f5-9955-cf14d62f61e9.png",
      "https://cdn.poehali.dev/files/89f9e275-4b1e-4ba5-9dda-afb3d6e51158.jpg"
    ]
  },
  { 
    id: 2, 
    title: "Болт топливный DD/HD-35 JL", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/1603ef8e-c9d9-4874-b918-8e72dcdb0315.jpg",
      "https://cdn.poehali.dev/files/2ed0d6d1-3063-4da8-bb70-c511303bc89f.jpg"
    ]
  },
  { 
    id: 3, 
    title: "Болт топливный DD/HD-35 JW", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/7a52f301-faf0-43b2-b583-2a5a41da2fa8.jpg",
      "https://cdn.poehali.dev/files/e12c4352-ad00-47d2-8c5c-74a8b4c74a7b.png"
    ]
  },
  { 
    id: 4, 
    title: "Кривошип DD-25 JL", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/bac0fa02-8788-49b6-b230-366724bb8545.jpg",
      "https://cdn.poehali.dev/files/b9a35e42-41f7-4204-884c-ce6c0d1bb668.jpg"
    ]
  },
  { 
    id: 5, 
    title: "Насос топливный DD/HD-25", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/9cba9c0b-bb36-4152-8117-3a8e96bd57e0.jpg",
      "https://cdn.poehali.dev/files/047fdeb8-045a-409d-a44d-797cd5d7b56c.jpg"
    ]
  },
  { 
    id: 6, 
    title: "Палец ударный DD/HD-25", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/6f56cbab-dae2-4cf2-b35b-03acdc21fdf6.jpg"
    ]
  },
  { 
    id: 7, 
    title: "Ось крюка DD-35 JL", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/5cb7eef2-63d8-4020-b38a-febcbd3aac8c.jpg",
      "https://cdn.poehali.dev/files/f9e0d3ef-aa78-4731-835c-39fedfbc5fd7.jpg"
    ]
  },
  { 
    id: 8, 
    title: "Ось крюка DD-35 JW", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/be5a3b2c-61b7-417e-b511-bd52fc53a051.jpg",
      "https://cdn.poehali.dev/files/db6f3071-1e84-46a7-bee3-88c91a236fd9.jpg"
    ]
  },
  { 
    id: 9, 
    title: "Ось реверса DD/HD-25", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/8d023b43-dfc6-490c-9137-7d4dc29c0834.png",
      "https://cdn.poehali.dev/files/71d9278f-f622-4c86-a856-fcec9c72bbf7.png"
    ]
  },
  { 
    id: 10, 
    title: "Пружина скользящая JW", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/afe0c5af-b62a-4ece-85be-4d1955d259e9.jpg",
      "https://cdn.poehali.dev/files/1722d3ed-8537-4c9d-9cf7-1d178a101c5e.jpg"
    ]
  },
  { 
    id: 11, 
    title: "Ротор DD/HD-25 Dнар-52мм", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/8bffec89-b4fd-4c8a-8c90-316daf83283c.jpg",
      "https://cdn.poehali.dev/files/0a56c79f-6c16-4c58-ab4f-a6cd3c5c4790.jpg"
    ]
  },
  { 
    id: 12, 
    title: "Трубка топливная DD-25 JL", 
    description: "", 
    price: "По запросу",
    images: [
      "https://cdn.poehali.dev/files/d06c7dd9-b221-4644-a265-ccaf77398108.jpg",
      "https://cdn.poehali.dev/files/68a4133c-ac4c-415f-bf7d-28e8813abfb4.jpg",
      "https://cdn.poehali.dev/files/5ab5d4a7-af86-459d-a9e2-5df23891e267.jpg",
      "https://cdn.poehali.dev/files/14d3c48d-4bc1-4ae1-b15d-b766adf11d7a.jpg"
    ]
  },
];

export const PartsCatalog = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredParts = parts.filter(part =>
    part.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="catalog" className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
          Запчасти в наличии
        </h2>
        
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
            <Input
              type="text"
              placeholder="Поиск по названию запчасти..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {filteredParts.length === 0 ? (
          <p className="text-center text-primary text-lg py-12">
            Запчасти не найдены. Попробуйте изменить запрос.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredParts.map((part) => (
            <Card key={part.id} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
              <PartImageGallery 
                images={part.images || []} 
                alt={part.title}
              />
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl mb-3 text-primary">
                  {part.title}
                </h3>
                {part.description && (
                  <p className="text-primary mb-4 text-sm">
                    {part.description}
                  </p>
                )}
                <div className="mt-auto">
                  <p className="text-lg font-bold text-accent mb-4">
                    Цена: {part.price}
                  </p>
                  <a href="#contact">
                    <Button className="w-full btn-gradient text-white">
                      Оставить заявку
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        )}
      </div>
    </section>
  );
};