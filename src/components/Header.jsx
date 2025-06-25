import logo from "../img/logo.png";

export function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Customized</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
