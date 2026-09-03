export default function Welcome() {
  return (
    <div className="w-full max-w-2xl">
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot terminal-dot--red" />
          <span className="terminal-dot terminal-dot--yellow" />
          <span className="terminal-dot terminal-dot--green" />
          <span className="terminal-titlebar-label">bash — ~/vibe-coding-bootcamp</span>
        </div>

        <div className="px-6 py-8 text-left text-sm md:text-base leading-relaxed">
          <p className="text-[color:var(--color-terminal-dim)]">
            <span className="text-[color:var(--color-terminal-green)]">$</span> whoami
          </p>
          <h1 className="mt-1 text-3xl md:text-5xl font-bold tracking-tight text-white">
            Hallo Du
          </h1>

          <p className="mt-6 text-[color:var(--color-terminal-dim)]">
            <span className="text-[color:var(--color-terminal-green)]">$</span> echo $STATUS
          </p>
          <p className="mt-1 text-lg md:text-xl text-[color:var(--color-terminal-text)]">
            Willkommen beim Kurs
            <span className="terminal-cursor" />
          </p>

          <div className="mt-8">
            <span className="stamp">✓ Works on my machine</span>
          </div>
        </div>
      </div>
    </div>
  );
}
