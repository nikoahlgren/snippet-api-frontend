import React, { useEffect, useState } from "react";
import SnippetList from "../components/SnippetList";
import LanguageFilter from "../components/LanguageFilter";
import AddSnippet from "../components/AddSnippet";
import { getSnippets, createSnippet } from "../api/api";

export default function Home() {
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
      <h1>Developer Knowledge Base</h1>

      <LanguageFilter onChange={load} />
      <AddSnippet onCreated={load} />
      <SnippetList snippets={snippets} />

    </div>
  );
}
