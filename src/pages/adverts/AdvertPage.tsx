import { useNavigate, useParams } from "react-router";
import Page from "../../components/layout/page";
import { useEffect, useState } from "react";
import type { Advert } from "./types";
import { getAdvert } from "./service";
import { AxiosError } from "axios";
import AdvertItem from "./AdvertItem";


function AdvertPage() {
  const params = useParams();
  const [advert, setAdvert] = useState<Advert | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!params.advertId) {
      return;
    }
    getAdvert(params.advertId)
      .then((advert) => setAdvert(advert))
      .catch((error) => {
        if (error instanceof AxiosError) {
          if (error.status === 404) {
            navigate("/not-found", { replace: true });
          }
        }
      });
  }, [params.advertId, navigate]);

  return (
    <Page title="Advert detail">
      {advert ? (
        <AdvertItem advert={advert} />
      ) : (
        <p>Cargando anuncio...</p>
      )}
    </Page>
  );
}

export default AdvertPage;