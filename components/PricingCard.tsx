interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
}

export function PricingCard({ name, price, description }: PricingCardProps) {
  return (
    <button
      className={`p-6 rounded-lg border transition-all flex flex-col h-full shadow-lg  border-noir/20 bg-white `}
    >
      <div className="flex-1 flex flex-col ">
        <div className="mb-4 text-center flex flex-col gap-3">
          <h3 className="text-xl mb-2">{name}</h3>
          <p className={`text-sm min-h-12 ${'text-noir/70'}`}>{description}</p>
        </div>

        <div className="text-xl mb-6 mt-auto text-center ">{price}</div>
      </div>
    </button>
  );
}
