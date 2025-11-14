"use client";

import React, { useState, useEffect, useRef } from "react";
import LayoutLogo from "./logo";
import Link from "next/link";
import { getCategoriesData } from "@/lib/api/getCategories";
import { Category } from "@/types/api.types";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/hooks/useCart";
import CartDrawer from "@/components/features/cart/CartDrawer";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoriesData();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
      }
    };

    if (isCategoriesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCategoriesOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const menuExpanded = isMenuOpen ? "true" : "false";
  const categoriesExpanded = isCategoriesOpen ? "true" : "false";

  const navItems = [
    {
      label: "Products",
      href: "/products",
      className:
        "block py-2 pl-3 pr-4 text-primary border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-500 lg:p-0",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 py-2 sm:py-2.5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between max-w-7xl px-3 sm:px-4 mx-auto">
        <LayoutLogo />
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Cart Icon */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative inline-flex items-center p-1.5 sm:p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            {getTotalItems() > 0 && (
              <span className="absolute top-0 right-0 cursor-pointer inline-flex items-center justify-center px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full min-w-[18px] sm:min-w-[20px]">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-1.5 sm:p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={menuExpanded}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                isMenuOpen ? "hidden" : "block"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 ${
                isMenuOpen ? "block" : "hidden"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {/* Categories Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={toggleCategories}
                className="flex items-center cursor-pointer justify-between w-full py-2 pl-3 pr-4 text-primary border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-500 lg:p-0"
                aria-expanded={categoriesExpanded}
              >
                Categories
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown Menu */}
              {isCategoriesOpen && (
                <div className="absolute left-0 z-[60] w-48 sm:w-56 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg lg:mt-2 max-h-[60vh] sm:max-h-none overflow-y-auto">
                  <ul className="py-2">
                    {loading ? (
                      <li className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-500">
                        Loading...
                      </li>
                    ) : categories.length > 0 ? (
                      categories.map((category) => (
                        <li key={category._id}>
                          <Link
                            href={`/categories/${category._id}`}
                            className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setIsCategoriesOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            {category.name}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-500">
                        No categories found
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </li>
            {/* Other Nav Items */}
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={item.className}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Header;
