interface ProcessStepProps {
  number: string;
  title: string;
  description1: string;
  description2?: string;
}

export function ProcessStep({
  number,
  title,
  description1,
  description2,
}: ProcessStepProps) {
  return (
    <div className="space-y-4 text-center md:text-left ">
      <div className="text-4xl text-noir">{number}</div>
      <h3 className="text-2xl">{title}</h3>
      <div className="space-y-2">
        <p className="text-noir/70 leading-relaxed">{description1}</p>
        {description2 && (
          <p className="text-noir/70 leading-relaxed">{description2}</p>
        )}
      </div>
    </div>
  );
}
