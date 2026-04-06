interface SectionFolioProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionFolio({ number, title, subtitle }: SectionFolioProps) {
  return (
    <div className="flex items-end gap-5 mb-10">
      <span className="pixel-number">{number}</span>
      <div className="pb-1">
        {subtitle && (
          <p className="label mb-1">{subtitle}</p>
        )}
        <h2>{title}</h2>
      </div>
    </div>
  );
}
