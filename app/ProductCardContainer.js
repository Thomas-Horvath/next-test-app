// app/ProductCardContainer.js (Client-side komponens)
'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductCardContainer() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // API hívás az adatok lekérésére
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();

    // Betöltjük a kedvenceket a localStorage-ból
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (productId) => {
    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];

    // Frissítjük a localStorage-t
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    // Frissítjük a state-et
    setFavorites(updatedFavorites);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
