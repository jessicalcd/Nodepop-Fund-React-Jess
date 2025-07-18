import "./newAdvertPage.css";
import Button from "../../components/ui/button";
import Page from "../../components/layout/page";


function NewAdvertPage() {
  return (
    <Page title="">
      <div className="new-advert-page">
        <form className="new-adevert-page-form">
          <div className="new-advert-page-footer">
            <span className="new-advert-page-characters"></span>
            <Button
              type="submit"
              className="new-advert-page-submit"
              $variant="primary"
            >
              Let's go!
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default NewAdvertPage;