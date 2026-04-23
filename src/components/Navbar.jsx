"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { ThemeSwitch } from "./ThemeSwitch";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div>Demo</div>
                </div>
                <ul className="hidden items-center gap-4 md:flex">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/tasks">Tasks</Link>
                    </li>
                    <li><ThemeSwitch></ThemeSwitch></li>
                </ul>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        <li>
                            <Link href="/" className="block py-2">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/tasks" className="block py-2">
                                Tasks
                            </Link>
                        </li>
                        <li><ThemeSwitch></ThemeSwitch></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}