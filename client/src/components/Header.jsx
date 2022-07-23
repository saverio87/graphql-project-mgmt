import logo from "./assets/logo.svg";

export const Header = () => {
  return (
    <nav className="navbar bg-light p-0 mb-4">
      <div className="container">
        <a href="" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="" />
            <div>Project Mgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
};
