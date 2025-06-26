import React from "react";

const RemoteButton = React.lazy(() => import("cards/App"));
const Header = React.lazy(() => import("header/Header"));

function App() {
  return (
    <div>
      <Header />
      <div>Products</div>
      <RemoteButton />
    </div>
  );
}

export default App;
