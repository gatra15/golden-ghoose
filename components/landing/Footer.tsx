export default function Footer() {
    return (
        <footer className="border-t border-gold/10 bg-card py-16">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <div className="mb-4 flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-gradient-gold" />
                            <span className="font-heading text-xl font-bold text-gradient-gold">
                                Golden Goose
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Trade & Invest — Partner terpercaya untuk perjalanan investasi saham Anda.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
                            Navigasi
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {["Beranda", "Layanan", "Harga", "FAQ"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="transition-colors hover:text-gold">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
                            Legal
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {["Kebijakan Privasi", "Syarat & Ketentuan", "Disclaimer"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="transition-colors hover:text-gold">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-widest text-gold">
                            Kontak
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>info@goldengoose.com</li>
                            <li>+62 21 1234 5678</li>
                            <li>Jakarta, Indonesia</li>
                        </ul>
                    </div>
                </div>

                <div className="divider-gold mt-12 mb-8" />

                <p className="text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Golden Goose Trade & Invest. All rights reserved.
                </p>
            </div>
        </footer>
    );
};