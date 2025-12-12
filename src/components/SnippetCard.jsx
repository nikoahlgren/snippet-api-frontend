import React from "react";
import { useNavigate } from "react-router-dom";

export default function SnippetCard({ snippet }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/snippet/${snippet._id}`)}
      style={{
        padding: "12px",
        borderRadius: "8px",
        background: "#2e2e2e",
        marginBottom: "10px",
        cursor: "pointer"
      }}
    >
      <h3>{snippet.title}</h3>
      <p>{snippet.language}</p>
    </div>
  );
}
