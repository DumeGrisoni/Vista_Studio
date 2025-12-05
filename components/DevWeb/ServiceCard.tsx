interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="space-y-4 md:text-left text-center max-w-[200px] mx-auto">
      <div className="text-noir flex justify-center md:justify-start">
        {icon}
      </div>
      <h3 className="text-xl">{title}</h3>
      <p className="text-noir/70 leading-relaxed">{description}</p>
    </div>
  );
}
