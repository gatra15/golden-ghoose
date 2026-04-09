import heroBg from "@/public/hero-bg.jpg";
import { TrendingUp, Shield, BarChart3 } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${heroBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

            <div className="container relative z-10 mx-auto px-6 py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                        <span className="text-xs font-medium text-gold">
                            Trusted by 10,000+ Investors
                        </span>
                    </div>

                    <h1 className="mb-6 font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                        Investasi Cerdas,{" "}
                        <span className="text-gradient-gold">Kekayaan Abadi</span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                        Golden Ghoose Trade & Invest hadir untuk membimbing Anda meraih
                        kebebasan finansial melalui investasi saham yang terukur, aman, dan
                        menguntungkan.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="#cta"
                            className="rounded-md bg-gradient-gold px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:opacity-95 hover:shadow-gold-bottom-lg active:scale-100 shadow-gold-bottom"
                        >
                            Mulai Sekarang
                        </a>
                        <a
                            href="#layanan"
                            className="rounded-md border border-gold/30 px-8 py-3.5 text-base font-semibold text-gold transition-all hover:scale-105 hover:opacity-95 hover:shadow-gold-bottom-lg active:scale-100 shadow-gold-bottom"
                        >
                            Pelajari Lebih Lanjut
                        </a>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {[
                            { icon: TrendingUp, label: "Return Rata-rata", value: "18.5% / Tahun" },
                            { icon: Shield, label: "Dana Terproteksi", value: "100% Aman" },
                            { icon: BarChart3, label: "Portofolio Aktif", value: "500+ Saham" },
                        ].map(({ icon: Icon, label, value }) => (
                            <div
                                key={label}
                                className="rounded-lg border border-gold/10 bg-surface-elevated/50 p-5 backdrop-blur-sm shadow-gold-bottom hover:scale-105 active:scale-100 transition-all cursor-default"
                            >
                                <Icon className="mx-auto mb-2 h-6 w-6 text-gold" />
                                <p className="text-2xl font-bold text-foreground">{value}</p>
                                <p className="text-sm text-muted-foreground">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};