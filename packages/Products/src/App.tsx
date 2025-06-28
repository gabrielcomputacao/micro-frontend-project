import React, { Suspense } from "react";

const Cards = React.lazy(() => import("cards/ListCards"));
const Header = React.lazy(() => import("header/Header"));
const Footer = React.lazy(() => import("footer/Footer"));

function App() {
  return (
    <div>
      <Suspense fallback={"Carregando Header"}>
        <Header />
      </Suspense>
      <Suspense fallback={"Carregando Cards"}>
        <Cards />
      </Suspense>
      <Suspense fallback={"Carregando Footer"}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
