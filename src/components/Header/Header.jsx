import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="/images/header/logo.png"
        alt="logo"
      />
      <div className="menu">
        <div className="menu-lines">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>
    </div>
  );
}
