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
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    if (!advertId) {
      return;
    }
    setLoading(true);
    getAdvert(advertId)
      .then(setAdvert)
      .catch((error) => {
        if (error instanceof AxiosError && error.response?.status === 404) {
          navigate("/not-found", { replace: true });
        }
      })
      .finally(() => {
      setLoading(false); 
    });
  }, [advertId, navigate]);

  const handleDelete = async () => {
    if (!advert) return;
    await deleteAdvert(advert.id);
    navigate("/adverts");
  };

  return (
    <Page title="Advert detail">
      {loading ? (
        <p className="loading-message">Loading advert...</p>
      ) : advert ? (
        <>
          <AdvertItem advert={advert} />

          <div className="advert-page-actions">
            <Button $variant="secondary" onClick={() => setShowConfirm(true)}>
              Delete Advert
            </Button>
          </div>

          <ConfirmDialog
            open={showConfirm}
            message="¿Are you sure you want to delete this advert?"
            onConfirm={handleDelete}
            onCancel={() => setShowConfirm(false)}
          />
        </>
      ) : (
        <p className="form-error">The advert does not exist or loading failed.</p>
      )}
    </Page>
  );
}

export default AdvertPage;