import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

interface EquipmentFormProps {
  categoryTitle?: string;
  categoryId?: string;
  questions?: unknown[];
  equipmentType?: string;
}

export const EquipmentForm = ({ categoryTitle, categoryId }: EquipmentFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://functions.poehali.dev/42cc9223-1a3f-4324-bb49-552f02311b0f', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: categoryTitle,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        })
      });
      if (!response.ok) throw new Error('Ошибка отправки');
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '' });
      setTimeout(() => { setSubmitStatus('idle'); setIsOpen(false); }, 3000);
    } catch (error) {
      console.error('Ошибка отправки заявки:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => { setSubmitStatus('idle'); }, 3000);
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="w-full btn-gradient text-white">
        <Icon name="MessageCircle" className="mr-2" size={18} />
        Получить консультацию
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[440px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading font-bold text-primary">
              Получить консультацию
            </DialogTitle>
          </DialogHeader>

          {submitStatus === 'success' ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-3">
                <Icon name="Check" className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">Заявка отправлена!</h3>
              <p className="text-primary text-sm">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : submitStatus === 'error' ? (
            <div className="text-center py-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-100 mb-3">
                <Icon name="AlertCircle" className="text-red-600" size={28} />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">Ошибка отправки</h3>
              <p className="text-primary text-sm mb-3">Попробуйте позже или свяжитесь по телефону</p>
              <Button onClick={() => setSubmitStatus('idle')} variant="outline" size="sm">
                Попробовать снова
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-primary">{categoryTitle}</p>
              <div>
                <label className="text-sm font-semibold mb-1.5 block text-primary">Ваше имя<span className="text-red-500">*</span></label>
                <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Иван Иванов" required />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block text-primary">Телефон<span className="text-red-500">*</span></label>
                <Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+7 (___) ___-__-__" required />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block text-primary">Email<span className="text-red-500">*</span></label>
                <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" required />
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id={`privacy-${categoryId}`} className="mt-1" />
                <label htmlFor={`privacy-${categoryId}`} className="text-xs text-primary leading-relaxed cursor-pointer">
                  Я согласен на обработку персональных данных в соответствии с{" "}
                  <a href="#" className="text-primary hover:text-accent underline">политикой конфиденциальности</a>
                </label>
              </div>
              <Button type="submit" className="w-full btn-gradient-reverse text-white uppercase tracking-wider font-bold" disabled={isSubmitting}>
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};