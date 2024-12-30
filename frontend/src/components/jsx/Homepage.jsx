import "../css/Homepage.css";

export default function Homepage() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page">
          <div className="page-content">
            <div className="title">To Do List</div>
            <div className="actions">
              <a className="login" href="./Login.jsx">Login</a>
              <a className="register" href="/register">Register</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
