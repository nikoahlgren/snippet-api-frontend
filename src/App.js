import React, { useState } from "react";
import Home from "./pages/Home";
import ViewSnippet from "./pages/ViewSnippet";

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  if (selectedId)
    return (
      <ViewSnippet id={selectedId} onBack={() => setSelectedId(null)} />
    );

  return <Home onSelectSnippet={setSelectedId} />;
}
