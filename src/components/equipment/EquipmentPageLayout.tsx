import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SEO } from "@/components/SEO";
import { SchemaOrg } from "@/components/SchemaOrg";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { OptimizedImage } from "@/components/OptimizedImage";
import { EquipmentForm } from "@/components/EquipmentForm";
import { EquipmentHeader } from "./EquipmentHeader";
import { EquipmentVariantsSection } from "./EquipmentVariantsSection";
import { EquipmentGallerySection } from "./EquipmentGallerySection";
import { EquipmentFooter } from "./EquipmentFooter";
import ConsultationSection from "@/components/ConsultationSection";
import { ReactNode, useState } from "react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface Variant {
  name: string;
  type?: string;
  specs: Array<{ label: string; value: string }>;
  detailedSpecs: Array<{ label: string; value: string; indent?: boolean }>;
}

interface Question {
  question: string;
  options?: string[];
  subfields?: Array<{ label: string; placeholder: string }>;
  conditionalFields?: Record<string, Array<{ label: string; placeholder: string }>>;
}

interface EquipmentPageLayoutProps {
  // SEO данные
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoCanonical: string;
  seoOgTitle: string;
  seoOgDescription: string;
  
  // Schema.org данные
  productSchema: Record<string, unknown>;
  
  // Основная информация
  currentPath: string;
  breadcrumbs: BreadcrumbItem[];
  seriesBadge: string;
  pageTitle: string;
  categoryImage: string;
  categoryImageAlt: string;
  
  // Варианты оборудования
  variants: Variant[];
  variantsSectionTitle: string;
  
  // Описание
  descriptionTitle: string;
  descriptionContent: ReactNode;
  
  // Галерея
  galleryImages: string[];
  galleryAltPrefix: string;
  
  // Форма консультации
  consultationTitle: string;
  consultationDescription: string;
  formCategoryTitle: string;
  formCategoryId: string;
  formQuestions: Question[];
}

export const EquipmentPageLayout = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  seoCanonical,
  seoOgTitle,
  seoOgDescription,
  productSchema,
  currentPath,
  breadcrumbs,
  seriesBadge,
  pageTitle,
  categoryImage,
  categoryImageAlt,
  variants,
  variantsSectionTitle,
  descriptionTitle,
  descriptionContent,
  galleryImages,
  galleryAltPrefix,
  consultationTitle,
  consultationDescription,
  formCategoryTitle,
  formCategoryId,
  formQuestions
}: EquipmentPageLayoutProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [expandedVariant, setExpandedVariant] = useState<string | null>(null);

  const handleToggleVariant = (name: string) => {
    setExpandedVariant(expandedVariant === name ? null : name);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={seoCanonical}
        ogTitle={seoOgTitle}
        ogDescription={seoOgDescription}
      />
      <SchemaOrg data={productSchema} />
      <ScrollToTop />
      
      <EquipmentHeader currentPath={currentPath} />

      <Breadcrumbs items={breadcrumbs} />

      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">
              {seriesBadge}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              {pageTitle}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="#variants" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Варианты {seriesBadge}
              </a>
              <a href="#description" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Общая информация
              </a>
              <a href="#gallery" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Фотогалерея
              </a>
              <a href="#consultation" className="px-6 py-3 btn-gradient text-white rounded-lg transition-all hover:scale-105 text-base font-medium">
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-white">
              <OptimizedImage 
                src={categoryImage}
                alt={categoryImageAlt}
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      <EquipmentVariantsSection
        variants={variants}
        expandedVariant={expandedVariant}
        onToggleVariant={handleToggleVariant}
        title={variantsSectionTitle}
      />

      <section id="description" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-xl mb-12 animate-fade-in">
              <CardContent className="p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
                  {descriptionTitle}
                </h2>
                {descriptionContent}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <EquipmentGallerySection
        galleryImages={galleryImages}
        onImageClick={setSelectedImage}
        altPrefix={galleryAltPrefix}
      />

      <ConsultationSection />

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Фото в полном размере"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <EquipmentFooter />
    </div>
  );
};