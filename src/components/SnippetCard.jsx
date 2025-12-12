import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function SnippetCard({ snippet, onSelect }) {
  return (
    <div className="snippet-card" onClick={() => onSelect(snippet._id)}>
      <h3>{snippet.title}</h3>
      <p>{snippet.language.toUpperCase()}</p>
      <SyntaxHighlighter language={snippet.language}>
        {snippet.code.substring(0, 150) + "..."}
      </SyntaxHighlighter>
    </div>
  );
}
