"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/lib/hooks/useCart";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();

  // Log cart items when drawer opens (for debugging)
  useEffect(() => {
    if (isOpen) {
      console.log("Cart drawer opened. Items in cart:", cartItems.length);
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("cart_items");
        console.log(
          "Items in localStorage:",
          stored ? JSON.parse(stored).length : 0
        );
      }
    }
  }, [isOpen, cartItems.length]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="max-h-[90vh] bg-white">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-bold">
            Shopping Cart
          </DrawerTitle>
          <DrawerDescription>
            {cartItems.length === 0
              ? "Your cart is empty"
              : `${cartItems.length} item${
                  cartItems.length > 1 ? "s" : ""
                } in your cart`}
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-2">
                Add some products to get started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => {
                const displayPrice = item.retailPrice ?? item.price ?? 0;
                const originalPrice =
                  item.originalRetailPrice ?? item.originalPrice;
                const hasDiscount =
                  originalPrice && displayPrice && originalPrice > displayPrice;

                return (
                  <div
                    key={item._id}
                    className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    {item.image ? (
                      <div className="relative w-24 h-24 shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center shrink-0">
                        <span className="text-gray-400 text-xs">No Image</span>
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {displayPrice} EGP
                        {hasDiscount && originalPrice && (
                          <span className="ml-2 text-gray-500 line-through">
                            {originalPrice} EGP
                          </span>
                        )}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(item._id, item.quantity - 1)
                            }
                            className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item._id, item.quantity + 1)
                            }
                            className="p-1 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">
                            {(displayPrice * item.quantity).toFixed(2)} EGP
                          </span>
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <DrawerFooter>
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold text-primary">
                {getTotalPrice().toFixed(2)} EGP
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Checkout
              </button>
            </div>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
