interface HeaderProps {
  name?: string;
  role?: string;
  summary?: string;
}

const Header = ({ name, role, summary }: HeaderProps) => {
  if (!name) return null;

  return (
    <header className="pt-16 pb-section border-b border-border">
      <div className="container">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
          {name}
        </h1>
        {role && (
          <p className="text-text-secondary text-sm mb-4">{role}</p>
        )}
        {summary && (
          <p className="text-foreground/80 max-w-xl leading-relaxed text-sm">
            {summary}
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
