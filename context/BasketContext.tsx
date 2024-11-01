"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Seed } from "@/types/types";

interface BasketItem extends Seed {
  quantity: number;
}

interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (seed: Seed) => void;
  removeFromBasket: (seedId: string) => void;
  updateQuantity: (seedId: string, quantity: number) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToBasket = (seed: Seed) => {
    setBasket((prevBasket) => {
      const existingSeed = prevBasket.find((item) => item.id === seed.id);
      if (existingSeed) {
        return prevBasket.map((item) =>
          item.id === seed.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevBasket, { ...seed, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (seedId: string) => {
    setBasket((prevBasket) => prevBasket.filter((seed) => seed.id !== seedId));
  };

  const updateQuantity = (seedId: string, quantity: number) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === seedId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, updateQuantity }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
