
import "./AdvertsPage.css";
import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import type { Advert } from "./types";
import Button from "../../components/ui/button";
import AdvertItem from "./AdevertItem";
import Page from "../../components/layout/page";
import { Link } from "react-router";

const EmptyList = () => (
  <div className="adverts-page-empty">
    <Button $variant="primary">Create advert</Button>
  </div>
);

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
        <Page title="">
            <div className="adverts-page">
                {adverts.length ? (
                    <ul className="adverts-list">
                        {adverts.map((advert) => (
                            <li key={advert.id}>
                                <Link to={`/adverts/${advert.id}`}>
                                    <AdvertItem advert={advert} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <EmptyList />
                )}
            </div>
        </Page>
    );
}

export default AdvertsPage;
