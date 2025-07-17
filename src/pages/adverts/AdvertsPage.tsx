
import "./AdvertsPage.css";
import clsx from "clsx";
import styles from "./AdvertsPage.module.css";
import Button from "../../components/button";
import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import type { Advert } from "./types";
import { logout } from "../auth/service";

interface AdvertsPageProps {
    active: boolean;
    onLogout: () => void;
}

function AdvertsPage({ active, onLogout }: AdvertsPageProps) {
    const [adverts, setAdverts] = useState<Advert[]>([]);

    useEffect(() => {
        async function getAdverts() {
            const adverts = await getLatestAdverts();
            setAdverts(adverts);
        }
        getAdverts();
    },[]);

    const handleLogoutClick = async () => {
        await logout();
        onLogout();
    };
   
    return (
        <div className={clsx(styles["adverts-page"], { active })}>
            <h1>
                Adverts Page
            </h1>
            <ul>
                {adverts.map((advert) => (
                    <li key={advert.id}>
                        <h3>{advert.name}</h3>
                        <p>Precio: {advert.price}€</p>
                        <p>Tipo: {advert.sale ? 'Venta' : 'compra'}</p>
                        <p>Tags: {advert.tags.join(', ')}</p>
                        {advert.photo && <img src={advert.photo} alt={advert.name} width={100} />}
                    </li>
                ))}
            </ul>
            <Button disabled={false} $variant="secondary" onClick={handleLogoutClick}>
                Logout
            </Button>
        </div>
    );
}

export default AdvertsPage;
