// app/page.js (Server-side komponens)

import ProductCardContainer from './ProductCardContainer';

export default function Home() {
  return (
    <>
        <h1>Termékek</h1>
        <ProductCardContainer />
    </>
  );
}
