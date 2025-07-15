import { useParams } from "react-router-dom";
import { Product } from "./Product";

export function ProductDetail() {
  const result = useParams();

  console.log(result);

  return;
  <div> Product Detail {result.id}</div>;
}
