const API_URL = "https://snippet-api-bwcy.onrender.com/api/snippets";

// GET SNIPPETS (optional language filter)
export const getSnippets = async (lang) => {
  const url = lang ? `${API_URL}?lang=${lang}` : API_URL;
  const res = await fetch(url);
  return res.json(); // returns the array directly
};

// CREATE NEW SNIPPET
export const createSnippet = async (snippet) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(snippet),
  });
  return res.json(); // returns the created snippet
};
