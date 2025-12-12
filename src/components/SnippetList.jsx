import React from "react";

export default function SnippetList({ snippets, onSelect }) {
  if (!snippets || snippets.length === 0) {
    return <p>No snippets found.</p>;
  }

  return (
    <div>
      {snippets.map((snip) => (
        <div
          key={snip._id}
          onClick={() => onSelect(snip)}
          style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0", cursor: "pointer" }}
        >
          <h3>{snip.title}</h3>
          <p>{snip.language}</p>
        </div>
      ))}
    </div>
  );
}
