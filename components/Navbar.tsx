"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Startet standardmäßig im Dark Mode (true)
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();

  // Theme-Klasse auf das HTML-Element anwenden
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Credence.
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Company", "Product", "Blog", "Pricing"].map((item) => {
                const path = `/${item.toLowerCase()}`;
                const active = isActive(path);
                return (
                  <Link
                    key={item}
                    href={path}
                    className={`text-sm transition-colors ${
                      active
                        ? "font-bold text-zinc-900 dark:text-zinc-50" // Aktiv: Fett & Hell/Dunkel Kontrast
                        : "font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200" // Inaktiv: Grau
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* DESKTOP RIGHT ACTIONS */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Icon */}
              <button
                onClick={toggleTheme}
                className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <Link
                href="/signin"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors"
              >
                Sign In
              </Link>

              {/* BUTTONS: Gleich groß durch h-10 und identische Klassen-Struktur */}
              <Link
                href="/enterprise"
                className="hidden lg:inline-flex h-10 items-center justify-center rounded-md px-5 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-100 dark:text-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-800 transition-all"
              >
                Enterprise
              </Link>

              <Link
                href="/get-started"
                className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* MOBILE TOGGLES (Theme + Menu) */}
          <div className="-mr-2 flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            >
              <span className="sr-only">Menü öffnen</span>
              <div className="relative h-6 w-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 border-b border-zinc-200 dark:border-zinc-800"
            : "max-h-0"
        }`}
      >
        <div className="bg-white dark:bg-zinc-950 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["Company", "Product", "Blog", "Pricing"].map((item) => {
            const active = isActive(`/${item.toLowerCase()}`);
            return (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`block rounded-md px-3 py-2 text-base transition-colors ${
                  active
                    ? "font-bold text-zinc-900 dark:text-zinc-50"
                    : "font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 pt-4 pb-4">
          <div className="px-2 space-y-3">
            <Link
              href="/signin"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Sign In
            </Link>
            <Link
              href="/enterprise"
              className="block w-full text-center rounded-md border border-zinc-300 bg-white px-5 py-3 text-base font-bold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Enterprise
            </Link>
            <Link
              href="/get-started"
              className="block w-full text-center rounded-md bg-zinc-900 px-5 py-3 text-base font-bold text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
