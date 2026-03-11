import Icon from "@/components/ui/icon";

interface MessengerLinksProps {
  compact?: boolean;
}

export const MessengerLinks = ({ compact = false }: MessengerLinksProps) => {
  return (
    <div className={`${compact ? 'pt-3' : 'pt-4'} border-t border-border/50`}>
      <p className={`font-heading font-bold text-center text-primary ${compact ? 'text-sm mb-1' : 'text-base mb-1'}`}>
        Нужен быстрый ответ?
      </p>
      <p className={`text-primary text-center ${compact ? 'text-xs mb-3' : 'text-sm mb-3'}`}>
        Напишите менеджеру напрямую в
      </p>
      <div className="flex gap-3 justify-center">
        <a
          href="https://max.ru/u/f9LHodD0cOIP8_25Pol0FgGthbuYFvPpONLlW4R8sdoUUmuprdyzEwbPSy0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg bg-primary hover:bg-primary/90"
        >
          <Icon name="MessageCircle" size={18} />
          MAX
        </a>
        <a
          href="https://t.me/kgs_ural"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg bg-accent hover:bg-accent/90"
        >
          <Icon name="Send" size={18} />
          Telegram
        </a>
      </div>
      <div className="flex items-center justify-center gap-1.5 mt-3">
        <Icon name="Clock" size={14} className="text-primary" />
        <span className={`text-primary ${compact ? 'text-xs' : 'text-sm'}`}>
          Ответим в течение 5 минут
        </span>
      </div>
    </div>
  );
};

export default MessengerLinks;