
import "./AdvertsPage.css";
import { getLatestAdverts } from "./service";
import { useEffect, useState } from "react";
import type { Advert } from "./types";
import Layout from "../../components/layout/layout";
import Button from "../../components/ui/button";
import AdvertItem from "./AdevertItem";

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
        <Layout title="">
            <div className="adverts-page">
                {adverts.length ? (
                    <ul className="adverts-list">
                        {adverts.map((advert) => (
                            <li key={advert.id}>
                                <AdvertItem advert={advert} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <EmptyList />
                )}
            </div>
        </Layout>
    );
}

export default AdvertsPage;
