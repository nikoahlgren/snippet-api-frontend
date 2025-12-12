import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSnippet } from "../api/api";

export default function ViewSnippet() {
  const { id } = useParams();
  const [snippet, setSnippet] = useState(null);

  useEffect(() => {
    getSnippet(id).then(data => setSnippet(data));
  }, [id]);

  if (!snippet) return <p>Loading...</p>;

  return (
    <div>
      <h1>{snippet.title}</h1>
      <p>{snippet.language}</p>

      <pre>{snippet.code}</pre>
    </div>
  );
}
