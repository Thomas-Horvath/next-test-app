// app/ProductCard.js (Client-side komponens)
'use client';
import { useFavorites } from './FavoritesContext';

export default function ProductCard({ product }) {
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isFavorite = favorites.includes(product.id);

    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(product.id); // Ha kedvenc, eltávolítjuk
        } else {
            addFavorite(product.id); // Ha nem kedvenc, hozzáadjuk
        }
    };

    return (
        <div className="product-card">
            <img src={`${product.image}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button
                onClick={toggleFavorite}
                style={{
                    backgroundColor: isFavorite ? 'red' : 'gray',
                }}
            >
                {isFavorite ? 'Kedvenc' : 'Kedvencnek jelölés'}
            </button>
        </div>
    );
}
