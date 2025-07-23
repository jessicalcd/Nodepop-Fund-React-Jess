import { useNavigate, useParams } from "react-router";
import Page from "../../components/layout/page";
import { useEffect, useState } from "react";
import type { Advert } from "./types";
import { getAdvert, deleteAdvert } from "./service";
import { AxiosError } from "axios";
import AdvertItem from "./AdvertItem";
import ConfirmDialog from "../../components/ui/ConfirmDialog";
import Button from "../../components/ui/button";
import "./AdvertPage.css";


function AdvertPage() {
  const { advertId } = useParams();
  const [advert, setAdvert] = useState<Advert | null>(null);
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (!advertId) {
      return;
    }
    getAdvert(advertId)
      .then(setAdvert)
      .catch((error) => {
        if (error instanceof AxiosError && error.response?.status === 404) {
          navigate("/not-found", { replace: true });
        }
      });
  }, [advertId, navigate]);

  const handleDelete = async () => {
    if (!advert) return;
    await deleteAdvert(advert.id);
    navigate("/adverts");
  };

  return (
    <Page title="Advert detail">
      {advert ? (
        <>
          <AdvertItem advert={advert} />

          <div className="advert-page-actions">
            <Button $variant="secondary" onClick={() => setShowConfirm(true)}>
              Eliminar anuncio
            </Button>
          </div>

          <ConfirmDialog
            open={showConfirm}
            message="¿Seguro que deseas borrar este anuncio?"
            onConfirm={handleDelete}
            onCancel={() => setShowConfirm(false)}
          />
        </>
      ) : (
        <p>Cargando anuncio...</p>
      )}
    </Page>
  );
}

export default AdvertPage;