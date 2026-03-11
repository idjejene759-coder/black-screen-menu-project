import Icon from "@/components/ui/icon";

interface ImageModalProps {
  image: string | null;
  onClose: () => void;
}

export const ImageModal = ({ image, onClose }: ImageModalProps) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
        onClick={onClose}
      >
        <Icon name="x" className="w-8 h-8" />
      </button>
      <img 
        src={image} 
        alt="Полноразмерное изображение"
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
