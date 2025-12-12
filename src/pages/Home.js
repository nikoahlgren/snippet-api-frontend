import React, { useEffect, useState } from "react";
import SnippetList from "../components/SnippetList";
import LanguageFilter from "../components/LanguageFilter";
import AddSnippet from "../components/AddSnippet";
import { getSnippets, createSnippet } from "../api/api";

export default function Home({ onSelectSnippet }) {
  const [snippets, setSnippets] = useState([]);

  const load = async (lang) => {
    const data = await getSnippets(lang);
    setSnippets(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
  <div>
    <h1>Test Render</h1>
    { <LanguageFilter onChange={load} /> }
    { <AddSnippet onAdd={createSnippet} onRefresh={load} /> }
    { <SnippetList snippets={snippets} onSelect={onSelectSnippet} /> }
  </div>
);

}
