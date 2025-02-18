"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faPhone, faBars, faTimes);

export default function RootLayout({
  children,
  inter,
}: {
  children: React.ReactNode;
  inter: { className: string };
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const handleBackdropClick = () => {
    setIsNavOpen(false);
  };

  // Conditionally render header and footer if the pathname is not '/account'
  const shouldShowHeaderFooter = pathname !== '/account';

  return (
    <html lang="en">
      <body className={inter.className}>
        {shouldShowHeaderFooter && (
          <>
            <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-gray-800 dark:text-gray-200 text-xl font-bold">
                  Recession Assistance Program
                </Link>
                <div className="hidden lg:flex space-x-6">
                  <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                  <Link href="/account" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Account</Link>
                  <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                  <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">FAQ</Link>
                  <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Guide</Link>
                </div>
                <div className="lg:hidden flex items-center space-x-4">
                  <Link href="tel:+12057949970" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <FontAwesomeIcon icon={faPhone} className="h-6 w-6" />
                  </Link>
                  <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </header>

            {/* Backdrop */}
            {isNavOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-10"
                onClick={handleBackdropClick}
              />
            )}

            {/* Side Navigation */}
            <div
              className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg z-20 transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}
              style={{ width: '250px' }}
            >
              <nav className="flex flex-col p-6">
                <Link href="/" className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsNavOpen(false)}>Home</Link>
                <Link href="/account" className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsNavOpen(false)}>Account</Link>
                <Link href="/about" className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsNavOpen(false)}>About</Link>
                <Link href="/faq" className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsNavOpen(false)}>FAQ</Link>
                <Link href="/services" className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setIsNavOpen(false)}>Guide</Link>
              </nav>
            </div>
          </>
        )}

        {/* Main Content */}
        <main className={shouldShowHeaderFooter ? "pt-20 z-0" : ""}>{children}</main>

        {shouldShowHeaderFooter && (
          <footer className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="text-center py-4 text-gray-600 dark:text-gray-400">
              &copy; Recession Assistance Program. All rights reserved.
            </div>
          </footer>
        )}
      </body>
    </html>
  );
}
