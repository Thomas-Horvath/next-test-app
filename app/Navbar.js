// app/Navbar.js (Client-side komponens)
'use client'
;import { useFavorites } from './FavoritesContext';

export default function Navbar() {
  const { favorites , loading} = useFavorites(); // Kedvencek elérése

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Rólunk</a></li>
      </ul>
      <div>
                Kedvencek: {loading ? 'Loading...' : favorites.length} {/* Loading állapot kezelése */}
            </div>
    </nav>
  );
}
