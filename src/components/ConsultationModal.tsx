import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { EquipmentForm } from "@/components/EquipmentForm";

interface ConsultationModalProps {
  show: boolean;
  onClose: () => void;
  equipmentType: string;
  questions: Array<{
    question: string;
    options?: string[];
    subfields?: Array<{ label: string; placeholder: string }>;
    conditionalFields?: Record<string, Array<{ label: string; placeholder: string }>>;
  }>;
}

export const ConsultationModal = ({ show, onClose, equipmentType, questions }: ConsultationModalProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Получить консультацию</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-primary"
            >
              <Icon name="x" className="w-6 h-6" />
            </button>
          </div>
          <EquipmentForm 
            equipmentType={equipmentType}
            questions={questions}
            onSuccess={onClose}
          />
        </CardContent>
      </Card>
    </div>
  );
};