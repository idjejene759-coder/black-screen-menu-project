import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useCart } from "@/components/CartContext";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { MessengerLinks } from "@/components/MessengerLinks";

export const CartButton = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, cartCount } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", { items: cart, customer: formData });
    alert("Заявка отправлена! Наш менеджер свяжется с вами в ближайшее время.");
    clearCart();
    setFormData({ name: "", phone: "", email: "", comment: "" });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          Корзина
          {cartCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-accent text-white px-2 py-0.5 text-xs">
              {cartCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-heading">Корзина заказа</SheetTitle>
          <SheetDescription>
            Оформите заявку и наш менеджер свяжется с вами
          </SheetDescription>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Icon name="ShoppingCart" size={64} className="text-primary mb-4" />
            <p className="text-primary">Корзина пуста</p>
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-primary">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Icon name="Minus" size={14} />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Icon name="Plus" size={14} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Icon name="Trash2" size={14} className="text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t">
              <h3 className="font-heading font-semibold text-lg">Данные для связи</h3>
              
              <div className="space-y-2">
                <Label htmlFor="cart-name">Имя *</Label>
                <Input
                  id="cart-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ваше имя"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cart-phone">Телефон *</Label>
                <Input
                  id="cart-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cart-email">Email</Label>
                <Input
                  id="cart-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cart-comment">Комментарий</Label>
                <Textarea
                  id="cart-comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Укажите дополнительную информацию"
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full btn-gradient text-white">
                Отправить заявку
              </Button>

              <MessengerLinks compact />
            </form>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};