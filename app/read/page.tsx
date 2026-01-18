import Link from "next/link";

export default function ReadPage() {
  return (
    <main>
      <h1>Small Truths</h1>

      <section>
        <div>
          <p>{/* truth text will be injected here */}</p>
          <p>{/* category meta will be injected here */}</p>

          <p style={{ opacity: 0.6, fontSize: "0.9rem" }}>
            See another truth tomorrow.
          </p>
        </div>

<section>
  <div className="read-links">
    <Link href="/review" legacyBehavior>
      <a className="choice">Please review this post</a>
    </Link>
  </div>

  <section className="submit-prompt">
    <h2>Something to share?</h2>
    <p>
      Contribute a small truth of your own.
      <br />
      Your writing will be anonymous.
    </p>

    <Link href="/submit" legacyBehavior>
      <a className="choice">Submit a truth</a>
    </Link>
  </section>
</section>
    </main>
  );
}


