import { Star } from "lucide-react";
import StarIcon from "../icons/StarIcon";

const testimonials = [
    {
        name: "Andi Wijaya",
        role: "Pengusaha",
        text: "Golden Goose mengubah cara saya berinvestasi. Dalam 2 tahun, portofolio saya tumbuh lebih dari 35%. Sangat merekomendasikan!",
    },
    {
        name: "Sari Dewi",
        role: "Dokter Spesialis",
        text: "Sebagai profesional yang sibuk, saya butuh platform yang mudah dan terpercaya. Golden Goose adalah jawabannya.",
    },
    {
        name: "Budi Santoso",
        role: "Pensiunan BUMN",
        text: "Setelah pensiun, saya ingin dana saya bekerja. Tim Golden Goose membantu saya memilih saham yang tepat untuk passive income.",
    },
];

function TestimonialsSection() {
    return (
        <section className="relative py-24">
            <div className="divider-gold mb-24" />
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-gold">
                        Testimoni
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
                        Apa Kata <span className="text-gradient-gold">Investor Kami</span>
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-xl border border-gold/10 bg-card p-8 transition-all hover:border-gold/30 shadow-gold-bottom hover:scale-105 active:scale-100 "
                        >
                            <div className="mb-4 flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <StarIcon key={i} size={32} />
                                ))}
                            </div>
                            <p className="mb-6 text-sm italic leading-relaxed text-muted-foreground">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-sm font-bold text-primary-foreground">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{t.name}</p>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
