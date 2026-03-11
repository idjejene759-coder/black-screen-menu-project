import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { MessengerLinks } from "@/components/MessengerLinks";

interface ConsultationButtonProps {
  variant?: "default" | "outline" | "gradient";
  size?: "sm" | "default" | "lg";
  className?: string;
}

export const ConsultationButton = ({ variant = "default", size = "default", className = "" }: ConsultationButtonProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpen(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const buttonClass = variant === "gradient" ? "btn-gradient text-white" : "";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={size} variant={variant === "gradient" ? "default" : variant} className={`${buttonClass} ${className}`}>
          <Icon name="MessageCircle" size={18} className="mr-2" />
          Получить консультацию специалиста
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">Получить консультацию</DialogTitle>
          <DialogDescription>
            Оставьте заявку и наш специалист свяжется с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ваше имя"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Комментарий</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Опишите ваш вопрос или задачу"
              rows={4}
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="btn-gradient text-white flex-1">
              Отправить заявку
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Отмена
            </Button>
          </div>

          <MessengerLinks />
        </form>
      </DialogContent>
    </Dialog>
  );
};