import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const FloatingMessenger = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  if (isDismissed) {
    return (
      <div className="fixed bottom-6 left-6 z-[55] flex flex-col gap-3">
        <a
          href="https://max.ru/u/f9LHodD0cOIP8_25Pol0FgGthbuYFvPpONLlW4R8sdoUUmuprdyzEwbPSy0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all hover:shadow-xl"
          title="MAX"
        >
          <Icon name="MessageCircle" size={22} />
        </a>
        <a
          href="https://t.me/kgs_ural"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all hover:shadow-xl"
          title="Telegram"
        >
          <Icon name="Send" size={22} />
        </a>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-[55] animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-border/50 p-5 w-[280px] relative">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-3 right-3 text-primary hover:text-primary transition-colors"
        >
          <Icon name="X" size={18} />
        </button>

        <p className="font-heading font-bold text-primary text-sm mb-1">
          Нужен быстрый ответ?
        </p>
        <p className="text-primary text-xs mb-3">
          Напишите менеджеру напрямую в
        </p>

        <div className="flex gap-2 mb-3">
          <a
            href="https://max.ru/u/f9LHodD0cOIP8_25Pol0FgGthbuYFvPpONLlW4R8sdoUUmuprdyzEwbPSy0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white font-semibold text-xs transition-all hover:scale-105 hover:shadow-lg bg-primary hover:bg-primary/90 flex-1 justify-center"
          >
            <Icon name="MessageCircle" size={14} />
            MAX
          </a>
          <a
            href="https://t.me/kgs_ural"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white font-semibold text-xs transition-all hover:scale-105 hover:shadow-lg bg-accent hover:bg-accent/90 flex-1 justify-center"
          >
            <Icon name="Send" size={14} />
            Telegram
          </a>
        </div>

        <div className="flex items-center justify-center gap-1.5">
          <Icon name="Clock" size={12} className="text-primary" />
          <span className="text-primary text-xs">
            Ответим в течение 5 минут
          </span>
        </div>
      </div>
    </div>
  );
};

export default FloatingMessenger;