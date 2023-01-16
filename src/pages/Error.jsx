import { Link } from "react-router-dom";
import "../style/pages/PageError.css"

export default function PageNotFound() {
    return (
      <div className="GlobalError">
        <h1 className="codeError">404</h1>
        <p className="textError">Oups! La page que vous demandez n'existe pas</p>
        <Link to="/" className="pageError">
          Retournez sur la page d'accueil
        </Link>
      </div>
    );
  }