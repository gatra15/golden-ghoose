import { ArrowRight } from "lucide-react";

export default function CtaSection() {
    return (
        <section id="cta" className="relative py-24">
            <div className="divider-gold mb-24" />
            <div className="container mx-auto px-6 ">
                <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-gold-subtle p-12 text-center md:p-20 shadow-gold-bottom">
                    <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-gold/5 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-gold/5 blur-3xl" />

                    <div className="relative">
                        <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
                            Siap Memulai <span className="text-gradient-gold">Perjalanan Investasi</span> Anda?
                        </h2>
                        <p className="mx-auto mb-10 max-w-xl text-muted-foreground">
                            Bergabung dengan ribuan investor cerdas yang telah mempercayakan portofolio mereka kepada Golden Goose.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-10 py-4 text-base font-semibold text-primary-foreground shadow-gold shadow-gold-bottom transition-all hover:opacity-90 hover:shadow-gold-bottom-lg hover:scale-105 hover:shadow-gold-bottom-lg active:scale-100"
                        >
                            Daftar Sekarang — Gratis
                            <ArrowRight className="h-5 w-5" />
                        </a>
                        <p className="mt-4 text-xs text-muted-foreground">
                            Tidak diperlukan kartu kredit. Mulai dengan akun gratis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
