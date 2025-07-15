import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Welcome to Yarnie the Cat Shop!</h1>
      <p>Discover adorable handmade plushies and more.</p>
      <Link to="/shop">Go to Shop</Link>
    </div>
  );
}
