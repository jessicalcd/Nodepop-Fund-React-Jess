import "./NotFoundPage.css";

const NotFoundPage = () => (
  <div className="not-found-page">
    <h1 className="not-found-title">404</h1>
    <p className="not-found-text">La página que buscas no existe.</p>
    <a className="not-found-link" href="/adverts">Volver al inicio</a>
  </div>
);

export default NotFoundPage;

