import { FC, Fragment, useContext } from "react";
import "./result-card.stylesheet.scss";
import { partnersContext } from "../../context/partners.context";

const ResultCard = () => {
  const { partners } = useContext<any>(partnersContext);
  return (
    <Fragment>
      <div className="netwrix_result_conteiner" id="netwrix_result_conteiner">
        {partners.length ? (
          partners?.map((partner: any) => {
            return (
              <div key={partner.id} className="netwrix_result_card">
                <div className="netwrix_result_card_left">
                  <img src={partner.logo} alt="logo" />
                  <div className="netwrix_result_company_name_and_address">
                    <h1 className="netwrix_company_name">{partner.company}</h1>
                    <span className="netwrix_company_address">
                      {partner.address}
                    </span>
                  </div>
                </div>
                <div className="netwrix_result_card_right">
                  <div className="netwrix_company_contact">
                    <a href="#" className="netwrix_company_website">
                      {partner.website}
                    </a>
                    <span className="netwrix_company_phone">
                      {partner.phone}
                    </span>
                  </div>
                  <span className="netwrix_result_card_right_border"></span>
                  <div className="netwrix_company_activity">
                    <span className="netwrix_company_activity_name">
                      {partner.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-result-card">
            <div className="no-result-card-body">
              <p className="no-results-message">
                Your search parameters did not match any partners. Please try
                different search
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ResultCard;
