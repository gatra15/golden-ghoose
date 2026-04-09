'use client'

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const dark = saved ? saved === "dark" : prefersDark;
        setIsDark(dark);
        document.documentElement.classList.toggle("dark", dark);
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    const navItems = [
        { label: "Beranda", href: "/" },
        { label: "Layanan", href: "#layanan" },
        { label: "Perjalanan", href: "#perjalanan" },
        { label: "Harga", href: "#harga" },
        { label: "FAQ", href: "#faq" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold/10 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-gold" />
                    <span className="font-heading text-xl font-bold text-gradient-gold">
                        Golden Ghoose
                    </span>
                </div>

                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (

                        <a key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">

                    <a href="#cta"
                        className="rounded-md bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 shadow-gold hover:scale-105 hover:shadow-gold-bottom-lg active:scale-100 shadow-gold-bottom"
                    >
                        Mulai Investasi
                    </a>

                    {/* Toggle Dark/Light */}
                    <button
                        onClick={toggleTheme}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:border-gold hover:bg-gold/10"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    {/* Toggle di mobile */}
                    <button
                        onClick={toggleTheme}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:border-gold hover:bg-gold/10"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div >

            {isOpen && (
                <div className="border-t border-gold/10 bg-background/95 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-4 px-6 py-6">
                        {navItems.map((item) => (

                            <a key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-muted-foreground hover:text-gold"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}

                        <a href="#cta"
                            className="mt-2 rounded-md bg-gradient-gold px-6 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                        >
                            Mulai Investasi
                        </a>
                    </div >
                </div >
            )
            }
        </header >
    );
}