import "../css/Homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <div className="page-content">
            <div className="title">To Do List</div>
            <div className="actions">
              <Link to="/login" className="login">Login</Link>
              <Link to="register" className="register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
