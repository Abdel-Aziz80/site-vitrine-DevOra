export default function DevOraAssistant() {
  return (
    <div className="devora-reveal devora-reveal-delay-3 pointer-events-none relative mt-7 max-w-md rounded-3xl border border-white/14 bg-white/[0.075] p-4 shadow-2xl shadow-[#22D3EE]/10 backdrop-blur-xl">
      <div className="absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-[#22D3EE]/70 to-transparent" />
      <div className="flex items-center gap-4">
        <div className="devora-ai-orb relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#22D3EE] via-[#7C3AED] to-[#F725D9]">
          <div className="absolute inset-1 rounded-[1rem] bg-[#061122]/82" />
          <div className="relative h-5 w-5 rounded-full border border-[#A5F3FC]/80 bg-[#22D3EE]/25 shadow-[0_0_22px_rgba(34,211,238,0.65)]" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
            Assistant DEVORA
          </p>
          <p className="mt-1 text-sm font-medium leading-6 text-white/78">
            Salut, je construis des interfaces intelligentes.
          </p>
        </div>
      </div>
    </div>
  );
}
