import { FC, useContext } from "react";
import { loaderContext } from "../../context/loader.context";
import { loaderInterface } from "../../interfaces/Loader.interface";
import "./loader.stylesheet.scss";

const Loader: FC<loaderInterface> = (props) => {
  let { isLoading } = useContext<any>(loaderContext);
  return (
    <div className="loader_conteiner">
      {isLoading && (
        <div className="loader-card">
          <div className="loading-text_conteiner">
            <span className="loading-text">Loading</span>
            <span className="loading-dots">
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
              <span className="loading-dot"> </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
