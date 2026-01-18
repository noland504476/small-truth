export default function ReadPage() {
  return (
    <main>
      <h1>Small Truths</h1>

      {/* Truth card */}
      <section className="truth-wrapper">
        <div className="truth-card">
          <p className="truth-text">
            {/* truth text will be injected here */}
          </p>

          <p className="truth-meta">
            {/* category meta will be injected here */}
          </p>

          <p className="read-next">
            See another truth tomorrow.
          </p>
        </div>
      </section>

      {/* Review link */}
      <div className="read-links">
        <a href="/review" className="choice">
          Please review this post
        </a>
      </div>

      {/* Submit prompt */}
      <section className="submit-prompt">
        <h2>Something to share?</h2>
        <p>
          Contribute a small truth of your own.
          <br />
          Your writing will be anonymous.
        </p>

        <a href="/submit" className="choice">
          Submit a truth
        </a>
      </section>
    </main>
  );
}



