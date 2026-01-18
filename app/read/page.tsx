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

        <div style={{ marginTop: "2rem" }}>
          <Link href="/review">Please review this post</Link>
        </div>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h2>Something to share?</h2>
        <p>
          Contribute a small truth of your own.
          <br />
          Your writing will be anonymous.
        </p>

        <Link href="/submit">Submit a truth</Link>
      </section>
    </main>
  );
}


