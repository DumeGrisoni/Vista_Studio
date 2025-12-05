interface BenefitCardProps {
  title: string;
  description1: string;
  description2: string;
}

export function BenefitCard({
  title,
  description1,
  description2,
}: BenefitCardProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl md:text-left text-center">{title}</h3>
      <div className="space-y-2 md:text-left text-center">
        <p className="text-noir/70 leading-relaxed">{description1}</p>
        <p className="text-noir/70 leading-relaxed">{description2}</p>
      </div>
    </div>
  );
}
