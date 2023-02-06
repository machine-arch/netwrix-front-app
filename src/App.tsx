import { Fragment, useContext, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header/Header.component";
import ResultCard from "./components/result-card/result-card.component";
import Loader from "./components/loader/Loader.component";
import { partnersContext } from "./context/partners.context";

function App() {
  const [showUpTpTopButton, setShowUpTpTopButton] = useState(false);
  const showHideBackToTop = (e: any) => {
    e.preventDefault();
    if (window.scrollY >= 300) {
      setShowUpTpTopButton(true);
    } else {
      setShowUpTpTopButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showHideBackToTop);
    return () => window.removeEventListener("scroll", showHideBackToTop);
  }, [showUpTpTopButton]);

  const backTotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Fragment>
      <div className="netwrix_App">
        <Loader isLoading={true} />
        <Header />
        <ResultCard />
        {showUpTpTopButton && (
          <span id="back-to-top-button" onClick={backTotop}>
            <img src="assets/ico/uparrow.svg" alt="up_arrow"></img>
          </span>
        )}
      </div>
    </Fragment>
  );
}

export default App;
