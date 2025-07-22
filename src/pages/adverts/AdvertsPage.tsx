import "./AdvertsPage.css";
import { getFilteredAdverts, getTags } from "./service";
import { useEffect, useState } from "react";
import type { Advert } from "./types";
import Button from "../../components/ui/button";
import AdvertItem from "./AdvertItem";
import Page from "../../components/layout/page";
import { Link } from "react-router";
import AdvertsFilter from "./AdvertsFilter";
import type { AdvertsFilters } from "./types";

const EmptyList = () => (
  <div className="adverts-page-empty">
    <Button $variant="primary" as={Link} to="/adverts/new">Create advert</Button>
  </div>
);


function AdvertsPage() {
    const [adverts, setAdverts] = useState<Advert[]>([]);
    const [filters, setFilters] = useState<AdvertsFilters>({
    name: "",
    sale: "",
    priceMin: "",
    priceMax: "",
    tags: [],
  });
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    getTags().then(setTags);
  }, []);

  useEffect(() => {
    getFilteredAdverts(filters).then(setAdverts);
  }, [filters]);

  return (
    <Page title="Listado de anuncios">
      <div className="adverts-page">
        <AdvertsFilter filters={filters} availableTags={tags} onChange={setFilters} />

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