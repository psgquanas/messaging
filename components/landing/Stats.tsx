const stats = [
  { value: "256-bit", label: "Encryption standard" },
  { value: "< 50ms", label: "Average delivery time" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "0 logs", label: "Server-side message storage" },
];

export default function Stats() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <dt className="mb-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {value}
              </dt>
              <dd className="text-sm text-muted-foreground">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
