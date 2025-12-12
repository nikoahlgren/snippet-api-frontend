import React, { useState } from "react";
import { createSnippet } from "../api/api";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function AddSnippet({ onCreated }) {
  const [form, setForm] = useState({ title: "", language: "", code: "" });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    await createSnippet(form);
    onCreated();
  };

  return (
    <div className="form-container">
      <h2>Add Snippet</h2>

      <form onSubmit={submit}>
        <input name="title" placeholder="Title" onChange={update} />
        <input name="language" placeholder="Language" onChange={update} />
        <textarea name="code" placeholder="Code" rows="8" onChange={update} />
        <button type="submit">Save Snippet</button>
      </form>

      <h3>Preview</h3>
      <SyntaxHighlighter language={form.language}>
        {form.code}
      </SyntaxHighlighter>
    </div>
  );
}
