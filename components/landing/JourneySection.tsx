const steps = [
    {
        year: "2019",
        title: "Awal Mula",
        desc: "Golden Ghoose didirikan oleh sekelompok profesional keuangan dengan visi membuka akses investasi premium untuk semua.",
    },
    {
        year: "2020",
        title: "Pertumbuhan Pesat",
        desc: "Meraih 1.000 investor aktif dan mulai menyediakan layanan analisis saham real-time.",
    },
    {
        year: "2022",
        title: "Ekspansi Layanan",
        desc: "Meluncurkan platform trading proprietary dan komunitas investor eksklusif.",
    },
    {
        year: "2024",
        title: "Pemimpin Pasar",
        desc: "10.000+ investor aktif, 500+ saham terpantau, dan rata-rata return 18.5% per tahun.",
    },
];

function JourneySection() {
    return (
        <section id="perjalanan" className="relative py-24">
            <div className="divider-gold mb-24" />
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-gold">
                        Perjalanan Kami
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
                        Perjalanan Investasi{" "}
                        <span className="text-gradient-gold">Golden Ghoose</span>
                    </h2>
                </div>

                <div className="relative mx-auto max-w-3xl">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:left-1/2" />

                    {steps.map((step, i) => (
                        <div
                            key={step.year}
                            className={`relative mb-12 flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            <div className="flex w-full items-start gap-6 md:w-1/2 md:px-8 ">
                                <div className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-gold md:hidden">
                                    <div className="h-3 w-3 rounded-full bg-primary-foreground" />
                                </div>
                                <div className="rounded-xl border border-gold/10 bg-card p-6 transition-all hover:border-gold/30 shadow-gold-bottom hover:scale-105 active:scale-100 cursor-default">
                                    <span className="mb-2 inline-block font-heading text-2xl font-bold text-gold">
                                        {step.year}
                                    </span>
                                    <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute left-1/2 top-4 z-10 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-gold shadow-gold md:flex">
                                <div className="h-3 w-3 rounded-full bg-primary-foreground" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
