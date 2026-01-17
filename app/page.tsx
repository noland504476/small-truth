export default function HomePage() {
  return (
    <>
      <main>
        <h1>A place for small truths, shared quietly.</h1>

        <p>
          Lived experience, not advice. Anonymous writing, meant to be found
          slowly.
        </p>

        <div className="rule" />

        <h2>Find something closer to what you’re feeling</h2>

<div>
 

        </div>
    
<div className="choice-grid" >


 
          <a className="choice" href="/read?category=grief">Grief</a>
          <a className="choice" href="/read?category=change">Change</a>
          <a className="choice" href="/read?category=starting-over">Starting Over</a>
          <a className="choice" href="/read?category=loneliness">Loneliness</a>
          <a className="choice" href="/read?category=identity">Identity</a>
          <a className="choice" href="/read?category=uncertainty">Uncertainty</a>
          <a className="choice" href="/read?category=random">Random Truth</a>
          <a className="choice" href="/submit"> Submit a truth</a>
</div>
      
   <p className="helper-text">
          Choose one. You’ll see one or a few pieces — never many.
        </p>
      </main>
<div className="rule" />
      <section className="section-muted">
        <div className="split">
          <div>
            <h3>This site is:</h3>
            <ul>
              <li>Anonymous</li>
              <li>Curated</li>
              <li>Quiet</li>
              <li>Temporary</li>
            </ul>
          </div>

          <div>
            <h3>This site is not:</h3>
            <ul>
              <li>A forum</li>
              <li>Therapy</li>
              <li>Advice</li>
              <li>Social media</li>
            </ul>
          </div>
        </div>
      </section>

      <main>
        <p>
          Most writing here disappears after a while.
          <br />
          Some may return later.
          <br />
          Nothing is optimized for attention.
        </p>

        <div className="footer">
          <a href="/about">About</a>
          <a href="/submit">Submissions</a>
          <a href="/privacy">Privacy</a>
        </div>
      </main>
    </>
  );
}
