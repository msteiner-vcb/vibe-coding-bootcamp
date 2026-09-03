export default function BootcampFooter() {
  const adresse = process.env.NEXT_PUBLIC_ADRESSE;

  if (!adresse) return;

  return (
    <footer className="w-full border-t border-[color:var(--color-terminal-border)] bg-[color:var(--color-terminal-panel)]">
      <div className="max-w-3xl mx-auto py-6 px-6 text-left text-sm">
        <p className="text-[color:var(--color-terminal-dim)]">
          <span className="text-[color:var(--color-terminal-green)]">$</span> cat impressum.txt
        </p>
        <p className="mt-2 text-[color:var(--color-terminal-text)]">{adresse}</p>
      </div>
    </footer>
  );
}
