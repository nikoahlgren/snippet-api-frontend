import React, { useEffect, useState } from "react";
import { getSnippet } from "../api/api";

export default function ViewSnippet({ id, onBack }) {
  const [snippet, setSnippet] = useState(null);

  useEffect(() => {
    load();
  }, [id]);

  const load = async () => {
    const data = await getSnippet(id);
    setSnippet(data);
  };

  if (!snippet) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h1>{snippet.title}</h1>
      <p><strong>Language:</strong> {snippet.language}</p>

      <pre style={{ background: "#222", padding: "1rem", borderRadius: "8px" }}>
        {snippet.code}
      </pre>
    </div>
  );
}
