import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewSnippet from "./pages/ViewSnippet";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* IMPORTANT: must render a component, not an object */}
        <Route path="/snippet/:id" element={<ViewSnippetWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

// Wrap ViewSnippet to pass the route params properly
function ViewSnippetWrapper() {
  const { id } = useParams();
  return <ViewSnippet id={id} />;
}
