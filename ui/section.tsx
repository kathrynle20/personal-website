interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <div id={id}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
