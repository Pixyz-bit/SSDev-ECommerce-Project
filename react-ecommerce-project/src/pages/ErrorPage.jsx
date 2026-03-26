import { Header } from "../components/Header";
import "./ErrorPage.css"
export function ErrorPage() {
  return (
    <>
      <Header />
      <div className="container-error">
        <p className="txt-title">404 Error</p>
        <p className="txt-content">Page not found</p>
      </div>
    </>
  );
}
