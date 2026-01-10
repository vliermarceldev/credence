"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-950 text-zinc-100 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-zinc-50"
            >
              Credence.
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Company", "Product", "Blog", "Pricing"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-zinc-400 text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link
                href="/signin"
                className="hover:text-zinc-400 text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/enterprise"
                className="bg-zinc-100 text-zinc-900 hover:bg-zinc-300 px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
              >
                Enterprise
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 focus:outline-none"
            >
              <span className="sr-only">Menü öffnen</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Company", "Product", "Blog", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-zinc-800">
            <div className="px-2 space-y-3">
              <Link
                href="/signin"
                className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/enterprise"
                className="block w-full text-center bg-zinc-100 text-zinc-900 px-5 py-3 rounded-md text-base font-bold hover:bg-zinc-200 transition-colors"
              >
                Enterprise
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
