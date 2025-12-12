export default function SnippetCard({ snippet, onSelect }) {
  return (
    <div onClick={() => onSelect(snippet)} className="card">
      <h3>{snippet.title}</h3>
      <p>{snippet.language}</p>
    </div>
  );
}
