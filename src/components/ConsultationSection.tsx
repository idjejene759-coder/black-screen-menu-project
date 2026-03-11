import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface ConsultationSectionProps {
  reversed?: boolean;
}

const ConsultationSection = ({ reversed = false }: ConsultationSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-3 md:mb-4">
              Получите консультацию
            </h2>
            <p className="text-primary text-base md:text-lg italic">
              Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className={`p-6 md:p-8 border border-border ${reversed ? 'md:order-2' : ''}`}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-semibold mb-2 block text-primary">
                    Ваше имя<span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-primary">
                    Телефон<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-primary">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    required
                    className="border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block text-primary">
                    Комментарий
                  </label>
                  <Textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder=""
                    rows={4}
                    className="border-border"
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="privacy-consultation" className="mt-1" />
                  <label
                    htmlFor="privacy-consultation"
                    className="text-sm text-primary leading-relaxed cursor-pointer"
                  >
                    Я согласен на обработку персональных данных в соответствии с{" "}
                    <a href="#" className="text-primary hover:text-accent underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>
                <Button type="submit" className="w-full btn-gradient-reverse text-white uppercase tracking-wider font-bold">
                  Отправить заявку
                </Button>
              </form>
            </Card>

            <div className={`flex flex-col gap-4 md:gap-5 ${reversed ? 'md:order-1' : ''}`}>
              <Card className="p-5 md:p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2 text-primary">Телефоны</h3>
                    <p className="text-primary text-sm mb-1">
                      <a href="tel:88006007465" className="hover:text-accent transition-colors">8 (800) 600-74-65</a> — бесплатно
                    </p>
                    <p className="text-primary text-sm">
                      <a href="tel:+73433467475" className="hover:text-accent transition-colors">+7 (343) 346-74-75</a> — офис
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 md:p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2 text-primary">Email</h3>
                    <p className="text-primary text-sm mb-1">
                      <a href="mailto:info@kgs-ural.ru" className="hover:text-accent transition-colors">info@kgs-ural.ru</a>
                    </p>
                    <p className="text-primary text-sm">
                      <a href="mailto:service@kgs-ural.ru" className="hover:text-accent transition-colors">service@kgs-ural.ru</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 md:p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2 text-primary">Адрес офиса</h3>
                    <p className="text-primary text-sm mb-1">
                      г. Екатеринбург, ул. 40-летия Комсомола, 38/Л, офис 503
                    </p>
                    <p className="text-primary text-sm">
                      Пн–Пт: 09:00 — 18:00
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 md:p-6 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Share2" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold mb-2 text-primary">Мы в социальных сетях</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <a href="https://rutube.ru/channel/37307143/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-colors" title="RuTube">
                        <Icon name="Video" className="text-primary" size={18} />
                      </a>
                      <a href="https://vk.com/club187384782" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-colors" title="ВКонтакте">
                        <Icon name="Share2" className="text-primary" size={18} />
                      </a>
                      <a href="https://t.me/kgs_ural" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-colors" title="Telegram">
                        <Icon name="Send" className="text-primary" size={18} />
                      </a>
                      <a href="https://max.ru/id6670440671_biz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-colors" title="MAX">
                        <Icon name="MessageCircle" className="text-primary" size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;