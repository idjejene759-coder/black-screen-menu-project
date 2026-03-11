import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export const SpecialOfferBanner = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <Card className="bg-white border-2 border-accent/30 shadow-2xl max-w-5xl mx-auto overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <a 
                    href="https://kgs-special-offer.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Badge className="bg-accent/20 text-accent border-accent/50 text-base md:text-lg px-4 py-2 font-bold">
                      Специальное предложение
                    </Badge>
                  </a>
                </div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-primary mb-4 leading-tight">
                  Оборудование в наличии
                </h3>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Icon name="BadgePercent" className="text-accent flex-shrink-0" size={18} />
                    <span className="text-primary font-medium">Выгодные условия</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" className="text-accent flex-shrink-0" size={18} />
                    <span className="text-primary font-medium">Быстрая отгрузка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Truck" className="text-accent flex-shrink-0" size={18} />
                    <span className="text-primary font-medium">Доставка по РФ и СНГ</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto">
                <a 
                  href="https://kgs-special-offer.ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <Button 
                    size="lg" 
                    className="btn-gradient text-white font-bold text-lg w-full md:w-auto shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="ExternalLink" className="mr-2" size={20} />
                    Подробнее
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};