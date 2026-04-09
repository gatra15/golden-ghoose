import { LineChart, Smartphone, BookOpen, Bell, PieChart, Lock } from "lucide-react";

const features = [
    {
        icon: LineChart,
        title: "Analisis Real-Time",
        desc: "Data pasar saham langsung dengan grafik interaktif dan indikator teknikal.",
    },
    {
        icon: Smartphone,
        title: "Mobile Trading",
        desc: "Trading di mana saja dengan aplikasi mobile yang responsif dan cepat.",
    },
    {
        icon: BookOpen,
        title: "Edukasi Investasi",
        desc: "Webinar, artikel, dan kursus eksklusif dari para ahli pasar modal.",
    },
    {
        icon: Bell,
        title: "Notifikasi Cerdas",
        desc: "Alert otomatis untuk peluang trading dan pergerakan harga signifikan.",
    },
    {
        icon: PieChart,
        title: "Portfolio Manager",
        desc: "Kelola dan pantau seluruh portofolio investasi Anda dalam satu dashboard.",
    },
    {
        icon: Lock,
        title: "Keamanan Berlapis",
        desc: "Enkripsi end-to-end dan autentikasi dua faktor untuk keamanan maksimal.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="relative py-24">
            <div className="divider-gold mb-24" />
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-gold">
                        Fitur & Layanan
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
                        Layanan yang <span className="text-gradient-gold">Anda Dapatkan</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Semua tools dan layanan yang Anda butuhkan untuk sukses berinvestasi.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="group relative overflow-hidden rounded-xl border border-gold/10 bg-card p-8 transition-all hover:border-gold/30 shadow-gold-bottom hover:scale-105 active:scale-100"
                        >
                            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/5 transition-transform group-hover:scale-150" />
                            <div className="relative">
                                <div className="mb-5 inline-flex rounded-lg bg-gold/10 p-3">
                                    <Icon className="h-6 w-6 text-gold" />
                                </div>
                                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                                    {title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
