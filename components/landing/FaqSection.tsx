import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        q: "Apa itu Golden Goose Trade & Invest?",
        a: "Golden Goose adalah platform investasi saham yang menyediakan rekomendasi, analisis, dan tools trading untuk membantu Anda mencapai tujuan finansial.",
    },
    {
        q: "Apakah dana saya aman?",
        a: "Ya, kami bekerja sama dengan sekuritas terdaftar OJK. Dana Anda disimpan di rekening terpisah (segregated account) dan dilindungi oleh regulasi yang berlaku.",
    },
    {
        q: "Berapa minimal investasi untuk memulai?",
        a: "Anda bisa memulai investasi saham mulai dari Rp 100.000. Tidak ada batas minimum untuk mendaftar di platform kami.",
    },
    {
        q: "Bagaimana cara mendaftar?",
        a: "Klik tombol 'Daftar Sekarang', isi formulir pendaftaran, verifikasi identitas, dan Anda siap mulai berinvestasi dalam waktu kurang dari 15 menit.",
    },
    {
        q: "Apakah ada biaya tersembunyi?",
        a: "Tidak ada biaya tersembunyi. Semua biaya transparan dan tertera jelas di halaman harga kami. Anda hanya membayar sesuai paket yang dipilih.",
    },
    {
        q: "Bisakah saya membatalkan langganan kapan saja?",
        a: "Ya, Anda dapat membatalkan langganan kapan saja tanpa penalti. Akses akan tetap aktif hingga akhir periode billing.",
    },
];

export default function FaqSection() {
    return (
        <section id="faq" className="relative py-24">
            <div className="divider-gold mb-24" />
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-gold">
                        FAQ
                    </span>
                    <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
                        Pertanyaan yang <span className="text-gradient-gold">Sering Ditanyakan</span>
                    </h2>
                </div>

                <div className="mx-auto max-w-3xl shadow-gold-bottom">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="rounded-xl border border-gold/10 bg-card px-6 data-[state=open]:border-gold/30 hover:scale-105 active:scale-100 shadow-gold-bottom transition-all"
                            >
                                <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold text-foreground hover:text-gold hover:no-underline">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

