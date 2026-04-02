interface SectionFolioProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionFolio({ number, title, subtitle }: SectionFolioProps) {
  return (
    <div className="flex items-end gap-6 mb-12">
      <span className="folio">{number}</span>
      <div className="pb-2">
        <p className="label mb-1">{subtitle}</p>
        <h2 className="font-[family-name:var(--font-noto-serif-jp)]">{title}</h2>
      </div>
    </div>
  );
}
