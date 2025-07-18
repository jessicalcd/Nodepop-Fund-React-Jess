import "./newAdvertPage.css";
import Layout from "../../components/layout/layout";
import Button from "../../components/ui/button";
import Photo from "../../components/ui/photo";
import Textarea from "../../components/ui/textarea";

const MAX_CHARACTERS = 140;

function NewAdvertPage() {
  return (
    <Layout title="">
      <div className="new-advert-page">
        <div>
          <Photo />
        </div>
        <form className="new-adevert-page-form">
          <Textarea
            className="new-advert-page-textarea"
            placeholder="Hey! What's up!"
            maxLength={MAX_CHARACTERS}
          />
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
    </Layout>
  );
}

export default NewAdvertPage;