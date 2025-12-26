interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h2 className="text-xs uppercase tracking-widest text-text-tertiary mb-6 font-medium">
      {title}
    </h2>
  );
};

export default SectionHeader;
