import type { Advert } from "./types";
import "./AdvertItem.css";
import Photo from "../../components/ui/photo";


interface AdvertItemProps {
  advert: Advert;
}

const AdvertItem = ({ advert }: AdvertItemProps) => {
  const { name, price, sale, tags, photo } = advert;

  return (
    <article className="advert-item">
      <div className="advert-item-content">
        <h3>{name}</h3>
        <p>Precio: {price}€</p>
        <p>Tipo: {sale ? "Venta" : "Compra"}</p>
        <p>Tags: {tags.join(", ")}</p>
        <Photo src={photo} alt={name} width={100} />
      </div>
    </article>
  );
};

export default AdvertItem;