// Welcome.js
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/"); // Redirect to homepage after sign-out
  };

  return (
    <div className="welcome-container">
      <h1>Welcome, Manav!</h1>
      <button onClick={handleSignOut} className="signout-btn">Sign Out</button>
    </div>
  );
}

export default Welcome;
