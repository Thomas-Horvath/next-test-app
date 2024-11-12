'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';

// Kedvencek Context létrehozása
const FavoritesContext = createContext();

// Kedvencek Context Provider
export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true); // Loading állapot

    // Kedvencek adatainak betöltése a localStorage-ból
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
        setLoading(false); // Amikor betöltődtek az adatok, beállítjuk a loading-ot false-ra
    }, []);

    // Kedvenc hozzáadása
    const addFavorite = (productId) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = [...prevFavorites, productId];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Elmentjük a localStorage-ba
            return updatedFavorites;
        });
    };

    // Kedvenc eltávolítása
    const removeFavorite = (productId) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter((id) => id !== productId);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Elmentjük a localStorage-ba
            return updatedFavorites;
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, loading }}>
            {children}
        </FavoritesContext.Provider>
    );
}

// Kedvencek lekérése
export function useFavorites() {
    return useContext(FavoritesContext);
}
