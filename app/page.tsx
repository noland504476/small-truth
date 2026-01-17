export default function Home() {
  return (
    <main style={{ maxWidth: "680px", margin: "0 auto", padding: "4rem 1.5rem", lineHeight: 1.6 }}>
      
      <h1 style={{ fontSize: "2.5rem", fontWeight: 500, marginBottom: "1.5rem" }}>
        Small Truths
      </h1>

      <p style={{ fontSize: "1.25rem", marginBottom: "2.5rem" }}>
        <em>A quiet place for things learned the hard way.</em>
      </p>

      <p style={{ marginBottom: "1.5rem" }}>
        Small Truths is a collection of brief, honest reflections from people who have been through something — or are still finding their way through it.
      </p>

      <p>This is not advice.</p>
      <p>It’s not motivation.</p>
      <p style={{ marginBottom: "1.5rem" }}>
        And it’s not here to fix you.
      </p>

      <p>Some truths come from disappointment.</p>
      <p>Some from loss.</p>
      <p style={{ marginBottom: "1.5rem" }}>
        Some from change, grief, or starting over.
      </p>

      <p>They appear quietly.</p>
      <p>They stay for a while.</p>
      <p style={{ marginBottom: "1.5rem" }}>
        Then they’re archived.
      </p>

      <p>You don’t need to agree with them.</p>
      <p>You don’t need to act on them.</p>
      <p style={{ marginBottom: "2.5rem" }}>
        You don’t even need to finish reading.
      </p>

      <p style={{ marginBottom: "3rem" }}>
        Take what’s useful.<br />
        Leave the rest.
      </p>
<div style={{ marginBottom: "4rem" }}>
      <a href="/read" style={{ fontWeight: 500, display: "block", marginBottom: "1rem" }}>
  Read a truth
</a>

<a href="/submit" style={{ fontWeight: 500 }}>
  Submit a truth
</a>

        </div>
    
     <section style={{ marginTop: "3.5rem" }}>
  <p style={{ fontWeight: 500, marginBottom: "1rem" }}>
    Find something closer to what you’re feeling
  </p>

  <ul style={{ listStyle: "none", padding: 0, lineHeight: 2 }}>
    <li>
      <a href="/read?category=grief" className="category-link">Grief</a>
    </li>
    <li>
      <a href="/read?category=change" className="category-link">Change</a>
    </li>
    <li>
      <a href="/read?category=starting-over" className="category-link">Starting Over</a>
    </li>
    <li>
      <a href="/read?category=loneliness" className="category-link">Loneliness</a>
    </li>
    <li>
      <a href="/read?category=identity" className="category-link">Identity</a>
    </li>
    <li>
      <a href="/read?category=uncertainty" className="category-link">Uncertainty</a>
    </li>
    <li>
      <a href="/read?category=random" className="category-link">Random Truth</a>
    </li>
  </ul>
</section> 
      
      <hr style={{ marginBottom: "2.5rem" }} />

      <h2 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "1.5rem" }}>
        What this place is
      </h2>

      <p>No profiles.</p>
      <p>No likes.</p>
      <p>No algorithms.</p>
      <p>No performance.</p>

      <p style={{ marginTop: "1.5rem" }}>
        Just words, shared quietly.
      </p>
<footer style={{ marginTop: "4rem", paddingTop: "2rem" }}>
  <hr />

  <nav style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "#6f6f6f" }}>
    <a href="/about" style={{ marginRight: "1.5rem" }}>
      About
    </a>

    <a href="/privacy">
      Privacy
    </a>
  </nav>
</footer>
    </main>
  );
}
