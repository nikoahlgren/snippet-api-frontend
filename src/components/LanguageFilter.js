import React from "react";

export default function LanguageFilter({ onChange }) {
  const languages = ["javascript", "python", "c++", "html", "css"];

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">All Languages</option>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
