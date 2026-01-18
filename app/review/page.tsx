import Link from "next/link";

export default function ReadPage() {
  return (
    <main className="page">
      {/* Header */}
      <header className="read-header">
        <h1 className="site-title">Small Truths</h1>
      </header>

      <hr className="divider" />

      {/* Truth card */}
      <section className="truth-wrapper">
        <div className="truth-card">
          <p className="truth-text">
            {/* truth text will be injected here */}
          </p>

          <p className="truth-meta">
            {/* category / context will be injected here */}
          </p>

          <div className="truth-actions">
            <span className="muted-text">
              See another truth tomorrow.
            </span>
          </div>
        </div>

        <div className="read-links">
          <Link href="/review" className="choice">
            Please review this post
          </Link>
        </div>
      </section>

      {/* Submission prompt */}
      <section className="submit-prompt">
        <h2 className="prompt-title">Something to share?</h2>

        <p className="prompt-text">
          Contribute a small truth of your own.
          <br />
          Your writing will be anonymous.
          <br />
          If accepted, it will appear briefly, then fade quietly away.
        </p>

        <Link href="/submit" className="choice">
          Submit a truth
        </Link>
      </section>

      <hr className="divider" />

      {/* Footer */}
      <footer className="footer">
        <Link href="/about">About</Link>
        <span> | </span>
        <Link href="/submissions">Submissions</Link>
        <span> | </span>
        <Link href="/terms">Terms</Link>
        <span> | </span>
        <Link href="/privacy">Privacy</Link>
      </footer>
    </main>
  );
}
