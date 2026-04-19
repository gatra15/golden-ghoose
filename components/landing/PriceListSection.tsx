import { Check } from "lucide-react";

const plans = [
    {
        name: "Silver",
        price: "Rp 299.000",
        period: "/bulan",
        desc: "Cocok untuk pemula yang ingin mulai berinvestasi.",
        features: [
            "Akses platform trading dasar",
            "5 rekomendasi saham/bulan",
            "Edukasi investasi dasar",
            "Support via email",
        ],
        featured: false,
    },
    {
        name: "Gold",
        price: "Rp 799.000",
        period: "/bulan",
        desc: "Untuk investor serius yang ingin return maksimal.",
        features: [
            "Semua fitur Silver",
            "20 rekomendasi saham/bulan",
            "Analisis teknikal real-time",
            "Komunitas investor eksklusif",
            "Priority support 24/7",
            "Portfolio manager pribadi",
        ],
        featured: true,
    },
    {
        name: "Platinum",
        price: "Rp 1.499.000",
        period: "/bulan",
        desc: "Layanan premium untuk investor institusional.",
        features: [
            "Semua fitur Gold",
            "Unlimited rekomendasi saham",
            "Konsultasi 1-on-1 mingguan",
            "API akses data pasar",
            "Dedicated account manager",
            "Early access fitur baru",
        ],
        featured: false,
    },
];

function PricelistSection() {
    return (
        <section id="harga" className="relative py-24">
            <div className="divider-gold mb-24" />
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-gold">
                        Harga
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
                        Pilih Paket <span className="text-gradient-gold">Terbaik Anda</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Investasi terbaik dimulai dari memilih paket yang sesuai dengan kebutuhan Anda.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-xl border p-8 transition-all shadow-gold-bottom active:scale-100 hover:shadow-gold-bottom-lg ${plan.featured
                                ? "border-gold/40 bg-gradient-gold-subtle shadow-gold scale-105 hover:scale-110"
                                : "border-gold/10 bg-card hover:border-gold/30 hover:scale-105"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-primary-foreground">
                                    POPULER
                                </div>
                            )}
                            <h3 className="mb-1 font-heading text-2xl font-bold text-foreground">
                                {plan.name}
                            </h3>
                            <p className="mb-6 text-sm text-muted-foreground">{plan.desc}</p>
                            <div className="mb-6">
                                <span className="font-heading text-4xl font-bold text-gradient-gold">
                                    {plan.price}
                                </span>
                                <span className="text-sm text-muted-foreground">{plan.period}</span>
                            </div>
                            <ul className="mb-8 space-y-3">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#cta"
                                className={`block rounded-md py-3 text-center text-sm font-semibold transition-all hover:scale-105 hover:shadow-gold-bottom-lg active:scale-100 ${plan.featured
                                    ? "bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-90"
                                    : "border border-gold/30 text-gold hover:border-gold/60 hover:bg-gold/5"
                                    }`}
                            >
                                Pilih {plan.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricelistSection;