// Welcome.js
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase"; // Ensure you have Firebase auth imported
import { signOut } from "firebase/auth";

function Welcome() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
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
