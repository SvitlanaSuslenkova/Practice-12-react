import Background from "../components/Background";
import MyForm from "../components/MyForm";
import ChallengeBy from "../components/ChallengeBy";

function App() {
  return (
    <>
      <main>
        <section>
          <Background />
          <h1>Learn to code by watching others</h1>
          <p className="seehow">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section>
          <h2>
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </h2>
        </section>
        <div className="form-container">
          <MyForm />
          <p className="agree">
            By clicking the button, you are agreeing to our
            <span> Terms and Services</span>
          </p>
        </div>
        <footer>
          <ChallengeBy />
        </footer>
      </main>
    </>
  );
}

export default App;
