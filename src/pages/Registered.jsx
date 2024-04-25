import { Link } from "react-router-dom";
import Background from "../components/Background";
import ChallengeBy from "../components/ChallengeBy";

export default function Registered() {
  return (
    <>
      <Background />
      <div>
        <div className="registered-container">
          <p className="registered">You have registered for your free trial!</p>
          <p className="wehappy">We are happy to work with you!</p>
          <Link to="..">
            <button type="submit">RETURN</button>
          </Link>
        </div>
        <ChallengeBy />
      </div>
    </>
  );
}
