import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface HammerTypeCardProps {
  title: string;
  description: string[];
  advantagesTitle: string;
  advantages: string[];
  linkTo: string;
  linkText: string;
}

export const HammerTypeCard = ({
  title,
  description,
  advantagesTitle,
  advantages,
  linkTo,
  linkText
}: HammerTypeCardProps) => {
  return (
    <Card className="border-primary/20">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {title}
        </h2>
        {description.map((paragraph, index) => (
          <p key={index} className="text-primary mb-4 leading-relaxed">
            {paragraph}
          </p>
        ))}

        <h3 className="text-xl font-semibold text-primary mb-4">
          {advantagesTitle}
        </h3>
        <ul className="space-y-3 mb-6">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex items-start">
              <Icon name="check-circle" className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-primary">{advantage}</span>
            </li>
          ))}
        </ul>

        <Link to={linkTo}>
          <Button className="w-full sm:w-auto">
            {linkText}
            <Icon name="arrow-right" className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};