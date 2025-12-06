import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logoutUser = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {auth.currentUser?.email}</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
