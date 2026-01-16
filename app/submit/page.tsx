export default function SubmitTruth() {
  return (
    <main style={{ maxWidth: "680px", margin: "0 auto", padding: "4rem 1.5rem", lineHeight: 1.6 }}>
      
      <h1 style={{ fontSize: "2rem", fontWeight: 500, marginBottom: "1.5rem" }}>
        Submit a truth
      </h1>

      <p style={{ marginBottom: "2.5rem", color: "#555" }}>
        This doesn’t need to be polished.  
        It doesn’t need to be useful.  
        It just needs to be honest.
      </p>

      <p style={{ marginBottom: "2.5rem" }}>
        Write something you learned the hard way — or something you’re still learning.
      </p>

      <textarea
        placeholder="Write here…"
        rows={8}
        style={{
          width: "100%",
          padding: "1rem",
          fontSize: "1rem",
          lineHeight: 1.6,
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "2rem",
          fontFamily: "inherit"
        }}
      />

      <button
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          border: "1px solid #000",
          background: "transparent",
          cursor: "pointer",
          marginBottom: "3rem"
        }}
      >
        Leave it here
      </button>
      
<p style={{ fontSize: "0.9rem", color: "#777" }}>
        Submissions are anonymous.  
        Not everything will be published.  
        Some things are meant to stay private.
      </p>

    </main>
  );
}
