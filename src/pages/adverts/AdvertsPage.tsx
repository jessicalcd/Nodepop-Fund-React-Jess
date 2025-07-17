
import "./AdvertsPage.css";
import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import type { Advert } from "./types";


function AdvertsPage() {
    const [adverts, setAdverts] = useState<Advert[]>([]);

    useEffect(() => {
        async function getAdverts() {
            const adverts = await getLatestAdverts();
            setAdverts(adverts);
        }
        getAdverts();
    },[]);
   

    return (
        <div className="adverts-page">
            <h1>Adverts Page</h1>
            <ul>
{adverts.map((advert, id) => (
          <li key={id}>
            <h3>{advert.name}</h3>
            <p>Precio: {advert.price}€</p>
            <p>Tipo: {advert.sale ? 'Venta' : 'compra'}</p>
            <p>Tags: {advert.tags.join(', ')}</p>
            {advert.photo && <img src={advert.photo} alt={advert.name} width={100} />}
          </li>
        ))}
            </ul>
        </div>
    );
}

export default AdvertsPage;
