export default function ShimmerQuote({ text }: { text: string }) {
  return (
    <div className="w-full max-w-4xl">
      <div className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot terminal-dot--red" />
          <span className="terminal-dot terminal-dot--yellow" />
          <span className="terminal-dot terminal-dot--green" />
          <span className="terminal-titlebar-label">bash — ~/vibe-coding-bootcamp</span>
        </div>

        <div className="px-6 py-10 md:py-14 text-left">
          <p className="text-sm md:text-base text-[color:var(--color-terminal-dim)]">
            <span className="text-[color:var(--color-terminal-green)]">$</span> echo $NEXT_PUBLIC_MOTTO
          </p>

          <p className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight shimmer-text">
            &bdquo;{text}&ldquo;
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
