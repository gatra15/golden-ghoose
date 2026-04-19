import { Shield, TrendingUp, Users, Award, Headphones, BarChart3 } from "lucide-react";

const reasons = [
    {
        icon: Shield,
        title: "Keamanan Terjamin",
        desc: "Dana investasi Anda dilindungi oleh regulasi ketat dan sistem keamanan berlapis.",
    },
    {
        icon: TrendingUp,
        title: "Analisis Profesional",
        desc: "Tim analis berpengalaman memberikan rekomendasi saham terbaik untuk portofolio Anda.",
    },
    {
        icon: Users,
        title: "Komunitas Eksklusif",
        desc: "Bergabung dengan komunitas investor elit untuk berbagi insight dan strategi.",
    },
    {
        icon: Award,
        title: "Track Record Terbukti",
        desc: "Lebih dari 5 tahun konsisten memberikan return di atas rata-rata pasar.",
    },
    {
        icon: Headphones,
        title: "Dukungan 24/7",
        desc: "Tim support kami siap membantu Anda kapan saja, di mana saja.",
    },
    {
        icon: BarChart3,
        title: "Tools Canggih",
        desc: "Akses ke platform trading dengan fitur analisis teknikal & fundamental terdepan.",
    },
];

function WhyChooseSection() {
    return (
        <section id="layanan" className="relative py-24">
            <div className="divider-gold mb-24" />
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-gold">
                        Mengapa Kami
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
                        Kenapa Pilih <span className="text-gradient-gold">Golden Goose</span>?
                    </h2>
                    <p className="text-muted-foreground">
                        Kami menggabungkan teknologi terkini dengan keahlian investasi untuk memberikan pengalaman terbaik.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {reasons.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="group rounded-xl border border-gold/10 bg-card p-8 shadow-gold-bottom transition-all hover:border-gold/30 hover:scale-105 active:scale-100"
                        >
                            <div className="mb-5 inline-flex rounded-lg bg-gold/10 p-3">
                                <Icon className="h-6 w-6 text-gold" />
                            </div>
                            <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
